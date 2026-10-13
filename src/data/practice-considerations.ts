import type { Localized } from "@/i18n/config";

/**
 * "Legal considerations" for each practice area.
 *
 * STATUS: DRAFT FOR LEGAL REVIEW. Researched October 2026 against current UAE
 * legislation (see docs/legal-research/RESEARCH-RECORDS.md for sources, article
 * references and items still requiring verification). Nothing here is final until
 * approved by the firm's designated legal reviewer (Legal Consultant Abanoub Awni).
 * Set `reviewed: true` on an entry only after that approval; until then the page
 * shows a visible "draft for legal review" marker.
 *
 * Writing rules: general information, no outcome promises, no article numbers on
 * the public page unless verified against the official text, and every rule that
 * depends on the emirate, the court or the facts says so.
 */
export type Considerations = {
  intro: Localized;
  points: { title: Localized; body: Localized }[];
  /** Principal legislation, as short public citations. */
  framework: Localized<string[]>;
  practical: Localized;
  qualification: Localized;
  reviewed: boolean;
};

export const considerations: Record<string, Considerations> = {
  /* 1 ─────────────────────────────────────────────────────────────── */
  "civil-claims-financial-claims": {
    intro: {
      en: "Civil claims in the UAE are now governed by a new Civil Transactions Law, which replaced the 1985 Civil Code on 1 June 2026. Which rules apply to your claim can depend on when the underlying contract or event took place.",
      ar: "تخضع الدعاوى المدنية في الدولة الآن لقانون جديد للمعاملات المدنية حلّ محل قانون عام 1985 اعتبارًا من 1 يونيو 2026. وقد يتوقف تحديد القواعد الواجبة التطبيق على دعواك على تاريخ إبرام العقد أو وقوع الواقعة محل النزاع.",
    },
    points: [
      {
        title: { en: "Old law or new law", ar: "القانون القديم أم الجديد" },
        body: {
          en: "The new law does not, as a general rule, apply retroactively. Contracts concluded before 1 June 2026 may still be assessed under the previous Civil Code, while transitional rules govern limitation periods that had not yet expired.",
          ar: "لا يسري القانون الجديد بأثر رجعي كقاعدة عامة؛ فالعقود المبرمة قبل 1 يونيو 2026 قد تظل خاضعة لأحكام القانون السابق، بينما تنظم أحكام انتقالية مدد التقادم التي لم تكتمل بعد.",
        },
      },
      {
        title: { en: "Compensation follows actual loss", ar: "التعويض بقدر الضرر الفعلي" },
        body: {
          en: "Unless the law or the contract provides otherwise, compensation is assessed on the damage actually suffered. Courts may reduce agreed compensation that is excessive, and the new law expressly recognises moral damage.",
          ar: "ما لم ينص القانون أو العقد على خلاف ذلك، يُقدَّر التعويض بقدر الضرر الذي لحق فعلًا. وللمحكمة أن تخفض التعويض المتفق عليه إذا كان مبالغًا فيه، كما يعترف القانون الجديد صراحة بالضرر الأدبي.",
        },
      },
      {
        title: { en: "Evidence decides the claim", ar: "الإثبات أساس الدعوى" },
        body: {
          en: "Written contracts, correspondence, invoices, transfers and messages carry significant weight. A claim is generally stronger when the debt is documented and the amount can be calculated with certainty.",
          ar: "للعقود المكتوبة والمراسلات والفواتير والتحويلات والرسائل وزن كبير في الإثبات، وتكون الدعوى في الغالب أقوى كلما كان الدين ثابتًا بالكتابة ومقداره محددًا.",
        },
      },
      {
        title: { en: "Procedure has tightened", ar: "إجراءات أكثر انضباطًا" },
        body: {
          en: "Amendments to the Civil Procedure Law in force from 1 January 2026 require an appeal to set out its grounds when it is filed. Deadlines and formal requirements should be planned from the outset.",
          ar: "توجب تعديلات قانون الإجراءات المدنية النافذة منذ 1 يناير 2026 أن تتضمن صحيفة الاستئناف أسبابه عند تقديمه، ولذلك ينبغي التخطيط للمواعيد والمتطلبات الشكلية منذ البداية.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 25 of 2025 (Civil Transactions Law)",
        "Federal Decree-Law No. 42 of 2022 (Civil Procedure Law), as amended including by Federal Decree-Law No. 22 of 2025",
        "Federal Decree-Law No. 35 of 2022 (Law of Evidence in Civil and Commercial Transactions)",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 25 لسنة 2025 بإصدار قانون المعاملات المدنية",
        "المرسوم بقانون اتحادي رقم 42 لسنة 2022 بإصدار قانون الإجراءات المدنية وتعديلاته، ومنها المرسوم بقانون اتحادي رقم 22 لسنة 2025",
        "المرسوم بقانون اتحادي رقم 35 لسنة 2022 بإصدار قانون الإثبات في المعاملات المدنية والتجارية",
      ],
    },
    practical: {
      en: "Where a debt is fixed, due and proven in writing, a payment order may be a faster route than a full claim. Before acting, it is worth assembling the documents, confirming the amount and checking whether the contract contains an arbitration or jurisdiction clause.",
      ar: "إذا كان الدين ثابتًا بالكتابة ومعيّن المقدار وحالّ الأداء، فقد يكون أمر الأداء طريقًا أسرع من الدعوى العادية. ويُستحسن قبل اتخاذ أي إجراء جمع المستندات وتحديد المبلغ والتحقق مما إذا كان العقد يتضمن شرط تحكيم أو شرطًا بشأن الاختصاص.",
    },
    qualification: {
      en: "The competent court depends on the emirate: Dubai, Abu Dhabi and Ras Al Khaimah have their own judicial departments, while Sharjah, Ajman, Fujairah and Umm Al Quwain fall under the federal courts. Matters connected with the DIFC or ADGM may follow different rules.",
      ar: "تتوقف المحكمة المختصة على الإمارة؛ فلدبي وأبوظبي ورأس الخيمة دوائر قضائية محلية، بينما تتبع الشارقة وعجمان والفجيرة وأم القيوين القضاء الاتحادي. وقد تخضع المسائل المرتبطة بمركز دبي المالي العالمي أو سوق أبوظبي العالمي لقواعد مختلفة.",
    },
    reviewed: false,
  },

  /* 2 ─────────────────────────────────────────────────────────────── */
  "commercial-corporate-disputes": {
    intro: {
      en: "Commercial disputes are governed by the Commercial Transactions Law and, where companies and partners are involved, by the Commercial Companies Law. Both have been updated in recent years, and the company's own constitutional documents often matter as much as the statute.",
      ar: "تخضع المنازعات التجارية لقانون المعاملات التجارية، ولقانون الشركات التجارية متى تعلّق النزاع بالشركات والشركاء. وقد شهد القانونان تحديثات في السنوات الأخيرة، وكثيرًا ما تكون لعقد تأسيس الشركة ونظامها الأساسي أهمية لا تقل عن النص التشريعي.",
    },
    points: [
      {
        title: { en: "Invoices and purchase orders", ar: "الفواتير وأوامر الشراء" },
        body: {
          en: "Commercial claims are frequently built on invoices, purchase orders, delivery notes and correspondence rather than a single signed contract. Commercial books and records can be used as evidence, subject to the rules of evidence.",
          ar: "كثيرًا ما تُبنى المطالبات التجارية على الفواتير وأوامر الشراء وإيصالات التسليم والمراسلات، لا على عقد موقّع واحد. ويجوز الاستناد إلى الدفاتر والسجلات التجارية في الإثبات وفق قواعد الإثبات.",
        },
      },
      {
        title: { en: "Interest on commercial debts", ar: "الفوائد على الديون التجارية" },
        body: {
          en: "On a commercial loan, interest runs at the agreed rate or, if none was agreed, at the prevailing market rate, capped at 9% until full repayment. Compound interest cannot be claimed, and different rules apply to Islamic financial institutions.",
          ar: "في القرض التجاري تُستحق الفائدة بالسعر المتفق عليه، فإن لم يُتفق على سعر حُسبت وفق السعر السائد في السوق بما لا يجاوز 9% حتى تمام السداد. ولا يجوز المطالبة بالفوائد المركبة، وتسري أحكام مختلفة على المؤسسات المالية الإسلامية.",
        },
      },
      {
        title: { en: "Partner and management disputes", ar: "منازعات الشركاء والإدارة" },
        body: {
          en: "Shareholders may bring a direct claim where they are personally harmed, and in some cases a claim on behalf of the company against its managers. The memorandum of association, voting rules and any exit provisions shape what is available.",
          ar: "يجوز للشريك إقامة دعوى مباشرة إذا لحقه ضرر شخصي، وفي حالات معينة إقامة دعوى باسم الشركة في مواجهة مديريها. ويحدد عقد التأسيس وقواعد التصويت وأحكام التخارج الخيارات المتاحة.",
        },
      },
      {
        title: { en: "Arbitration clauses", ar: "شرط التحكيم" },
        body: {
          en: "Many commercial contracts refer disputes to arbitration. A valid arbitration clause can remove the dispute from the courts, so the contract should be reviewed before any claim is filed.",
          ar: "تحيل كثير من العقود التجارية منازعاتها إلى التحكيم، وقد يؤدي شرط التحكيم الصحيح إلى خروج النزاع من ولاية المحاكم، لذا ينبغي مراجعة العقد قبل رفع أي دعوى.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 50 of 2022 (Commercial Transactions Law)",
        "Federal Decree-Law No. 32 of 2021 (Commercial Companies Law), as amended including by Federal Decree-Law No. 20 of 2025",
        "Federal Law No. 6 of 2018 on Arbitration",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 50 لسنة 2022 بإصدار قانون المعاملات التجارية",
        "المرسوم بقانون اتحادي رقم 32 لسنة 2021 بشأن الشركات التجارية وتعديلاته، ومنها المرسوم بقانون اتحادي رقم 20 لسنة 2025",
        "القانون الاتحادي رقم 6 لسنة 2018 بشأن التحكيم",
      ],
    },
    practical: {
      en: "A clear account statement, the underlying documents and a record of demands made will usually determine how quickly a commercial claim can move. In partner disputes, settlement and an agreed exit are often worth considering before litigation.",
      ar: "عادةً ما يتوقف سير المطالبة التجارية على وجود كشف حساب واضح والمستندات المؤيدة وما يثبت المطالبة السابقة. وفي منازعات الشركاء، كثيرًا ما تستحق التسوية أو التخارج المتفق عليه الدراسة قبل اللجوء إلى القضاء.",
    },
    qualification: {
      en: "Free zone companies may be subject to their own regulations, and companies in the DIFC or ADGM are governed by separate legal systems and courts.",
      ar: "قد تخضع شركات المناطق الحرة لأنظمتها الخاصة، بينما تخضع الشركات في مركز دبي المالي العالمي وسوق أبوظبي العالمي لأنظمة قانونية ومحاكم مستقلة.",
    },
    reviewed: false,
  },

  /* 3 ─────────────────────────────────────────────────────────────── */
  "banking-finance-disputes": {
    intro: {
      en: "Banking relationships are regulated by the Central Bank of the UAE under a new law in force since 16 September 2025, while disputes over loans, facilities and guarantees are decided under the commercial and civil laws and the terms of the banking documents.",
      ar: "ينظّم مصرف الإمارات العربية المتحدة المركزي العلاقات المصرفية بموجب قانون جديد نافذ منذ 16 سبتمبر 2025، بينما يُفصل في منازعات القروض والتسهيلات والضمانات وفق القوانين التجارية والمدنية وشروط المستندات المصرفية.",
    },
    points: [
      {
        title: { en: "The documents set the terms", ar: "المستندات تحدد الالتزامات" },
        body: {
          en: "Facility letters, general terms, security documents and account statements define what is owed. Calculations of interest, fees and the outstanding balance are frequently at the centre of the dispute and may be referred to a court-appointed expert.",
          ar: "تحدد خطابات التسهيلات والشروط العامة ومستندات الضمان وكشوف الحساب مقدار المديونية. وكثيرًا ما يدور النزاع حول احتساب الفوائد والرسوم والرصيد المستحق، وقد يُحال إلى خبير تنتدبه المحكمة.",
        },
      },
      {
        title: { en: "Bank guarantees", ar: "خطابات الضمان" },
        body: {
          en: "A bank guarantee is generally independent of the underlying contract, so a dispute between the parties to that contract does not by itself stop the bank from paying on a compliant demand.",
          ar: "خطاب الضمان مستقل في الأصل عن العقد الأساسي، ولذلك فإن النزاع بين طرفي ذلك العقد لا يمنع في ذاته البنك من الوفاء عند تقديم مطالبة مطابقة لشروطه.",
        },
      },
      {
        title: { en: "Customer complaints", ar: "شكاوى العملاء" },
        body: {
          en: "A bank must give written reasons if it rejects a customer's complaint. The customer may then complain to the Central Bank's independent disputes unit (Sanadak), whose judge-led committees issue decisions that are final for the bank in disputes up to AED 100,000; above that amount, a decision can be challenged before the Court of Appeal within 30 days.",
          ar: "يلتزم البنك ببيان أسباب رفض شكوى العميل كتابةً، ويجوز للعميل بعد ذلك التقدم بشكواه إلى الوحدة المستقلة لتسوية المنازعات التابعة للمصرف المركزي («سندك»)، التي تصدر لجانها برئاسة قاضٍ قرارات نهائية ملزمة للبنك في المنازعات التي لا تتجاوز قيمتها 100,000 درهم، أما ما يزيد على ذلك فيجوز الطعن في القرار أمام محكمة الاستئناف خلال 30 يومًا.",
        },
      },
      {
        title: { en: "Linked proceedings", ar: "إجراءات مترابطة" },
        body: {
          en: "Banking disputes often run alongside cheque enforcement, attachments or restructuring proceedings. Each route has its own timing and consequences, and they are best assessed together.",
          ar: "كثيرًا ما تتزامن المنازعات المصرفية مع تنفيذ الشيكات أو الحجوزات أو إجراءات إعادة الهيكلة، ولكل طريق توقيته وآثاره، والأفضل تقييمها مجتمعة.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 6 of 2025 regarding the Central Bank, Regulation of Financial Institutions and Activities, and Insurance Business (repealed Federal Decree-Law No. 14 of 2018)",
        "Federal Decree-Law No. 50 of 2022 (Commercial Transactions Law): banking operations, loans, guarantees and interest",
        "Federal Decree-Law No. 51 of 2023 (Financial Restructuring and Bankruptcy), where insolvency is in issue",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 6 لسنة 2025 في شأن المصرف المركزي وتنظيم المنشآت والأنشطة المالية وأعمال التأمين (الذي ألغى المرسوم بقانون اتحادي رقم 14 لسنة 2018)",
        "المرسوم بقانون اتحادي رقم 50 لسنة 2022 بإصدار قانون المعاملات التجارية: العمليات المصرفية والقروض والضمانات والفوائد",
        "المرسوم بقانون اتحادي رقم 51 لسنة 2023 بشأن إعادة التنظيم المالي والإفلاس، متى أثيرت مسألة الإعسار",
      ],
    },
    practical: {
      en: "Request full account statements and copies of every document you signed before responding to a demand. Early discussion of rescheduling can sometimes avoid enforcement steps.",
      ar: "اطلب كشوف حساب كاملة ونسخًا من جميع المستندات التي وقّعتها قبل الرد على أي مطالبة. وقد يجنّب التفاوض المبكر على إعادة الجدولة اتخاذ إجراءات التنفيذ في بعض الحالات.",
    },
    qualification: {
      en: "The 2025 law does not apply in the financial free zones (DIFC and ADGM), which have their own regulators and courts. Institutions had a one-year transition period to align with the new law.",
      ar: "لا يسري قانون 2025 في المناطق المالية الحرة (مركز دبي المالي العالمي وسوق أبوظبي العالمي)، التي لها جهاتها الرقابية ومحاكمها الخاصة. وقد مُنحت المؤسسات مهلة سنة لتوفيق أوضاعها مع القانون الجديد.",
    },
    reviewed: false,
  },

  /* 4 ─────────────────────────────────────────────────────────────── */
  "real-estate-disputes": {
    intro: {
      en: "Real estate in the UAE is regulated largely at emirate level. In Dubai, off-plan sales, escrow accounts and registration are governed by specific local laws administered by the Dubai Land Department; Ajman has its own regulator and rules.",
      ar: "يُنظَّم القطاع العقاري في الدولة في الغالب على مستوى كل إمارة. ففي دبي، تخضع مبيعات البيع على الخريطة وحسابات الضمان والتسجيل لقوانين محلية خاصة تطبقها دائرة الأراضي والأملاك، ولإمارة عجمان جهتها التنظيمية وقواعدها الخاصة.",
    },
    points: [
      {
        title: { en: "Registration matters", ar: "أهمية التسجيل" },
        body: {
          en: "In Dubai, off-plan sales must be recorded in the interim real property register. Whether a sale was properly registered can affect its enforceability and the remedies available.",
          ar: "في دبي، يجب قيد مبيعات العقارات على الخريطة في السجل العقاري المبدئي، وقد يؤثر قيد البيع على نحو صحيح في نفاذه وفي سبل الانتصاف المتاحة.",
        },
      },
      {
        title: { en: "Escrow protection", ar: "حماية حساب الضمان" },
        body: {
          en: "Buyer payments for off-plan units in Dubai must be deposited in a project escrow account and used for that project. Where a project is cancelled, refund arrangements follow the escrow framework.",
          ar: "يجب إيداع دفعات المشترين عن الوحدات على الخريطة في دبي في حساب ضمان خاص بالمشروع واستخدامها لأغراضه. وفي حال إلغاء المشروع، يُسترد المبلغ وفق أحكام حسابات الضمان.",
        },
      },
      {
        title: { en: "When the buyer defaults", ar: "عند إخلال المشتري" },
        body: {
          en: "If a buyer fails to pay, the developer must follow a procedure through the Dubai Land Department before terminating, and the amount it may retain depends on how far the project has progressed.",
          ar: "إذا أخلّ المشتري بالسداد، وجب على المطور اتباع إجراءات محددة عبر دائرة الأراضي والأملاك قبل الفسخ، ويتوقف المبلغ الذي يجوز له الاحتفاظ به على نسبة إنجاز المشروع.",
        },
      },
      {
        title: { en: "When the developer delays", ar: "عند تأخر المطور" },
        body: {
          en: "Delayed handover, changes to specifications and failure to complete can give the buyer grounds for termination, refund or compensation, depending on the contract and the evidence of delay.",
          ar: "قد يمنح التأخر في التسليم أو تغيير المواصفات أو عدم إتمام المشروع المشتري الحق في الفسخ أو الاسترداد أو التعويض، وذلك بحسب العقد وأدلة التأخير.",
        },
      },
    ],
    framework: {
      en: [
        "Dubai Law No. 7 of 2006 concerning Real Property Registration",
        "Dubai Law No. 8 of 2007 concerning Escrow Accounts for Real Estate Development",
        "Dubai Law No. 13 of 2008 regulating the Interim Real Property Register, as amended (including Law No. 19 of 2017)",
        "Ajman: Ajman Real Estate Regulatory Agency framework and Ajman Law No. 1 of 2025 on real estate contributions",
        "Federal Decree-Law No. 25 of 2025 (Civil Transactions Law): sale and contractual liability",
      ],
      ar: [
        "قانون دبي رقم 7 لسنة 2006 بشأن التسجيل العقاري",
        "قانون دبي رقم 8 لسنة 2007 بشأن حسابات ضمان التطوير العقاري",
        "قانون دبي رقم 13 لسنة 2008 بشأن تنظيم السجل العقاري المبدئي وتعديلاته (ومنها القانون رقم 19 لسنة 2017)",
        "عجمان: الإطار التنظيمي لمؤسسة التنظيم العقاري، والقانون رقم 1 لسنة 2025 بشأن المساهمات العقارية",
        "المرسوم بقانون اتحادي رقم 25 لسنة 2025 بإصدار قانون المعاملات المدنية: البيع والمسؤولية العقدية",
      ],
    },
    practical: {
      en: "Keep the sale and purchase agreement, the payment receipts, the registration certificate and all correspondence on handover dates. These documents determine which remedies are realistic.",
      ar: "احتفظ باتفاقية البيع والشراء وإيصالات السداد وشهادة التسجيل وجميع المراسلات المتعلقة بمواعيد التسليم، فهذه المستندات هي التي تحدد سبل الانتصاف الواقعية.",
    },
    qualification: {
      en: "The rules differ between Dubai, Ajman and the other emirates, and between off-plan and completed property. Retention percentages and procedures should be confirmed against the current text for the specific project.",
      ar: "تختلف القواعد بين دبي وعجمان وسائر الإمارات، وبين العقارات على الخريطة والعقارات المنجزة. وينبغي التحقق من نسب الاستقطاع والإجراءات وفق النص النافذ بالنسبة لكل مشروع.",
    },
    reviewed: false,
  },

  /* 5 ─────────────────────────────────────────────────────────────── */
  "construction-contracting-disputes": {
    intro: {
      en: "Construction contracts are governed by the contracting (muqawala) provisions of the Civil Transactions Law, which were restated in the new law in force from 1 June 2026, together with the terms of the contract itself.",
      ar: "تخضع عقود الإنشاءات لأحكام عقد المقاولة في قانون المعاملات المدنية، التي أُعيدت صياغتها في القانون الجديد النافذ منذ 1 يونيو 2026، إلى جانب شروط العقد نفسه.",
    },
    points: [
      {
        title: { en: "Decennial liability", ar: "المسؤولية العشرية" },
        body: {
          en: "Contractors and supervising architects are jointly liable for ten years for collapse of a building or defects threatening its stability or safety. This liability cannot be excluded by agreement. The new law treats a main contractor's recourse against subcontractors as a contractual matter.",
          ar: "يُسأل المقاول والمهندس المشرف بالتضامن لمدة عشر سنوات عن تهدم المبنى أو العيوب التي تهدد متانته وسلامته، ولا يجوز الاتفاق على الإعفاء من هذه المسؤولية. ويعامل القانون الجديد رجوع المقاول الرئيسي على المقاولين من الباطن بوصفه مسألة تعاقدية.",
        },
      },
      {
        title: { en: "Price and changed circumstances", ar: "الأجر والظروف الطارئة" },
        body: {
          en: "In a lump-sum contract, higher costs alone do not entitle the contractor to a higher price. In exceptional and unforeseeable circumstances, however, the court may restore balance by extending time, adjusting the price or ending the contract.",
          ar: "في عقد المقاولة بأجر إجمالي، لا يكفي ارتفاع التكاليف وحده لزيادة الأجر. غير أنه في الظروف الاستثنائية غير المتوقعة، يجوز للمحكمة إعادة التوازن بمد المدة أو تعديل الأجر أو إنهاء العقد.",
        },
      },
      {
        title: { en: "Notices and records", ar: "الإخطارات والسجلات" },
        body: {
          en: "Delay, variation and payment disputes are usually decided on the contemporaneous record: notices, site instructions, progress reports and payment certificates. Contractual notice periods can affect entitlement.",
          ar: "عادةً ما يُفصل في منازعات التأخير والأوامر التغييرية والمستحقات بناءً على السجلات المعاصرة: الإخطارات وتعليمات الموقع وتقارير الإنجاز وشهادات الدفع. وقد تؤثر مواعيد الإخطار التعاقدية في ثبوت الحق.",
        },
      },
      {
        title: { en: "Experts and arbitration", ar: "الخبرة والتحكيم" },
        body: {
          en: "Construction disputes typically turn on technical evidence, and courts commonly appoint engineering experts. Many contracts provide for arbitration instead of court proceedings.",
          ar: "تعتمد منازعات المقاولات في الغالب على الأدلة الفنية، وكثيرًا ما تنتدب المحاكم خبراء هندسيين. كما تنص عقود كثيرة على التحكيم بدلًا من القضاء.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 25 of 2025 (Civil Transactions Law): contracting (muqawala) provisions",
        "Federal Decree-Law No. 42 of 2022 (Civil Procedure Law), as amended, on expert evidence",
        "Federal Law No. 6 of 2018 on Arbitration",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 25 لسنة 2025 بإصدار قانون المعاملات المدنية: أحكام عقد المقاولة",
        "المرسوم بقانون اتحادي رقم 42 لسنة 2022 بإصدار قانون الإجراءات المدنية وتعديلاته، فيما يتعلق بالخبرة",
        "القانون الاتحادي رقم 6 لسنة 2018 بشأن التحكيم",
      ],
    },
    practical: {
      en: "Preserve the contract, all variations, correspondence and site records, and check the notice and dispute provisions before taking a step such as suspending work or terminating.",
      ar: "احتفظ بالعقد وجميع الأوامر التغييرية والمراسلات وسجلات الموقع، وراجع أحكام الإخطار وتسوية النزاعات قبل اتخاذ أي خطوة مثل وقف الأعمال أو فسخ العقد.",
    },
    qualification: {
      en: "Contracts concluded before 1 June 2026 may remain subject to the previous Civil Code. The article numbering of the new law should be confirmed against the official Arabic text.",
      ar: "قد تظل العقود المبرمة قبل 1 يونيو 2026 خاضعة لقانون المعاملات المدنية السابق، وينبغي التحقق من ترقيم مواد القانون الجديد وفق النص العربي الرسمي.",
    },
    reviewed: false,
  },

  /* 6 ─────────────────────────────────────────────────────────────── */
  "rental-disputes": {
    intro: {
      en: "Rental relationships are regulated by each emirate, and disputes are heard by specialised local bodies rather than the ordinary courts — in Dubai, the Rental Disputes Settlement Centre; in Ajman, the emirate's rental dispute resolution body.",
      ar: "تنظّم كل إمارة العلاقة الإيجارية، وتنظر المنازعات جهات محلية متخصصة بدلًا من المحاكم العادية؛ ففي دبي مركز فض المنازعات الإيجارية، وفي عجمان الجهة المختصة بفض المنازعات الإيجارية في الإمارة.",
    },
    points: [
      {
        title: { en: "Eviction only on legal grounds", ar: "الإخلاء لأسباب قانونية فقط" },
        body: {
          en: "In Dubai, a landlord can seek eviction only on the grounds the law lists. Some grounds apply during the lease, such as non-payment; others, such as personal use or sale, apply at the end of the lease and require twelve months' notice through a notary public or registered mail.",
          ar: "في دبي، لا يجوز للمؤجر طلب الإخلاء إلا للأسباب التي يحددها القانون؛ فبعضها يُطلب أثناء سريان العقد كعدم سداد الأجرة، وبعضها عند انتهائه كالاستخدام الشخصي أو البيع، ويشترط فيها إخطار المستأجر قبل اثني عشر شهرًا عن طريق الكاتب العدل أو البريد المسجل.",
        },
      },
      {
        title: { en: "Rent increases", ar: "زيادة الأجرة" },
        body: {
          en: "Rent increases on renewal are limited by rules linked to the official rental index, and must be properly notified. Whether an increase is permitted depends on the current index for the property.",
          ar: "تخضع زيادة الأجرة عند التجديد لضوابط مرتبطة بمؤشر الإيجارات الرسمي، ويلزم الإخطار بها وفق الأصول. ويتوقف جواز الزيادة على المؤشر المعتمد للعقار في حينه.",
        },
      },
      {
        title: { en: "Registered leases", ar: "تسجيل العقد" },
        body: {
          en: "Registering the lease (Ejari in Dubai, Tasdeeq in Ajman) is generally required before a rental claim can be filed.",
          ar: "يُشترط في العادة تسجيل عقد الإيجار (إيجاري في دبي، وتصديق في عجمان) قبل قيد الدعوى الإيجارية.",
        },
      },
      {
        title: { en: "Deposits and amounts", ar: "التأمين والمبالغ" },
        body: {
          en: "Disputes over the security deposit, unpaid rent, maintenance and damage are decided on the lease terms and the evidence of the property's condition at handover and return.",
          ar: "يُفصل في منازعات مبلغ التأمين والأجرة غير المسددة والصيانة والأضرار وفق شروط العقد والأدلة على حالة العقار عند التسليم والاسترداد.",
        },
      },
    ],
    framework: {
      en: [
        "Dubai Law No. 26 of 2007 regulating the relationship between landlords and tenants, as amended by Law No. 33 of 2008",
        "Dubai Decree No. 26 of 2013 concerning the Rental Disputes Settlement Centre",
        "Dubai Decree No. 43 of 2013 determining rent increases",
        "Ajman: the emirate's rental legislation and the rules of its rental dispute resolution body",
      ],
      ar: [
        "قانون دبي رقم 26 لسنة 2007 بشأن تنظيم العلاقة بين مؤجري ومستأجري العقارات وتعديله بالقانون رقم 33 لسنة 2008",
        "مرسوم دبي رقم 26 لسنة 2013 بشأن مركز فض المنازعات الإيجارية",
        "مرسوم دبي رقم 43 لسنة 2013 بشأن تحديد زيادة بدل إيجار العقارات",
        "عجمان: التشريعات الإيجارية في الإمارة وقواعد الجهة المختصة بفض المنازعات الإيجارية",
      ],
    },
    practical: {
      en: "Check how and when any notice was served, keep proof of payments and photographs of the property's condition, and act within the timeframes set in the lease and the law.",
      ar: "تحقق من طريقة الإخطار وتاريخه، واحتفظ بما يثبت السداد وبصور توثق حالة العقار، والتزم بالمواعيد المحددة في العقد والقانون.",
    },
    qualification: {
      en: "Rental rules differ between emirates and change through local decrees; Ajman's rental dispute arrangements were reported to have been reorganised in 2026. The applicable rules and the current Dubai rent-increase mechanism should be confirmed for each case.",
      ar: "تختلف أحكام الإيجار بين الإمارات وتتغير بموجب قرارات محلية، وتشير التقارير إلى إعادة تنظيم جهة فض المنازعات الإيجارية في عجمان عام 2026. وينبغي التحقق في كل حالة من الأحكام المطبقة ومن آلية زيادة الأجرة المعمول بها حاليًا في دبي.",
    },
    reviewed: false,
  },

  /* 7 ─────────────────────────────────────────────────────────────── */
  "labor-disputes": {
    intro: {
      en: "Private-sector employment is governed by the federal Labour Relations Law, amended in 2024. Labour claims begin with the Ministry of Human Resources and Emiratisation (MOHRE) before any court proceedings.",
      ar: "تخضع علاقات العمل في القطاع الخاص لقانون تنظيم علاقات العمل الاتحادي المعدّل عام 2024، وتبدأ المطالبات العمالية بتقديم الشكوى إلى وزارة الموارد البشرية والتوطين قبل أي إجراء قضائي.",
    },
    points: [
      {
        title: { en: "Time limit", ar: "مدة رفع الدعوى" },
        body: {
          en: "Following the 2024 amendments, labour claims must generally be brought within two years of the end of the employment relationship. Waiting can extinguish a claim.",
          ar: "بعد تعديلات عام 2024، يجب في الغالب رفع الدعوى العمالية خلال سنتين من تاريخ انتهاء علاقة العمل، وقد يؤدي التأخير إلى سقوط الحق في المطالبة.",
        },
      },
      {
        title: { en: "MOHRE decisions", ar: "قرارات الوزارة" },
        body: {
          en: "MOHRE can issue binding decisions in disputes worth up to AED 50,000, which may then be challenged before the court within a short period. Larger disputes are referred to the court if not settled.",
          ar: "للوزارة إصدار قرارات ملزمة في المنازعات التي لا تتجاوز قيمتها 50,000 درهم، ويجوز الطعن فيها أمام المحكمة خلال مدة قصيرة. أما المنازعات الأكبر فتُحال إلى المحكمة إذا لم تتم تسويتها.",
        },
      },
      {
        title: { en: "End-of-service entitlements", ar: "مستحقات نهاية الخدمة" },
        body: {
          en: "Entitlements typically include unpaid wages, accrued leave, notice pay and the end-of-service gratuity, calculated on the basic wage and length of service.",
          ar: "تشمل المستحقات عادةً الأجور غير المدفوعة ورصيد الإجازات وبدل مهلة الإنذار ومكافأة نهاية الخدمة المحسوبة على أساس الأجر الأساسي ومدة الخدمة.",
        },
      },
      {
        title: { en: "Unlawful termination", ar: "الفصل غير المشروع" },
        body: {
          en: "The law treats termination as unlawful in defined cases — notably dismissal because the employee filed a well-founded complaint or claim. Compensation is set by the court and cannot exceed three months' wages, in addition to notice pay and end-of-service benefits.",
          ar: "يعدّ القانون إنهاء الخدمة غير مشروع في حالات محددة، أبرزها الفصل بسبب تقديم العامل شكوى أو دعوى جدية ثبتت صحتها. وتقدّر المحكمة التعويض بما لا يجاوز أجر ثلاثة أشهر، إضافة إلى بدل مهلة الإنذار ومكافأة نهاية الخدمة.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 33 of 2021 regulating Labour Relations, as amended including by Federal Decree-Law No. 9 of 2024",
        "Cabinet Resolution No. 1 of 2022 (Executive Regulations)",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن تنظيم علاقات العمل وتعديلاته، ومنها المرسوم بقانون اتحادي رقم 9 لسنة 2024",
        "قرار مجلس الوزراء رقم 1 لسنة 2022 بشأن اللائحة التنفيذية",
      ],
    },
    practical: {
      en: "Keep the employment contract, offer letter, payslips, bank statements and the termination notice. Employers should keep the same records, together with evidence of any disciplinary procedure.",
      ar: "احتفظ بعقد العمل وخطاب العرض وكشوف الرواتب وكشوف الحساب البنكي وإخطار إنهاء الخدمة. وينبغي لصاحب العمل الاحتفاظ بالسجلات نفسها، إضافة إلى ما يثبت أي إجراءات تأديبية.",
    },
    qualification: {
      en: "Different rules apply to domestic workers, to the public sector and to employees in the DIFC and ADGM. Time limits for challenging a MOHRE decision are short and should be checked as soon as the decision is received.",
      ar: "تسري أحكام مختلفة على العمالة المساعدة وموظفي القطاع الحكومي والعاملين في مركز دبي المالي العالمي وسوق أبوظبي العالمي. ومواعيد الطعن في قرار الوزارة قصيرة، وينبغي التحقق منها فور استلام القرار.",
    },
    reviewed: false,
  },

  /* 8 ─────────────────────────────────────────────────────────────── */
  "personal-status-family": {
    intro: {
      en: "Family law changed significantly with the federal Personal Status Law in force since 15 April 2025. Non-Muslims may instead be covered by the federal Civil Personal Status Law or, in Abu Dhabi, by the emirate's own civil family law.",
      ar: "شهد قانون الأسرة تغيرًا جوهريًا بصدور قانون الأحوال الشخصية الاتحادي النافذ منذ 15 أبريل 2025. وقد يخضع غير المسلمين بدلًا من ذلك لقانون الأحوال الشخصية المدنية الاتحادي، أو لقانون الأسرة المدني الخاص بإمارة أبوظبي.",
    },
    points: [
      {
        title: { en: "Which law applies", ar: "القانون الواجب التطبيق" },
        body: {
          en: "The applicable law depends on religion, nationality and, for non-Muslims, any choice of law. Non-Muslims may in some cases apply the law of their home country.",
          ar: "يتوقف القانون الواجب التطبيق على الديانة والجنسية، وعلى اختيار القانون بالنسبة لغير المسلمين، الذين يجوز لهم في بعض الحالات تطبيق قانون بلدهم.",
        },
      },
      {
        title: { en: "Custody until eighteen", ar: "الحضانة حتى الثامنة عشرة" },
        body: {
          en: "Under the 2025 law, custody continues until the child turns eighteen, regardless of gender, and a child aged fifteen may choose which parent to live with, subject to the child's best interests.",
          ar: "بموجب قانون 2025، تمتد الحضانة حتى بلوغ المحضون الثامنة عشرة بصرف النظر عن جنسه، ويحق للمحضون الذي أتم الخامسة عشرة اختيار من يقيم معه من الوالدين، مع مراعاة مصلحته الفضلى.",
        },
      },
      {
        title: { en: "Maintenance", ar: "النفقة" },
        body: {
          en: "Maintenance for a spouse and children is assessed on the needs of those entitled and the means of the person obliged to pay, and can be reviewed when circumstances change.",
          ar: "تُقدَّر النفقة للزوجة والأولاد بحسب حاجة المستحق وقدرة الملزم بها، ويجوز إعادة النظر فيها عند تغيّر الظروف.",
        },
      },
      {
        title: { en: "Paternity", ar: "إثبات النسب" },
        body: {
          en: "Establishing or denying paternity follows specific rules of proof under the law, and courts may rely on scientific evidence within the limits the law sets.",
          ar: "يخضع إثبات النسب أو نفيه لقواعد إثبات خاصة في القانون، ويجوز للمحكمة الاستعانة بالأدلة العلمية في الحدود التي يقررها القانون.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 41 of 2024 (Personal Status Law), in force from 15 April 2025",
        "Federal Decree-Law No. 41 of 2022 on Civil Personal Status (non-Muslims), in force from 1 February 2023",
        "Abu Dhabi Law No. 14 of 2021 on Civil Marriage and its Effects, as amended",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 41 لسنة 2024 بإصدار قانون الأحوال الشخصية، النافذ منذ 15 أبريل 2025",
        "المرسوم بقانون اتحادي رقم 41 لسنة 2022 بشأن الأحوال الشخصية المدنية لغير المسلمين، النافذ منذ 1 فبراير 2023",
        "قانون أبوظبي رقم 14 لسنة 2021 بشأن الزواج المدني وآثاره وتعديلاته",
      ],
    },
    practical: {
      en: "Family matters are sensitive and often benefit from a negotiated outcome. Gather the marriage contract, birth certificates and evidence of income and expenses before any meeting or hearing.",
      ar: "تتسم مسائل الأسرة بالحساسية، وكثيرًا ما يكون الحل التوافقي هو الأنسب. اجمع عقد الزواج وشهادات الميلاد وما يثبت الدخل والمصروفات قبل أي اجتماع أو جلسة.",
    },
    qualification: {
      en: "The transitional application of the 2025 law to cases pending at its commencement, and the exact article references cited in commentary, require verification against the official text.",
      ar: "يتطلب سريان قانون 2025 على القضايا التي كانت منظورة وقت نفاذه، ومراجع المواد الواردة في الشروح، التحقق من النص الرسمي.",
    },
    reviewed: false,
  },

  /* 9 ─────────────────────────────────────────────────────────────── */
  "estates-inheritance": {
    intro: {
      en: "How an estate is divided in the UAE depends principally on the religion of the deceased, whether a valid will exists and where it is registered, and the type and location of the assets.",
      ar: "يتوقف توزيع التركة في الدولة أساسًا على ديانة المتوفى، ووجود وصية صحيحة وجهة تسجيلها، ونوع الأموال ومكانها.",
    },
    points: [
      {
        title: { en: "Muslim estates", ar: "تركات المسلمين" },
        body: {
          en: "For Muslims, inheritance shares are set by the Personal Status Law in accordance with Islamic Sharia, and a will is generally limited to one third of the estate for non-heirs.",
          ar: "بالنسبة للمسلمين، يحدد قانون الأحوال الشخصية الأنصبة وفق أحكام الشريعة الإسلامية، وتنحصر الوصية في الأصل في حدود ثلث التركة لغير الورثة.",
        },
      },
      {
        title: { en: "Non-Muslim estates", ar: "تركات غير المسلمين" },
        body: {
          en: "Under the federal civil personal status law, where a non-Muslim dies without a will, half of the estate passes to the surviving spouse and the remainder is shared equally among the children. A registered will can direct the estate otherwise.",
          ar: "بموجب قانون الأحوال الشخصية المدنية الاتحادي، إذا توفي غير المسلم دون وصية، آل نصف التركة إلى الزوج الباقي على قيد الحياة، ويُقسم الباقي بالتساوي بين الأولاد. ويجوز بموجب وصية مسجلة توجيه التركة على نحو مختلف.",
        },
      },
      {
        title: { en: "Determination of heirs", ar: "حصر الإرث" },
        body: {
          en: "An heirs' certificate (determination of heirs) issued by the competent court is usually the first step before bank accounts, property or company shares can be dealt with.",
          ar: "تُعد شهادة حصر الإرث الصادرة من المحكمة المختصة عادةً الخطوة الأولى قبل التصرف في الحسابات البنكية أو العقارات أو الحصص في الشركات.",
        },
      },
      {
        title: { en: "Disputes between heirs", ar: "منازعات الورثة" },
        body: {
          en: "Since January 2026, courts may refer inheritance disputes to specialised chambers. Division of property, valuation and claims against third parties often require expert evidence.",
          ar: "منذ يناير 2026، يجوز إحالة منازعات التركات إلى دوائر متخصصة. وكثيرًا ما تتطلب قسمة الأموال وتقييمها والمطالبات في مواجهة الغير الاستعانة بالخبرة.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 41 of 2024 (Personal Status Law)",
        "Federal Decree-Law No. 41 of 2022 on Civil Personal Status, and Cabinet Decision No. 122 of 2023 (Executive Regulations)",
        "Abu Dhabi Law No. 14 of 2021, as amended",
        "Federal Decree-Law No. 42 of 2022 (Civil Procedure Law), as amended by Federal Decree-Law No. 22 of 2025",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 41 لسنة 2024 بإصدار قانون الأحوال الشخصية",
        "المرسوم بقانون اتحادي رقم 41 لسنة 2022 بشأن الأحوال الشخصية المدنية، وقرار مجلس الوزراء رقم 122 لسنة 2023 بشأن لائحته التنفيذية",
        "قانون أبوظبي رقم 14 لسنة 2021 وتعديلاته",
        "المرسوم بقانون اتحادي رقم 42 لسنة 2022 بإصدار قانون الإجراءات المدنية، المعدّل بالمرسوم بقانون اتحادي رقم 22 لسنة 2025",
      ],
    },
    practical: {
      en: "A registered will is the most reliable way to give effect to your wishes, particularly for non-Muslims with assets in more than one emirate. Heirs should list the assets and obtain the death certificate and family documents early.",
      ar: "تُعد الوصية المسجلة الوسيلة الأكثر موثوقية لتنفيذ إرادتك، ولا سيما لغير المسلمين الذين يملكون أموالًا في أكثر من إمارة. وينبغي للورثة حصر الأموال واستخراج شهادة الوفاة والوثائق العائلية مبكرًا.",
    },
    qualification: {
      en: "Which law governs a particular estate can depend on residence, nationality, the registration of any will (including with the DIFC Courts) and the emirate in which assets are located.",
      ar: "قد يتوقف القانون الذي يحكم تركة بعينها على محل الإقامة والجنسية وجهة تسجيل الوصية (بما في ذلك محاكم مركز دبي المالي العالمي) والإمارة التي تقع فيها الأموال.",
    },
    reviewed: false,
  },

  /* 10 ────────────────────────────────────────────────────────────── */
  "criminal-penal-cases": {
    intro: {
      en: "Criminal matters are governed by the federal Crimes and Penalties Law and the Criminal Procedure Law, together with the cybercrime law for offences committed through electronic means. Both complainants and accused persons have defined rights at each stage.",
      ar: "تخضع المسائل الجزائية لقانون الجرائم والعقوبات الاتحادي وقانون الإجراءات الجزائية، إضافة إلى قانون مكافحة الشائعات والجرائم الإلكترونية في الجرائم المرتكبة بوسائل إلكترونية. ولكل من الشاكي والمتهم حقوق محددة في كل مرحلة.",
    },
    points: [
      {
        title: { en: "From complaint to court", ar: "من البلاغ إلى المحكمة" },
        body: {
          en: "A case usually starts with a complaint to the police or the public prosecution, followed by investigation. The public prosecution decides whether to refer the case to court.",
          ar: "تبدأ القضية عادةً ببلاغ إلى الشرطة أو النيابة العامة، يليه التحقيق، ثم تقرر النيابة العامة إحالة الدعوى إلى المحكمة من عدمه.",
        },
      },
      {
        title: { en: "Fraud, breach of trust and forgery", ar: "الاحتيال وخيانة الأمانة والتزوير" },
        body: {
          en: "These offences have distinct elements. Fraud requires deception that leads to the handing over of property; breach of trust concerns property lawfully received and then misappropriated. The difference often decides whether a case is civil or criminal.",
          ar: "لكل من هذه الجرائم أركانها الخاصة؛ فالاحتيال يقوم على وسائل خداع تؤدي إلى تسليم المال، بينما تتعلق خيانة الأمانة بمال تم تسلّمه بصورة مشروعة ثم اختُلس. وكثيرًا ما يحدد هذا الفرق ما إذا كانت المسألة مدنية أم جزائية.",
        },
      },
      {
        title: { en: "Electronic offences", ar: "الجرائم الإلكترونية" },
        body: {
          en: "Messages, posts and online transactions can give rise to offences under the cybercrime law. Preserving digital evidence promptly and lawfully is essential.",
          ar: "قد تشكل الرسائل والمنشورات والمعاملات الإلكترونية جرائم بموجب قانون الجرائم الإلكترونية، ومن الضروري حفظ الأدلة الرقمية بسرعة وبطريقة مشروعة.",
        },
      },
      {
        title: { en: "Connected civil claims", ar: "الادعاء المدني التبعي" },
        body: {
          en: "A person harmed by an offence may claim compensation, either alongside the criminal case or separately before the civil courts, depending on the circumstances.",
          ar: "يجوز للمتضرر من الجريمة المطالبة بالتعويض، إما بالادعاء المدني أمام المحكمة الجزائية أو بدعوى مستقلة أمام المحاكم المدنية، بحسب ظروف كل حالة.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 31 of 2021 (Crimes and Penalties Law), as amended",
        "Federal Decree-Law No. 38 of 2022 (Criminal Procedure Law), in force from 1 March 2023, as amended",
        "Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 31 لسنة 2021 بإصدار قانون الجرائم والعقوبات وتعديلاته",
        "المرسوم بقانون اتحادي رقم 38 لسنة 2022 بإصدار قانون الإجراءات الجزائية، النافذ منذ 1 مارس 2023، وتعديلاته",
        "المرسوم بقانون اتحادي رقم 34 لسنة 2021 في شأن مكافحة الشائعات والجرائم الإلكترونية",
      ],
    },
    practical: {
      en: "Seek advice before giving a statement or filing a complaint where possible. Keep original documents and devices, and avoid public comment on the matter.",
      ar: "احرص قدر الإمكان على طلب المشورة قبل الإدلاء بأي أقوال أو تقديم بلاغ، واحتفظ بالمستندات والأجهزة الأصلية، وتجنب التعليق العلني على القضية.",
    },
    qualification: {
      en: "The Crimes and Penalties Law has been amended several times, most recently in 2025 and 2026. Penalties and the availability of reconciliation vary by offence and must be checked against the current text for each case.",
      ar: "عُدّل قانون الجرائم والعقوبات عدة مرات، كان آخرها في عامي 2025 و2026. وتختلف العقوبات وإمكانية الصلح بحسب الجريمة، ويجب التحقق منها وفق النص النافذ في كل حالة.",
    },
    reviewed: false,
  },

  /* 11 ────────────────────────────────────────────────────────────── */
  "cheques-payment-orders-enforcement": {
    intro: {
      en: "A cheque returned for insufficient funds is now primarily a civil enforcement matter. Under the Commercial Transactions Law, the bank's certificate of non-payment turns the cheque into an enforceable instrument that can be presented directly to the execution judge.",
      ar: "أصبح الشيك المرتجع لعدم كفاية الرصيد مسألة تنفيذ مدني في المقام الأول؛ إذ يجعل قانون المعاملات التجارية من إفادة البنك بعدم الصرف سندًا تنفيذيًا يمكن تقديمه مباشرة إلى قاضي التنفيذ.",
    },
    points: [
      {
        title: { en: "Direct enforcement of cheques", ar: "التنفيذ المباشر للشيك" },
        body: {
          en: "The holder can open an execution file for the full or unpaid amount without first bringing a full claim. The drawer may raise objections through the execution procedures.",
          ar: "يجوز للمستفيد فتح ملف تنفيذ بكامل قيمة الشيك أو بالجزء غير المدفوع منه دون الحاجة إلى رفع دعوى موضوعية أولًا، ويجوز للساحب الاعتراض من خلال إجراءات التنفيذ.",
        },
      },
      {
        title: { en: "When criminal liability remains", ar: "متى تبقى المسؤولية الجزائية" },
        body: {
          en: "Criminal liability still applies to specific bad-faith acts, such as closing the account, withdrawing the balance or instructing the bank not to pay without a legal basis, and to forgery.",
          ar: "تبقى المسؤولية الجزائية قائمة في أفعال محددة تنطوي على سوء نية، مثل إغلاق الحساب أو سحب الرصيد أو إصدار أمر للبنك بعدم الصرف دون سبب قانوني، وكذلك في حالات التزوير.",
        },
      },
      {
        title: { en: "Payment orders", ar: "أوامر الأداء" },
        body: {
          en: "Where a debt is fixed in amount, due and proven in writing, a payment order offers a summary route to judgment without a full trial. The debtor may challenge the order within the prescribed period.",
          ar: "إذا كان الدين ثابتًا بالكتابة ومعيّن المقدار وحالّ الأداء، يوفر أمر الأداء طريقًا مختصرًا للحصول على حكم دون نظر الدعوى بالإجراءات العادية، ويجوز للمدين التظلم أو الطعن خلال الميعاد المقرر.",
        },
      },
      {
        title: { en: "Enforcement measures", ar: "إجراءات التنفيذ" },
        body: {
          en: "Enforcement of judgments and enforceable instruments can include attachment of bank accounts, property, vehicles and shares, and other measures ordered by the execution judge.",
          ar: "قد يشمل تنفيذ الأحكام والسندات التنفيذية الحجز على الحسابات البنكية والعقارات والمركبات والحصص، وغير ذلك من الإجراءات التي يأمر بها قاضي التنفيذ.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 50 of 2022 (Commercial Transactions Law): provisions on cheques",
        "Federal Decree-Law No. 42 of 2022 (Civil Procedure Law), as amended: payment orders and enforcement",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 50 لسنة 2022 بإصدار قانون المعاملات التجارية: أحكام الشيك",
        "المرسوم بقانون اتحادي رقم 42 لسنة 2022 بإصدار قانون الإجراءات المدنية وتعديلاته: أوامر الأداء والتنفيذ",
      ],
    },
    practical: {
      en: "Present the cheque promptly, obtain the bank's certificate of non-payment and keep the original cheque safe. Partial payment by the bank does not prevent enforcement of the balance.",
      ar: "قدّم الشيك للصرف دون تأخير، واستخرج إفادة البنك بعدم الصرف، واحتفظ بأصل الشيك. ولا يمنع الصرف الجزئي من البنك تنفيذ الرصيد المتبقي.",
    },
    qualification: {
      en: "Execution procedures, fees and available measures can differ between the federal courts and the local courts of Dubai, Abu Dhabi and Ras Al Khaimah. The conditions for payment orders should be checked against the current Civil Procedure Law for each claim.",
      ar: "قد تختلف إجراءات التنفيذ ورسومه والتدابير المتاحة بين المحاكم الاتحادية ومحاكم دبي وأبوظبي ورأس الخيمة المحلية، وينبغي التحقق في كل مطالبة من شروط أمر الأداء وفق قانون الإجراءات المدنية النافذ.",
    },
    reviewed: false,
  },

  /* 12 ────────────────────────────────────────────────────────────── */
  "insurance-compensation": {
    intro: {
      en: "Insurance claims arise under the policy terms and the law, while compensation for accidents and damage rests on the rules of civil liability. Insurers are supervised by the Central Bank of the UAE under the law in force since 16 September 2025.",
      ar: "تنشأ المطالبات التأمينية بموجب شروط الوثيقة وأحكام القانون، بينما يقوم التعويض عن الحوادث والأضرار على قواعد المسؤولية المدنية. ويخضع قطاع التأمين لرقابة مصرف الإمارات العربية المتحدة المركزي بموجب القانون النافذ منذ 16 سبتمبر 2025.",
    },
    points: [
      {
        title: { en: "The policy defines the cover", ar: "الوثيقة تحدد التغطية" },
        body: {
          en: "Cover, exclusions, notification duties and limits are set by the policy. Late notice or incomplete disclosure can be raised by the insurer to resist a claim.",
          ar: "تحدد وثيقة التأمين التغطية والاستثناءات وواجبات الإخطار وحدود المسؤولية، وقد يحتج المؤمِّن بالتأخر في الإخطار أو عدم الإفصاح الكامل لرفض المطالبة.",
        },
      },
      {
        title: { en: "Committees come first", ar: "اللجان أولًا" },
        body: {
          en: "Claims arising from insurance contracts are not accepted by the courts unless the dispute has first been presented to the Central Bank's insurance dispute committees (Sanadak). Their decisions are final up to AED 100,000; above that, they can be challenged before the Court of Appeal within 30 days.",
          ar: "لا تُقبل الدعاوى الناشئة عن عقود التأمين أمام المحاكم ما لم يُعرض النزاع أولًا على لجان تسوية المنازعات التأمينية التابعة للمصرف المركزي («سندك»). وتكون قراراتها نهائية فيما لا يتجاوز 100,000 درهم، أما ما يزيد على ذلك فيجوز الطعن فيها أمام محكمة الاستئناف خلال 30 يومًا.",
        },
      },
      {
        title: { en: "Compensation for harm", ar: "التعويض عن الضرر" },
        body: {
          en: "Compensation for injury or damage covers proven loss and, under the new Civil Transactions Law, moral damage. Medical reports, police reports and expert evidence are usually decisive.",
          ar: "يشمل التعويض عن الإصابة أو الضرر الخسارة الثابتة، والضرر الأدبي وفق قانون المعاملات المدنية الجديد. وعادةً ما تكون التقارير الطبية وتقارير الشرطة والخبرة حاسمة.",
        },
      },
      {
        title: { en: "Time limits", ar: "المواعيد" },
        body: {
          en: "Claims under insurance contracts and claims for harmful acts are subject to limitation periods. Transitional rules apply to periods running when the new civil law came into force.",
          ar: "تخضع الدعاوى الناشئة عن عقد التأمين ودعاوى الفعل الضار لمدد تقادم، وتسري أحكام انتقالية على المدد التي كانت جارية عند نفاذ قانون المعاملات المدنية الجديد.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 6 of 2025 regarding the Central Bank, Regulation of Financial Institutions and Activities, and Insurance Business (repealed Federal Decree-Law No. 48 of 2023 on insurance)",
        "Federal Decree-Law No. 25 of 2025 (Civil Transactions Law): insurance contract and civil liability",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 6 لسنة 2025 في شأن المصرف المركزي وتنظيم المنشآت والأنشطة المالية وأعمال التأمين (الذي ألغى المرسوم بقانون اتحادي رقم 48 لسنة 2023 بشأن التأمين)",
        "المرسوم بقانون اتحادي رقم 25 لسنة 2025 بإصدار قانون المعاملات المدنية: عقد التأمين والمسؤولية المدنية",
      ],
    },
    practical: {
      en: "Notify the insurer in writing as soon as possible, keep a copy of the full policy and record all communications. Do not accept a settlement before the full extent of the loss is known.",
      ar: "أخطر شركة التأمين كتابيًا في أقرب وقت، واحتفظ بنسخة كاملة من الوثيقة وسجّل جميع المراسلات، ولا تقبل أي تسوية قبل التحقق من حجم الضرر كاملًا.",
    },
    qualification: {
      en: "Committee procedures, fees and time limits are set by Central Bank decisions and can change. Limitation periods for insurance claims under the new Civil Transactions Law should be confirmed for each claim.",
      ar: "تحدد قرارات المصرف المركزي إجراءات اللجان ورسومها ومواعيدها، وقد تتغير. وينبغي التحقق في كل مطالبة من مدد التقادم الخاصة بدعاوى التأمين وفق قانون المعاملات المدنية الجديد.",
    },
    reviewed: false,
  },

  /* 13 ────────────────────────────────────────────────────────────── */
  "bankruptcy-restructuring-insolvency": {
    intro: {
      en: "Companies and traders are covered by the federal Financial Restructuring and Bankruptcy Law of 2023, which applies from 2024 and is heard by specialised bankruptcy courts. Personal debts of individuals who are not traders fall under a separate insolvency law.",
      ar: "تخضع الشركات والتجار لقانون إعادة التنظيم المالي والإفلاس الاتحادي لسنة 2023 المطبق منذ عام 2024، وتنظر قضاياهم محاكم إفلاس متخصصة. أما الديون الشخصية للأفراد من غير التجار فتخضع لقانون إعسار مستقل.",
    },
    points: [
      {
        title: { en: "Three routes", ar: "ثلاثة مسارات" },
        body: {
          en: "The law provides for preventive settlement, restructuring and bankruptcy. Earlier routes aim to keep a viable business operating under court supervision.",
          ar: "ينص القانون على التسوية الوقائية وإعادة الهيكلة والإفلاس، وتهدف المسارات المبكرة إلى استمرار النشاط القادر على الاستمرار تحت إشراف المحكمة.",
        },
      },
      {
        title: { en: "Timing", ar: "التوقيت" },
        body: {
          en: "A debtor that has stopped paying its debts is expected to apply within a set period. Acting early generally preserves more options for both the debtor and its creditors.",
          ar: "يُنتظر من المدين الذي توقف عن سداد ديونه التقدم بطلب خلال مدة محددة، والتحرك المبكر يحفظ في الغالب خيارات أكثر للمدين ودائنيه.",
        },
      },
      {
        title: { en: "Creditors' rights", ar: "حقوق الدائنين" },
        body: {
          en: "Creditors can participate in the proceedings, file claims and, where secured, seek enforcement against their security within the bankruptcy process.",
          ar: "يحق للدائنين المشاركة في الإجراءات وتقديم مطالباتهم، ويجوز للدائن المضمون طلب التنفيذ على الضمان في إطار إجراءات الإفلاس.",
        },
      },
      {
        title: { en: "Individual insolvency", ar: "إعسار الأفراد" },
        body: {
          en: "Individuals unable to pay their debts can apply for a court-supervised settlement plan, which may offer protection from certain proceedings while the plan is in place.",
          ar: "يجوز للأفراد العاجزين عن سداد ديونهم التقدم بطلب لخطة تسوية تحت إشراف المحكمة، قد توفر حماية من بعض الإجراءات أثناء تنفيذها.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 51 of 2023 issuing the Financial Restructuring and Bankruptcy Law",
        "Cabinet Resolution No. 94 of 2024 (Executive Regulations)",
        "Federal Decree-Law No. 19 of 2019 on Insolvency (natural persons)",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 51 لسنة 2023 بإصدار قانون إعادة التنظيم المالي والإفلاس",
        "قرار مجلس الوزراء رقم 94 لسنة 2024 بشأن اللائحة التنفيذية",
        "المرسوم بقانون اتحادي رقم 19 لسنة 2019 في شأن الإعسار (الأشخاص الطبيعيون)",
      ],
    },
    practical: {
      en: "Up-to-date accounts, a list of creditors and a realistic cash-flow forecast are the starting point for any restructuring discussion.",
      ar: "تمثل الحسابات المحدّثة وقائمة الدائنين والتوقعات الواقعية للتدفقات النقدية نقطة البداية لأي نقاش حول إعادة الهيكلة.",
    },
    qualification: {
      en: "The law does not apply to companies with their own insolvency regimes, such as those in the DIFC and ADGM, or to banks and insurers licensed by the Central Bank. The current status of the 2019 individual insolvency law should be confirmed.",
      ar: "لا يسري القانون على الشركات الخاضعة لأنظمة إفلاس خاصة بها، كالشركات في مركز دبي المالي العالمي وسوق أبوظبي العالمي، ولا على البنوك وشركات التأمين المرخصة من المصرف المركزي. وينبغي التحقق من الوضع الحالي لقانون إعسار الأفراد لسنة 2019.",
    },
    reviewed: false,
  },

  /* 14 ────────────────────────────────────────────────────────────── */
  "intellectual-property": {
    intro: {
      en: "Intellectual property in the UAE is protected under federal laws on trademarks, copyright and industrial property that came into force in January 2022. Registration with the Ministry of Economy is central to enforcing most rights.",
      ar: "تحظى الملكية الفكرية في الدولة بالحماية بموجب قوانين اتحادية للعلامات التجارية وحقوق المؤلف والملكية الصناعية، دخلت حيز النفاذ في يناير 2022. ويُعد التسجيل لدى وزارة الاقتصاد محوريًا لإنفاذ معظم الحقوق.",
    },
    points: [
      {
        title: { en: "Trademarks", ar: "العلامات التجارية" },
        body: {
          en: "Registered trademarks can be enforced through civil claims, criminal complaints and administrative measures. The law also protects non-traditional marks such as sounds and three-dimensional shapes.",
          ar: "يجوز إنفاذ العلامات التجارية المسجلة بالدعاوى المدنية والبلاغات الجزائية والتدابير الإدارية، كما يحمي القانون العلامات غير التقليدية كالأصوات والأشكال ثلاثية الأبعاد.",
        },
      },
      {
        title: { en: "Copyright", ar: "حقوق المؤلف" },
        body: {
          en: "Copyright protection arises without registration, but registration and dated evidence of creation make enforcement considerably easier. Protection extends to software and smart applications.",
          ar: "تنشأ حماية حق المؤلف دون حاجة إلى التسجيل، غير أن التسجيل والأدلة المؤرخة على الابتكار تيسّر الإنفاذ كثيرًا. وتمتد الحماية إلى البرمجيات والتطبيقات الذكية.",
        },
      },
      {
        title: { en: "Infringement and counterfeits", ar: "التعدي والتقليد" },
        body: {
          en: "Infringement can lead to injunctions, seizure of infringing goods, compensation and criminal penalties. Customs authorities can act against counterfeit goods at the border.",
          ar: "قد يترتب على التعدي وقف الاعتداء وضبط البضائع المخالفة والتعويض والعقوبات الجزائية، كما يجوز للسلطات الجمركية اتخاذ إجراءات ضد البضائع المقلدة على المنافذ.",
        },
      },
      {
        title: { en: "Unfair competition", ar: "المنافسة غير المشروعة" },
        body: {
          en: "Conduct that misleads customers or exploits another's reputation can be challenged even where no registered right exists, under the general rules on unfair competition and civil liability.",
          ar: "يجوز الطعن في التصرفات التي تضلل العملاء أو تستغل سمعة الغير حتى في غياب حق مسجل، استنادًا إلى القواعد العامة للمنافسة غير المشروعة والمسؤولية المدنية.",
        },
      },
    ],
    framework: {
      en: [
        "Federal Decree-Law No. 36 of 2021 on Trademarks, and Cabinet Decision No. 57 of 2022",
        "Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights, and Cabinet Decision No. 47 of 2022",
        "Federal Decree-Law No. 11 of 2021 on the Regulation and Protection of Industrial Property Rights",
        "Federal Decree-Law No. 50 of 2022 (Commercial Transactions Law)",
      ],
      ar: [
        "المرسوم بقانون اتحادي رقم 36 لسنة 2021 في شأن العلامات التجارية، وقرار مجلس الوزراء رقم 57 لسنة 2022",
        "المرسوم بقانون اتحادي رقم 38 لسنة 2021 في شأن حقوق المؤلف والحقوق المجاورة، وقرار مجلس الوزراء رقم 47 لسنة 2022",
        "المرسوم بقانون اتحادي رقم 11 لسنة 2021 بشأن تنظيم وحماية حقوق الملكية الصناعية",
        "المرسوم بقانون اتحادي رقم 50 لسنة 2022 بإصدار قانون المعاملات التجارية",
      ],
    },
    practical: {
      en: "Register key trademarks before launch, keep dated records of creative work and gather evidence of infringement — screenshots, purchases and invoices — before contacting the infringer.",
      ar: "سجّل علاماتك التجارية الأساسية قبل الإطلاق، واحتفظ بسجلات مؤرخة لأعمالك الإبداعية، واجمع أدلة التعدي من لقطات شاشة ومشتريات وفواتير قبل التواصل مع المتعدي.",
    },
    qualification: {
      en: "The Commercial Transactions Law contains a dedicated section on unfair competition, including the poaching of a competitor's customers through its employees and false statements about goods. Any later amendments to the IP laws should be checked for each matter.",
      ar: "يتضمن قانون المعاملات التجارية فرعًا خاصًا بالمنافسة غير المشروعة، يشمل استمالة عملاء المنافس عن طريق موظفيه والبيانات غير الصحيحة عن البضائع. وينبغي التحقق في كل حالة من أي تعديلات لاحقة على قوانين الملكية الفكرية.",
    },
    reviewed: false,
  },
};

export function getConsiderations(slug: string): Considerations | undefined {
  return considerations[slug];
}
