"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { href, tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { formatDate, type Insight } from "@/data/insights";
import { Arrow } from "@/components/ui/primitives";

/** The publication index: topic filter + chronological list. */
export function InsightJournal({ items, locale, dict }: { items: Insight[]; locale: Locale; dict: Dictionary }) {
  const [topic, setTopic] = useState<string | null>(null);
  const topics = useMemo(() => Array.from(new Map(items.map((i) => [i.category.en, i.category])).values()), [items]);
  const visible = topic ? items.filter((i) => i.category.en === topic) : items;

  return (
    <>
      <div className="filters" role="group" aria-label={dict.insights.filterLabel}>
        <span className="filters__label" aria-hidden="true">
          {dict.insights.filterLabel}
        </span>
        <button type="button" className="chip" aria-pressed={topic === null} onClick={() => setTopic(null)}>
          {dict.insights.all}
        </button>
        {topics.map((c) => (
          <button key={c.en} type="button" className="chip" aria-pressed={topic === c.en} onClick={() => setTopic(c.en)}>
            {tr(c, locale)}
          </button>
        ))}
      </div>

      <ol className="journal" aria-live="polite">
        {visible.length === 0 && <li className="journal__empty">{dict.insights.empty}</li>}
        {visible.map((a) => (
          <li key={a.slug} className="journal__item">
            <Link href={href(locale, `/insights/${a.slug}`)} className="journal__link">
              <div className="journal__meta">
                <time className="journal__date" dateTime={a.date}>
                  {formatDate(a.date, locale)}
                </time>
              </div>
              <div>
                <h3 className="journal__title">{tr(a.title, locale)}</h3>
                <p className="journal__excerpt">{tr(a.excerpt, locale)}</p>
              </div>
              <div className="journal__aside">
                <span className="journal__cat">{tr(a.category, locale)}</span>
                {!a.reviewed && (
                  <>
                    <br />
                    <span className="journal__flag">{a.placeholder ? dict.insights.placeholder : dict.insights.draft}</span>
                  </>
                )}
              </div>
              <Arrow />
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
