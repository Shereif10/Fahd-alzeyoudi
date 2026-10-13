"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observes every [data-reveal] element and marks it as shown when it enters the
 * viewport. Elements stay fully visible without JavaScript or with reduced motion
 * (see globals.css).
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }
    // A [data-reveal="clip"] element starts fully clipped by its own clip-path, which
    // gives it an empty intersection rect, so it would never be reported as visible.
    // Observe its parent instead and reveal the clipped element through this map.
    const targets = new Map<Element, HTMLElement[]>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            for (const el of targets.get(entry.target) ?? []) el.setAttribute("data-shown", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => {
      let observed: HTMLElement = el;
      if (el.dataset.reveal === "clip") {
        // Nearest ancestor with a layout box (display: contents has none to observe).
        let p = el.parentElement;
        while (p && getComputedStyle(p).display === "contents") p = p.parentElement;
        if (p) observed = p;
      }
      targets.set(observed, [...(targets.get(observed) ?? []), el]);
      io.observe(observed);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
