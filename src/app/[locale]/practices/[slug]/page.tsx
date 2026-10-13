import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { href, locales, tr, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbLd } from "@/lib/structured-data";
import { getPractice, practiceIndex, practices } from "@/data/practices";
import { firm } from "@/data/firm";
import { getPerson } from "@/data/people";
import { insights } from "@/data/insights";
import { getConsiderations } from "@/data/practice-considerations";
import { practiceSeo } from "@/data/seo";
import {
  Arrow,
  ButtonLink,
  Eyebrow,
  Pending,
} from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";
import {
  PracticeIndex,
  practiceNumber,
} from "@/components/sections/PracticeIndex";
import { Principles } from "@/components/sections/Approach";
import { InsightRow } from "@/components/sections/InsightItems";
import { Portrait } from "@/components/media/Portrait";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    practices.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getPractice(slug);
  if (!p) return {};
  const l = locale as Locale;
  const seo = practiceSeo[slug];
  return pageMetadata(
    l,
    `/practices/${slug}`,
    tr(seo?.title ?? p.title, l),
    tr(seo?.description ?? p.summary, l),
  );
}

/** Brief Q8 — stages and avenues of challenge covered by litigation services. */
const STAGES = [
  { en: "Appeal", ar: "الاستئناف" },
  { en: "Cassation", ar: "النقض أو التمييز" },
  { en: "Enforcement", ar: "إجراءات التنفيذ" },
];

export default async function PracticePage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const practice = getPractice(slug);
  if (!practice) notFound();
  const t = getDictionary(locale);
  const i = practiceIndex(slug);
  const prev = practices[(i - 1 + practices.length) % practices.length];
  const next = practices[(i + 1) % practices.length];
  const related = practice.related
    .map(getPractice)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relatedInsights = insights.filter((a) => a.practice === slug);
  const legal = getConsiderations(slug);
  const crumbs = [
    { label: t.nav.home, href: href(locale) },
    { label: t.nav.practices, href: href(locale, "/practices") },
    { label: tr(practice.title, locale) },
  ];
  const head = getPerson("Abanoub-aouni")!;
  const title = tr(practice.title, locale);

  return (
    <>
      <PageHero
        crumbs={crumbs}
        crumbLabel={t.breadcrumb}
        eyebrow={t.nav.practices}
        title={title}
        lead={<p>{tr(practice.summary, locale)}</p>}
        aside={
          <p
            className="practice-hero__num"
            aria-label={`${practiceNumber(i)} ${t.practices.of} ${practices.length}`}
          >
            {practiceNumber(i)}
            <small aria-hidden="true">
              {t.practices.of} {practices.length}
            </small>
          </p>
        }
      >
        <div className="btn-row" style={{ marginTop: 36 }}>
          <ButtonLink
            href={href(
              locale,
              `/contact/inquiry?type=consultation&matter=${slug}`,
            )}
            variant="solid"
          >
            {t.cta.consultation}
          </ButtonLink>
        </div>
      </PageHero>

      {/* SCOPE / MATTERS */}
      <section className="section" aria-labelledby="matters-title">
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.practices.scope}</Eyebrow>
            <h2 id="matters-title" className="h2">
              {t.practices.matters}
            </h2>
          </div>
          <div className="detail-grid__main">
            <ul className="matters">
              {tr(practice.matters, locale).map((m) => (
                <li key={m} data-reveal="">
                  <span className="plane" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
            {practice.represents && (
              <dl className="represents">
                <dt>{t.practices.represents}</dt>
                <dd>{tr(practice.represents, locale)}</dd>
              </dl>
            )}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section
        className="section section--navy section--tight"
        aria-labelledby="stages-title"
      >
        <div className="container stage-band__grid">
          <div>
            <Eyebrow>{t.practices.stages}</Eyebrow>
            <h2 id="stages-title" className="h2">
              {title}
            </h2>
          </div>
          <div>
            <p className="lead">{tr(firm.litigationStages, locale)}</p>
            <ul className="stage-list">
              {STAGES.map((s) => (
                <li key={s.en}>{tr(s, locale)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LEGAL CONSIDERATIONS — not supplied */}
      <section
        className="section section--tight"
        aria-labelledby="considerations-title"
      >
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.practices.considerations}</Eyebrow>
          </div>
          <div className="detail-grid__main">
            <h2
              id="considerations-title"
              className="h3"
              style={{ marginBottom: 8 }}
            >
              {t.practices.considerations}
            </h2>
            {legal ? (
              <div className="prose">
                <p className="lede">{tr(legal.intro, locale)}</p>
                {legal.points.map((pt) => (
                  <p key={pt.title.en}>
                    <strong>{tr(pt.title, locale)}.</strong>{" "}
                    {tr(pt.body, locale)}
                  </p>
                ))}
                <p>{tr(legal.practical, locale)}</p>
                <p>
                  <strong>{t.practices.framework}</strong>
                  {tr(legal.framework, locale).map((f) => (
                    <span key={f}>
                      <br />
                      {f}
                    </span>
                  ))}
                </p>
                <p>{tr(legal.qualification, locale)}</p>
                {!legal.reviewed && <Pending>{t.placeholder.legalDraft}</Pending>}
              </div>
            ) : (
              <Pending block>{t.placeholder.considerations}</Pending>
            )}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        className="section section--tint"
        aria-labelledby="practice-approach"
      >
        <div className="container approach__grid">
          <div className="approach__head">
            <Eyebrow>{t.practices.approach}</Eyebrow>
            <h2
              id="practice-approach"
              className="h2"
              style={{ marginBottom: 36 }}
            >
              {t.home.approachTitle}
            </h2>
            <ButtonLink href={href(locale, "/about#approach")} variant="text">
              {t.cta.ourApproach}
            </ButtonLink>
          </div>
          <Principles locale={locale} />
        </div>
      </section>

      {/* TEAM — integrated, not tied to one lawyer (Brief Q10) */}
      <section
        className="section section--tight"
        aria-labelledby="practice-team"
      >
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.practices.team}</Eyebrow>
            <h2 id="practice-team" className="h3">
              {t.about.whoTitle}
            </h2>
          </div>
          <div className="detail-grid__main team-note">
            <Portrait person={head} tone="mist" sizes="140px" />
            <div>
              <p>{tr(firm.integratedTeamPractice, locale)}</p>
              <div className="btn-row">
                <ButtonLink href={href(locale, "/people")} variant="text">
                  {t.cta.meetTeam}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section
        className="section section--tint section--tight"
        aria-labelledby="related-title"
      >
        <div className="container">
          <div className="section-head">
            <h2 id="related-title" className="h2">
              {t.practices.related}
            </h2>
            <ButtonLink href={href(locale, "/practices")} variant="text">
              {t.cta.allPractices}
            </ButtonLink>
          </div>
          <PracticeIndex locale={locale} items={related} variant="full" />

          {relatedInsights.length > 0 && (
            <div style={{ marginTop: "clamp(56px, 7vw, 96px)" }}>
              <h2 className="h3" style={{ marginBottom: 20 }}>
                {t.practices.relatedInsights}
              </h2>
              {relatedInsights.map((a) => (
                <InsightRow key={a.slug} insight={a} locale={locale} dict={t} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PREV / NEXT */}
      <nav className="container" aria-label={t.nav.practices}>
        <div className="pager">
          <Link href={href(locale, `/practices/${prev.slug}`)} rel="prev">
            <span className="pager__label">{t.practices.previous}</span>
            <span className="pager__title">{tr(prev.title, locale)}</span>
          </Link>
          <Link href={href(locale, `/practices/${next.slug}`)} rel="next">
            <span className="pager__label">
              {t.practices.next} <Arrow />
            </span>
            <span className="pager__title">{tr(next.title, locale)}</span>
          </Link>
        </div>
      </nav>

      <JsonLd data={breadcrumbLd(locale, crumbs)} />
      <CTASection locale={locale} dict={t} />
    </>
  );
}
