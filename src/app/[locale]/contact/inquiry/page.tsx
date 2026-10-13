import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import Link from "next/link";
import { Suspense } from "react";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { site } from "@/config/site";
import { offices } from "@/data/offices";
import { Pending } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/contact/inquiry", tr(pageSeo.inquiry.title, locale), tr(pageSeo.inquiry.description, locale));
}

export default async function InquiryPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        crumbs={[
          { label: t.nav.home, href: href(locale) },
          { label: t.nav.contact, href: href(locale, "/contact") },
          { label: t.contact.inquiryTitle },
        ]}
        crumbLabel={t.breadcrumb}
        title={t.contact.inquiryTitle}
        lead={<p>{t.contact.inquiryBody}</p>}
        size="lg"
      />

      <div className="container inquiry">
        <aside className="inquiry__aside">
          {/* Brief Q32 — welcome message */}
          <p className="inquiry__welcome">{t.form.welcome}</p>
          <dl className="profile__facts">
            <div>
              <dt>{t.contact.whatsapp}</dt>
              <dd>{site.whatsapp ?? <Pending>{t.placeholder.whatsapp}</Pending>}</dd>
            </div>
            {offices.map((o) => (
              <div key={o.id}>
                <dt>{tr(o.name, locale)}</dt>
                <dd>{o.phone ?? <Pending>{t.placeholder.phone}</Pending>}</dd>
              </div>
            ))}
          </dl>
          <Link href={href(locale, "/contact/locations")} className="btn btn--text">
            <span>{t.cta.locations}</span>
          </Link>
        </aside>

        <div>
          <Suspense fallback={null}>
            <InquiryForm locale={locale} dict={t} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
