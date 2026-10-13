import type { Localized } from "@/i18n/config";

/**
 * Search titles and meta descriptions (keyword map: docs/SEO-STRATEGY.md).
 * Titles are rendered through the layout template "%s — Fahad Al Zeyoudi",
 * so each title here is kept to roughly 40 characters.
 * Descriptions: 140–160 characters, factual, no superlatives or promises.
 */
type Meta = { title: Localized; description: Localized };

export const pageSeo: Record<string, Meta> = {
  home: {
    title: { en: "Law Firm in Dubai & Ajman", ar: "مكتب محاماة في دبي وعجمان" },
    description: {
      en: "Litigation and legal representation for individuals, companies and investors before the courts of all seven Emirates, from offices in Dubai and Ajman.",
      ar: "خدمات التقاضي والتمثيل القانوني للأفراد والشركات والمستثمرين أمام محاكم الدولة في الإمارات السبع، من مكتبينا في دبي وعجمان.",
    },
  },
  about: {
    title: { en: "About the Firm", ar: "عن المكتب" },
    description: {
      en: "An integrated team of Emirati advocates and legal consultants with long years of practice in the UAE, built on integrity and constant communication with clients.",
      ar: "فريق متكامل من المحامين الإماراتيين والمستشارين القانونيين بخبرة طويلة في الدولة، يقوم عمله على الأمانة والتواصل المستمر مع الموكلين.",
    },
  },
  practices: {
    title: { en: "Practice Areas — UAE Litigation", ar: "مجالات الممارسة — التقاضي في الإمارات" },
    description: {
      en: "Fourteen areas of litigation and legal representation in the UAE, from civil, commercial and banking disputes to family, criminal, rental and labour matters.",
      ar: "أربعة عشر مجالًا للتقاضي والتمثيل القانوني في الدولة، من المنازعات المدنية والتجارية والمصرفية إلى قضايا الأسرة والجزاء والإيجار والعمل.",
    },
  },
  people: {
    title: { en: "Our Lawyers & Legal Team", ar: "المحامون وفريق العمل" },
    description: {
      en: "Meet the advocates, legal consultants and team of Fahad Al Zeyoudi, working together on every matter from our Dubai and Ajman offices.",
      ar: "تعرّف على المحامين والمستشارين القانونيين وفريق مكتب فهد الزيودي، الذين يعملون معًا في كل قضية من مكتبي دبي وعجمان.",
    },
  },
  insights: {
    title: { en: "Legal Insights — UAE Law", ar: "مقالات قانونية — القانون الإماراتي" },
    description: {
      en: "Practical articles on UAE law for individuals and businesses: civil and commercial claims, real estate, employment, enforcement and family matters.",
      ar: "مقالات عملية حول القانون الإماراتي للأفراد والشركات: الدعاوى المدنية والتجارية والعقارات والعمل والتنفيذ ومسائل الأسرة.",
    },
  },
  contact: {
    title: { en: "Contact Our Lawyers", ar: "تواصل مع المكتب" },
    description: {
      en: "Send an inquiry, request a consultation or arrange an appointment at our Dubai or Ajman office. A member of our team will contact you.",
      ar: "أرسل استفسارك أو اطلب استشارة أو حدّد موعدًا في مكتبنا في دبي أو عجمان، وسيتواصل معك أحد أعضاء فريقنا.",
    },
  },
  inquiry: {
    title: { en: "Request a Legal Consultation", ar: "طلب استشارة قانونية" },
    description: {
      en: "Describe your matter briefly and choose your preferred office. Your inquiry will be reviewed and one of our legal consultants will contact you.",
      ar: "صف قضيتك باختصار واختر المكتب المفضل، وسيتم الاطلاع على استفسارك ودراسته ويتواصل معك أحد مستشارينا القانونيين.",
    },
  },
  locations: {
    title: { en: "Offices in Dubai & Ajman", ar: "مكاتبنا في دبي وعجمان" },
    description: {
      en: "Addresses, directions and contact details for the Fahad Al Zeyoudi offices in Dubai and Ajman.",
      ar: "العناوين والاتجاهات وبيانات التواصل لمكتبي فهد الزيودي في دبي وعجمان.",
    },
  },
};

export const practiceSeo: Record<string, Meta> = {
  "civil-claims-financial-claims": {
    title: { en: "Civil & Financial Claims Lawyers, UAE", ar: "محامي الدعاوى المدنية والمطالبات المالية" },
    description: {
      en: "Representation in UAE claims for debts, contract disputes, compensation and civil liability, including under the new Civil Transactions Law in force from June 2026.",
      ar: "تمثيل في المطالبة بالديون ومنازعات العقود والتعويض والمسؤولية المدنية، بما في ذلك وفق قانون المعاملات المدنية الجديد النافذ منذ يونيو 2026.",
    },
  },
  "commercial-corporate-disputes": {
    title: { en: "Commercial & Corporate Dispute Lawyers", ar: "محامي القضايا التجارية ومنازعات الشركات" },
    description: {
      en: "Claims on commercial contracts, invoices and purchase orders, disputes between companies, and partner and management disputes before UAE courts.",
      ar: "المطالبات الناشئة عن العقود التجارية والفواتير وأوامر الشراء، والمنازعات بين الشركات، ومنازعات الشركاء والإدارة أمام محاكم الدولة.",
    },
  },
  "banking-finance-disputes": {
    title: { en: "Banking & Finance Dispute Lawyers, UAE", ar: "محامي المنازعات المصرفية والتمويلية" },
    description: {
      en: "Representing individuals and companies in UAE disputes over loans, credit facilities, bank guarantees and related claims.",
      ar: "تمثيل الأفراد والشركات في منازعات القروض والتسهيلات الائتمانية وخطابات الضمان والمطالبات المرتبطة بها في الدولة.",
    },
  },
  "real-estate-disputes": {
    title: { en: "Real Estate Dispute Lawyers, Dubai", ar: "محامي القضايا العقارية في دبي" },
    description: {
      en: "Disputes between buyers and developers, off-plan termination and refunds, handover delays, ownership and brokerage disputes in Dubai and Ajman.",
      ar: "المنازعات بين المشترين والمطورين، وفسخ عقود البيع على الخريطة واسترداد المبالغ، والتأخر في التسليم، ومنازعات الملكية والوساطة في دبي وعجمان.",
    },
  },
  "construction-contracting-disputes": {
    title: { en: "Construction Dispute Lawyers, UAE", ar: "محامي منازعات المقاولات والإنشاءات" },
    description: {
      en: "Disputes between project owners, contractors and subcontractors in the UAE: payments, delay, defects, decennial liability, termination and compensation.",
      ar: "منازعات أصحاب المشاريع والمقاولين والمقاولين من الباطن: المستحقات والتأخير والعيوب والمسؤولية العشرية والفسخ والتعويض.",
    },
  },
  "rental-disputes": {
    title: { en: "Rental Dispute Lawyers, Dubai & Ajman", ar: "محامي المنازعات الإيجارية في دبي وعجمان" },
    description: {
      en: "Representing landlords and tenants in eviction, rent, deposit and lease disputes before the rental dispute centres in Dubai and Ajman.",
      ar: "تمثيل المؤجرين والمستأجرين في دعاوى الإخلاء والأجرة والتأمين وعقود الإيجار أمام مراكز فض المنازعات الإيجارية في دبي وعجمان.",
    },
  },
  "labor-disputes": {
    title: { en: "Labour Dispute Lawyers, UAE", ar: "محامي القضايا العمالية في الإمارات" },
    description: {
      en: "Representing employees and employers in UAE labour claims: wages, end-of-service entitlements, termination and compensation, from MOHRE to court.",
      ar: "تمثيل العمال وأصحاب العمل في المطالبات العمالية: الأجور ومستحقات نهاية الخدمة وإنهاء العلاقة والتعويض، من الوزارة إلى المحكمة.",
    },
  },
  "personal-status-family": {
    title: { en: "Family & Personal Status Lawyers, UAE", ar: "محامي الأحوال الشخصية والأسرة" },
    description: {
      en: "Divorce, maintenance, custody, visitation and paternity in the UAE, for Muslims and under civil personal status law for non-Muslims.",
      ar: "الطلاق والنفقة والحضانة والرؤية وإثبات النسب في الدولة، للمسلمين ولغير المسلمين وفق قانون الأحوال الشخصية المدنية.",
    },
  },
  "estates-inheritance": {
    title: { en: "Inheritance & Estate Lawyers, UAE", ar: "محامي التركات والمواريث" },
    description: {
      en: "Determination of heirs, estate administration and division, disputes between heirs and wills in the UAE, for Muslim and non-Muslim estates.",
      ar: "حصر الإرث وتصفية التركات وقسمتها ومنازعات الورثة والوصايا في الدولة، لتركات المسلمين وغير المسلمين.",
    },
  },
  "criminal-penal-cases": {
    title: { en: "Criminal Defence Lawyers, UAE", ar: "محامي القضايا الجنائية والجزائية" },
    description: {
      en: "Complaints, defence and representation in UAE criminal cases, including fraud, breach of trust, forgery, cybercrime and related civil claims.",
      ar: "البلاغات والدفاع والتمثيل في القضايا الجزائية، بما فيها الاحتيال وخيانة الأمانة والتزوير والجرائم الإلكترونية والادعاء المدني المرتبط بها.",
    },
  },
  "cheques-payment-orders-enforcement": {
    title: { en: "Bounced Cheques, Payment Orders & Enforcement", ar: "الشيكات وأوامر الأداء والتنفيذ" },
    description: {
      en: "Enforcing bounced cheques, payment order applications, enforcement of judgments, attachments and recovery of amounts owed in the UAE.",
      ar: "تنفيذ الشيكات المرتجعة، وطلبات أوامر الأداء، وتنفيذ الأحكام، والحجوزات، وتحصيل المبالغ المستحقة في الدولة.",
    },
  },
  "insurance-compensation": {
    title: { en: "Insurance & Compensation Lawyers, UAE", ar: "محامي التأمين والتعويضات" },
    description: {
      en: "Insurance disputes and compensation claims arising from accidents and damage in the UAE, from complaint to court.",
      ar: "المنازعات التأمينية ومطالبات التعويض الناشئة عن الحوادث والأضرار في الدولة، من الشكوى إلى المحكمة.",
    },
  },
  "bankruptcy-restructuring-insolvency": {
    title: { en: "Bankruptcy & Restructuring Lawyers, UAE", ar: "محامي الإفلاس وإعادة الهيكلة والإعسار" },
    description: {
      en: "Restructuring, preventive settlement, bankruptcy and insolvency proceedings in the UAE, acting for debtors and creditors.",
      ar: "إجراءات إعادة الهيكلة والتسوية الوقائية والإفلاس والإعسار في الدولة، لصالح المدينين والدائنين.",
    },
  },
  "intellectual-property": {
    title: { en: "Intellectual Property Lawyers, UAE", ar: "محامي الملكية الفكرية في الإمارات" },
    description: {
      en: "Trademark and copyright disputes, infringement of intellectual property rights and unfair competition claims in the UAE.",
      ar: "منازعات العلامات التجارية وحقوق المؤلف والتعدي على حقوق الملكية الفكرية ودعاوى المنافسة غير المشروعة في الدولة.",
    },
  },
};
