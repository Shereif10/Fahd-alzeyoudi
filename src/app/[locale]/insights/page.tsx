import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { sortedInsights } from "@/data/insights";
import { Eyebrow } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { InsightFeature } from "@/components/sections/InsightItems";
import { InsightJournal } from "@/components/sections/InsightJournal";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/insights", tr(pageSeo.insights.title, locale), tr(pageSeo.insights.description, locale));
}

export default async function InsightsPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);
  const [featured, ...rest] = sortedInsights();

  return (
    <>
      <PageHero
        crumbs={[{ label: t.nav.home, href: href(locale) }, { label: t.nav.insights }]}
        crumbLabel={t.breadcrumb}
        title={t.insights.title}
        lead={<p>{t.insights.lead}</p>}
        size="lg"
      />

      <section className="section section--tight" aria-labelledby="featured-title">
        <div className="container">
          <Eyebrow>{t.insights.featured}</Eyebrow>
          <h2 id="featured-title" className="sr-only">
            {t.insights.featured}
          </h2>
          <div className="insight-lead">
            <InsightFeature insight={featured} locale={locale} dict={t} />
          </div>
        </div>
      </section>

      <section className="section section--tint section--tight" aria-labelledby="latest-title">
        <div className="container">
          <h2 id="latest-title" className="h2" style={{ marginBottom: "clamp(28px, 3vw, 48px)" }}>
            {t.insights.latest}
          </h2>
          <InsightJournal items={rest} locale={locale} dict={t} />
        </div>
      </section>

      <CTASection locale={locale} dict={t} />
    </>
  );
}
