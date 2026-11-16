import type { Locale } from "./site";

export type CapabilityIcon =
  | "target"
  | "traffic"
  | "population"
  | "competitors"
  | "activity"
  | "map"
  | "ai"
  | "business";

export type SkillIcon = "code" | "layers" | "ai" | "tools" | "database";

export type Screenshot = {
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
};

const en = {
  meta: {
    title: "Raghad Altuwayjiri — Software Developer | Full-Stack & AI Integration",
    description:
      "Portfolio of Raghad Altuwayjiri, a Computer Science student at Qassim University and software developer who independently built AYN, an AI-powered commercial site selection platform.",
    ogAlt: "Raghad Altuwayjiri — Software Developer, Full-Stack Development & AI Integration",
  },
  a11y: {
    skip: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Primary",
    home: "Raghad Altuwayjiri — home",
    newTab: "(opens in a new tab)",
  },
  nav: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    achievements: "Achievements",
    contact: "Contact",
    switchLabel: "العربية",
    switchAria: "View this site in Arabic",
  },
  hero: {
    eyebrow: "Software Developer · Buraydah, Saudi Arabia",
    name: "Raghad Altuwayjiri",
    title: "Software Developer | Full-Stack Development | AI Integration",
    intro:
      "I build intelligent, practical software that solves real-world problems. I independently developed AYN — an AI-powered commercial site selection platform — from initial development to live deployment.",
    ctaPrimary: "Explore My Work",
    ctaSecondary: "Contact Me",
    facts: [
      { value: "AYN", label: "AI platform, live in production" },
      { value: "1st", label: "Innovation Incubator Hackathon" },
      { value: "B.Sc.", label: "Computer Science, Qassim University" },
    ],
    visual: {
      label: "AYN · site analysis",
      status: "Live",
      metric: "Location suitability",
      layers: ["Traffic", "Density", "Competitors"],
    },
  },
  about: {
    eyebrow: "About",
    title: "Building intelligent software for real decisions.",
    paragraphs: [
      "I am a Computer Science student at Qassim University with hands-on experience in software development, AI integration, database management, and software testing.",
      "I independently developed AYN, an AI-powered commercial site selection platform, taking it from initial development to deployment using AI-assisted development tools. Along the way I built frontend and backend components, integrated AI agents, and worked with APIs and geospatial data. I also led the AYN project team within the Innovation Incubator.",
      "Beyond AYN, I have worked on database preparation for mobile applications and on testing applications to find and document bugs — work that taught me how much reliable software depends on clean data and careful quality checks.",
    ],
    educationLabel: "Education",
    degree: "B.Sc. in Computer Science",
    university: "Qassim University",
    graduation: "Expected graduation: 2028",
    languagesLabel: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Upper-Intermediate" },
    ],
    locationLabel: "Location",
    location: "Buraydah, Saudi Arabia",
    interestsLabel: "Interests",
    interests: [
      "Intelligent software solutions",
      "AI agents & integration",
      "Geospatial data",
      "Practical, real-world applications",
    ],
  },
  ayn: {
    eyebrow: "Featured Project",
    name: "AYN",
    nameAr: "أَيْن",
    category: "AI-Powered Commercial Site Selection Platform",
    summary:
      "AYN is an AI-powered spatial intelligence platform that helps entrepreneurs and investors identify the most suitable locations for their commercial businesses. It analyzes commercial and spatial indicators to support informed investment decisions — before committing to a location.",
    cta: "Explore AYN Live",
    ctaNote: "Try the deployed platform at ayn-wheat.vercel.app",
    liveBadge: "Live platform",
    roleLabel: "My role",
    role: "Independent Full-Stack Developer & Project Lead",
    year: "2026",
    capabilitiesTitle: "Key capabilities",
    capabilities: [
      { icon: "target", text: "Commercial location suitability analysis" },
      { icon: "traffic", text: "Traffic and movement analysis" },
      { icon: "population", text: "Population density indicators" },
      { icon: "competitors", text: "Competitor distribution analysis" },
      { icon: "activity", text: "Commercial activity analysis" },
      { icon: "map", text: "Interactive maps & geospatial visualization" },
      { icon: "ai", text: "AI-powered location recommendations" },
      { icon: "business", text: "Business-specific analysis per project type" },
    ] as { icon: CapabilityIcon; text: string }[],
    contributionsTitle: "My contributions",
    contributions: [
      "Independently developed the platform from initial development to deployment using AI-assisted development tools.",
      "Developed frontend and backend components.",
      "Integrated AI agents using the OpenAI Agents SDK.",
      "Worked with APIs, geospatial data, and commercial site analysis.",
      "Led the project team within the Innovation Incubator.",
    ],
    stackTitle: "Technology stack",
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "OpenAI Agents SDK",
      "APIs",
      "Git",
      "Docker",
    ],
    galleryTitle: "Inside the platform",
    galleryNote: "Actual screenshots of the deployed platform. The AYN interface is in Arabic.",
    galleryPrev: "Previous screenshot",
    galleryNext: "Next screenshot",
    galleryOpen: "View full size",
    galleryClose: "Close",
    galleryCounter: "{i} of {n}",
    screenshots: [
      {
        src: "/ayn/01-landing.webp",
        width: 1274,
        height: 589,
        title: "Landing page",
        caption: "The AYN landing page with a sample location analysis card showing a suitability score.",
        alt: "AYN landing page in Arabic with the headline 'Choose the best location for your project' and a location analysis card showing a 92% suitability score.",
      },
      {
        src: "/ayn/02-about.webp",
        width: 1274,
        height: 530,
        title: "Platform overview",
        caption: "AYN introduced as an AI-powered spatial intelligence platform for entrepreneurs and investors.",
        alt: "AYN 'About the platform' page over an aerial city skyline, describing AYN as an AI-powered spatial intelligence platform.",
      },
      {
        src: "/ayn/03-street-analysis.webp",
        width: 1274,
        height: 618,
        title: "Street-level spatial analysis",
        caption: "Analysis dimensions: traffic, population density, commercial competition, rents, and site characteristics.",
        alt: "AYN street-level analysis section with a stylized street map and five analysis dimensions: traffic, population density, commercial competition, rents and site characteristics.",
      },
      {
        src: "/ayn/04-business-form.webp",
        width: 1274,
        height: 619,
        title: "Business input form",
        caption: "Users describe their business — activity type, service model, street priorities, capital, and rent budget.",
        alt: "AYN business input form with options for business type, café type, service model, street selection priorities, total capital and annual rent budget.",
      },
      {
        src: "/ayn/05-results.webp",
        width: 1274,
        height: 616,
        title: "Analysis results",
        caption: "A recommended street with a confidence level and a written rationale based on the collected indicators.",
        alt: "AYN analysis results showing the recommended commercial street, a high confidence label, and an explanation referencing traffic, storefronts and parking.",
      },
      {
        src: "/ayn/06-interactive-map.webp",
        width: 1274,
        height: 618,
        title: "Interactive map",
        caption: "The recommended location on an interactive map, followed by a morning vs. evening comparison.",
        alt: "AYN interactive map built on OpenStreetMap data with the recommended street marked, followed by a morning and evening comparison panel.",
      },
      {
        src: "/ayn/07-neighborhoods.webp",
        width: 1274,
        height: 590,
        title: "Neighborhood selection",
        caption: "Each supported neighborhood has its own analysis approach and path.",
        alt: "AYN neighborhood selection section offering two neighborhoods: Al Olaya in Riyadh and Sultanah (Al Nakheel) in Buraydah.",
      },
    ] as Screenshot[],
  },
  experience: {
    eyebrow: "Experience",
    title: "Hands-on technical experience.",
    items: [
      {
        role: "Database Development & Software Testing",
        type: "Part-Time / Project-Based Contributor",
        period: "",
        points: [
          "Collected, organized, and entered data into databases using suitable programming tools.",
          "Prepared database data for mobile applications, including published and upcoming products.",
          "Tested applications and identified software bugs.",
          "Documented issues to support quality improvements.",
        ],
        tags: ["Database Management", "Data Integration", "Software Testing", "Bug Detection"],
      },
      {
        role: "Independent Full-Stack Developer & Project Lead",
        type: "AYN · Innovation Incubator",
        period: "2026",
        points: [
          "Developed AYN independently from initial development to deployment.",
          "Built frontend and backend components and integrated AI agents with the OpenAI Agents SDK.",
          "Led the AYN project team within the Innovation Incubator.",
        ],
        tags: ["Full-Stack Development", "AI Integration", "Team Leadership"],
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Technical toolkit.",
    groups: [
      { icon: "code", name: "Programming", items: ["Python", "C++", "JavaScript", "TypeScript"] },
      {
        icon: "layers",
        name: "Software Development",
        items: ["Full-Stack Development", "React", "Next.js", "Tailwind CSS"],
      },
      {
        icon: "ai",
        name: "AI & Integration",
        items: ["OpenAI Agents SDK", "AI Agent Integration", "API Integration"],
      },
      { icon: "tools", name: "Tools", items: ["Git", "GitHub", "Docker", "Claude Code"] },
      {
        icon: "database",
        name: "Additional Skills",
        items: ["Database Management", "Data Integration", "Software Testing", "Bug Detection"],
      },
    ] as { icon: SkillIcon; name: string; items: string[] }[],
  },
  achievements: {
    eyebrow: "Achievements",
    title: "Recognition & leadership.",
    items: [
      { mark: "1st", title: "First Place Winner", detail: "Innovation Incubator Hackathon" },
      { mark: "3rd", title: "Third Place", detail: "JadaThon Hackathon" },
      { mark: "Lead", title: "Project Lead — AYN", detail: "Innovation Incubator · 2026" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something useful together.",
    text: "I'm open to opportunities, collaborations, and conversations about software development and AI-powered products. The fastest way to reach me is by email.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    copy: "Copy email address",
    copied: "Copied",
    location: "Buraydah, Saudi Arabia",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Designed & built with Next.js",
    backToTop: "Back to top",
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist.",
    back: "Back to home",
  },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  meta: {
    title: "رغد التويجري — تطوير البرمجيات | الويب المتكامل وتكامل الذكاء الاصطناعي",
    description:
      "الموقع الشخصي لرغد التويجري: تطوير البرمجيات وتكامل الذكاء الاصطناعي، ومنصة «أين» لاختيار المواقع التجارية بالذكاء الاصطناعي، المطوّرة بشكل مستقل من الفكرة حتى الإطلاق.",
    ogAlt: "رغد التويجري — تطوير البرمجيات وتكامل الذكاء الاصطناعي",
  },
  a11y: {
    skip: "تخطَّ إلى المحتوى الرئيسي",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    primaryNav: "التنقل الرئيسي",
    home: "رغد التويجري — الصفحة الرئيسية",
    newTab: "(يفتح في تبويب جديد)",
  },
  nav: {
    about: "نبذة",
    projects: "المشاريع",
    experience: "الخبرات",
    skills: "المهارات",
    achievements: "الإنجازات",
    contact: "تواصل",
    switchLabel: "English",
    switchAria: "عرض الموقع باللغة الإنجليزية",
  },
  hero: {
    eyebrow: "تطوير البرمجيات · بريدة، المملكة العربية السعودية",
    name: "رغد التويجري",
    title: "تطوير البرمجيات | تطوير الويب المتكامل | تكامل الذكاء الاصطناعي",
    intro:
      "أبني برمجيات ذكية وعملية تحلّ مشكلات حقيقية. طوّرتُ بشكل مستقل منصة «أين» لاختيار المواقع التجارية بالذكاء الاصطناعي، من مرحلة التطوير الأولى حتى الإطلاق الفعلي.",
    ctaPrimary: "استكشف أعمالي",
    ctaSecondary: "تواصل معي",
    facts: [
      { value: "أين", label: "منصة ذكاء اصطناعي منشورة وتعمل" },
      { value: "الأول", label: "هاكاثون حاضنة الابتكار" },
      { value: "بكالوريوس", label: "علوم الحاسب، جامعة القصيم" },
    ],
    visual: {
      label: "أين · تحليل الموقع",
      status: "مباشر",
      metric: "ملاءمة الموقع",
      layers: ["الحركة", "الكثافة", "المنافسون"],
    },
  },
  about: {
    eyebrow: "نبذة",
    title: "برمجيات ذكية تدعم قرارات حقيقية.",
    paragraphs: [
      "أدرس علوم الحاسب في جامعة القصيم، ولديّ خبرة عملية في تطوير البرمجيات، وتكامل الذكاء الاصطناعي، وإدارة قواعد البيانات، واختبار البرمجيات.",
      "طوّرتُ بشكل مستقل منصة «أين» لاختيار المواقع التجارية بالذكاء الاصطناعي، من مرحلة التطوير الأولى حتى الإطلاق، باستخدام أدوات التطوير المدعومة بالذكاء الاصطناعي. وخلال ذلك بنيتُ مكوّنات الواجهة الأمامية والخلفية، ودمجتُ وكلاء الذكاء الاصطناعي، وعملتُ مع واجهات برمجة التطبيقات والبيانات الجغرافية المكانية. كما قُدتُ فريق مشروع «أين» ضمن حاضنة الابتكار.",
      "وإلى جانب «أين»، عملتُ على تجهيز بيانات قواعد البيانات لتطبيقات الجوال، وعلى اختبار التطبيقات لاكتشاف الأخطاء البرمجية وتوثيقها — وهي تجربة علّمتني أن البرمجيات الموثوقة تعتمد على بيانات منظّمة وفحص دقيق للجودة.",
    ],
    educationLabel: "التعليم",
    degree: "بكالوريوس علوم الحاسب",
    university: "جامعة القصيم",
    graduation: "التخرج المتوقع: 2028",
    languagesLabel: "اللغات",
    languages: [
      { name: "العربية", level: "اللغة الأم" },
      { name: "الإنجليزية", level: "فوق المتوسط" },
    ],
    locationLabel: "الموقع",
    location: "بريدة، المملكة العربية السعودية",
    interestsLabel: "الاهتمامات",
    interests: [
      "الحلول البرمجية الذكية",
      "وكلاء الذكاء الاصطناعي وتكاملها",
      "البيانات الجغرافية المكانية",
      "تطبيقات عملية تحلّ مشكلات واقعية",
    ],
  },
  ayn: {
    eyebrow: "المشروع المميّز",
    name: "AYN",
    nameAr: "أَيْن",
    category: "منصة لاختيار المواقع التجارية مدعومة بالذكاء الاصطناعي",
    summary:
      "«أين» منصة ذكاء مكاني مدعومة بالذكاء الاصطناعي، تساعد روّاد الأعمال والمستثمرين على تحديد المواقع الأنسب لمشاريعهم التجارية. تحلّل المنصة المؤشرات التجارية والمكانية لدعم قرارات استثمارية مدروسة قبل الالتزام بأي موقع.",
    cta: "جرّب منصة أين",
    ctaNote: "جرّب المنصة المنشورة على ayn-wheat.vercel.app",
    liveBadge: "منصة منشورة",
    roleLabel: "دوري",
    role: "تطوير متكامل مستقل وقيادة المشروع",
    year: "2026",
    capabilitiesTitle: "أبرز القدرات",
    capabilities: [
      { icon: "target", text: "تحليل ملاءمة المواقع التجارية" },
      { icon: "traffic", text: "تحليل الحركة المرورية والتنقّل" },
      { icon: "population", text: "مؤشرات الكثافة السكانية" },
      { icon: "competitors", text: "تحليل توزّع المنافسين" },
      { icon: "activity", text: "تحليل النشاط التجاري" },
      { icon: "map", text: "خرائط تفاعلية وتصوّر جغرافي مكاني" },
      { icon: "ai", text: "توصيات مواقع مدعومة بالذكاء الاصطناعي" },
      { icon: "business", text: "تحليل مخصّص حسب طبيعة كل مشروع" },
    ],
    contributionsTitle: "مساهماتي",
    contributions: [
      "طوّرتُ المنصة بشكل مستقل من مرحلة التطوير الأولى حتى الإطلاق باستخدام أدوات التطوير المدعومة بالذكاء الاصطناعي.",
      "طوّرتُ مكوّنات الواجهة الأمامية والخلفية.",
      "دمجتُ وكلاء الذكاء الاصطناعي باستخدام OpenAI Agents SDK.",
      "عملتُ مع واجهات برمجة التطبيقات والبيانات الجغرافية وتحليل المواقع التجارية.",
      "قُدتُ فريق المشروع ضمن حاضنة الابتكار.",
    ],
    stackTitle: "التقنيات المستخدمة",
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "OpenAI Agents SDK",
      "APIs",
      "Git",
      "Docker",
    ],
    galleryTitle: "من داخل المنصة",
    galleryNote: "لقطات فعلية من المنصة المنشورة.",
    galleryPrev: "اللقطة السابقة",
    galleryNext: "اللقطة التالية",
    galleryOpen: "عرض بالحجم الكامل",
    galleryClose: "إغلاق",
    galleryCounter: "{i} من {n}",
    screenshots: [
      {
        src: "/ayn/01-landing.webp",
        width: 1274,
        height: 589,
        title: "الصفحة الرئيسية",
        caption: "الصفحة الرئيسية لمنصة «أين» مع بطاقة نموذجية لتحليل الموقع تعرض درجة الملاءمة.",
        alt: "الصفحة الرئيسية لمنصة أين بعنوان «اختر أفضل موقع لمشروعك» وبطاقة تحليل موقع تعرض درجة ملاءمة 92%.",
      },
      {
        src: "/ayn/02-about.webp",
        width: 1274,
        height: 530,
        title: "نظرة عامة على المنصة",
        caption: "تعريف بمنصة «أين» كمنصة ذكاء مكاني مدعومة بالذكاء الاصطناعي لروّاد الأعمال والمستثمرين.",
        alt: "صفحة «عن منصة أين» فوق صورة جوية لأفق المدينة، تصف المنصة بأنها منصة ذكاء مكاني مدعومة بالذكاء الاصطناعي.",
      },
      {
        src: "/ayn/03-street-analysis.webp",
        width: 1274,
        height: 618,
        title: "التحليل المكاني على مستوى الشارع",
        caption: "أبعاد التحليل: الحركة المرورية، والكثافة السكانية، والمنافسة التجارية، والإيجارات، وخصائص الموقع.",
        alt: "قسم التحليل على مستوى الشارع في منصة أين مع خريطة شوارع توضيحية وخمسة أبعاد للتحليل.",
      },
      {
        src: "/ayn/04-business-form.webp",
        width: 1274,
        height: 619,
        title: "نموذج إدخال بيانات المشروع",
        caption: "يصف المستخدم مشروعه: نوع النشاط، ونموذج الخدمة، وأولويات اختيار الشارع، ورأس المال، وميزانية الإيجار.",
        alt: "نموذج إدخال بيانات المشروع في منصة أين يتضمن نوع النشاط ونوع المقهى ونموذج الخدمة وأولويات الشارع ورأس المال وميزانية الإيجار.",
      },
      {
        src: "/ayn/05-results.webp",
        width: 1274,
        height: 616,
        title: "نتائج التحليل",
        caption: "الشارع الموصى به مع مستوى الثقة وتبرير مكتوب مبني على المؤشرات المرصودة.",
        alt: "نتائج التحليل في منصة أين تعرض الشارع التجاري الموصى به مع مستوى ثقة عالٍ وشرح يستند إلى الحركة المرورية والواجهات التجارية والمواقف.",
      },
      {
        src: "/ayn/06-interactive-map.webp",
        width: 1274,
        height: 618,
        title: "الخريطة التفاعلية",
        caption: "الموقع الموصى به على خريطة تفاعلية، تليه مقارنة بين فترتي الصباح والمساء.",
        alt: "خريطة تفاعلية في منصة أين مبنية على بيانات OpenStreetMap تُظهر الشارع الموصى به، تليها لوحة مقارنة بين الصباح والمساء.",
      },
      {
        src: "/ayn/07-neighborhoods.webp",
        width: 1274,
        height: 590,
        title: "اختيار الحي",
        caption: "لكل حي منهجية تحليل خاصة به ومسار مستقل.",
        alt: "قسم اختيار الحي في منصة أين يعرض حيّين: العليا في الرياض، وسلطانة (النخيل) في بريدة.",
      },
    ],
  },
  experience: {
    eyebrow: "الخبرات",
    title: "خبرة تقنية عملية.",
    items: [
      {
        role: "تطوير قواعد البيانات واختبار البرمجيات",
        type: "مساهمة بدوام جزئي / على أساس المشاريع",
        period: "",
        points: [
          "جمعتُ البيانات ونظّمتُها وأدخلتُها في قواعد البيانات باستخدام أدوات برمجية مناسبة.",
          "جهّزتُ بيانات قواعد البيانات لتطبيقات الجوال، بما في ذلك المنتجات المنشورة والقادمة.",
          "اختبرتُ التطبيقات واكتشفتُ الأخطاء البرمجية.",
          "وثّقتُ المشكلات لدعم تحسين الجودة.",
        ],
        tags: ["إدارة قواعد البيانات", "تكامل البيانات", "اختبار البرمجيات", "اكتشاف الأخطاء"],
      },
      {
        role: "تطوير متكامل مستقل وقيادة المشروع",
        type: "أين · حاضنة الابتكار",
        period: "2026",
        points: [
          "طوّرتُ منصة «أين» بشكل مستقل من مرحلة التطوير الأولى حتى الإطلاق.",
          "بنيتُ مكوّنات الواجهة الأمامية والخلفية، ودمجتُ وكلاء الذكاء الاصطناعي باستخدام OpenAI Agents SDK.",
          "قُدتُ فريق مشروع «أين» ضمن حاضنة الابتكار.",
        ],
        tags: ["تطوير الويب المتكامل", "تكامل الذكاء الاصطناعي", "قيادة الفريق"],
      },
    ],
  },
  skills: {
    eyebrow: "المهارات",
    title: "الأدوات والمهارات التقنية.",
    groups: [
      { icon: "code", name: "البرمجة", items: ["Python", "C++", "JavaScript", "TypeScript"] },
      {
        icon: "layers",
        name: "تطوير البرمجيات",
        items: ["تطوير الويب المتكامل", "React", "Next.js", "Tailwind CSS"],
      },
      {
        icon: "ai",
        name: "الذكاء الاصطناعي والتكامل",
        items: ["OpenAI Agents SDK", "دمج وكلاء الذكاء الاصطناعي", "تكامل واجهات البرمجة (APIs)"],
      },
      { icon: "tools", name: "الأدوات", items: ["Git", "GitHub", "Docker", "Claude Code"] },
      {
        icon: "database",
        name: "مهارات إضافية",
        items: ["إدارة قواعد البيانات", "تكامل البيانات", "اختبار البرمجيات", "اكتشاف الأخطاء"],
      },
    ],
  },
  achievements: {
    eyebrow: "الإنجازات",
    title: "التميّز والقيادة.",
    items: [
      { mark: "١", title: "المركز الأول", detail: "هاكاثون حاضنة الابتكار" },
      { mark: "٣", title: "المركز الثالث", detail: "هاكاثون جاداثون" },
      { mark: "قيادة", title: "قيادة مشروع «أين»", detail: "حاضنة الابتكار · 2026" },
    ],
  },
  contact: {
    eyebrow: "تواصل",
    title: "لنبنِ معًا شيئًا مفيدًا.",
    text: "يسعدني التواصل بشأن الفرص الوظيفية والتعاون والحديث عن تطوير البرمجيات والمنتجات المدعومة بالذكاء الاصطناعي. البريد الإلكتروني هو أسرع وسيلة للتواصل.",
    email: "البريد الإلكتروني",
    phone: "الجوال",
    linkedin: "لينكدإن",
    github: "GitHub",
    copy: "نسخ البريد الإلكتروني",
    copied: "تم النسخ",
    location: "بريدة، المملكة العربية السعودية",
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    built: "صُمّم وطُوّر باستخدام Next.js",
    backToTop: "العودة إلى الأعلى",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    text: "الصفحة التي تبحث عنها غير موجودة.",
    back: "العودة إلى الرئيسية",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ar };
export const getDictionary = (locale: Locale) => dictionaries[locale];
