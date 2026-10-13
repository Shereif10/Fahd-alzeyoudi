import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, locales, tr, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbLd, personLd } from "@/lib/structured-data";
import { getPerson, people } from "@/data/people";
import { offices } from "@/data/offices";
import { firm } from "@/data/firm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink, Eyebrow, Pending } from "@/components/ui/primitives";
import { Portrait } from "@/components/media/Portrait";
import { TeamRoster } from "@/components/sections/PeopleSections";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    people.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getPerson(slug);
  if (!p) return {};
  const l = locale as Locale;
  return pageMetadata(
    l,
    `/people/${slug}`,
    tr(p.name, l),
    `${tr(p.name, l)} — ${tr(p.role, l)}`,
  );
}

export default async function PersonPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const person = getPerson(slug);
  if (!person) notFound();
  const t = getDictionary(locale);
  const office = person.office
    ? offices.find((o) => o.id === person.office)
    : undefined;
  const isHead = person.slug === "Abanoub-aouni";
  const crumbs = [
    { label: t.nav.home, href: href(locale) },
    { label: t.nav.people, href: href(locale, "/people") },
    { label: tr(person.name, locale) },
  ];

  return (
    <>
      <section className={`profile profile--tier-${person.tier}`}>
        <div className="container">
          <Breadcrumbs
            label={t.breadcrumb}
            items={crumbs}
          />
          <JsonLd data={[personLd(person, locale), breadcrumbLd(locale, crumbs)]} />
          <div className="profile__grid">
            <div className="profile__portrait">
              <Portrait
                person={person}
                label={t.placeholder.portrait}
                tone={
                  person.tier === 1
                    ? "navy"
                    : person.tier === 2
                      ? "mist"
                      : "paper"
                }
                sizes="(min-width: 900px) 45vw, 80vw"
                priority
              />
            </div>
            <div className="profile__text">
              <Eyebrow>{tr(person.role, locale)}</Eyebrow>
              <h1 className="profile__name">{tr(person.name, locale)}</h1>
              <dl className="profile__facts">
                <div>
                  <dt>{t.people.role}</dt>
                  <dd>{tr(person.role, locale)}</dd>
                </div>
                {person.responsibilities && (
                  <div>
                    <dt>{t.people.responsibilities}</dt>
                    <dd>{tr(person.responsibilities, locale).join(" · ")}</dd>
                  </div>
                )}
                {office && (
                  <div>
                    <dt>{t.people.office}</dt>
                    <dd>{tr(office.name, locale)}</dd>
                  </div>
                )}
              </dl>
              <div className="btn-row">
                <ButtonLink
                  href={href(locale, "/contact/inquiry")}
                  variant="solid"
                >
                  {t.cta.inquiryConsultation}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="bio-title">
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.people.biography}</Eyebrow>
            <h2 id="bio-title" className="h3">
              {t.people.biography}
            </h2>
          </div>
          <div className="detail-grid__main">
            {person.bio ? (
              <div className="prose">
                {tr(person.bio, locale).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : (
              <Pending block>{t.placeholder.bio}</Pending>
            )}
          </div>
        </div>
      </section>

      <section
        className="section section--tint section--tight"
        aria-labelledby="practice-title"
      >
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.people.practice}</Eyebrow>
            <h2 id="practice-title" className="h3">
              {t.people.practice}
            </h2>
          </div>
          <div className="detail-grid__main">
            <p className="lead">
              {isHead ? tr(firm.integratedTeam, locale) : t.people.practiceText}
            </p>
            <div style={{ marginTop: 24 }}>
              <ButtonLink href={href(locale, "/practices")} variant="text">
                {t.cta.allPractices}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        aria-labelledby="colleagues-title"
      >
        <div className="container detail-grid">
          <div className="detail-grid__label">
            <Eyebrow>{t.people.colleagues}</Eyebrow>
            <h2 id="colleagues-title" className="h3">
              {t.people.colleagues}
            </h2>
          </div>
          <div className="detail-grid__main">
            <TeamRoster locale={locale} people={people} exclude={person.slug} />
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={t} body={t.people.contactAbout} />
    </>
  );
}
