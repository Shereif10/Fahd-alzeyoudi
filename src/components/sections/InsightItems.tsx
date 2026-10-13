import Link from "next/link";
import { href, tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { formatDate, type Insight } from "@/data/insights";
import { Arrow } from "@/components/ui/primitives";
import { ArchImage, type ArchVariant } from "@/components/media/ArchImage";

const VARIANTS: ArchVariant[] = ["curtain", "lattice", "facade", "arcade", "towers"];
export const insightVariant = (slug: string) => VARIANTS[[...slug].reduce((a, c) => a + c.charCodeAt(0), 0) % VARIANTS.length];

function Meta({ insight, locale, dict }: { insight: Insight; locale: Locale; dict: Dictionary }) {
  return (
    <p className="insight-meta">
      <span className="insight-meta__cat">{tr(insight.category, locale)}</span>
      <time dateTime={insight.date}>{formatDate(insight.date, locale)}</time>
      {!insight.reviewed && (
        <span className="insight-meta__flag">{insight.placeholder ? dict.insights.placeholder : dict.insights.draft}</span>
      )}
    </p>
  );
}

export function InsightFeature({ insight, locale, dict, headingLevel = 3 }: { insight: Insight; locale: Locale; dict: Dictionary; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as "h2" | "h3";
  return (
    <article className="insight-feature">
      <Link href={href(locale, `/insights/${insight.slug}`)} className="insight-feature__link">
        <ArchImage
          variant={insightVariant(insight.slug)}
          src={insight.image?.src}
          alt={insight.image ? tr(insight.image.alt, locale) : undefined}
          label={dict.placeholder.image}
          sizes="(min-width: 900px) 50vw, 100vw"
        />
        <div className="insight-feature__text">
          <Meta insight={insight} locale={locale} dict={dict} />
          <H className="insight-feature__title">{tr(insight.title, locale)}</H>
          <p className="insight-feature__excerpt">{tr(insight.excerpt, locale)}</p>
          <span className="btn btn--text">
            <span>{dict.cta.readArticle}</span>
            <Arrow />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function InsightRow({ insight, locale, dict, headingLevel = 3 }: { insight: Insight; locale: Locale; dict: Dictionary; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as "h2" | "h3";
  return (
    <article className="insight-row" data-reveal="">
      <Link href={href(locale, `/insights/${insight.slug}`)} className="insight-row__link">
        <Meta insight={insight} locale={locale} dict={dict} />
        <H className="insight-row__title">{tr(insight.title, locale)}</H>
        <p className="insight-row__excerpt">{tr(insight.excerpt, locale)}</p>
        <Arrow className="insight-row__arrow" />
      </Link>
    </article>
  );
}
