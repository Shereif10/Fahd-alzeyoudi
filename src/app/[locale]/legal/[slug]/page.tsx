import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, locales, tr, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/data/insights";
import { getLegalDoc, legalContact, legalDocs } from "@/data/legal";
import { Pending } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => legalDocs.map((d) => ({ locale, slug: d.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};
  const l = locale as Locale;
  return pageMetadata(l, `/legal/${slug}`, tr(doc.title, l), tr(doc.lead, l));
}

/** Legal pages reuse the standard page hero and article prose — no new UI. */
export default async function LegalPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();
  const t = getDictionary(locale);
  const withContact = doc.slug === "privacy-policy" || doc.slug === "data-protection-notice";

  return (
    <>
      <PageHero
        crumbs={[{ label: t.nav.home, href: href(locale) }, { label: tr(doc.title, locale) }]}
        crumbLabel={t.breadcrumb}
        title={tr(doc.title, locale)}
        lead={<p>{tr(doc.lead, locale)}</p>}
        size="lg"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="prose">
            <p>
              {t.legal.updated}: <time dateTime={doc.updated}>{formatDate(doc.updated, locale)}</time>
            </p>
            {!doc.reviewed && <Pending>{t.placeholder.legalDraft}</Pending>}
            {doc.sections.map((s) => (
              <div key={s.title.en} className="prose">
                <h2>{tr(s.title, locale)}</h2>
                {tr(s.body, locale).map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            ))}
            {withContact && <p>{tr(legalContact, locale)}</p>}
          </div>
        </div>
      </section>
    </>
  );
}
