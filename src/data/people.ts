import type { Localized } from "@/i18n/config";

/**
 * Team — source: Project Brief Q12 (members and roles), Q14–15 (hierarchy of prominence).
 *
 *  tier 1  Fahad Saeed Al Zeyoudi — principal presence (founder & owner; firm bears his name)
 *  tier 2  Abanoub Aouni — prominent, parallel to or slightly below the founder
 *  tier 3  Amna Khalaf, then Ammar Al Qantar — "important presence"
 *  tier 4  the rest of the team — consistent, professional presentation
 *
 * Biographies, portraits, education, languages and licences have NOT been supplied
 * (Q13: available on the current site / to be provided). They render as placeholders.
 *
 * NOTE: the sitemap spells the Dubai office manager "Abanoub Aouni"; the Arabic brief
 * reads "أبانوب عوني" (Abanoub Awni). Confirm the English spelling with the firm.
 */
export type Person = {
  slug: string;
  name: Localized;
  role: Localized;
  /** Additional responsibilities stated in the brief. */
  responsibilities?: Localized<string[]>;
  tier: 1 | 2 | 3 | 4;
  office?: "dubai" | "ajman";
  /** Approved portrait path, once photography is supplied. */
  portrait?: string;
  /** Approved biography paragraphs, once supplied. */
  bio?: Localized<string[]>;
};

export const people: Person[] = [
  {
    slug: "fahad-saeed-al-zeyoudi",
    name: { en: "Fahad Saeed Al Zeyoudi", ar: "فهد سعيد الزيودي" },
    role: {
      en: "Founder & Owner, Emirati Advocate",
      ar: "المؤسس وصاحب المكتب، محامٍ إماراتي",
    },
    tier: 1,
  },
  {
    slug: "Abanoub-aouni",
    name: { en: "Abanoub Aouni", ar: "أبانوب عوني" },
    role: { en: "Certified Legal Consultant", ar: "مستشار قانوني معتمد" },
    responsibilities: {
      en: ["Dubai Office Manager", "Head of Litigation"],
      ar: ["مدير مكتب دبي", "رئيس قسم التقاضي"],
    },
    tier: 2,
    office: "dubai",
  },
  {
    slug: "amna-khalaf",
    name: { en: "Amna Khalaf", ar: "آمنة خلف" },
    role: { en: "Emirati Advocate", ar: "محامية إماراتية" },
    tier: 3,
  },
  {
    slug: "ammar-al-qantar",
    name: { en: "Ammar Al Qantar", ar: "عمار القنطار" },
    role: { en: "Legal Consultant", ar: "مستشار قانوني" },
    tier: 3,
  },
  {
    slug: "ahmed-abdel-nasser",
    name: { en: "Ahmed Abdel Nasser", ar: "أحمد عبد الناصر" },
    role: { en: "Legal Consultant", ar: "مستشار قانوني" },
    tier: 4,
  },
  {
    slug: "osama-sharara",
    name: { en: "Osama Sharara", ar: "أسامة شرارة" },
    role: { en: "Legal Consultant", ar: "مستشار قانوني" },
    tier: 4,
  },
  {
    slug: "mohamed-lotfy",
    name: { en: "Mohamed Lotfy", ar: "محمد لطفي" },
    role: { en: "Legal Assistant", ar: "مساعد قانوني" },
    tier: 4,
  },
  {
    slug: "ibrahim",
    name: { en: "Ibrahim", ar: "إبراهيم" },
    role: { en: "Legal Assistant", ar: "مساعد قانوني" },
    tier: 4,
  },
  {
    slug: "rofan-al-balidi",
    name: { en: "Rofan Al Balidi", ar: "روفان البليدي" },
    role: { en: "Secretary", ar: "سكرتيرة" },
    tier: 4,
  },
];

export function getPerson(slug: string) {
  return people.find((p) => p.slug === slug);
}

export const byTier = (tier: Person["tier"]) =>
  people.filter((p) => p.tier === tier);

/** Initials for portrait placeholders. */
export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => !/^(al|el|abdel)$/i.test(w) && !w.startsWith("ال"))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}
