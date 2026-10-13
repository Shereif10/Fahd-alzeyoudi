import type { Localized } from "@/i18n/config";

/**
 * Non-personal photography used in existing image slots.
 *
 * Source: Unsplash, under the Unsplash License (https://unsplash.com/license):
 * free commercial use and modification, attribution not required. Unsplash+
 * images were excluded. Sourced 10 October 2026. Full register with original
 * URLs and photographers: docs/VISUAL-ASSET-AUDIT.md.
 *
 * Team portraits are NOT sourced here — they are client-provided only.
 */
export type SiteImage = {
  src: string;
  alt: Localized;
  credit: string;
  sourceUrl: string;
};

export const images = {
  homeHero: {
    src: "/images/hero/dubai-facade-hero.webp",
    alt: { en: "", ar: "" }, // decorative: the hero headline carries the meaning
    credit: "Ahmad Ossayli / Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/a-tall-building-with-a-sky-in-the-background-jMucH8Q6bGc",
  },
  aboutHero: {
    src: "/images/about/dubai-tower-about.webp",
    alt: {
      en: "Office tower in Dubai against a clear sky",
      ar: "برج مكاتب في دبي تحت سماء صافية",
    },
    credit: "Saj Shafique / Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-pGELKw1tfok",
  },
  homeExperience: {
    src: "/images/experience/Monumental Arabian Civic Complex.png",
    alt: {
      en: "Geometric mashrabiya screen on a building façade in Dubai",
      ar: "مشربية بزخارف هندسية على واجهة مبنى في دبي",
    },
    credit: "Sadikali PM / Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/ornate-geometric-screen-on-a-building-facade-IATiLy_fKR8",
  },
  aboutExperience: {
    src: "/images/experience/dubai-facade-fins.webp",
    alt: {
      en: "Vertical façade fins of a contemporary building in Dubai",
      ar: "زعانف رأسية على واجهة مبنى معاصر في دبي",
    },
    credit: "Safarulla Kasmi / Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/gray-concrete-building-during-daytime-7Ei96rGeVZ8",
  },
} satisfies Record<string, SiteImage>;
