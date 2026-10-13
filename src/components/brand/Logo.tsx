import { MARK_PATHS, WORDMARK_PATHS } from "./logo-paths";

type Props = {
  variant?: "full" | "mark";
  className?: string;
  /** Accessible name. Pass an empty string when the logo is decorative. */
  title?: string;
};

/**
 * Primary horizontal logo and standalone mark, using the approved vector artwork.
 * Colour follows `currentColor`; the mark can be tinted separately with
 * `--logo-mark` (e.g. muted blue on deep navy, as shown in the guidelines).
 * The logo is never mirrored for Arabic.
 */
export function Logo({ variant = "full", className, title = "Fahad Al Zeyoudi" }: Props) {
  const viewBox = variant === "mark" ? "153.6 277.2 29.4 41" : "153.6 277.2 170 41";
  return (
    <svg
      className={className}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title || undefined}
      focusable="false"
    >
      <g fill="var(--logo-mark, currentColor)">
        {MARK_PATHS.map((p, i) => (
          <path key={i} transform={p.t} d={p.d} />
        ))}
      </g>
      {variant === "full" && (
        <g fill="currentColor">
          {WORDMARK_PATHS.map((p, i) => (
            <path key={i} transform={p.t} d={p.d} />
          ))}
        </g>
      )}
    </svg>
  );
}
