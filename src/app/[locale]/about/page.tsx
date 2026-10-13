import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import { images } from "@/data/images";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { experienceAreas, firm } from "@/data/firm";
import { ArchImage } from "@/components/media/ArchImage";
import { ButtonLink, Eyebrow, Pending } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { CommunicationSteps, Principles } from "@/components/sections/Approach";
import { Counsel, Leadership, TeamRoster } from "@/components/sections/PeopleSections";
import { OfficeList } from "@/components/sections/Offices";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/about", tr(pageSeo.about.title, locale), tr(pageSeo.about.description, locale));
}

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        crumbs={[{ label: t.nav.home, href: href(locale) }, { label: t.nav.about }]}
        crumbLabel={t.breadcrumb}
        eyebrow={t.nav.about}
        title={t.about.title}
        lead={<p>{tr(firm.positioning, locale)}</p>}
        aside={
          <ArchImage
            variant="curtain"
            plane
            src={images.aboutHero.src}
            alt={tr(images.aboutHero.alt, locale)}
            sizes="(min-width: 900px) 35vw, 100vw"
            priority
          />
        }
      />

      {/* FIRM INTRODUCTION */}
      <section className="section" aria-labelledby="about-intro">
        <div className="container split">
          <div className="split__label">
            <Eyebrow>{t.about.introLabel}</Eyebrow>
          </div>
          <div className="split__main">
            <h2 id="about-intro" className="statement" data-reveal="">
              {tr(firm.introduction, locale)}
            </h2>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section section--tint" aria-labelledby="who">
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.about.whoLabel}</Eyebrow>
            <h2 id="who" className="h2" data-reveal="">
              {t.about.whoTitle}
            </h2>
          </div>
          <div className="detail-grid__main">
            <p className="lead" data-reveal="">
              {tr(firm.distinction, locale)}
            </p>
            <p className="lead" data-reveal="" style={{ marginTop: 24 }}>
              {tr(firm.integratedTeam, locale)}
            </p>
            <dl className="represents">
              <dt>{t.about.whoServe}</dt>
              <dd>{tr(firm.audiences, locale).join(" · ")}</dd>
            </dl>
            <p className="fine" style={{ marginTop: 20 }}>
              {t.about.whoFocus}
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section section--navy" id="approach" aria-labelledby="approach-title">
        <div className="container">
          <div className="approach__grid">
            <div className="approach__head">
              <Eyebrow>{t.about.approachLabel}</Eyebrow>
              <h2 id="approach-title" className="h2" data-reveal="">
                {t.about.approachTitle}
              </h2>
            </div>
            <Principles locale={locale} />
          </div>
          <h3 className="h3" style={{ marginTop: "clamp(72px, 9vw, 140px)", marginBottom: 32 }}>
            {t.about.communicationTitle}
          </h3>
          <CommunicationSteps locale={locale} />
        </div>
      </section>

      {/* OUR EXPERIENCE */}
      <section className="section" aria-labelledby="experience-title">
        <div className="container experience__grid">
          <div className="experience__media">
            <ArchImage
              variant="lattice"
              plane
              src={images.aboutExperience.src}
              alt={tr(images.aboutExperience.alt, locale)}
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
          <div className="experience__body">
            <Eyebrow>{t.about.experienceLabel}</Eyebrow>
            <h2 id="experience-title" className="h2" data-reveal="">
              {t.about.experienceTitle}
            </h2>
            <p className="lead">{tr(firm.litigationStages, locale)}</p>
            <p className="experience__judgments">{tr(firm.judgments, locale)}</p>
            <ul className="tag-list">
              {experienceAreas.map((a) => (
                <li key={a.en}>{tr(a, locale)}</li>
              ))}
            </ul>
            <Pending block>{t.placeholder.case}</Pending>
            <p className="fine">{tr(firm.confidentiality, locale)}</p>
            <div style={{ marginTop: 28 }}>
              <ButtonLink href={href(locale, "/practices")} variant="text">
                {t.cta.explorePractices}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section section--tint" aria-labelledby="leadership-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.about.leadershipLabel}</Eyebrow>
              <h2 id="leadership-title" className="h2">
                {t.people.leadership}
              </h2>
            </div>
          </div>
          <Leadership locale={locale} dict={t} />
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.about.teamLabel}</Eyebrow>
              <h2 id="team-title" className="h2">
                {t.home.peopleTitle}
              </h2>
            </div>
            <ButtonLink href={href(locale, "/people")} variant="text">
              {t.cta.meetTeam}
            </ButtonLink>
          </div>
          <Counsel locale={locale} dict={t} />
          <div style={{ marginTop: "clamp(56px, 7vw, 112px)" }}>
            <TeamRoster locale={locale} />
          </div>
        </div>
      </section>

      {/* OFFICES — Dubai Office, Ajman Office */}
      <section className="section section--tint" id="offices" aria-labelledby="offices-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.about.officesLabel}</Eyebrow>
              <h2 id="offices-title" className="h2">
                {t.home.officesTitle}
              </h2>
            </div>
          </div>
          <OfficeList locale={locale} dict={t} />
        </div>
      </section>

      <CTASection locale={locale} dict={t} />
    </>
  );
}
