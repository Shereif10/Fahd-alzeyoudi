import type { Localized } from "@/i18n/config";

/**
 * Offices — source: Sitemap (About → Offices → Dubai Office / Ajman Office) and
 * Brief Q33 (both offices to be shown on Google Maps with easy access to directions).
 *
 * No address, phone, email, hours or map link has been supplied. All `null`
 * fields render as visible "final content required" placeholders.
 */
export type Office = {
  id: "dubai" | "ajman";
  city: Localized;
  name: Localized;
  address: Localized | null;
  phone: string | null;
  email: string | null;
  hours: Localized | null;
  /** Google Maps place / directions URL. */
  mapUrl: string | null;
  /** Google Maps embed URL (iframe src). */
  mapEmbedUrl: string | null;
  /** Person slug responsible for the office, where stated in the brief. */
  managerSlug?: string;
};

export const offices: Office[] = [
  {
    id: "dubai",
    city: { en: "Dubai", ar: "دبي" },
    name: { en: "Dubai Office", ar: "مكتب دبي" },
    address: null,
    phone: null,
    email: null,
    hours: null,
    mapUrl: null,
    mapEmbedUrl: null,
    managerSlug: "Abanoub-aouni",
  },
  {
    id: "ajman",
    city: { en: "Ajman", ar: "عجمان" },
    name: { en: "Ajman Office", ar: "مكتب عجمان" },
    address: null,
    phone: null,
    email: null,
    hours: null,
    mapUrl: null,
    mapEmbedUrl: null,
  },
];
