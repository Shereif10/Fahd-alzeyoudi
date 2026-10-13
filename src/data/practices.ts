import type { Localized } from "@/i18n/config";

/**
 * Practice areas — source: Project Brief, Q8 (full list and scope of each area).
 * Q9: all areas carry equal importance and must be presented in a balanced way.
 * Q10: practices are NOT tied to individual lawyers; the team works as one unit.
 *
 * `matters` reproduces the scope listed in the brief, item by item.
 * The brief notes the final service taxonomy is to be confirmed with the firm
 * before publication.
 */
export type Practice = {
  slug: string;
  title: Localized;
  /** One-line scope statement, condensed from the brief. */
  summary: Localized;
  /** Matters listed for this area in the brief. */
  matters: Localized<string[]>;
  /** Who the firm represents — only where the brief states it explicitly. */
  represents?: Localized;
  /** Editorial adjacency used for "related practices" (navigation aid, not a claim). */
  related: string[];
};

export const practices: Practice[] = [
  {
    slug: "civil-claims-financial-claims",
    title: { en: "Civil Claims & Financial Claims", ar: "الدعاوى المدنية والمطالبات المالية" },
    summary: {
      en: "Claims for debts and sums owed between individuals, contract and obligation disputes, compensation for damages and civil liability.",
      ar: "المطالبة بالديون والمبالغ المستحقة بين الأفراد، ومنازعات العقود والالتزامات، والتعويض عن الأضرار، ودعاوى المسؤولية المدنية.",
    },
    matters: {
      en: [
        "Claims for debts and sums owed between individuals",
        "Contract and obligation disputes",
        "Compensation for damages",
        "Civil liability claims",
      ],
      ar: [
        "المطالبة بالديون والمبالغ المستحقة بين الأفراد",
        "منازعات العقود والالتزامات",
        "التعويض عن الأضرار",
        "دعاوى المسؤولية المدنية",
      ],
    },
    related: ["cheques-payment-orders-enforcement", "insurance-compensation", "commercial-corporate-disputes"],
  },
  {
    slug: "commercial-corporate-disputes",
    title: { en: "Commercial & Corporate Disputes", ar: "الدعاوى التجارية ومنازعات الشركات" },
    summary: {
      en: "Claims arising from commercial contracts, invoices and purchase orders, disputes between companies, and partner and management disputes.",
      ar: "المطالبات الناشئة عن العقود التجارية والفواتير وأوامر الشراء، والمنازعات بين الشركات، ومنازعات الشركاء وإدارة الشركات.",
    },
    matters: {
      en: [
        "Claims arising from commercial contracts, invoices and purchase orders",
        "Disputes between companies, or between companies and individuals",
        "Partner disputes",
        "Company management disputes and settlement of company accounts",
      ],
      ar: [
        "المطالبات الناشئة عن العقود التجارية والفواتير وأوامر الشراء",
        "المنازعات بين الشركات أو بينها وبين الأفراد",
        "منازعات الشركاء",
        "منازعات إدارة الشركات وتسوية حساباتها",
      ],
    },
    related: ["banking-finance-disputes", "bankruptcy-restructuring-insolvency", "intellectual-property"],
  },
  {
    slug: "banking-finance-disputes",
    title: { en: "Banking & Finance Disputes", ar: "المنازعات المصرفية والتمويلية" },
    summary: {
      en: "Disputes over loans, credit facilities and bank guarantees, and the claims connected to them.",
      ar: "منازعات القروض والتسهيلات والضمانات البنكية والمطالبات المرتبطة بها.",
    },
    matters: {
      en: [
        "Loan disputes",
        "Credit facility disputes",
        "Bank guarantee disputes",
        "Related claims",
      ],
      ar: ["منازعات القروض", "منازعات التسهيلات", "منازعات الضمانات البنكية", "المطالبات المرتبطة بها"],
    },
    represents: { en: "Individuals and companies", ar: "الأفراد والشركات" },
    related: ["commercial-corporate-disputes", "cheques-payment-orders-enforcement", "bankruptcy-restructuring-insolvency"],
  },
  {
    slug: "real-estate-disputes",
    title: { en: "Real Estate Disputes", ar: "الدعاوى العقارية" },
    summary: {
      en: "Disputes between buyers and real estate developers, and disputes over sale, ownership, handover, termination, refunds and brokerage.",
      ar: "المنازعات بين المشترين والمطورين العقاريين، ومنازعات البيع والملكية والتسليم والفسخ واسترداد المبالغ والوساطة العقارية.",
    },
    matters: {
      en: [
        "Disputes between buyers and real estate developers",
        "Sale and ownership disputes",
        "Handover disputes",
        "Termination and recovery of amounts paid",
        "Compensation",
        "Disputes connected to real estate brokerage",
      ],
      ar: [
        "المنازعات بين المشترين والمطورين العقاريين",
        "منازعات البيع والملكية",
        "منازعات التسليم",
        "الفسخ واسترداد المبالغ",
        "التعويض",
        "المنازعات المرتبطة بالوساطة العقارية",
      ],
    },
    related: ["construction-contracting-disputes", "rental-disputes", "civil-claims-financial-claims"],
  },
  {
    slug: "construction-contracting-disputes",
    title: { en: "Construction & Contracting Disputes", ar: "دعاوى المقاولات والإنشاءات" },
    summary: {
      en: "Disputes between project owners, main contractors and subcontractors — payments, delay, defects, performance, termination and compensation.",
      ar: "منازعات أصحاب المشاريع والمقاولين الرئيسيين والمقاولين من الباطن، والمستحقات والتأخير والعيوب والتنفيذ والفسخ والتعويض.",
    },
    matters: {
      en: [
        "Disputes between project owners, main contractors and subcontractors",
        "Outstanding payments",
        "Delay",
        "Defects",
        "Performance",
        "Contract termination and compensation",
      ],
      ar: [
        "منازعات أصحاب المشاريع والمقاولين الرئيسيين والمقاولين من الباطن",
        "المستحقات المالية",
        "التأخير",
        "العيوب",
        "التنفيذ",
        "فسخ العقود والتعويض",
      ],
    },
    related: ["real-estate-disputes", "commercial-corporate-disputes", "insurance-compensation"],
  },
  {
    slug: "rental-disputes",
    title: { en: "Rental Disputes", ar: "المنازعات الإيجارية" },
    summary: {
      en: "Representing landlords and tenants before the competent rental dispute authorities and centres.",
      ar: "تمثيل المؤجرين والمستأجرين أمام الجهات ومراكز فض المنازعات الإيجارية المختصة.",
    },
    matters: {
      en: [
        "Eviction claims",
        "Rent claims",
        "Recovery of security deposits and other amounts",
        "Disputes concerning lease agreements",
      ],
      ar: ["دعاوى الإخلاء", "دعاوى الأجرة", "استرداد التأمين والمبالغ", "المنازعات المتعلقة بعقود الإيجار"],
    },
    represents: { en: "Landlords and tenants", ar: "المؤجرون والمستأجرون" },
    related: ["real-estate-disputes", "civil-claims-financial-claims", "cheques-payment-orders-enforcement"],
  },
  {
    slug: "labor-disputes",
    title: { en: "Labor Disputes", ar: "الدعاوى العمالية" },
    summary: {
      en: "Representing employees and employers in labour claims, wage and entitlement disputes, termination and compensation.",
      ar: "تمثيل العمال وأصحاب العمل في المطالبات العمالية ومنازعات الأجور والمستحقات وإنهاء علاقة العمل والتعويض.",
    },
    matters: {
      en: [
        "Labour claims",
        "Wage and entitlement disputes",
        "Termination of employment",
        "Compensation",
        "Disputes connected to employment contracts",
      ],
      ar: [
        "المطالبات العمالية",
        "منازعات الأجور والمستحقات",
        "إنهاء علاقة العمل",
        "التعويض",
        "المنازعات المرتبطة بعقود العمل",
      ],
    },
    represents: { en: "Employees and employers", ar: "العمال وأصحاب العمل" },
    related: ["civil-claims-financial-claims", "commercial-corporate-disputes", "insurance-compensation"],
  },
  {
    slug: "personal-status-family",
    title: { en: "Personal Status & Family", ar: "الأحوال الشخصية والأسرة" },
    summary: {
      en: "Marriage, divorce, maintenance, custody, visitation and paternity — in Muslim personal status and civil personal status for non-Muslims.",
      ar: "دعاوى الزواج والطلاق والنفقة والحضانة والرؤية وإثبات النسب، للمسلمين وفي الأحوال الشخصية المدنية لغير المسلمين.",
    },
    matters: {
      en: [
        "Marriage and divorce",
        "Maintenance and marital claims",
        "Custody and visitation",
        "Establishing paternity",
        "Muslim personal status matters",
        "Civil personal status matters for non-Muslims",
      ],
      ar: [
        "دعاوى الزواج والطلاق",
        "النفقة والمطالبات الزوجية",
        "الحضانة والرؤية",
        "إثبات النسب",
        "مسائل الأحوال الشخصية للمسلمين",
        "الأحوال الشخصية المدنية لغير المسلمين",
      ],
    },
    related: ["estates-inheritance", "civil-claims-financial-claims", "criminal-penal-cases"],
  },
  {
    slug: "estates-inheritance",
    title: { en: "Estates & Inheritance", ar: "التركات والمواريث" },
    summary: {
      en: "Determination of heirs, administration and division of estates, disputes between heirs, wills and estate rights.",
      ar: "حصر الإرث وتصفية التركات وقسمتها ومنازعات الورثة والوصايا والحقوق المرتبطة بالتركة.",
    },
    matters: {
      en: [
        "Determination of heirs",
        "Administration and liquidation of estates",
        "Division of estates",
        "Disputes between heirs",
        "Wills",
        "Rights connected to the estate",
      ],
      ar: ["حصر الإرث", "تصفية التركات", "قسمة التركات", "منازعات الورثة", "الوصايا", "الحقوق المرتبطة بالتركة"],
    },
    related: ["personal-status-family", "real-estate-disputes", "civil-claims-financial-claims"],
  },
  {
    slug: "criminal-penal-cases",
    title: { en: "Criminal & Penal Cases", ar: "الدعاوى الجنائية والجزائية" },
    summary: {
      en: "Complaints, defence and representation in violations, misdemeanours and felonies, and the civil claims connected to them.",
      ar: "البلاغات والدفاع والتمثيل في قضايا المخالفات والجنح والجنايات، والمطالبات المدنية المرتبطة بها.",
    },
    matters: {
      en: [
        "Filing criminal complaints",
        "Defence and representation in violations, misdemeanours and felonies",
        "Breach of trust",
        "Fraud and financial crimes",
        "Forgery",
        "Cybercrime",
        "Related civil claims",
      ],
      ar: [
        "البلاغات",
        "الدفاع والتمثيل في قضايا المخالفات والجنح والجنايات",
        "خيانة الأمانة",
        "الاحتيال والجرائم المالية",
        "التزوير",
        "الجرائم الإلكترونية",
        "المطالبات المدنية المرتبطة بها",
      ],
    },
    related: ["cheques-payment-orders-enforcement", "civil-claims-financial-claims", "personal-status-family"],
  },
  {
    slug: "cheques-payment-orders-enforcement",
    title: { en: "Cheques, Payment Orders & Enforcement", ar: "الشيكات وأوامر الأداء والتنفيذ" },
    summary: {
      en: "Cheque claims, payment order applications, enforcement of judgments and enforceable instruments, and recovery of rights.",
      ar: "المطالبات المتعلقة بالشيكات، وطلبات أوامر الأداء، وتنفيذ الأحكام والسندات التنفيذية، ومتابعة تحصيل الحقوق.",
    },
    matters: {
      en: [
        "Claims relating to cheques",
        "Payment order applications",
        "Enforcement of judgments and enforceable instruments",
        "Enforcement disputes and objections",
        "Attachments",
        "Follow-up on the recovery of rights",
      ],
      ar: [
        "المطالبات المتعلقة بالشيكات",
        "طلبات أوامر الأداء",
        "تنفيذ الأحكام والسندات التنفيذية",
        "منازعات التنفيذ والإشكالات",
        "الحجوزات",
        "متابعة تحصيل الحقوق",
      ],
    },
    related: ["civil-claims-financial-claims", "banking-finance-disputes", "criminal-penal-cases"],
  },
  {
    slug: "insurance-compensation",
    title: { en: "Insurance & Compensation", ar: "التأمين والتعويضات" },
    summary: {
      en: "Insurance disputes and claims arising from accidents and damage, and the compensation connected to them.",
      ar: "المنازعات التأمينية والمطالبات الناشئة عن الحوادث والأضرار والتعويضات المرتبطة بها.",
    },
    matters: {
      en: ["Insurance disputes", "Claims arising from accidents", "Claims arising from damage", "Related compensation"],
      ar: ["المنازعات التأمينية", "المطالبات الناشئة عن الحوادث", "المطالبات الناشئة عن الأضرار", "التعويضات المرتبطة بها"],
    },
    related: ["civil-claims-financial-claims", "construction-contracting-disputes", "labor-disputes"],
  },
  {
    slug: "bankruptcy-restructuring-insolvency",
    title: { en: "Bankruptcy, Restructuring & Insolvency", ar: "الإفلاس وإعادة الهيكلة والإعسار" },
    summary: {
      en: "Proceedings and disputes concerning indebtedness, restructuring, bankruptcy, insolvency and creditors' rights.",
      ar: "الإجراءات والمنازعات المتعلقة بالمديونيات وإعادة الهيكلة والإفلاس والإعسار وحقوق الدائنين.",
    },
    matters: {
      en: ["Indebtedness", "Restructuring", "Bankruptcy", "Insolvency", "Creditors' rights"],
      ar: ["المديونيات", "إعادة الهيكلة", "الإفلاس", "الإعسار", "حقوق الدائنين"],
    },
    related: ["banking-finance-disputes", "commercial-corporate-disputes", "cheques-payment-orders-enforcement"],
  },
  {
    slug: "intellectual-property",
    title: { en: "Intellectual Property", ar: "الملكية الفكرية" },
    summary: {
      en: "Trademark and copyright disputes, infringement of intellectual property rights and unfair competition.",
      ar: "منازعات العلامات التجارية وحقوق المؤلف والتعدي على الحقوق الفكرية والمنافسة غير المشروعة.",
    },
    matters: {
      en: ["Trademark disputes", "Copyright", "Infringement of intellectual property rights", "Unfair competition"],
      ar: ["منازعات العلامات التجارية", "حقوق المؤلف", "التعدي على الحقوق الفكرية", "المنافسة غير المشروعة"],
    },
    related: ["commercial-corporate-disputes", "criminal-penal-cases", "civil-claims-financial-claims"],
  },
];

export function getPractice(slug: string) {
  return practices.find((p) => p.slug === slug);
}

export function practiceIndex(slug: string) {
  return practices.findIndex((p) => p.slug === slug);
}
