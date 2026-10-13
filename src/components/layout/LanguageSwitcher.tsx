"use client";

import Link from "next/link";
import { useId } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

/**
 * Language switch shown as the flag of the DESTINATION language:
 * English pages show the UAE flag (→ Arabic), Arabic pages show the UK flag (→ English).
 * Links to the same page in the other language.
 */
export function LanguageSwitcher({ locale, ariaLabel }: { locale: Locale; ariaLabel: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const other: Locale = locale === "en" ? "ar" : "en";
  const target = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${other}`) || `/${other}`;

  return (
    <Link href={target} hrefLang={other} lang="en" className="lang-flag" aria-label={ariaLabel} title={ariaLabel}>
      {other === "ar" ? <FlagUAE /> : <FlagUK />}
    </Link>
  );
}

function FlagUAE() {
  return (
    <svg className="lang-flag__svg" viewBox="0 0 12 6" aria-hidden="true" focusable="false">
      <rect width="12" height="2" fill="#00732F" />
      <rect y="2" width="12" height="2" fill="#FFFFFF" />
      <rect y="4" width="12" height="2" fill="#000000" />
      <rect width="3" height="6" fill="#FF0000" />
    </svg>
  );
}

function FlagUK() {
  // Unique clip-path ids so the SVG stays valid if rendered more than once.
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg className="lang-flag__svg" viewBox="0 0 60 30" aria-hidden="true" focusable="false">
      <clipPath id={`${id}s`}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={`${id}t`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${id}s)`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}t)`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
