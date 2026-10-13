import Link from "next/link";
import { pageSeo } from "@/data/seo";
import { images } from "@/data/images";
import { site } from "@/config/site";
import type { Metadata } from "next";
import { href, tr } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata, resolveLocale } from "@/lib/seo";
import { experienceAreas, firm } from "@/data/firm";
import { byTier } from "@/data/people";
import { sortedInsights } from "@/data/insights";
import { ArchImage } from "@/components/media/ArchImage";
import { Arrow, ButtonLink, Eyebrow, Pending } from "@/components/ui/primitives";
import { PracticeIndex } from "@/components/sections/PracticeIndex";
import { Principles } from "@/components/sections/Approach";
import { Leadership } from "@/components/sections/PeopleSections";
import { InsightFeature, InsightRow } from "@/components/sections/InsightItems";
import { OfficeList } from "@/components/sections/Offices";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  // The layout title template does not apply to its own segment, so the home
  // page carries the firm name itself.
  return pageMetadata(
    locale,
    "/",
    `${site.name[locale]} — ${tr(pageSeo.home.title, locale)}`,
    tr(pageSeo.home.description, locale),
  );
}

export default async function HomePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale);
  const [featured, ...rest] = sortedInsights();
  const others = [...byTier(3), ...byTier(4)];

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <ArchImage
            variant="facade"
            src={images.homeHero.src}
            alt={tr(images.homeHero.alt, locale)}
            plane
            priority
            sizes="(max-width: 899px) 100vw, 64vw"
            className="hero__image"
            reveal={false}
          />
        </div>
        <div className="container hero__inner">
          <Eyebrow className="hero__eyebrow">{t.home.heroEyebrow}</Eyebrow>
          <h1 id="hero-title" className="hero__title">
            {t.home.heroTitle.map((line, i) => (
              <span key={i} className="hero__line" style={{ ["--d" as string]: `${i * 140}ms` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__lead">{tr(firm.positioning, locale)}</p>
          <div className="btn-row hero__actions">
            <ButtonLink href={href(locale, "/contact/inquiry")} variant="light">
              {t.cta.inquiryConsultation}
            </ButtonLink>
            <ButtonLink href={href(locale, "/practices")} variant="outline">
              {t.cta.explorePractices}
            </ButtonLink>
          </div>
        </div>
        <div className="hero__foot">
          <div className="container hero__foot-inner">
            <p>{t.home.heroNote}</p>
            <p className="hero__audiences">{tr(firm.audiences, locale).join(" · ")}</p>
          </div>
        </div>
      </section>

      {/* FIRM INTRODUCTION */}
      <section className="section intro" aria-labelledby="intro-title">
        <div className="container split">
          <div className="split__label">
            <Eyebrow>{t.home.introLabel}</Eyebrow>
          </div>
          <div className="split__main">
            <h2 id="intro-title" className="statement" data-reveal="">
              {tr(firm.introduction, locale)}
            </h2>
            <div className="intro__cols" data-reveal="">
              <p>{tr(firm.distinction, locale)}</p>
              <p>{t.about.whoFocus}</p>
            </div>
            <ButtonLink href={href(locale, "/about")} variant="text">
              {t.cta.aboutFirm}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section className="section section--tint" aria-labelledby="practices-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.home.practicesLabel}</Eyebrow>
              <h2 id="practices-title" className="h2" data-reveal="">
                {t.home.practicesTitle}
              </h2>
            </div>
            <ButtonLink href={href(locale, "/practices")} variant="text">
              {t.cta.allPractices}
            </ButtonLink>
          </div>
          <PracticeIndex locale={locale} variant="compact" />
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section section--navy approach" aria-labelledby="approach-title">
        <div className="container approach__grid">
          <div className="approach__head">
            <Eyebrow>{t.home.approachLabel}</Eyebrow>
            <h2 id="approach-title" className="h2 approach__title" data-reveal="">
              {t.home.approachTitle}
            </h2>
            <ButtonLink href={href(locale, "/about#approach")} variant="text" className="on-dark">
              {t.cta.ourApproach}
            </ButtonLink>
          </div>
          <Principles locale={locale} />
        </div>
      </section>

      {/* PEOPLE */}
      <section className="section" aria-labelledby="people-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.home.peopleLabel}</Eyebrow>
              <h2 id="people-title" className="h2" data-reveal="">
                {t.home.peopleTitle}
              </h2>
            </div>
            <ButtonLink href={href(locale, "/people")} variant="text">
              {t.cta.meetTeam}
            </ButtonLink>
          </div>
          <Leadership locale={locale} dict={t} />
          <ul className="name-strip" data-reveal="">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={href(locale, `/people/${p.slug}`)}>
                  <span className="name-strip__name">{tr(p.name, locale)}</span>
                  <span className="name-strip__role">{tr(p.role, locale)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LEGAL EXPERIENCE */}
      <section className="section section--tint experience" aria-labelledby="experience-title">
        <div className="container experience__grid">
          <div className="experience__media">
            <ArchImage
              variant="lattice"
              plane
              src={images.homeExperience.src}
              alt={tr(images.homeExperience.alt, locale)}
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
          <div className="experience__body">
            <Eyebrow>{t.home.experienceLabel}</Eyebrow>
            <h2 id="experience-title" className="h2" data-reveal="">
              {t.home.experienceTitle}
            </h2>
            <p className="lead" data-reveal="">
              {tr(firm.litigationStages, locale)}
            </p>
            <p className="experience__judgments">{tr(firm.judgments, locale)}</p>
            <ul className="tag-list" data-reveal="">
              {experienceAreas.map((a) => (
                <li key={a.en}>{tr(a, locale)}</li>
              ))}
            </ul>
            <Pending block>{t.placeholder.case}</Pending>
            <p className="fine">{tr(firm.confidentiality, locale)}</p>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section" aria-labelledby="insights-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.home.insightsLabel}</Eyebrow>
              <h2 id="insights-title" className="h2" data-reveal="">
                {t.home.insightsTitle}
              </h2>
            </div>
            <ButtonLink href={href(locale, "/insights")} variant="text">
              {t.cta.allInsights}
            </ButtonLink>
          </div>
          <div className="insights-preview">
            <InsightFeature insight={featured} locale={locale} dict={t} />
            <div className="insights-preview__list">
              {rest.slice(0, 3).map((i) => (
                <InsightRow key={i.slug} insight={i} locale={locale} dict={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="section section--tint" aria-labelledby="offices-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{t.home.officesLabel}</Eyebrow>
              <h2 id="offices-title" className="h2" data-reveal="">
                {t.home.officesTitle}
              </h2>
            </div>
            <Link href={href(locale, "/contact/locations")} className="btn btn--text">
              <span>{t.cta.locations}</span>
              <Arrow />
            </Link>
          </div>
          <OfficeList locale={locale} dict={t} />
        </div>
      </section>

      <CTASection locale={locale} dict={t} />
    </>
  );
}
