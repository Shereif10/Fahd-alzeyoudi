import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, IBM_Plex_Serif } from "next/font/google";

/**
 * Brand typefaces (Brand Guidelines → Typography):
 *   - Ara Al Bayan  — display / headings (Header 1.0, 2.0)
 *   - IBM Plex Sans — sub-headings (Header 3.0, 4.0) and body, Latin + Arabic
 *
 * Ara Al Bayan is a licensed face and is not yet in the project. It is declared
 * first in the display stack (see globals.css @font-face) and will be used as soon
 * as the licensed files are added to /public/fonts. Until then the display stack
 * falls back to IBM Plex Serif (Latin) and IBM Plex Sans Arabic (Arabic), which
 * keeps the site inside the brand's IBM Plex family.
 */
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-fallback",
  display: "swap",
});
