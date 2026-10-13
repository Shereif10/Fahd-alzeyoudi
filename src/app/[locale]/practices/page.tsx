import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { practices } from "@/data/practices";
import { firm } from "@/data/firm";
import { ButtonLink } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { PracticeIndex } from "@/components/sections/PracticeIndex";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/practices", tr(pageSeo.practices.title, locale), tr(pageSeo.practices.description, locale));
}

export default async function PracticesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        crumbs={[{ label: t.nav.home, href: href(locale) }, { label: t.nav.practices }]}
        crumbLabel={t.breadcrumb}
        title={t.practices.title}
        lead={<p>{t.practices.lead}</p>}
        size="lg"
      />

      <section className="section section--tight" aria-label={t.cta.allPractices}>
        <div className="container practices-layout">
          <aside className="practices-layout__aside">
            <div>
              <p className="count" aria-hidden="true">
                {practices.length}
              </p>
              <p>{t.practices.count}</p>
            </div>
            <p className="fine">{tr(firm.litigationStages, locale)}</p>
            <ButtonLink href={href(locale, "/contact/inquiry")} variant="solid">
              {t.cta.inquiryConsultation}
            </ButtonLink>
          </aside>
          <PracticeIndex locale={locale} variant="full" />
        </div>
      </section>

      <CTASection locale={locale} dict={t} />
    </>
  );
}
