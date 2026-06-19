import type { Loc } from "../data/content";

export type Section = { kicker: Loc; title: Loc; subtitle?: Loc };

export const NAV: { href: string; label: Loc }[] = [
  { href: "#about", label: { he: "אודות", en: "About" } },
  { href: "#skills", label: { he: "כישורים", en: "Skills" } },
  { href: "#projects", label: { he: "פרויקטים", en: "Projects" } },
  { href: "#impact", label: { he: "עשייה", en: "Impact" } },
  { href: "#experience", label: { he: "מסע מקצועי", en: "Journey" } },
  { href: "#education", label: { he: "השכלה", en: "Education" } },
  { href: "#contact", label: { he: "צור קשר", en: "Contact" } },
];

export const SECTIONS: Record<string, Section> = {
  about: {
    kicker: { he: "01 — אודות", en: "01 — About" },
    title: { he: "בונה תוכנה ודואג שתישאר באוויר.", en: "I build software and keep it running." },
  },
  skills: {
    kicker: { he: "02 — כישורים", en: "02 — Skills" },
    title: { he: "עם מה אני עובד", en: "What I work with" },
    subtitle: { he: "הכלים שאני באמת משתמש בהם, לפי תחום.", en: "The tools I actually use, grouped by area." },
  },
  projects: {
    kicker: { he: "03 — פרויקטים", en: "03 — Projects" },
    title: { he: "דברים שבניתי", en: "Things I've built" },
    subtitle: { he: "כמה פרויקטים, עם הבעיה שכל אחד מהם פתר.", en: "A few projects, with the problem each one solved." },
  },
  impact: {
    kicker: { he: "04 — עשייה מקצועית", en: "04 — Professional Impact" },
    title: { he: "על מה אני אחראי בעבודה", en: "What I handle at work" },
    subtitle: { he: "העבודה היומיומית שמאחורי המערכות שאני מנהל.", en: "The day-to-day work behind the systems I manage." },
  },
  experience: {
    kicker: { he: "05 — מסע מקצועי", en: "05 — Journey" },
    title: { he: "המסע המקצועי שלי", en: "My professional journey" },
    subtitle: {
      he: "מתמיכה טכנית, דרך תשתיות IT וניהול תפעול, ועד מערכות מידע ופיתוח — כל תפקיד בנה את הבא אחריו.",
      en: "From technical support, through IT infrastructure and operations management, to information systems and software development — each role built the next.",
    },
  },
  education: {
    kicker: { he: "06 — השכלה", en: "06 — Education" },
    title: { he: "השכלה ותעודות", en: "Education & certifications" },
    subtitle: { he: "התואר, והתעודות שמאחוריו.", en: "My degree, and the certifications behind it." },
  },
  contact: {
    kicker: { he: "07 — צור קשר", en: "07 — Contact" },
    title: { he: "בואו נדבר", en: "Let's talk" },
    subtitle: {
      he: "פתוח לתפקידי תוכנה, Full Stack ומערכות. אפשר לפנות אליי במייל, בטלפון או בוואטסאפ — בדרך כלל עונה באותו יום.",
      en: "I'm open to software, full-stack and systems roles. Reach me by email, phone or WhatsApp — I usually reply the same day.",
    },
  },
};

export const ABOUT = {
  lead: [
    {
      he: "מומחה מערכות מידע ואינטגרציה והנדסאי תוכנה בוגר בהצטיינות, עם מעל 5 שנות ניסיון מעשי מול מערכות פרודקשן ארגוניות — לא רק פרויקטים אקדמיים.",
      en: "An information systems & integration specialist and an honors practical-software-engineering graduate, with 5+ years of hands-on experience on real enterprise production systems — not just course projects.",
    },
    {
      he: "בפועל אני נע בין שני עולמות: ניהול ותחזוקה של מערכת ארגונית שמאות משתמשים תלויים בה — תחקור תקלות, שאילתות SQL ואינטגרציות מול ERP, ממשקי API ו-Linked Servers — לצד פיתוח Full Stack ב-Python, FastAPI, React ו-TypeScript.",
      en: "Day to day I move between two worlds: running and maintaining an enterprise system that hundreds of users depend on — investigating issues, writing SQL and building integrations with ERP, APIs and linked servers — alongside full-stack development in Python, FastAPI, React and TypeScript.",
    },
  ] as Loc[],
  stats: [
    { num: { he: "+5 שנים", en: "5+ Years" }, label: { he: "ניסיון מעשי בתעשייה", en: "Hands-on industry experience" } },
    { num: { he: "בהצטיינות", en: "Honors" }, label: { he: "הנדסאי תוכנה · ממוצע 91", en: "Practical Software Eng. · GPA 91" } },
    { num: { he: "פרודקשן", en: "Production" }, label: { he: "מערכות ארגוניות ואינטגרציה", en: "Enterprise systems & integration" } },
  ] as { num: Loc; label: Loc }[],
};

export const UI: Record<string, Loc> = {
  viewMyWork: { he: "לעבודות שלי", en: "View my work" },
  downloadCv: { he: "הורדת קורות חיים", en: "Download CV" },
  getInTouch: { he: "דברו איתי", en: "Get in touch" },
  scroll: { he: "גלילה", en: "Scroll" },
  available: { he: "זמין", en: "Available" },
  highlights: { he: "דגשים", en: "Highlights" },
  primaryNav: { he: "ניווט ראשי", en: "Primary" },
  toggleTheme: { he: "מצב כהה / בהיר", en: "Toggle light / dark" },
  home: { he: "ניר אביטבול — דף הבית", en: "Nir Avitbul — home" },
  toggleNav: { he: "תפריט", en: "Toggle navigation" },

  disciplines: { he: "+5 שנים על פני", en: "5+ years across" },
  current: { he: "כיום", en: "Now" },

  coreStack: { he: "ליבת הסטאק", en: "Core stack" },
  advanced: { he: "מתקדם", en: "Advanced" },
  proficient: { he: "שולט", en: "Proficient" },
  working: { he: "בסיסי", en: "Working" },

  featured: { he: "פרויקט נבחר", en: "Featured project" },
  flagship: { he: "פרויקט הדגל", en: "Flagship project" },
  keyCapabilities: { he: "יכולות מרכזיות", en: "Key capabilities" },
  viewDetails: { he: "לפרטים מלאים", en: "View details" },
  code: { he: "קוד", en: "Code" },
  live: { he: "לייב", en: "Live" },
  liveDemo: { he: "דמו חי", en: "Live demo" },
  viewScreenshots: { he: "צפייה בצילומי מסך", en: "View screenshots" },

  problem: { he: "בעיה", en: "Problem" },
  solution: { he: "פתרון", en: "Solution" },
  outcome: { he: "תוצאה", en: "Outcome" },

  caseStudy: { he: "מקרה בוחן", en: "Case study" },
  overview: { he: "סקירה", en: "Overview" },
  architecture: { he: "ארכיטקטורה", en: "Architecture" },
  features: { he: "יכולות", en: "Features" },
  technologies: { he: "טכנולוגיות", en: "Technologies" },
  challenges: { he: "אתגרים", en: "Challenges" },
  lessons: { he: "מה למדתי", en: "Lessons learned" },
  prevShot: { he: "תמונה קודמת", en: "Previous screenshot" },
  nextShot: { he: "תמונה הבאה", en: "Next screenshot" },
  close: { he: "סגירה", en: "Close" },
  goToShot: { he: "מעבר לתמונה", en: "Go to screenshot" },

  honors: { he: "בהצטיינות", en: "Honors" },
  graduate: { he: "בוגר", en: "Graduate" },
  gpaShort: { he: "ממוצע", en: "GPA" },
  finalProjectShort: { he: "פרויקט גמר", en: "Final project" },
  certifications: { he: "תעודות", en: "Certifications" },
  languagesLabel: { he: "שפות", en: "Languages" },

  contactTitle: { he: "בואו נדבר", en: "Let's talk" },
  emailMe: { he: "שלחו מייל", en: "Email me" },
  whatsapp: { he: "וואטסאפ", en: "WhatsApp" },
  phone: { he: "טלפון", en: "Phone" },
  github: { he: "GitHub", en: "GitHub" },
  linkedin: { he: "LinkedIn", en: "LinkedIn" },
  email: { he: "מייל", en: "Email" },

  builtWith: {
    he: "נבנה עם React, TypeScript ו-Vite.",
    en: "Built with React, TypeScript & Vite.",
  },
};
