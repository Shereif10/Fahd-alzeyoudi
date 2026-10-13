"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Logo } from "@/components/brand/Logo";
import { Arrow } from "@/components/ui/primitives";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = ["about", "practices", "people", "insights", "contact"] as const;

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? "";
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("menu-open");
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panel) {
        const focusables = Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          toggleRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          toggleRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (key: (typeof NAV)[number]) => pathname.startsWith(`/${locale}/${key}`);
  const mode = open ? "menu" : isHome && !scrolled ? "transparent" : isHome ? "navy" : scrolled ? "paper-scrolled" : "paper";

  return (
    <header className={`site-header site-header--${mode}`} data-home={isHome || undefined}>
      <div className="site-header__inner">
        <Link href={href(locale)} className="site-header__logo" aria-label={`${dict.nav.home} — Fahad Al Zeyoudi`}>
          <Logo title="" />
        </Link>

        <nav className="site-nav" aria-label={dict.nav.primary}>
          <ul>
            {NAV.map((key) => (
              <li key={key}>
                <Link href={href(locale, `/${key}`)} aria-current={isActive(key) ? "page" : undefined}>
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link href={href(locale, "/contact/inquiry")} className="header-cta">
            {dict.nav.inquiry}
            <Arrow />
          </Link>
          <span className="site-header__divider" aria-hidden="true" />
          <LanguageSwitcher locale={locale} ariaLabel={dict.nav.switchToLabel} />
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle__label">{open ? dict.nav.close : dict.nav.menu}</span>
            <span className="menu-toggle__icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" data-open={open || undefined} hidden={!open}>
        <nav aria-label={dict.nav.primary}>
          <ul className="mobile-menu__list">
            {NAV.map((key, i) => (
              <li key={key} style={{ ["--i" as string]: i }}>
                <Link href={href(locale, `/${key}`)} aria-current={isActive(key) ? "page" : undefined}>
                  {dict.nav[key]}
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">
          <Link href={href(locale, "/contact/inquiry")} className="btn btn--light">
            <span>{dict.cta.inquiryConsultation}</span>
            <Arrow />
          </Link>
        </div>
      </div>
    </header>
  );
}
