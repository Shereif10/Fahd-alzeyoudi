import { tr, type Locale } from "@/i18n/config";
import { communicationSteps, principles } from "@/data/firm";

/** The firm's principles (Brief Q5). Not a sequence, so not numbered. */
export function Principles({ locale, headingLevel = 3 }: { locale: Locale; headingLevel?: 3 | 4 }) {
  const H = `h${headingLevel}` as "h3" | "h4";
  return (
    <ul className="principles">
      {principles.map((p) => (
        <li key={p.title.en} className="principle" data-reveal="">
          <span className="plane" aria-hidden="true" />
          <H className="principle__title">{tr(p.title, locale)}</H>
          <p className="principle__body">{tr(p.body, locale)}</p>
        </li>
      ))}
    </ul>
  );
}

/** How communication works through a matter — a real sequence, so numbered. */
export function CommunicationSteps({ locale }: { locale: Locale }) {
  return (
    <ol className="steps">
      {communicationSteps.map((s, i) => (
        <li key={i} className="step" data-reveal="">
          <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
          <p className="step__text">{tr(s, locale)}</p>
        </li>
      ))}
    </ol>
  );
}
