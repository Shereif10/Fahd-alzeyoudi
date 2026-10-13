import type { Localized } from "@/i18n/config";

/**
 * Insights — Brief Q24/Q29: the firm wants a section of legal articles, updated
 * regularly through an easy-to-use management tool.
 *
 * STATUS: the four articles below are researched DRAFTS FOR LEGAL REVIEW
 * (October 2026). They replaced six layout placeholders. Until the firm's legal
 * reviewer approves an article, keep `reviewed: false`: the article is then
 * marked as a draft on screen, set to `noindex` and left out of the sitemap.
 * Research notes and sources: docs/legal-research/RESEARCH-RECORDS.md.
 * Dates are suggested publication dates — set the real date when publishing.
 *
 * Replace this file with CMS-sourced content (same `Insight` shape) when the
 * management tool is chosen.
 */
export type InsightBlock =
  | { type: "p"; text: Localized }
  | { type: "h2"; text: Localized }
  | { type: "quote"; text: Localized }
  /** One question and answer, rendered inside the prose flow. */
  | { type: "faq"; q: Localized; a: Localized }
  /** Legal sources, rendered at the end of the article. */
  | { type: "sources"; items: Localized<string[]> };

export type Insight = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  /** ISO date. */
  date: string;
  category: Localized;
  /** Practice slug the article relates to, used for cross-linking. */
  practice?: string;
  readingMinutes?: number;
  body: InsightBlock[];
  /** Search title and meta description, when they differ from title/excerpt. */
  seo?: { title: Localized; description: Localized };
  keywords?: Localized<string[]>;
  /** Featured image (non-personal, licensed; see docs/VISUAL-ASSET-AUDIT.md). */
  image?: { src: string; alt: Localized };
  /** True only after approval by the firm's legal reviewer. */
  reviewed: boolean;
  placeholder: boolean;
};

export const insights: Insight[] = [
  /* ── 1 ── New Civil Transactions Law ───────────────────────────── */
  {
    slug: "uae-new-civil-transactions-law",
    image: {
      src: "/images/insights/Sunlit Islamic Architectural Workspace.png",
      alt: {
        en: "Printed documents and paper clips on a white desk",
        ar: "مستندات مطبوعة ومشابك ورق على مكتب أبيض",
      },
    },
    title: {
      en: "The UAE's new Civil Transactions Law: what changed on 1 June 2026",
      ar: "قانون المعاملات المدنية الجديد في الإمارات: ما الذي تغيّر في 1 يونيو 2026",
    },
    excerpt: {
      en: "A new civil code now governs contracts, compensation and civil liability in the UAE. Here is what it changes in practice, and how to tell whether it applies to your matter.",
      ar: "يحكم قانون مدني جديد العقود والتعويض والمسؤولية المدنية في الدولة. نستعرض أبرز ما يغيّره عمليًا، وكيف تعرف ما إذا كان يسري على مسألتك.",
    },
    date: "2026-10-06",
    category: { en: "Civil Claims", ar: "الدعاوى المدنية" },
    practice: "civil-claims-financial-claims",
    readingMinutes: 6,
    seo: {
      title: {
        en: "New UAE Civil Transactions Law 2026: Key Changes",
        ar: "قانون المعاملات المدنية الجديد 2026: أبرز التغييرات",
      },
      description: {
        en: "Federal Decree-Law No. 25 of 2025 replaced the 1985 Civil Code on 1 June 2026. Key changes on contracts, compensation, hardship and limitation periods.",
        ar: "حلّ المرسوم بقانون اتحادي رقم 25 لسنة 2025 محل قانون 1985 في 1 يونيو 2026. أبرز التغييرات في العقود والتعويض والظروف الطارئة والتقادم.",
      },
    },
    keywords: {
      en: [
        "UAE Civil Transactions Law",
        "Federal Decree-Law No. 25 of 2025",
        "UAE civil code 2026",
        "civil claims UAE",
        "compensation UAE law",
      ],
      ar: [
        "قانون المعاملات المدنية الجديد",
        "المرسوم بقانون اتحادي رقم 25 لسنة 2025",
        "القانون المدني الإماراتي 2026",
        "الدعاوى المدنية في الإمارات",
        "التعويض في القانون الإماراتي",
      ],
    },
    reviewed: false,
    placeholder: false,
    body: [
      {
        type: "p",
        text: {
          en: "For four decades, civil relationships in the UAE were governed by Federal Law No. 5 of 1985, the Civil Transactions Law. On 1 June 2026 that law was replaced by Federal Decree-Law No. 25 of 2025. The new law keeps the structure and core principles of its predecessor, but it modernises important rules on how contracts are formed and performed, how compensation is assessed and how long claims can be brought.",
          ar: "ظلت العلاقات المدنية في الدولة على مدى أربعة عقود خاضعة للقانون الاتحادي رقم 5 لسنة 1985 بإصدار قانون المعاملات المدنية، إلى أن حلّ محله في 1 يونيو 2026 المرسوم بقانون اتحادي رقم 25 لسنة 2025. ويحافظ القانون الجديد على بنية سلفه ومبادئه الأساسية، لكنه يحدّث قواعد مهمة تتعلق بإبرام العقود وتنفيذها وتقدير التعويض ومدد رفع الدعاوى.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Does the new law apply to my contract?",
          ar: "هل يسري القانون الجديد على عقدي؟",
        },
      },
      {
        type: "p",
        text: {
          en: "As a general rule, the new law applies from its effective date and does not operate retroactively. A contract concluded before 1 June 2026 may therefore continue to be assessed under the 1985 law, particularly as to its validity. Ongoing obligations, events occurring after 1 June 2026 and unexpired limitation periods can, however, be affected by the new law's transitional rules. For long-term contracts, the answer may differ from one obligation to the next.",
          ar: "القاعدة العامة أن القانون الجديد يسري من تاريخ نفاذه ولا يسري بأثر رجعي، ولذلك قد يظل العقد المبرم قبل 1 يونيو 2026 خاضعًا لقانون 1985، ولا سيما فيما يتعلق بصحته. غير أن الالتزامات المستمرة والوقائع اللاحقة لهذا التاريخ ومدد التقادم التي لم تكتمل قد تتأثر بالأحكام الانتقالية للقانون الجديد، وقد تختلف الإجابة في العقود طويلة الأجل من التزام إلى آخر.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Age of majority is now eighteen",
          ar: "سن الرشد ثماني عشرة سنة",
        },
      },
      {
        type: "p",
        text: {
          en: "The new law sets the age of majority at eighteen Gregorian years, replacing the previous twenty-one lunar years. This affects who can contract independently, when guardianship over a young person's property ends, and how businesses deal with young adult customers.",
          ar: "حدد القانون الجديد سن الرشد بثماني عشرة سنة ميلادية بدلًا من إحدى وعشرين سنة قمرية، وهو ما يؤثر في أهلية التعاقد المستقل، وفي انتهاء الولاية على أموال الصغير، وفي تعامل المنشآت مع العملاء من الشباب.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Negotiation, disclosure and good faith",
          ar: "التفاوض والإفصاح وحسن النية",
        },
      },
      {
        type: "p",
        text: {
          en: "The new law gives clearer effect to good faith before a contract is signed. Parties must negotiate in good faith and disclose information that is material to the other side's decision, and abruptly breaking off negotiations in bad faith can give rise to liability. In practice, this makes the record of negotiations — emails, drafts and messages — more important than before.",
          ar: "يعطي القانون الجديد أثرًا أوضح لمبدأ حسن النية قبل إبرام العقد؛ إذ يلتزم الأطراف بالتفاوض بحسن نية وبالإفصاح عن المعلومات الجوهرية لقرار الطرف الآخر، وقد يرتب قطع المفاوضات فجأة وبسوء نية المسؤولية. ومن الناحية العملية، يمنح ذلك سجل المفاوضات من رسائل ومسودات ومراسلات أهمية أكبر من ذي قبل.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Compensation and agreed damages",
          ar: "التعويض والتعويض الاتفاقي",
        },
      },
      {
        type: "p",
        text: {
          en: "Where neither the law nor the contract fixes the amount, compensation is assessed on the damage actually suffered. Agreed compensation remains enforceable, but the court may reduce it if it is excessive or if the main obligation was partly performed, while a creditor may claim more where the debtor acted fraudulently or with gross negligence. The law also expressly recognises compensation for moral damage.",
          ar: "إذا لم يحدد القانون أو العقد مقدار التعويض، قُدّر بقدر الضرر الذي وقع فعلًا. ويظل التعويض الاتفاقي نافذًا، لكن للمحكمة أن تخفضه إذا كان مبالغًا فيه أو إذا نُفذ الالتزام الأصلي جزئيًا، بينما يجوز للدائن المطالبة بأكثر منه إذا ارتكب المدين غشًا أو خطأً جسيمًا. كما يعترف القانون صراحة بالتعويض عن الضرر الأدبي.",
        },
      },
      {
        type: "quote",
        text: {
          en: "The question is no longer only what the contract says, but also how the parties behaved before and after signing it.",
          ar: "لم يعد السؤال مقتصرًا على ما ينص عليه العقد، بل امتد إلى سلوك الأطراف قبل توقيعه وبعده.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Hardship and impossibility",
          ar: "الظروف الطارئة واستحالة التنفيذ",
        },
      },
      {
        type: "p",
        text: {
          en: "Where exceptional and unforeseeable general events make performance excessively onerous, the court may reduce the obligation to a reasonable level or end the contract, and a clause excluding this power is void. Where performance becomes impossible, the obligation ends and the contract is cancelled; partial or temporary impossibility can justify partial cancellation or modification.",
          ar: "إذا طرأت حوادث استثنائية عامة غير متوقعة جعلت تنفيذ الالتزام مرهقًا، جاز للمحكمة رد الالتزام إلى الحد المعقول أو إنهاء العقد، ويقع باطلًا كل اتفاق على خلاف ذلك. وإذا أصبح التنفيذ مستحيلًا انقضى الالتزام وانفسخ العقد، وقد تبرر الاستحالة الجزئية أو المؤقتة الفسخ الجزئي أو التعديل.",
        },
      },
      {
        type: "h2",
        text: { en: "What to do now", ar: "ما الذي ينبغي فعله الآن" },
      },
      {
        type: "p",
        text: {
          en: "Businesses should review standard terms, limitation of liability and penalty clauses, and the way negotiations are documented. Anyone with a dispute that began around the change of law should establish early which law governs each issue, because the answer affects deadlines as well as substance.",
          ar: "ينبغي للمنشآت مراجعة شروطها النموذجية وبنود تحديد المسؤولية والشرط الجزائي وطريقة توثيق المفاوضات. ومن لديه نزاع بدأ قرابة تاريخ تغيّر القانون، عليه أن يحدد مبكرًا القانون الذي يحكم كل مسألة، لأن الإجابة تؤثر في المواعيد كما تؤثر في الموضوع.",
        },
      },
      {
        type: "h2",
        text: { en: "Frequently asked questions", ar: "أسئلة شائعة" },
      },
      {
        type: "faq",
        q: {
          en: "Has the 1985 Civil Code been completely repealed?",
          ar: "هل أُلغي قانون المعاملات المدنية لسنة 1985 بالكامل؟",
        },
        a: {
          en: "Yes, it was repealed and replaced from 1 June 2026. It may still be relevant to contracts and events that pre-date that date.",
          ar: "نعم، أُلغي واستُبدل اعتبارًا من 1 يونيو 2026، لكنه قد يظل ذا صلة بالعقود والوقائع السابقة على هذا التاريخ.",
        },
      },
      {
        type: "faq",
        q: {
          en: "Does the new law apply in the DIFC and ADGM?",
          ar: "هل يسري القانون الجديد في مركز دبي المالي العالمي وسوق أبوظبي العالمي؟",
        },
        a: {
          en: "Those financial free zones have their own civil and commercial laws, so the position there must be checked separately.",
          ar: "لهاتين المنطقتين الماليتين الحرتين قوانينهما المدنية والتجارية الخاصة، ولذلك يتعين بحث الوضع فيهما بصورة مستقلة.",
        },
      },
      {
        type: "sources",
        items: {
          en: [
            "Federal Decree-Law No. 25 of 2025 issuing the Civil Transactions Law (in force 1 June 2026) — UAE Legislation portal, uaelegislation.gov.ae",
            "Federal Law No. 5 of 1985 issuing the Civil Transactions Law (repealed)",
          ],
          ar: [
            "المرسوم بقانون اتحادي رقم 25 لسنة 2025 بإصدار قانون المعاملات المدنية (نافذ منذ 1 يونيو 2026) — بوابة التشريعات الإماراتية uaelegislation.gov.ae",
            "القانون الاتحادي رقم 5 لسنة 1985 بإصدار قانون المعاملات المدنية (ملغى)",
          ],
        },
      },
    ],
  },

  /* ── 2 ── Bounced cheques ─────────────────────────────────────── */
  {
    slug: "bounced-cheque-enforcement-uae",
    image: {
      src: "/images/insights/cheques-financial-towers.webp",
      alt: {
        en: "Glass office towers reflecting the sky",
        ar: "أبراج مكاتب زجاجية تعكس السماء",
      },
    },
    title: {
      en: "Bounced cheques in the UAE: recovering the amount through direct enforcement",
      ar: "الشيكات المرتجعة في الإمارات: تحصيل قيمتها عبر التنفيذ المباشر",
    },
    excerpt: {
      en: "A cheque returned for insufficient funds can be enforced directly before the execution judge. How the process works, and when a criminal complaint is still relevant.",
      ar: "يمكن تنفيذ الشيك المرتجع لعدم كفاية الرصيد مباشرة أمام قاضي التنفيذ. نوضح كيف تسير الإجراءات، ومتى تظل الشكوى الجزائية ذات صلة.",
    },
    date: "2026-09-22",
    category: { en: "Enforcement", ar: "التنفيذ" },
    practice: "cheques-payment-orders-enforcement",
    readingMinutes: 5,
    seo: {
      title: {
        en: "Bounced Cheque in the UAE: How Direct Enforcement Works",
        ar: "الشيك المرتجع في الإمارات: كيف يتم التنفيذ المباشر",
      },
      description: {
        en: "Under the UAE Commercial Transactions Law, a bounced cheque can be enforced directly. Steps, objections, partial payment and when criminal liability remains.",
        ar: "وفق قانون المعاملات التجارية، يمكن تنفيذ الشيك المرتجع مباشرة. الخطوات والاعتراض والصرف الجزئي ومتى تبقى المسؤولية الجزائية.",
      },
    },
    keywords: {
      en: [
        "bounced cheque UAE",
        "cheque execution UAE",
        "returned cheque enforcement",
        "execution judge UAE",
        "Commercial Transactions Law cheque",
      ],
      ar: [
        "شيك مرتجع الإمارات",
        "تنفيذ الشيك",
        "الشيك سند تنفيذي",
        "قاضي التنفيذ",
        "قانون المعاملات التجارية الشيك",
      ],
    },
    reviewed: false,
    placeholder: false,
    body: [
      {
        type: "p",
        text: {
          en: "For many years, a bounced cheque in the UAE meant a police report and a criminal case. That changed in January 2022, and the position is now set by Federal Decree-Law No. 50 of 2022, the Commercial Transactions Law. Today, a cheque returned for lack or insufficiency of funds is treated first as a debt to be enforced, not as a crime to be prosecuted.",
          ar: "ظل الشيك المرتجع في الدولة لسنوات طويلة يعني بلاغًا لدى الشرطة وقضية جزائية، إلى أن تغيّر ذلك في يناير 2022، وأصبح الوضع الآن محكومًا بالمرسوم بقانون اتحادي رقم 50 لسنة 2022 بإصدار قانون المعاملات التجارية. واليوم يُعامل الشيك المرتجع لعدم وجود الرصيد أو عدم كفايته أولًا بوصفه دينًا يُنفذ، لا جريمة تُلاحق.",
        },
      },
      {
        type: "h2",
        text: {
          en: "The cheque as an enforceable instrument",
          ar: "الشيك سندًا تنفيذيًا",
        },
      },
      {
        type: "p",
        text: {
          en: "When the bank records that the funds are unavailable or insufficient, the cheque becomes an enforceable instrument. The holder can apply to the execution judge for enforcement of the full amount, or of the unpaid balance, without first bringing a full claim and waiting for a judgment. Execution, and any challenge to it, follow the Civil Procedure Law.",
          ar: "عندما يثبت البنك عدم وجود الرصيد أو عدم كفايته، يصبح الشيك سندًا تنفيذيًا، ويجوز لحامله التقدم إلى قاضي التنفيذ بطلب تنفيذه بكامل قيمته أو بالرصيد غير المدفوع، دون حاجة إلى رفع دعوى موضوعية وانتظار الحكم. ويخضع التنفيذ والمنازعة فيه لأحكام قانون الإجراءات المدنية.",
        },
      },
      {
        type: "h2",
        text: { en: "The steps in practice", ar: "الخطوات عمليًا" },
      },
      {
        type: "p",
        text: {
          en: "First, present the cheque to the bank and obtain the bank's certificate or notation confirming non-payment. Second, open an execution file before the competent court with the original cheque and the certificate. Third, once the execution file is notified, the court can order measures against the drawer's assets, such as attachment of bank accounts, vehicles, property or shares.",
          ar: "أولًا، قدّم الشيك إلى البنك واستخرج الإفادة أو التأشير الذي يثبت عدم الصرف. ثانيًا، افتح ملف تنفيذ لدى المحكمة المختصة مرفقًا به أصل الشيك والإفادة. ثالثًا، بعد إعلان ملف التنفيذ، يجوز للمحكمة الأمر بإجراءات على أموال الساحب، كالحجز على الحسابات البنكية أو المركبات أو العقارات أو الحصص.",
        },
      },
      { type: "h2", text: { en: "Partial payment", ar: "الصرف الجزئي" } },
      {
        type: "p",
        text: {
          en: "If the account holds part of the amount, the bank pays what is available unless the holder refuses partial payment. The payment is recorded on the cheque, and the balance can still be enforced.",
          ar: "إذا كان في الحساب جزء من المبلغ، صرف البنك المتاح ما لم يرفض الحامل الوفاء الجزئي، ويؤشَّر بذلك على الشيك، ويظل الرصيد المتبقي قابلًا للتنفيذ.",
        },
      },
      {
        type: "h2",
        text: { en: "Can the drawer object?", ar: "هل يجوز للساحب الاعتراض؟" },
      },
      {
        type: "p",
        text: {
          en: "Yes. The drawer can raise an objection through the execution procedures — for example, that the debt has been paid or that the cheque was given as a guarantee rather than as payment. Whether such an objection succeeds depends on the evidence. The holder should therefore keep the documents that explain why the cheque was issued.",
          ar: "نعم، يجوز للساحب المنازعة من خلال إجراءات التنفيذ، كأن يدفع بسداد الدين أو بأن الشيك سُلّم على سبيل الضمان لا الوفاء. ويتوقف نجاح هذه المنازعة على الأدلة، ولذلك ينبغي للحامل الاحتفاظ بالمستندات التي توضح سبب إصدار الشيك.",
        },
      },
      {
        type: "h2",
        text: {
          en: "When is it still a criminal matter?",
          ar: "متى تبقى المسألة جزائية؟",
        },
      },
      {
        type: "p",
        text: {
          en: "Criminal liability has not disappeared. It remains for specific acts done in bad faith, such as closing the account or withdrawing the balance so that the cheque cannot be paid, instructing the bank not to pay without a legal basis, deliberately drawing the cheque so that it will not be paid, and forging or knowingly using a forged cheque.",
          ar: "لم تختفِ المسؤولية الجزائية، بل بقيت قائمة في أفعال محددة تنطوي على سوء نية، مثل إغلاق الحساب أو سحب الرصيد بحيث يتعذر صرف الشيك، أو إصدار أمر للبنك بعدم الصرف دون سبب قانوني، أو تحرير الشيك عمدًا بصورة تمنع صرفه، أو تزويره أو استعماله مع العلم بتزويره.",
        },
      },
      {
        type: "quote",
        text: {
          en: "The cheque is now a fast route to recovery — provided the paperwork is in order from the first day.",
          ar: "أصبح الشيك طريقًا سريعًا للتحصيل، شريطة أن تكون المستندات مستوفاة منذ اليوم الأول.",
        },
      },
      {
        type: "h2",
        text: { en: "Frequently asked questions", ar: "أسئلة شائعة" },
      },
      {
        type: "faq",
        q: {
          en: "Do I need a court judgment before enforcing a bounced cheque?",
          ar: "هل أحتاج إلى حكم قضائي قبل تنفيذ الشيك المرتجع؟",
        },
        a: {
          en: "Generally no. With the bank's certificate of non-payment, the cheque itself can be presented for enforcement.",
          ar: "في الغالب لا؛ فمع إفادة البنك بعدم الصرف يمكن تقديم الشيك نفسه للتنفيذ.",
        },
      },
      {
        type: "faq",
        q: {
          en: "What if the cheque was a security cheque?",
          ar: "ماذا لو كان الشيك شيك ضمان؟",
        },
        a: {
          en: "The drawer may argue that the underlying obligation was not due. The outcome depends on the agreement and the evidence, so advice on the specific facts is recommended.",
          ar: "قد يحتج الساحب بأن الالتزام الأصلي لم يكن مستحقًا، وتتوقف النتيجة على الاتفاق والأدلة، لذا يُنصح بطلب المشورة بشأن الوقائع المحددة.",
        },
      },
      {
        type: "sources",
        items: {
          en: [
            "Federal Decree-Law No. 50 of 2022 issuing the Commercial Transactions Law — provisions on cheques (in force 2 January 2023)",
            "Federal Decree-Law No. 42 of 2022 issuing the Civil Procedure Law, as amended — enforcement",
            "Federal Decree-Law No. 14 of 2020 amending Federal Law No. 18 of 1993 (decriminalisation effective 2 January 2022)",
          ],
          ar: [
            "المرسوم بقانون اتحادي رقم 50 لسنة 2022 بإصدار قانون المعاملات التجارية — أحكام الشيك (نافذ منذ 2 يناير 2023)",
            "المرسوم بقانون اتحادي رقم 42 لسنة 2022 بإصدار قانون الإجراءات المدنية وتعديلاته — التنفيذ",
            "المرسوم بقانون اتحادي رقم 14 لسنة 2020 بتعديل القانون الاتحادي رقم 18 لسنة 1993 (نافذ منذ 2 يناير 2022)",
          ],
        },
      },
    ],
  },

  /* ── 3 ── Labour claims ───────────────────────────────────────── */
  {
    slug: "uae-labour-claims-end-of-employment",
    image: {
      src: "/images/insights/labour-office-interior.webp",
      alt: {
        en: "Empty office corridor between glass partitions",
        ar: "ممر مكاتب خالٍ بين حواجز زجاجية",
      },
    },
    title: {
      en: "Labour claims at the end of employment: a guide for employees and employers",
      ar: "المطالبات العمالية عند انتهاء علاقة العمل: دليل للعمال وأصحاب العمل",
    },
    excerpt: {
      en: "Entitlements, deadlines and the role of MOHRE when an employment relationship ends in the UAE private sector — including the changes made in 2024.",
      ar: "المستحقات والمواعيد ودور وزارة الموارد البشرية والتوطين عند انتهاء علاقة العمل في القطاع الخاص، بما في ذلك تعديلات عام 2024.",
    },
    date: "2026-09-08",
    category: { en: "Employment", ar: "العمل" },
    practice: "labor-disputes",
    readingMinutes: 5,
    seo: {
      title: {
        en: "UAE Labour Claims: Deadlines, MOHRE and End-of-Service",
        ar: "المطالبات العمالية في الإمارات: المواعيد ودور الوزارة ونهاية الخدمة",
      },
      description: {
        en: "How labour claims work in the UAE private sector: the two-year time limit, MOHRE decisions up to AED 50,000, end-of-service entitlements and unlawful termination.",
        ar: "كيف تسير المطالبات العمالية في القطاع الخاص: مدة السنتين، وقرارات الوزارة حتى 50,000 درهم، ومستحقات نهاية الخدمة، والفصل غير المشروع.",
      },
    },
    keywords: {
      en: [
        "UAE labour claim",
        "MOHRE complaint",
        "end of service gratuity UAE",
        "unlawful termination UAE",
        "UAE labour law 2024 amendments",
      ],
      ar: [
        "دعوى عمالية الإمارات",
        "شكوى وزارة الموارد البشرية",
        "مكافأة نهاية الخدمة",
        "الفصل التعسفي الإمارات",
        "تعديلات قانون العمل 2024",
      ],
    },
    reviewed: false,
    placeholder: false,
    body: [
      {
        type: "p",
        text: {
          en: "Most employment disputes in the UAE arise when the relationship ends: unpaid salary, leave balances, notice pay, end-of-service gratuity and, sometimes, a claim that the termination itself was unlawful. Private-sector employment is governed by Federal Decree-Law No. 33 of 2021, amended in 2024 by Federal Decree-Law No. 9 of 2024. Those amendments changed both the time limit for claims and the route they follow.",
          ar: "تنشأ أغلب منازعات العمل في الدولة عند انتهاء العلاقة: رواتب غير مدفوعة، ورصيد الإجازات، وبدل مهلة الإنذار، ومكافأة نهاية الخدمة، وأحيانًا الادعاء بعدم مشروعية الإنهاء ذاته. ويحكم علاقات العمل في القطاع الخاص المرسوم بقانون اتحادي رقم 33 لسنة 2021، المعدّل عام 2024 بالمرسوم بقانون اتحادي رقم 9 لسنة 2024، الذي غيّر مدة رفع الدعوى والمسار الذي تسلكه.",
        },
      },
      {
        type: "h2",
        text: { en: "Start with MOHRE", ar: "البداية من الوزارة" },
      },
      {
        type: "p",
        text: {
          en: "A labour claim begins with a complaint to the Ministry of Human Resources and Emiratisation (MOHRE), which first tries to settle the dispute. For disputes of up to AED 50,000, MOHRE can issue a binding decision, which either party may challenge before the court within a short period. Larger disputes that are not settled are referred to the competent court.",
          ar: "تبدأ المطالبة العمالية بشكوى إلى وزارة الموارد البشرية والتوطين، التي تحاول أولًا تسوية النزاع ودّيًا. وفي المنازعات التي لا تتجاوز قيمتها 50,000 درهم، للوزارة إصدار قرار ملزم يجوز لأي من الطرفين الطعن فيه أمام المحكمة خلال مدة قصيرة، أما المنازعات الأكبر التي لا تتم تسويتها فتُحال إلى المحكمة المختصة.",
        },
      },
      {
        type: "h2",
        text: { en: "The two-year time limit", ar: "مدة السنتين" },
      },
      {
        type: "p",
        text: {
          en: "Following the 2024 amendments, a labour claim must generally be brought within two years of the end of employment. A claim filed late may not be heard at all, so employees should not wait to see whether a former employer pays voluntarily.",
          ar: "بعد تعديلات عام 2024، يجب في الغالب رفع الدعوى العمالية خلال سنتين من انتهاء علاقة العمل، وقد لا تُسمع الدعوى المتأخرة أصلًا، ولذلك لا ينبغي للعامل الانتظار لمعرفة ما إذا كان صاحب العمل السابق سيسدد طوعًا.",
        },
      },
      {
        type: "h2",
        text: { en: "What is usually owed", ar: "المستحقات المعتادة" },
      },
      {
        type: "p",
        text: {
          en: "Entitlements typically include unpaid wages up to the last working day, accrued and unused annual leave, pay in lieu of any notice not worked, and the end-of-service gratuity, which is calculated on the last basic wage and the length of continuous service. The employment contract, payslips and bank statements are the starting point for any calculation.",
          ar: "تشمل المستحقات عادةً الأجور غير المدفوعة حتى آخر يوم عمل، ورصيد الإجازة السنوية المستحقة وغير المستخدمة، وبدل مهلة الإنذار غير المقضية، ومكافأة نهاية الخدمة المحسوبة على أساس آخر أجر أساسي ومدة الخدمة المتصلة. ويُعد عقد العمل وكشوف الرواتب وكشوف الحساب البنكي نقطة البداية لأي احتساب.",
        },
      },
      {
        type: "h2",
        text: { en: "Unlawful termination", ar: "الإنهاء غير المشروع" },
      },
      {
        type: "p",
        text: {
          en: "The Labour Relations Law treats termination as unlawful in defined cases — notably where an employee is dismissed because they filed a well-founded complaint with the Ministry or a claim against the employer. The court then sets fair compensation, taking into account the type of work, the harm and the length of service, but it cannot exceed three months' wages at the last wage received. This is in addition to notice pay and the end-of-service gratuity, not a substitute for them.",
          ar: "يعدّ قانون تنظيم علاقات العمل إنهاء الخدمة غير مشروع في حالات محددة، أبرزها فصل العامل بسبب تقديمه شكوى جدية إلى الوزارة أو دعوى ضد صاحب العمل ثبتت صحتها. وتقدّر المحكمة عندئذ تعويضًا عادلًا مع مراعاة نوع العمل ومقدار الضرر ومدة الخدمة، على ألا يجاوز أجر ثلاثة أشهر بحسب آخر أجر كان يتقاضاه العامل، وذلك إضافة إلى بدل مهلة الإنذار ومكافأة نهاية الخدمة لا بديلًا عنهما.",
        },
      },
      { type: "h2", text: { en: "For employers", ar: "بالنسبة لأصحاب العمل" } },
      {
        type: "p",
        text: {
          en: "Clear contracts, accurate wage records, documented warnings and a written termination decision with the correct notice are the best protection against later claims. Paying final entitlements promptly also limits exposure.",
          ar: "تمثل العقود الواضحة وسجلات الأجور الدقيقة والإنذارات الموثقة وقرار الإنهاء المكتوب مع مراعاة مهلة الإنذار الصحيحة أفضل حماية من المطالبات اللاحقة، كما أن سداد المستحقات النهائية دون تأخير يحدّ من المخاطر.",
        },
      },
      {
        type: "h2",
        text: { en: "Frequently asked questions", ar: "أسئلة شائعة" },
      },
      {
        type: "faq",
        q: {
          en: "Can I go straight to court?",
          ar: "هل يمكنني اللجوء إلى المحكمة مباشرة؟",
        },
        a: {
          en: "In general, no. A complaint must first be registered with MOHRE, which attempts settlement or decides smaller claims.",
          ar: "في الغالب لا؛ إذ يجب أولًا تسجيل شكوى لدى الوزارة، التي تحاول التسوية أو تفصل في المطالبات الأقل قيمة.",
        },
      },
      {
        type: "faq",
        q: {
          en: "Does this apply to free zones?",
          ar: "هل ينطبق ذلك على المناطق الحرة؟",
        },
        a: {
          en: "It applies in most free zones, but the DIFC and ADGM have their own employment laws and courts, and domestic workers are covered by a separate law.",
          ar: "ينطبق في أغلب المناطق الحرة، غير أن لمركز دبي المالي العالمي وسوق أبوظبي العالمي قوانين عمل ومحاكم خاصة بهما، كما تخضع العمالة المساعدة لقانون مستقل.",
        },
      },
      {
        type: "sources",
        items: {
          en: [
            "Federal Decree-Law No. 33 of 2021 regulating Labour Relations",
            "Federal Decree-Law No. 9 of 2024 amending certain provisions of Federal Decree-Law No. 33 of 2021",
            "Cabinet Resolution No. 1 of 2022 (Executive Regulations)",
          ],
          ar: [
            "المرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن تنظيم علاقات العمل",
            "المرسوم بقانون اتحادي رقم 9 لسنة 2024 بتعديل بعض أحكام المرسوم بقانون اتحادي رقم 33 لسنة 2021",
            "قرار مجلس الوزراء رقم 1 لسنة 2022 بشأن اللائحة التنفيذية",
          ],
        },
      },
    ],
  },

  /* ── 4 ── Off-plan disputes (Dubai) ───────────────────────────── */
  {
    slug: "dubai-off-plan-property-disputes",
    image: {
      src: "/images/insights/dubai-construction-offplan.webp",
      alt: {
        en: "Tower under construction with cranes in Dubai",
        ar: "برج قيد الإنشاء ورافعات في دبي",
      },
    },
    title: {
      en: "Off-plan property in Dubai: rights of buyers and developers when a project goes wrong",
      ar: "العقارات على الخريطة في دبي: حقوق المشترين والمطورين عند تعثر المشروع",
    },
    excerpt: {
      en: "Registration, escrow, payment default and delayed handover: the Dubai rules that shape disputes between off-plan buyers and developers.",
      ar: "التسجيل وحساب الضمان والإخلال بالسداد والتأخر في التسليم: قواعد دبي التي تحكم المنازعات بين مشتري العقارات على الخريطة والمطورين.",
    },
    date: "2026-08-25",
    category: { en: "Real Estate", ar: "العقارات" },
    practice: "real-estate-disputes",
    readingMinutes: 6,
    seo: {
      title: {
        en: "Dubai Off-Plan Property Disputes: Buyer and Developer Rights",
        ar: "منازعات العقارات على الخريطة في دبي: حقوق المشتري والمطور",
      },
      description: {
        en: "How Dubai law treats off-plan disputes: registration in the interim register, escrow accounts, developer termination for buyer default and delayed handover.",
        ar: "كيف يعالج قانون دبي منازعات البيع على الخريطة: السجل العقاري المبدئي وحسابات الضمان وفسخ المطور لإخلال المشتري والتأخر في التسليم.",
      },
    },
    keywords: {
      en: [
        "off-plan property dispute Dubai",
        "Dubai developer delay",
        "Law 13 of 2008 Dubai",
        "escrow account Dubai",
        "off-plan refund Dubai",
      ],
      ar: [
        "نزاع عقار على الخريطة دبي",
        "تأخر المطور دبي",
        "قانون 13 لسنة 2008",
        "حساب الضمان العقاري",
        "استرداد مبالغ البيع على الخريطة",
      ],
    },
    reviewed: false,
    placeholder: false,
    body: [
      {
        type: "p",
        text: {
          en: "Buying property off-plan means paying for a unit before it exists. Dubai has built a specific legal framework around that risk, administered by the Dubai Land Department and its regulatory arm, RERA. When a project is delayed, changed or abandoned — or when a buyer stops paying — that framework, together with the sale and purchase agreement, decides what each side can do.",
          ar: "يعني شراء العقار على الخريطة سداد ثمن وحدة لم تُنشأ بعد، وقد وضعت دبي إطارًا قانونيًا خاصًا لمعالجة هذه المخاطر تطبقه دائرة الأراضي والأملاك وذراعها التنظيمية، مؤسسة التنظيم العقاري. وعند تأخر المشروع أو تغييره أو التوقف عنه، أو عند توقف المشتري عن السداد، يحدد هذا الإطار مع اتفاقية البيع والشراء ما يحق لكل طرف.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Registration in the interim register",
          ar: "القيد في السجل العقاري المبدئي",
        },
      },
      {
        type: "p",
        text: {
          en: "Under Dubai Law No. 13 of 2008, off-plan sales must be recorded in the interim real property register. Registration protects the buyer's position and is a precondition for several of the procedures described below. A buyer should obtain and keep the registration certificate.",
          ar: "يوجب قانون دبي رقم 13 لسنة 2008 قيد مبيعات العقارات على الخريطة في السجل العقاري المبدئي، ويحمي هذا القيد مركز المشتري ويُعد شرطًا لعدد من الإجراءات المبينة أدناه، ولذلك ينبغي للمشتري استخراج شهادة القيد والاحتفاظ بها.",
        },
      },
      { type: "h2", text: { en: "Escrow accounts", ar: "حسابات الضمان" } },
      {
        type: "p",
        text: {
          en: "Dubai Law No. 8 of 2007 requires buyer payments to be deposited in an escrow account dedicated to the project and used only for its construction. Escrow does not guarantee completion, but where a project is cancelled by the regulator, refunds follow the escrow framework.",
          ar: "يوجب قانون دبي رقم 8 لسنة 2007 إيداع دفعات المشترين في حساب ضمان مخصص للمشروع، وعدم استخدامها إلا في إنشائه. ولا يضمن حساب الضمان إتمام المشروع، لكن استرداد المبالغ في حال إلغاء المشروع من الجهة التنظيمية يتم وفق أحكام حسابات الضمان.",
        },
      },
      {
        type: "h2",
        text: { en: "If the buyer defaults", ar: "إذا أخلّ المشتري" },
      },
      {
        type: "p",
        text: {
          en: "A developer cannot simply terminate and keep the money. Article 11 of Law No. 13 of 2008, as replaced by Law No. 19 of 2017, requires the developer to notify the Dubai Land Department, which verifies the default and gives the buyer 30 days to perform. If the default continues, what the developer may do depends on the completion stage certified by the Department: above 80%, it may keep the contract and claim the balance, or terminate and retain up to 40% of the unit's value; between 60% and 80%, terminate and retain up to 40%; below 60% with works started, terminate and retain up to 25%; and where works have not started for reasons beyond its control, retain up to 30% of the amounts paid. Any excess must be refunded within the periods the law sets. These rules do not apply to land sales.",
          ar: "لا يجوز للمطور أن يفسخ العقد ويحتفظ بالمبالغ دون إجراءات؛ إذ توجب المادة 11 من القانون رقم 13 لسنة 2008، المستبدلة بالقانون رقم 19 لسنة 2017، على المطور إخطار دائرة الأراضي والأملاك، التي تتحقق من الإخلال وتمهل المشتري ثلاثين يومًا للوفاء. فإذا استمر الإخلال، توقفت خيارات المطور على نسبة الإنجاز التي تعتمدها الدائرة: فإذا تجاوزت 80% جاز له الإبقاء على العقد والمطالبة بباقي الثمن، أو الفسخ واستقطاع ما لا يزيد على 40% من قيمة الوحدة؛ وإذا كانت بين 60% و80% جاز له الفسخ واستقطاع ما لا يزيد على 40%؛ وإذا قلّت عن 60% مع البدء في الأعمال جاز له الفسخ واستقطاع ما لا يزيد على 25%؛ وإذا لم تبدأ الأعمال لأسباب خارجة عن إرادته جاز له استقطاع ما لا يزيد على 30% من المبالغ المدفوعة. ويجب رد ما يزيد على ذلك خلال المدد التي يحددها القانون. ولا تسري هذه الأحكام على بيع الأراضي.",
        },
      },
      {
        type: "h2",
        text: { en: "If the developer delays", ar: "إذا تأخر المطور" },
      },
      {
        type: "p",
        text: {
          en: "These developer-side procedures do not stop a buyer from going to court or to arbitration. Where handover is significantly late, the specifications materially change or the project stalls, a buyer may seek termination with a refund, or compensation, depending on the contract terms, any agreed grace period and the evidence of delay and loss.",
          ar: "لا تمنع هذه الإجراءات المقررة لصالح المطور المشتري من اللجوء إلى القضاء أو التحكيم. فإذا تأخر التسليم تأخرًا كبيرًا أو تغيرت المواصفات تغيرًا جوهريًا أو تعثر المشروع، جاز للمشتري طلب الفسخ مع الاسترداد أو التعويض، بحسب شروط العقد وأي مهلة سماح متفق عليها وأدلة التأخير والضرر.",
        },
      },
      {
        type: "quote",
        text: {
          en: "In off-plan disputes, the stage of completion and the paper trail usually matter more than the headline price.",
          ar: "في منازعات البيع على الخريطة، كثيرًا ما تكون نسبة الإنجاز والمستندات أهم من قيمة الصفقة ذاتها.",
        },
      },
      { type: "h2", text: { en: "Practical steps", ar: "خطوات عملية" } },
      {
        type: "p",
        text: {
          en: "Keep the agreement, all receipts, the registration certificate, construction updates and every message about handover dates. Before stopping payments or signing a settlement, take advice on how it affects your position.",
          ar: "احتفظ بالاتفاقية وجميع الإيصالات وشهادة القيد وتحديثات الإنشاء وكل المراسلات المتعلقة بمواعيد التسليم، واطلب المشورة قبل التوقف عن السداد أو توقيع أي تسوية لمعرفة أثر ذلك على مركزك.",
        },
      },
      {
        type: "h2",
        text: { en: "Frequently asked questions", ar: "أسئلة شائعة" },
      },
      {
        type: "faq",
        q: {
          en: "Do the same rules apply in Ajman?",
          ar: "هل تنطبق القواعد نفسها في عجمان؟",
        },
        a: {
          en: "No. Ajman has its own regulator and legislation, so off-plan rights there must be assessed under Ajman law.",
          ar: "لا؛ فلعجمان جهتها التنظيمية وتشريعاتها الخاصة، ويجب تقييم الحقوق فيها وفق قوانين الإمارة.",
        },
      },
      {
        type: "faq",
        q: {
          en: "Can the developer keep everything I paid?",
          ar: "هل يجوز للمطور الاحتفاظ بكل ما دفعته؟",
        },
        a: {
          en: "Only where the project is more than 80% complete and the developer chooses to keep the contract, in which case it retains what was paid and claims the balance. If it terminates, retention is capped by the completion stage, and the excess must be refunded.",
          ar: "فقط إذا تجاوزت نسبة إنجاز المشروع 80% واختار المطور الإبقاء على العقد، فيحتفظ بما دُفع ويطالب بباقي الثمن. أما إذا فسخ العقد، فيتقيد الاستقطاع بحسب نسبة الإنجاز، ويجب رد ما يزيد على ذلك.",
        },
      },
      {
        type: "sources",
        items: {
          en: [
            "Dubai Law No. 13 of 2008 regulating the Interim Real Property Register, Article 11 as replaced by Law No. 19 of 2017 — Dubai Legislation Portal, dlp.dubai.gov.ae",
            "Dubai Law No. 8 of 2007 concerning Escrow Accounts for Real Estate Development",
            "Dubai Law No. 7 of 2006 concerning Real Property Registration",
          ],
          ar: [
            "قانون دبي رقم 13 لسنة 2008 بشأن تنظيم السجل العقاري المبدئي، المادة 11 المستبدلة بالقانون رقم 19 لسنة 2017 — بوابة دبي للتشريعات dlp.dubai.gov.ae",
            "قانون دبي رقم 8 لسنة 2007 بشأن حسابات ضمان التطوير العقاري",
            "قانون دبي رقم 7 لسنة 2006 بشأن التسجيل العقاري",
          ],
        },
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

/** Published = approved by the legal reviewer and not a layout placeholder. */
export const isPublished = (a: Insight) => a.reviewed && !a.placeholder;

export const sortedInsights = () =>
  [...insights].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(iso: string, locale: "en" | "ar") {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
