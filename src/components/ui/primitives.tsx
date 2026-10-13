import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Directional arrow. Points "forward" — mirrored automatically in RTL via CSS. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`arrow ${className}`} viewBox="0 0 24 12" aria-hidden="true" focusable="false">
      <path d="M0 6h22M17 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "solid" | "outline" | "light" | "text";
  children: ReactNode;
};

export function ButtonLink({ variant = "solid", className = "", children, ...rest }: ButtonProps) {
  return (
    <Link className={`btn btn--${variant} ${className}`} {...rest}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

/** Small uppercase section label, preceded by the brand's sheared plane. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow ${className}`}>
      <span className="plane" aria-hidden="true" />
      {children}
    </p>
  );
}

/**
 * Visible marker for content the firm has not yet supplied.
 * Never replace with invented information.
 */
export function Pending({ children, block = false }: { children: ReactNode; block?: boolean }) {
  const Tag = block ? "div" : "span";
  return (
    <Tag className={`pending${block ? " pending--block" : ""}`} data-pending="">
      [{children}]
    </Tag>
  );
}

export function Container({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={`container${narrow ? " container--narrow" : ""} ${className}`}>{children}</div>;
}
