import Link from "next/link";
import { href, tr, type Locale } from "@/i18n/config";
import { practices, type Practice } from "@/data/practices";
import { Arrow } from "@/components/ui/primitives";

const num = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Editorial index of practice areas. Numbering follows the order of the brief and
 * is used as an index reference — every area carries equal weight (Brief Q9).
 */
export function PracticeIndex({
  locale,
  items = practices,
  variant = "full",
}: {
  locale: Locale;
  items?: Practice[];
  variant?: "full" | "compact";
}) {
  return (
    <ol className={`practice-index practice-index--${variant}`}>
      {items.map((p) => {
        const i = practices.findIndex((x) => x.slug === p.slug);
        return (
          <li key={p.slug} className="practice-index__item" data-reveal="">
            <Link href={href(locale, `/practices/${p.slug}`)} className="practice-index__link">
              <span className="practice-index__num">{num(i)}</span>
              <span className="practice-index__body">
                <span className="practice-index__title">{tr(p.title, locale)}</span>
                {variant === "full" && <span className="practice-index__summary">{tr(p.summary, locale)}</span>}
              </span>
              <Arrow className="practice-index__arrow" />
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export { num as practiceNumber };
