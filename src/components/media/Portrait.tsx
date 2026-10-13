import Image from "next/image";
import type { Person } from "@/data/people";

type Props = {
  person: Person;
  /** Placeholder note, e.g. "Portrait — approved photography required". */
  label?: string;
  tone?: "paper" | "navy" | "mist";
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Team portrait slot (4:5). Approved portraits have not been supplied, so the slot
 * shows a monogram — never a stock photograph standing in for a real person.
 * See docs/portrait-photography-brief.md for the recommended shoot specification.
 */
export function Portrait({ person, label, tone = "paper", sizes = "(min-width: 900px) 33vw, 100vw", priority, className = "" }: Props) {
  const initials = person.name.en
    .split(/\s+/)
    .filter((w) => !/^(al|abdel)$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <figure className={`portrait portrait--${tone} ${className}`} data-reveal="clip">
      {person.portrait ? (
        <Image src={person.portrait} alt={person.name.en} fill sizes={sizes} priority={priority} className="portrait__img" />
      ) : (
        <>
          <span className="portrait__monogram" aria-hidden="true">
            {initials}
          </span>
          {label && <figcaption className="portrait__label">[{label}]</figcaption>}
        </>
      )}
    </figure>
  );
}
