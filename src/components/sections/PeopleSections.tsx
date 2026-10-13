import Link from "next/link";
import { href, tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { byTier, getPerson, type Person } from "@/data/people";
import { Arrow } from "@/components/ui/primitives";
import { Portrait } from "@/components/media/Portrait";

/**
 * Leadership: the founder leads (Brief Q14–15); Abanoub Aouni is shown alongside,
 * deliberately one step smaller.
 */
export function Leadership({
  locale,
  dict,
  headingLevel = 3,
}: {
  locale: Locale;
  dict: Dictionary;
  headingLevel?: 2 | 3;
}) {
  const founder = getPerson("fahad-saeed-al-zeyoudi")!;
  const lead = getPerson("Abanoub-aouni")!;
  const H = `h${headingLevel}` as "h2" | "h3";
  return (
    <div className="leadership">
      <article className="leader leader--founder">
        <Link
          href={href(locale, `/people/${founder.slug}`)}
          className="leader__link"
        >
          <Portrait
            person={founder}
            label={dict.placeholder.portrait}
            tone="navy"
            sizes="(min-width: 900px) 40vw, 100vw"
          />
          <div className="leader__text">
            <H className="leader__name">{tr(founder.name, locale)}</H>
            <p className="leader__role">{tr(founder.role, locale)}</p>
            <span className="btn btn--text">
              <span>{dict.cta.viewProfile}</span>
              <Arrow />
            </span>
          </div>
        </Link>
      </article>
      <article className="leader leader--second">
        <Link
          href={href(locale, `/people/${lead.slug}`)}
          className="leader__link"
        >
          <Portrait
            person={lead}
            label={dict.placeholder.portrait}
            tone="mist"
            sizes="(min-width: 900px) 28vw, 100vw"
          />
          <div className="leader__text">
            <H className="leader__name">{tr(lead.name, locale)}</H>
            <p className="leader__role">{tr(lead.role, locale)}</p>
            {lead.responsibilities && (
              <ul className="leader__resp">
                {tr(lead.responsibilities, locale).map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
            <span className="btn btn--text">
              <span>{dict.cta.viewProfile}</span>
              <Arrow />
            </span>
          </div>
        </Link>
      </article>
    </div>
  );
}

/** Tier 3 — Amna Khalaf, then Ammar Al Qantar: portrait cards, smaller than leadership. */
export function Counsel({
  locale,
  dict,
  exclude,
}: {
  locale: Locale;
  dict: Dictionary;
  exclude?: string;
}) {
  return (
    <ul className="counsel">
      {byTier(3)
        .filter((p) => p.slug !== exclude)
        .map((p) => (
          <li key={p.slug} data-reveal="">
            <Link
              href={href(locale, `/people/${p.slug}`)}
              className="counsel__link"
            >
              <Portrait
                person={p}
                label={dict.placeholder.portrait}
                sizes="(min-width: 900px) 22vw, 50vw"
              />
              <span className="counsel__name">{tr(p.name, locale)}</span>
              <span className="counsel__role">{tr(p.role, locale)}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

/** Tier 4 — the rest of the team: a consistent typographic register. */
export function TeamRoster({
  locale,
  people,
  exclude,
}: {
  locale: Locale;
  people?: Person[];
  exclude?: string;
}) {
  const list = (people ?? byTier(4)).filter((p) => p.slug !== exclude);
  return (
    <ul className="roster">
      {list.map((p) => (
        <li key={p.slug} data-reveal="">
          <Link
            href={href(locale, `/people/${p.slug}`)}
            className="roster__link"
          >
            <span className="roster__name">{tr(p.name, locale)}</span>
            <span className="roster__role">{tr(p.role, locale)}</span>
            <Arrow className="roster__arrow" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
