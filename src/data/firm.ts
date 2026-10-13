import type { Localized } from "@/i18n/config";

/**
 * Firm-level statements. Every statement below is drawn from the Project Brief
 * (question numbers noted). English is a faithful rendering of the Arabic brief.
 * Per Q6/Q22, all copy is subject to review by the firm before publication.
 */
export const firm = {
  /** Q6 — how the firm wants to be remembered. */
  positioning: {
    en: "A firm that brings together professionalism, expertise and integrity — and places the client's interest, and communication with the client, first.",
    ar: "مكتب يجمع المهنية والاحترافية والأمانة، ويضع مصلحة الموكل والتواصل معه في مقدمة أولوياته.",
  },

  /** Q1, Q3, Q8 — what the firm does and for whom. */
  introduction: {
    en: "Fahad Al Zeyoudi provides litigation and legal representation across the full range of claims and disputes — for individuals, companies and investors in the United Arab Emirates.",
    ar: "يقدم مكتب فهد الزيودي خدمات التقاضي والتمثيل القانوني في مختلف أنواع الدعاوى والمنازعات، للأفراد والشركات والمستثمرين في دولة الإمارات العربية المتحدة.",
  },

  /** Q5 — what distinguishes the firm. */
  distinction: {
    en: "Broad experience across the fields of law, practice before the courts of all seven Emirates, and a professional team with varied experience and long years of practice in the UAE.",
    ar: "خبرة واسعة في مختلف مجالات القانون، والعمل أمام محاكم الدولة في الإمارات السبع، وفريق مهني يمتلك خبرات متعددة وسنوات طويلة من الممارسة داخل الدولة.",
  },

  /** Q3 */
  audiences: {
    en: ["Individuals", "Companies", "Investors"],
    ar: ["الأفراد", "الشركات", "المستثمرون"],
  } satisfies Localized<string[]>,

  /** Q8 — closing note on litigation services. */
  litigationStages: {
    en: "Our litigation services follow every stage of the case and the avenues of challenge available — including appeal and cassation — through to enforcement, according to the nature of each matter.",
    ar: "تشمل خدمات التقاضي متابعة مراحل الدعوى وطرق الطعن المتاحة، بما فيها الاستئناف والنقض أو التمييز، وإجراءات التنفيذ، بحسب طبيعة كل قضية.",
  },

  /** Q19 — judgments in significant cases (detail to be prepared and approved, anonymised). */
  judgments: {
    en: "The firm has obtained judgments in significant cases — notably in:",
    ar: "حصل المكتب على أحكام في قضايا كبيرة، ولا سيما في:",
  },

  /** Q16 — trust is built through experience and communication, not client lists. */
  confidentiality: {
    en: "We do not publish client names or testimonials. Our clients' privacy and the confidentiality of their relationship with the firm come first.",
    ar: "لا ننشر أسماء الموكلين أو شهاداتهم، حرصًا على خصوصيتهم وسرية علاقتهم بالمكتب.",
  },

  /** Q10 — integrated team, without personal attribution (practice pages, "Who handles your matter"). */
  integratedTeamPractice: {
    en: "The team works as one integrated unit across all matters, ensuring coordinated legal support and consistent representation at every stage of each matter.",
    ar: "يعمل الفريق كوحدة واحدة متكاملة في جميع الدعاوى، بما يضمن دعمًا قانونيًا منسقًا وتمثيلًا متسقًا في كل مرحلة من مراحل القضية.",
  },

  /** Q10 — integrated team. */
  integratedTeam: {
    en: "The team works as one integrated unit across all matters, under the management and supervision of Legal Consultant Abanoub Aouni, Dubai Office Manager and Head of Litigation.",
    ar: "يعمل الفريق بصورة متكاملة في مختلف الدعاوى، تحت إدارة وإشراف المستشار القانوني أبانوب عوني، مدير مكتب دبي ورئيس قسم التقاضي.",
  },
};

/** Q5 — the firm's approach, as principles. */
export const principles: { title: Localized; body: Localized }[] = [
  {
    title: {
      en: "The client's interest comes first",
      ar: "مصلحة الموكل أولًا",
    },
    body: {
      en: "The client's interest is placed ahead of the firm's interest in taking on a case.",
      ar: "مصلحة الموكل مقدمة على مصلحة المكتب في تولي القضية.",
    },
  },
  {
    title: {
      en: "The right solution, even outside court",
      ar: "الحل الأنسب، ولو خارج المحكمة",
    },
    body: {
      en: "We advise on the most suitable course — even when that means settlement, or taking no legal action at all.",
      ar: "نقدم الحل الأنسب حتى إذا كان يتمثل في التسوية أو عدم اتخاذ إجراء قضائي.",
    },
  },
  {
    title: { en: "Constant, effective communication", ar: "تواصل مستمر وفعال" },
    body: {
      en: "Clients are kept informed of developments in their case and of what happens at each hearing.",
      ar: "نحرص على إطلاع الموكل سريعًا على مستجدات قضيته وما يجري في الجلسات.",
    },
  },
  {
    title: { en: "Integrity", ar: "الأمانة" },
    body: {
      en: "Integrity sits at the front of our work, alongside professionalism and expertise.",
      ar: "نضع الأمانة في مقدمة عملنا، إلى جانب المهنية والاحترافية.",
    },
  },
];

/** Q5 — how communication works in practice. This is a real sequence, so it is numbered. */
export const communicationSteps: Localized[] = [
  {
    en: "We inform you promptly of developments in your case and of what takes place at each hearing.",
    ar: "نطلعك سريعًا على مستجدات قضيتك وما يجري في الجلسات.",
  },
  {
    en: "We share our memoranda with you before they are filed, together with the opposing party's memoranda.",
    ar: "نشاركك مذكراتنا قبل تقديمها، ومذكرات الخصم.",
  },
  {
    en: "We answer your questions as your matter progresses.",
    ar: "نرد على استفساراتك طوال سير القضية.",
  },
  {
    en: "We hold the meetings your matter requires.",
    ar: "نعقد الاجتماعات اللازمة معك.",
  },
];

/** Q19 — areas in which the firm wishes to highlight judgments obtained in major cases. */
export const experienceAreas: Localized[] = [
  { en: "Banking disputes", ar: "المنازعات المصرفية" },
  { en: "Construction & contracting", ar: "المقاولات" },
  { en: "Financial & commercial claims", ar: "المطالبات المالية والتجارية" },
  { en: "Personal status & paternity", ar: "الأحوال الشخصية وإثبات النسب" },
];
