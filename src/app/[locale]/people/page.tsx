import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { firm } from "@/data/firm";
import { Eyebrow } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { Counsel, Leadership, TeamRoster } from "@/components/sections/PeopleSections";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/people", tr(pageSeo.people.title, locale), tr(pageSeo.people.description, locale));
}

export default async function PeoplePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        crumbs={[{ label: t.nav.home, href: href(locale) }, { label: t.nav.people }]}
        crumbLabel={t.breadcrumb}
        title={t.people.title}
        lead={<p>{t.people.lead}</p>}
        size="lg"
      />

      <section className="section" aria-labelledby="leadership-title">
        <div className="container">
          <Eyebrow>{t.people.leadership}</Eyebrow>
          <h2 id="leadership-title" className="sr-only">
            {t.people.leadership}
          </h2>
          <Leadership locale={locale} dict={t} />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="counsel-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.people.counsel}</Eyebrow>
              <h2 id="counsel-title" className="h2">
                {t.home.peopleTitle}
              </h2>
            </div>
            <p className="fine">{tr(firm.integratedTeam, locale)}</p>
          </div>
          <Counsel locale={locale} dict={t} />
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.people.team}</Eyebrow>
            <h2 id="team-title" className="h2">
              {t.about.teamLabel}
            </h2>
          </div>
          <div className="detail-grid__main">
            <TeamRoster locale={locale} />
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={t} title={[t.home.ctaTitle[0], t.home.ctaTitle[1]]} />
    </>
  );
}
