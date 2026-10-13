import type { Localized } from "@/i18n/config";

/**
 * Website legal pages: Privacy Policy, Data Protection & Consent Notice,
 * Terms of Use and Legal Disclaimer.
 *
 * STATUS: DRAFT FOR LEGAL REVIEW (October 2026). Written to describe only what the
 * website actually does today:
 *   - one inquiry/consultation form (src/components/forms/InquiryForm.tsx), whose
 *     data is sent to the firm through INQUIRY_WEBHOOK_URL (src/app/api/inquiry);
 *   - no analytics, advertising or tracking cookies; no cookies set by the site;
 *   - fonts are self-hosted; Google Maps is embedded only once map links exist.
 * If analytics, a chat widget, a CRM or any other service is added, these texts
 * MUST be updated before it goes live.
 *
 * Bracketed items marked CLIENT DATA REQUIRED / LEGAL CONFIRMATION REQUIRED must be
 * completed and approved by the firm (Legal Consultant Abanoub Awni) before launch.
 */
export type LegalSection = { title: Localized; body: Localized<string[]> };

export type LegalDoc = {
  slug: "privacy-policy" | "data-protection-notice" | "terms-of-use" | "disclaimer";
  title: Localized;
  lead: Localized;
  /** ISO date of the current version. Set on approval. */
  updated: string;
  sections: LegalSection[];
  reviewed: boolean;
};

const CONTACT_EMAIL = {
  en: "[CLIENT DATA REQUIRED — GENERAL EMAIL ADDRESS]",
  ar: "[بيانات مطلوبة من المكتب — البريد الإلكتروني العام]",
};

const contactLine: Localized = {
  en: `To exercise your rights or ask about this notice, write to ${CONTACT_EMAIL.en}, or to the Dubai or Ajman office at the addresses on our Contact & Locations page.`,
  ar: `لممارسة حقوقك أو الاستفسار عن هذا الإشعار، يمكنك مراسلتنا على ${CONTACT_EMAIL.ar}، أو على عنوان مكتب دبي أو مكتب عجمان الوارد في صفحة العناوين والتواصل.`,
};

export const legalDocs: LegalDoc[] = [
  /* ───────────────────────── PRIVACY POLICY ───────────────────────── */
  {
    slug: "privacy-policy",
    title: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
    lead: {
      en: "How the firm collects, uses and protects personal information received through this website.",
      ar: "كيف يجمع المكتب المعلومات الشخصية التي يتلقاها عبر هذا الموقع ويستخدمها ويحميها.",
    },
    updated: "2026-10-10",
    reviewed: false,
    sections: [
      {
        title: { en: "Who we are", ar: "من نحن" },
        body: {
          en: [
            "This website is operated by Fahad Al Zeyoudi (\"the firm\", \"we\"), with offices in Dubai and Ajman, United Arab Emirates. [LEGAL CONFIRMATION REQUIRED — registered legal name and licence details of the firm.]",
            "We handle personal information in accordance with the laws of the United Arab Emirates, including Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data where it applies, and with the professional confidentiality obligations of advocates and legal consultants.",
          ],
          ar: [
            "يُدار هذا الموقع من قبل مكتب فهد الزيودي للمحاماة («المكتب» أو «نحن»)، وله مكتبان في دبي وعجمان بدولة الإمارات العربية المتحدة. [تأكيد قانوني مطلوب — الاسم القانوني المسجل للمكتب وبيانات الترخيص.]",
            "نتعامل مع المعلومات الشخصية وفقًا لقوانين دولة الإمارات العربية المتحدة، بما فيها المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية متى انطبق، ووفقًا لالتزامات السرية المهنية المفروضة على المحامين والمستشارين القانونيين.",
          ],
        },
      },
      {
        title: { en: "Information we collect", ar: "المعلومات التي نجمعها" },
        body: {
          en: [
            "When you use the inquiry and consultation form, we collect the information you enter: your name, email address, phone number, the type of request, the subject of your matter, your message, your preferred contact method and preferred office, and your confirmation that we may contact you.",
            "When you contact us directly by email, phone or WhatsApp, we receive the information you choose to share.",
            "Like most websites, our hosting provider automatically records limited technical information, such as IP address, browser type and the pages requested, for security and operation of the site.",
            "Please do not send confidential documents or sensitive personal information through the website. The form is intended for a brief description of your matter only.",
          ],
          ar: [
            "عند استخدامك نموذج الاستفسار والاستشارة، نجمع المعلومات التي تدخلها: الاسم والبريد الإلكتروني ورقم الهاتف ونوع الطلب وموضوع القضية ورسالتك ووسيلة التواصل والمكتب المفضلين، وموافقتك على تواصلنا معك.",
            "عند تواصلك معنا مباشرة عبر البريد الإلكتروني أو الهاتف أو واتساب، نتلقى المعلومات التي تختار مشاركتها.",
            "كما هو الحال في معظم المواقع، يسجل مزود الاستضافة تلقائيًا معلومات تقنية محدودة، مثل عنوان IP ونوع المتصفح والصفحات المطلوبة، لأغراض الأمان وتشغيل الموقع.",
            "يرجى عدم إرسال مستندات سرية أو معلومات شخصية حساسة عبر الموقع؛ فالنموذج مخصص لوصف موجز لقضيتك فقط.",
          ],
        },
      },
      {
        title: { en: "How we use it", ar: "كيف نستخدمها" },
        body: {
          en: [
            "We use the information you submit to review your inquiry, to contact you about it, to arrange a consultation or appointment, and to check for conflicts of interest before accepting any instruction.",
            "We do not sell your information, and we do not use it for advertising.",
          ],
          ar: [
            "نستخدم المعلومات التي ترسلها لدراسة استفسارك والتواصل معك بشأنه وترتيب استشارة أو موعد، وللتحقق من عدم وجود تعارض في المصالح قبل قبول أي توكيل.",
            "لا نبيع معلوماتك ولا نستخدمها لأغراض إعلانية.",
          ],
        },
      },
      {
        title: { en: "Cookies and analytics", ar: "ملفات تعريف الارتباط والتحليلات" },
        body: {
          en: [
            "This website does not currently use analytics, advertising or tracking cookies. If our office pages display an embedded Google Map, Google may set its own cookies when the map loads, under Google's privacy policy.",
            "If we introduce analytics or other cookies in the future, we will update this policy and, where required, ask for your consent first.",
          ],
          ar: [
            "لا يستخدم هذا الموقع حاليًا ملفات تعريف ارتباط للتحليلات أو الإعلانات أو التتبع. وإذا عرضت صفحات مكاتبنا خريطة Google مضمّنة، فقد تضع Google ملفات تعريف الارتباط الخاصة بها عند تحميل الخريطة وفق سياسة الخصوصية لديها.",
            "إذا استخدمنا مستقبلًا أدوات تحليلات أو ملفات تعريف ارتباط أخرى، فسنحدّث هذه السياسة ونطلب موافقتك مسبقًا متى كان ذلك مطلوبًا.",
          ],
        },
      },
      {
        title: { en: "Who we share it with", ar: "الجهات التي نشاركها معها" },
        body: {
          en: [
            "Your inquiry is delivered to the firm through a service provider that receives form submissions on our behalf. [CLIENT DATA REQUIRED — name of the inquiry delivery service (email relay, CRM or messaging platform) and where its data is stored.]",
            "Our website is hosted by a third-party provider. [CLIENT DATA REQUIRED — hosting provider and hosting location.]",
            "We may disclose information where required by law or by a competent authority. Otherwise, we do not share your information with third parties without your consent.",
          ],
          ar: [
            "يُسلَّم استفسارك إلى المكتب عبر مزود خدمة يتلقى بيانات النموذج نيابة عنا. [بيانات مطلوبة من المكتب — اسم خدمة استلام الاستفسارات (بريد إلكتروني أو نظام إدارة علاقات العملاء أو منصة مراسلة) ومكان تخزين بياناتها.]",
            "يستضيف موقعنا مزود خدمة خارجي. [بيانات مطلوبة من المكتب — مزود الاستضافة وموقع الاستضافة.]",
            "قد نفصح عن المعلومات متى اقتضى القانون ذلك أو طلبته جهة مختصة، ولا نشارك معلوماتك مع الغير فيما عدا ذلك دون موافقتك.",
          ],
        },
      },
      {
        title: { en: "Retention and security", ar: "الاحتفاظ والأمان" },
        body: {
          en: [
            "We keep inquiry information only for as long as needed to respond to you and to meet our legal and professional obligations. Inquiries that do not lead to an engagement are deleted after [LEGAL CONFIRMATION REQUIRED — retention period].",
            "We use reasonable technical and organisational measures to protect personal information, including encrypted (HTTPS) transmission of the form. No method of transmission over the internet is completely secure.",
          ],
          ar: [
            "نحتفظ بمعلومات الاستفسار للمدة اللازمة للرد عليك والوفاء بالتزاماتنا القانونية والمهنية فقط، وتُحذف الاستفسارات التي لا يترتب عليها توكيل بعد [تأكيد قانوني مطلوب — مدة الاحتفاظ].",
            "نتخذ تدابير تقنية وتنظيمية معقولة لحماية المعلومات الشخصية، منها نقل بيانات النموذج بصورة مشفرة (HTTPS)، علمًا بأنه لا توجد وسيلة نقل عبر الإنترنت آمنة تمامًا.",
          ],
        },
      },
      {
        title: { en: "Your rights", ar: "حقوقك" },
        body: {
          en: [
            "Subject to applicable law, you may ask to access the personal information we hold about you, to correct it, to have it deleted, to restrict or object to its processing, and to withdraw your consent at any time. Withdrawing consent does not affect processing already carried out.",
          ],
          ar: [
            "مع مراعاة القانون المعمول به، يحق لك طلب الاطلاع على معلوماتك الشخصية لدينا أو تصحيحها أو حذفها أو تقييد معالجتها أو الاعتراض عليها، وسحب موافقتك في أي وقت، دون أن يؤثر سحب الموافقة في المعالجة التي تمت قبله.",
          ],
        },
      },
      {
        title: { en: "Changes to this policy", ar: "تعديل هذه السياسة" },
        body: {
          en: ["We may update this policy from time to time. The date of the current version appears at the top of this page."],
          ar: ["قد نُحدّث هذه السياسة من وقت لآخر، ويظهر تاريخ النسخة الحالية أعلى هذه الصفحة."],
        },
      },
    ],
  },

  /* ─────────────────── DATA PROTECTION & CONSENT NOTICE ─────────────────── */
  {
    slug: "data-protection-notice",
    title: { en: "Data Protection & Consent Notice", ar: "إشعار حماية البيانات والموافقة" },
    lead: {
      en: "What you agree to when you send an inquiry through this website, and how you can change your mind.",
      ar: "ما توافق عليه عند إرسال استفسار عبر هذا الموقع، وكيف يمكنك العدول عن موافقتك.",
    },
    updated: "2026-10-10",
    reviewed: false,
    sections: [
      {
        title: { en: "What you consent to", ar: "ما الذي توافق عليه" },
        body: {
          en: [
            "By ticking the consent box on the inquiry form, you agree that the firm may use the details you submit to review your inquiry and to contact you about it by your preferred method — phone, email or WhatsApp.",
            "Your consent covers this inquiry only. It does not subscribe you to newsletters or marketing, and it does not create a lawyer-client relationship.",
          ],
          ar: [
            "بتأشيرك على خانة الموافقة في نموذج الاستفسار، فإنك توافق على أن يستخدم المكتب البيانات التي ترسلها لدراسة استفسارك والتواصل معك بشأنه بالوسيلة التي تفضلها: الهاتف أو البريد الإلكتروني أو واتساب.",
            "تقتصر موافقتك على هذا الاستفسار، ولا تعني الاشتراك في نشرات أو رسائل تسويقية، ولا تُنشئ علاقة توكيل بين المحامي والموكل.",
          ],
        },
      },
      {
        title: { en: "Why we ask", ar: "لماذا نطلب الموافقة" },
        body: {
          en: [
            "We need your contact details to reply, and a short description of your matter to direct it to the right member of the team and to check for conflicts of interest.",
          ],
          ar: [
            "نحتاج إلى بيانات التواصل للرد عليك، وإلى وصف موجز لقضيتك لإحالتها إلى عضو الفريق المناسب وللتحقق من عدم وجود تعارض في المصالح.",
          ],
        },
      },
      {
        title: { en: "How your inquiry reaches us", ar: "كيف يصل إلينا استفسارك" },
        body: {
          en: [
            "The form sends your inquiry over an encrypted connection to the firm's inquiry service. [CLIENT DATA REQUIRED — name of the delivery service and storage location.] Only members of the firm's team who need to handle the inquiry can access it.",
            "If you choose WhatsApp as your preferred contact method, our reply will be sent through WhatsApp, which is operated by a third party under its own terms and privacy policy.",
          ],
          ar: [
            "يرسل النموذج استفسارك عبر اتصال مشفّر إلى خدمة استلام الاستفسارات لدى المكتب. [بيانات مطلوبة من المكتب — اسم خدمة الاستلام وموقع التخزين.] ولا يطّلع عليه إلا أعضاء فريق المكتب المعنيون بمتابعته.",
            "إذا اخترت واتساب وسيلة للتواصل، فسيصلك ردنا عبر واتساب، وهو خدمة يديرها طرف ثالث وفق شروطه وسياسة الخصوصية الخاصة به.",
          ],
        },
      },
      {
        title: { en: "Cookies", ar: "ملفات تعريف الارتباط" },
        body: {
          en: [
            "The website does not currently set analytics or advertising cookies, so no cookie consent is requested. If that changes, you will be asked before any non-essential cookie is used.",
          ],
          ar: [
            "لا يضع الموقع حاليًا ملفات تعريف ارتباط للتحليلات أو الإعلانات، ولذلك لا نطلب موافقتك عليها. وإذا تغيّر ذلك، فسنطلب موافقتك قبل استخدام أي ملفات غير ضرورية.",
          ],
        },
      },
      {
        title: { en: "Withdrawing consent and your rights", ar: "سحب الموافقة وحقوقك" },
        body: {
          en: [
            "You may withdraw your consent at any time, and ask us to access, correct or delete the information you sent, subject to any legal or professional obligation that requires us to keep it.",
          ],
          ar: [
            "يحق لك سحب موافقتك في أي وقت، وطلب الاطلاع على المعلومات التي أرسلتها أو تصحيحها أو حذفها، مع مراعاة أي التزام قانوني أو مهني يقتضي الاحتفاظ بها.",
          ],
        },
      },
    ],
  },

  /* ───────────────────────── TERMS OF USE ───────────────────────── */
  {
    slug: "terms-of-use",
    title: { en: "Terms of Use", ar: "شروط الاستخدام" },
    lead: {
      en: "The terms that apply when you use this website.",
      ar: "الشروط التي تسري عند استخدامك هذا الموقع.",
    },
    updated: "2026-10-10",
    reviewed: false,
    sections: [
      {
        title: { en: "Use of the website", ar: "استخدام الموقع" },
        body: {
          en: [
            "By using this website you accept these terms. If you do not accept them, please do not use the website.",
            "You may view and print pages for your personal, non-commercial use. You must not misuse the website, interfere with its operation or attempt to gain unauthorised access to it.",
          ],
          ar: [
            "باستخدامك هذا الموقع فإنك توافق على هذه الشروط، وإذا لم توافق عليها فيرجى عدم استخدام الموقع.",
            "يجوز لك عرض الصفحات وطباعتها لاستخدامك الشخصي غير التجاري، ولا يجوز لك إساءة استخدام الموقع أو التدخل في تشغيله أو محاولة الوصول إليه دون إذن.",
          ],
        },
      },
      {
        title: { en: "Website content is not legal advice", ar: "محتوى الموقع ليس استشارة قانونية" },
        body: {
          en: [
            "Content on this website, including articles and practice information, is general information about UAE law at the date it was written. It is not legal advice and should not be relied on as such. Laws change, and the right course always depends on the facts of each matter.",
          ],
          ar: [
            "يمثل محتوى هذا الموقع، بما فيه المقالات ومعلومات مجالات الممارسة، معلومات عامة عن القانون الإماراتي في تاريخ كتابتها، ولا يُعد استشارة قانونية ولا يجوز الاعتماد عليه بوصفه كذلك؛ إذ تتغير القوانين، ويتوقف الإجراء المناسب دائمًا على وقائع كل قضية.",
          ],
        },
      },
      {
        title: { en: "Intellectual property", ar: "الملكية الفكرية" },
        body: {
          en: [
            "The firm's name, logo, text, design and other content on this website belong to the firm or are used with permission. You may not reproduce, adapt or distribute them without the firm's prior written consent, except for short quotations with clear attribution.",
          ],
          ar: [
            "يعود اسم المكتب وشعاره ونصوص الموقع وتصميمه وسائر محتواه إلى المكتب أو تُستخدم بإذن، ولا يجوز نسخها أو تعديلها أو توزيعها دون موافقة كتابية مسبقة من المكتب، باستثناء الاقتباسات القصيرة مع الإشارة الواضحة إلى المصدر.",
          ],
        },
      },
      {
        title: { en: "Information you send us", ar: "المعلومات التي ترسلها إلينا" },
        body: {
          en: [
            "Information you send through the website must be accurate and must not be unlawful, offensive or infringe the rights of others. Sending an inquiry does not oblige the firm to accept your matter.",
          ],
          ar: [
            "يجب أن تكون المعلومات التي ترسلها عبر الموقع صحيحة، وألا تكون مخالفة للقانون أو مسيئة أو منتهكة لحقوق الغير. ولا يُلزم إرسال الاستفسار المكتب بقبول قضيتك.",
          ],
        },
      },
      {
        title: { en: "External links", ar: "الروابط الخارجية" },
        body: {
          en: [
            "Links to other websites, including official legislation portals and map services, are provided for convenience. The firm is not responsible for their content or availability.",
          ],
          ar: [
            "تُتاح الروابط إلى المواقع الأخرى، ومنها بوابات التشريعات الرسمية وخدمات الخرائط، للتيسير فقط، ولا يتحمل المكتب مسؤولية محتواها أو توفرها.",
          ],
        },
      },
      {
        title: { en: "Limitation of liability", ar: "حدود المسؤولية" },
        body: {
          en: [
            "We take care to keep the website accurate and available, but we do not guarantee that it will be uninterrupted or error-free. To the extent permitted by law, the firm is not liable for loss arising from reliance on website content or from the use of, or inability to use, the website.",
          ],
          ar: [
            "نحرص على دقة الموقع وإتاحته، لكننا لا نضمن عمله دون انقطاع أو خلوه من الأخطاء. وفي الحدود التي يسمح بها القانون، لا يتحمل المكتب مسؤولية أي خسارة تنشأ عن الاعتماد على محتوى الموقع أو عن استخدامه أو تعذر استخدامه.",
          ],
        },
      },
      {
        title: { en: "Governing law", ar: "القانون الواجب التطبيق" },
        body: {
          en: [
            "These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of [LEGAL CONFIRMATION REQUIRED — Dubai], and the courts of that Emirate have jurisdiction over any dispute arising from them.",
          ],
          ar: [
            "تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة كما تُطبَّق في إمارة [تأكيد قانوني مطلوب — دبي]، وتختص محاكم تلك الإمارة بنظر أي نزاع ينشأ عنها.",
          ],
        },
      },
      {
        title: { en: "Changes and contact", ar: "التعديلات والتواصل" },
        body: {
          en: [
            "We may update these terms at any time; the current version is the one published on this page.",
            `Questions about these terms can be sent to ${CONTACT_EMAIL.en}.`,
          ],
          ar: [
            "يجوز لنا تعديل هذه الشروط في أي وقت، وتكون النسخة السارية هي المنشورة في هذه الصفحة.",
            `يمكن إرسال الاستفسارات حول هذه الشروط إلى ${CONTACT_EMAIL.ar}.`,
          ],
        },
      },
    ],
  },

  /* ───────────────────────── DISCLAIMER ───────────────────────── */
  {
    slug: "disclaimer",
    title: { en: "Legal Disclaimer", ar: "إخلاء المسؤولية" },
    lead: {
      en: "Please read this before relying on anything published on this website.",
      ar: "يرجى قراءة ما يلي قبل الاعتماد على أي محتوى منشور في هذا الموقع.",
    },
    updated: "2026-10-10",
    reviewed: false,
    sections: [
      {
        title: { en: "General information only", ar: "معلومات عامة فقط" },
        body: {
          en: [
            "The content of this website is provided for general information about the law and the firm's services. It does not constitute legal advice on any particular matter, and it may not reflect changes in the law made after it was written.",
          ],
          ar: [
            "يُقدَّم محتوى هذا الموقع لأغراض المعلومات العامة عن القانون وخدمات المكتب، ولا يُعد استشارة قانونية في أي مسألة بعينها، وقد لا يعكس التعديلات التشريعية اللاحقة لتاريخ كتابته.",
          ],
        },
      },
      {
        title: { en: "No lawyer-client relationship", ar: "لا تنشأ علاقة توكيل" },
        body: {
          en: [
            "Reading this website, or contacting the firm through it, does not create a lawyer-client relationship. A relationship exists only once the firm has confirmed in writing that it will act for you, on agreed terms.",
            "Until then, please do not send confidential information or documents through the website.",
          ],
          ar: [
            "لا تنشأ علاقة توكيل بين المحامي والموكل بمجرد قراءة هذا الموقع أو التواصل مع المكتب من خلاله، ولا تقوم هذه العلاقة إلا بعد تأكيد المكتب كتابيًا قبوله تمثيلك وفق شروط متفق عليها.",
            "ويرجى إلى ذلك الحين عدم إرسال معلومات أو مستندات سرية عبر الموقع.",
          ],
        },
      },
      {
        title: { en: "No guarantee of outcome", ar: "لا ضمان للنتائج" },
        body: {
          en: [
            "Every matter depends on its own facts, evidence and the applicable law and procedure. References to the firm's experience do not mean that a similar result can be achieved in another matter.",
          ],
          ar: [
            "تتوقف كل قضية على وقائعها وأدلتها والقانون والإجراءات الواجبة التطبيق، ولا تعني الإشارة إلى خبرة المكتب إمكانية تحقيق نتيجة مماثلة في قضية أخرى.",
          ],
        },
      },
      {
        title: { en: "Jurisdiction", ar: "الاختصاص" },
        body: {
          en: [
            "Laws and procedures differ between federal and local courts, between emirates and in the financial free zones. Content on this website should not be applied to your situation without advice on the facts.",
          ],
          ar: [
            "تختلف القوانين والإجراءات بين المحاكم الاتحادية والمحلية، وبين الإمارات، وفي المناطق المالية الحرة، ولا ينبغي تطبيق محتوى هذا الموقع على حالتك دون مشورة مبنية على الوقائع.",
          ],
        },
      },
      {
        title: { en: "External links and accuracy", ar: "الروابط الخارجية ودقة المعلومات" },
        body: {
          en: [
            "We take care to keep content accurate and current but cannot guarantee that it is complete or up to date at all times. Links to external websites are provided for convenience only.",
          ],
          ar: [
            "نحرص على دقة المحتوى وحداثته، لكننا لا نضمن اكتماله أو تحديثه في جميع الأوقات. وتُتاح الروابط إلى المواقع الخارجية للتيسير فقط.",
          ],
        },
      },
    ],
  },
];

/** Contact line appended to the privacy and consent notices. */
export const legalContact = contactLine;

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug);
}
