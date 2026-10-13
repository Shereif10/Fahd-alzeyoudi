import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Eyebrow } from "@/components/ui/primitives";

type Props = {
  crumbs: Crumb[];
  crumbLabel: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  tone?: "paper" | "navy";
  size?: "xl" | "lg";
  children?: ReactNode;
};

export function PageHero({ crumbs, crumbLabel, eyebrow, title, lead, aside, tone = "paper", size = "xl", children }: Props) {
  return (
    <section className={`page-hero page-hero--${tone} page-hero--${size}`}>
      <div className="container">
        <Breadcrumbs items={crumbs} label={crumbLabel} />
        <div className={`page-hero__grid${aside ? " page-hero__grid--aside" : ""}`}>
          <div className="page-hero__main">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="page-hero__title" data-reveal="">
              {title}
            </h1>
            {lead && (
              <div className="page-hero__lead lead" data-reveal="">
                {lead}
              </div>
            )}
            {children}
          </div>
          {aside && <div className="page-hero__aside">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
