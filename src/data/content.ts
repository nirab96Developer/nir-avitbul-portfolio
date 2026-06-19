// Bilingual content. Every user-facing string is { he, en }.
export type Loc = { he: string; en: string };

export const PROFILE = {
  name: { he: "ניר אביטבול", en: "Nir Avitbul" },
  initials: "NA",
  photo: "/nir-avitbul.png",
  role: {
    he: "מומחה מערכות מידע ואינטגרציה",
    en: "Information Systems & Integration Specialist",
  },
  titles: [
    { he: "מומחה מערכות מידע ואינטגרציה", en: "Information Systems & Integration Specialist" },
    { he: "מנהל אפליקציות ומערכות ארגוניות", en: "Application & Enterprise Systems Manager" },
    { he: "מפתח תוכנה Full Stack", en: "Full Stack Software Developer" },
  ] as Loc[],
  tagline: {
    he: "מנהל ומתחזק מערכות מידע ארגוניות בפרודקשן: תחקור תקלות, עבודה עם SQL Server, ממשקי API ותהליכי אינטגרציה. במקביל מפתח Full Stack ב-Python, FastAPI ו-React, והנדסאי תוכנה בוגר בהצטיינות.",
    en: "I run and maintain enterprise information systems in production: investigating issues, working with SQL Server, APIs and integration flows. I'm also a full-stack developer in Python, FastAPI and React, and a practical software engineering graduate with honors.",
  },
  current: { he: "ONE Technologies · קק\"ל", en: "ONE Technologies · KKL-JNF" },
  location: { he: "באר יעקב", en: "Beer Yaakov, Israel" },
  availability: { he: "פתוח להזדמנויות חדשות", en: "Open to new opportunities" },
  email: "avitbulnir@gmail.com",
  phone: "053-529-3308",
  phoneTel: "+972535293308",
  phoneWa: "972535293308",
  github: "https://github.com/nirab96Developer",
  linkedin: "https://www.linkedin.com/in/nir-avitbul",
} as const;

export type HeroStat = { value: Loc; label: Loc };

export const HERO_STATS: HeroStat[] = [
  { value: { he: "+5", en: "5+" }, label: { he: "שנים בתחום ובמערכות", en: "Years in tech & systems" } },
  { value: { he: "בהצטיינות", en: "Honors" }, label: { he: "הנדסאי תוכנה · ממוצע 91", en: "Practical Software Eng. · GPA 91" } },
  { value: { he: "ארגוני", en: "Enterprise" }, label: { he: "מערכות ואינטגרציה", en: "Systems & integration" } },
  { value: { he: "Full Stack", en: "Full Stack" }, label: { he: "פרונט → DevOps", en: "Frontend → DevOps" } },
];

export type Credential = { icon: string; label: Loc };

export const CREDIBILITY: Credential[] = [
  { icon: "commits", label: { he: "+400 קומיטים ב-Git", en: "400+ Git Commits" } },
  { icon: "app", label: { he: "ניהול אפליקציות ארגוניות", en: "Enterprise Application Management" } },
  { icon: "stack", label: { he: "פיתוח Full Stack", en: "Full Stack Development" } },
  { icon: "sql", label: { he: "SQL ואינטגרציית מערכות", en: "SQL & Systems Integration" } },
  { icon: "degree", label: { he: "הנדסאי תוכנה · בהצטיינות", en: "Practical Software Engineer · Honors" } },
];

/**
 * The disciplines I work across — shown as a hero card to make the point that
 * this is a rare blend, not just a single "Full Stack" label.
 */
export const HERO_DISCIPLINES: Loc[] = [
  { he: "מערכות ארגוניות", en: "Enterprise Systems" },
  { he: "תשתיות IT", en: "IT Infrastructure" },
  { he: "מערכות מידע", en: "Information Systems" },
  { he: "אינטגרציה", en: "Integration" },
  { he: "פיתוח תוכנה", en: "Software Development" },
];

/** Technologies surfaced as animated badges in the hero. */
export const HERO_TECH: string[] = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "SQL Server",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Linux",
  "Azure",
];

/** Headline strengths (tech names are the same in both languages). */
export const CORE_STACK: string[] = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "SQL Server",
  "MongoDB",
  "Docker",
];

export const DIFFERENTIATORS: { title: Loc; text: Loc }[] = [
  {
    title: { he: "אחראי על הפרודקשן, לא רק על הקוד", en: "I own production, not just code" },
    text: {
      he: "שומר על מערכת חיה יציבה, נכנס לעומק התקלות ומתקן את מה שמשתמשים אמיתיים נתקלים בו.",
      en: "I keep a live system stable, dig into failures and fix the things real users actually hit.",
    },
  },
  {
    title: { he: "יושב בין העסק לקוד", en: "I sit between the business and the code" },
    text: {
      he: "מתרגם את צורכי העסק לתוכנה שעובדת, ועובד מול מפתחים, DBA, תשתיות וספקים כדי להגיע לשם.",
      en: "I turn what the business needs into working software, and I work with developers, DBAs, infra and vendors to get there.",
    },
  },
  {
    title: { he: "תואר יחד עם ניסיון אמיתי", en: "Degree plus real experience" },
    text: {
      he: "תעודת הנדסאי תוכנה בהצטיינות, יחד עם 5+ שנות ניסיון בתפקידי IT ומערכות אמיתיים.",
      en: "An honors practical software engineering diploma, backed by 5+ years in real IT and systems roles.",
    },
  },
];

export type Skill = { name: string; level: number };

export type SkillGroup = { category: Loc; caption: Loc; items: Skill[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: { he: "שפות", en: "Languages" },
    caption: { he: "שפות יומיומיות", en: "Core day-to-day languages" },
    items: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "Java", level: 72 },
      { name: "C#", level: 70 },
      { name: "Bash", level: 78 },
    ],
  },
  {
    category: { he: "Backend ו-Web", en: "Backend & Web" },
    caption: { he: "API-ים, שירותים וממשקים", en: "APIs, services & interfaces" },
    items: [
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "React", level: 82 },
      { name: "HTML", level: 88 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    category: { he: "בסיסי נתונים", en: "Databases" },
    caption: { he: "רלציוניים ומסמכיים", en: "Relational & document stores" },
    items: [
      { name: "SQL Server", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "MongoDB", level: 76 },
    ],
  },
  {
    category: { he: "DevOps ואוטומציה", en: "DevOps & Automation" },
    caption: { he: "IaC, CI/CD וקונטיינרים", en: "IaC, CI/CD & containers" },
    items: [
      { name: "Docker", level: 76 },
      { name: "Terraform", level: 78 },
      { name: "Ansible", level: 75 },
      { name: "Jenkins", level: 74 },
      { name: "Git", level: 90 },
      { name: "GitHub Actions", level: 76 },
    ],
  },
  {
    category: { he: "ענן ותשתיות", en: "Cloud & Infrastructure" },
    caption: { he: "ענן, שרתים ו-Directory", en: "Cloud, servers & directories" },
    items: [
      { name: "AWS", level: 68 },
      { name: "Azure", level: 68 },
      { name: "Linux", level: 82 },
      { name: "Active Directory", level: 82 },
      { name: "Windows Server", level: 80 },
    ],
  },
  {
    category: { he: "מובייל וכלים", en: "Mobile & Tools" },
    caption: { he: "אפליקציות נייטיב וכלי עבודה", en: "Native apps & workflow" },
    items: [
      { name: "Android", level: 78 },
      { name: "Postman", level: 85 },
      { name: "Power Automate", level: 78 },
      { name: "Microsoft 365", level: 85 },
      { name: "VS Code", level: 88 },
    ],
  },
];

export type Screenshot = { src: string; caption: Loc };

export type CaseStudy = {
  overview: Loc;
  architecture: Loc[];
  features: Loc[];
  challenges: Loc[];
  lessons: Loc[];
};

export type Metric = { value: string; label: Loc };

export type Project = {
  title: string;
  icon: string;
  /** Optional brand logo (path under /public) shown instead of the tech glyph. */
  logo?: string;
  summary: Loc;
  description: Loc;
  highlights: Loc[];
  achievements: Loc[];
  tech: string[];
  /** Optional client/organization the project was built for. */
  client?: Loc;
  problem: Loc;
  solution: Loc;
  outcome: Loc;
  featured?: boolean;
  flagship?: boolean;
  metrics?: Metric[];
  caseStudy?: CaseStudy;
  screenshots?: Screenshot[];
  links?: { github?: string; live?: string };
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Forewise",
    icon: "RBAC",
    logo: "/forewise-logo.svg",
    summary: {
      he: "פרויקט גמר (ציון 100) · FastAPI + React · בפרודקשן",
      en: "Graduation final project (graded 100) · FastAPI + React · in production",
    },
    description: {
      he: "פרויקט אישי — פלטפורמת Full Stack לניהול תפעול בשטח: פרויקטים, ציוד, ספקים, הזמנות עבודה, דיווחי עבודה, תקציבים וחשבוניות. צד שרת ב-FastAPI (60+ מודלים, כ-50 מודולי API) עם קליינט React/TypeScript, מאחורי מנוע הרשאות מבוסס תפקידים. רץ בפרודקשן.",
      en: "A personal project — a full-stack platform for managing field operations: projects, equipment, suppliers, work orders, work logs, budgets and invoicing. FastAPI backend (60+ models, ~50 API modules) with a React/TypeScript client, behind a role-based permission engine. Running in production.",
    },
    highlights: [
      { he: "כ-50 מודולי API ב-FastAPI מעל 60+ מודלים ב-SQLAlchemy על PostgreSQL + PostGIS", en: "~50 FastAPI route modules over 60+ SQLAlchemy models on PostgreSQL + PostGIS" },
      { he: "מנוע הרשאות RBAC עצמאי עם scope לפי אזור/מחלקה", en: "Custom RBAC policy engine with region/department scope strategies" },
      { he: "אימות עם Passkeys (WebAuthn), OTP ו-JWT; משימות רקע עם Celery + Redis", en: "WebAuthn passkeys, OTP and JWT auth; Celery + Redis background jobs" },
    ],
    achievements: [
      { he: "ציון 100", en: "Graded 100" },
      { he: "מנוע הרשאות RBAC", en: "RBAC policy engine" },
      { he: "אימות Passkey", en: "Passkey auth" },
      { he: "בפרודקשן", en: "In production" },
    ],
    tech: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Celery", "React", "TypeScript"],
    client: { he: "פרויקט אישי · פרויקט גמר", en: "Personal project · final project" },
    problem: {
      he: "התפעול בשטח — פרויקטים, ציוד, ספקים, תקציבים, הזמנות עבודה וחשבוניות — נוהל בגיליונות מפוזרים, בלי מקום אחד לנתונים, בלי בקרת גישה ובלי דיווח אמיתי.",
      en: "Field operations — projects, equipment, suppliers, budgets, work orders and invoicing — lived in scattered spreadsheets, with no single place for the data, no access control and no real reporting.",
    },
    solution: {
      he: "בניתי פלטפורמת Full Stack בפרודקשן: שירות FastAPI (PostgreSQL + PostGIS, SQLAlchemy, Alembic, Celery/Redis) מאחורי מנוע הרשאות מבוסס תפקידים, עם קליינט React/TypeScript ב-Web וב-Electron, פרוס על שרת Linux מאחורי Nginx עם CI/CD.",
      en: "Built a production full-stack platform: a FastAPI service (PostgreSQL + PostGIS, SQLAlchemy, Alembic, Celery/Redis) behind a custom role-based permission engine, with a React/TypeScript web and Electron desktop client, deployed on a Linux host behind Nginx with CI/CD.",
    },
    outcome: {
      he: "מערכת אחת מאובטחת ומבוקרת שרצה בפרודקשן, עם גישה לפי תפקיד, דוחות, ייצוא ל-PDF/Excel ופורטל ספקים.",
      en: "One secure, audited system running in production, with role-scoped access, reporting, PDF/Excel export and a supplier portal.",
    },
    featured: true,
    flagship: true,
    metrics: [
      { value: "100", label: { he: "ציון סופי", en: "Final grade" } },
      { value: "+50", label: { he: "מודולי API", en: "API route modules" } },
      { value: "+60", label: { he: "מודלים", en: "Data models" } },
      { value: "RBAC", label: { he: "מנוע הרשאות", en: "Custom policy engine" } },
    ],
    caseStudy: {
      overview: {
        he: "Forewise הוא פרויקט אישי — פלטפורמת תפעול בפרודקשן לניהול עבודת שטח מקצה לקצה: פרויקטים, ציוד, ספקים, הזמנות עבודה, דיווחי עבודה, תקציבים וחשבוניות. היא מחליפה גיליונות מפוזרים ותיאום ידני במערכת אחת מאובטחת, מבוקרת ומבוססת-תפקידים. נבנתה כפרויקט הגמר, קיבלה ציון 100, ופרוסה בפרודקשן.",
        en: "Forewise is a personal project — a production operations platform that runs field work end to end: projects, equipment fleets, suppliers, work orders, daily work logs, budgets and invoicing. It replaces fragmented spreadsheets and manual coordination with one secure, role-scoped, auditable system of record. Built as the graduation final project — awarded a perfect grade of 100 — and deployed to production.",
      },
      architecture: [
        { he: "FastAPI (Python אסינכרוני) מוגש על ידי Gunicorn + Uvicorn מאחורי Nginx (TLS) כשירות systemd", en: "FastAPI (async Python) served by Gunicorn + Uvicorn workers behind Nginx (TLS) as a systemd service" },
        { he: "PostgreSQL עם PostGIS לנתונים גאוגרפיים, דרך SQLAlchemy 2.0 עם מיגרציות Alembic (60+ מודלים)", en: "PostgreSQL with PostGIS for geospatial data, via SQLAlchemy 2.0 with Alembic migrations (60+ models)" },
        { he: "כ-50 ראוטרים מודולריים של REST יחד עם WebSocket לעדכונים בזמן אמת", en: "~50 modular REST routers plus WebSocket endpoints for real-time updates" },
        { he: "Celery + Redis למשימות רקע (דוחות, התראות); Sentry לניטור שגיאות", en: "Celery + Redis for background jobs (reports, notifications); Sentry for error monitoring" },
        { he: "קליינט React + TypeScript + Vite + Tailwind, ארוז כאפליקציית דסקטופ ב-Electron וכ-PWA", en: "React + TypeScript + Vite + Tailwind client, packaged as an Electron desktop app and a PWA" },
      ],
      features: [
        { he: "מנוע הרשאות RBAC עצמאי עם scope לפי אזור / מחלקה / שטח", en: "Custom RBAC authorization engine with scope strategies (region / department / area)" },
        { he: "אימות רב-שלבי: Passkeys (ביומטרי), OTP ו-JWT עם הצפנת סיסמאות ב-bcrypt", en: "Multi-factor auth: WebAuthn passkeys (biometric), OTP and JWT with bcrypt password hashing" },
        { he: "פרויקטים, ציוד, ספקים, הזמנות עבודה, דיווחי עבודה, תקציבים, חשבוניות ותמחור", en: "Projects, equipment, suppliers, work orders, work logs, budgets, invoices and pricing" },
        { he: "הפקת דוחות PDF (WeasyPrint), ייצוא ל-Excel, דשבורדים ותיעוד audit", en: "PDF report generation (WeasyPrint), Excel export, dashboards and audit logging" },
        { he: "פורטל ספקים, התראות ודיווייס-טוקנים, וסנכרון שמתאים גם לעבודה לא-מקוונת", en: "Supplier portal, notifications/device tokens and offline-friendly sync" },
      ],
      challenges: [
        { he: "תכנון מנוע הרשאות RBAC עם scope גמיש מספיק להרבה תפקידים ואזורים", en: "Designing an RBAC policy engine with scoped strategies flexible across many roles and regions" },
        { he: "מידול של 60+ ישויות קשורות (כולל גאוגרפיות) לסכימה נקייה שניתנת למיגרציה", en: "Modeling 60+ interrelated entities (incl. geospatial) into a clean, migratable schema" },
        { he: "העברת עבודת דוחות/PDF כבדה ל-Celery כדי שה-API יישאר מהיר", en: "Offloading heavy reporting/PDF work to Celery so the API stays responsive" },
        { he: "הוצאת אותו בסיס קוד כ-Web, כ-PWA להתקנה וכאפליקציית דסקטופ ב-Electron", en: "Shipping one codebase as web, installable PWA and Electron desktop app" },
      ],
      lessons: [
        { he: "שכבת הרשאות ייעודית עם scope מתרחבת הרבה יותר טוב מבדיקות הרשאה מפוזרות", en: "A dedicated authorization layer with scope strategies scales far better than scattered permission checks" },
        { he: "תכנון אינדקסים ומיגרציות לפי דפוסי הגישה האמיתיים שומר על סכימה גדולה מהירה", en: "Designing indexes and migrations around real access patterns keeps a large schema fast" },
        { he: "העברת עבודה ארוכה ל-workers ברקע היא הכרחית ל-API מהיר", en: "Pushing long-running work to background workers is essential for a responsive API" },
        { he: "יכולת audit וחוזים מטופסים (Pydantic + TypeScript) מונעים סוגים שלמים של באגים בפרודקשן", en: "Auditability and typed contracts (Pydantic + TypeScript) prevent entire classes of production bugs" },
      ],
    },
    accent: "indigo",
  },
  {
    title: "EventTech — Event Management System",
    icon: "MongoDB",
    summary: {
      he: "פרויקט בקורס MongoDB · אנליטיקה עם Aggregation ודשבורדים",
      en: "MongoDB course project · aggregation analytics & dashboards",
    },
    description: {
      he: "מערכת ב-MongoDB לניהול כנסי טכנולוגיה: אירועים, מרצים, משתתפים, הכנסות והוצאות. REST API ב-Node/Express עם אנליטיקה מבוססת Aggregation Pipeline ודשבורד חי, שנבנתה למארגן לדוגמה כדי להחליף גיליונות.",
      en: "A MongoDB system for managing tech conferences: events, speakers, attendees, revenue and expenses. Node/Express REST API with aggregation-pipeline analytics and a live dashboard, built for a sample organizer to replace spreadsheets.",
    },
    highlights: [
      { he: "REST API ב-Express עם CRUD מלא ומעל 10 נקודות קצה לאנליטיקה עסקית", en: "Express REST API with full CRUD and 10+ business-analytics endpoints" },
      { he: "Aggregation Pipelines ב-MongoDB להכנסות, רווחיות ונוכחות", en: "MongoDB aggregation pipelines for revenue, profitability & attendance" },
      { he: "ולידציה ואינדקסים ב-Mongoose, דשבורד חי עם Chart.js, ייצוא ל-Power BI (CSV)", en: "Mongoose validation & indexes, live Chart.js dashboard, Power BI (CSV) export" },
    ],
    achievements: [
      { he: "אנליטיקת Aggregation", en: "Aggregation analytics" },
      { he: "דשבורד חי", en: "Live dashboard" },
      { he: "ייצוא ל-Power BI", en: "Power BI export" },
    ],
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "Chart.js"],
    problem: {
      he: "מארגן כנסי טכנולוגיה (EventTech IL) ניהל את הכנסים בגיליונות Excel נפרדים — מה שהקשה לחפש, לחשב רווחיות או לתאם בין אירועים.",
      en: "A tech-conference organizer (EventTech IL) managed conferences in separate Excel spreadsheets — making it hard to search, calculate profitability or coordinate across events.",
    },
    solution: {
      he: "בניתי אותה על MongoDB עם REST API ב-Express, אנליטיקה מבוססת Aggregation, ולידציית סכימה ודשבורד עם גרפים חיים.",
      en: "Built it on MongoDB with an Express REST API, aggregation-pipeline analytics, schema validation and a dashboard with live charts.",
    },
    outcome: {
      he: "מספרים ברורים על הכנסות, נוכחות ורווח במערכת אחת שניתן לתשאל, במקום גיליונות, עם ייצוא ל-CSV עבור Power BI.",
      en: "Clear numbers on revenue, attendance and profit in one queryable system instead of spreadsheets, with CSV export for Power BI.",
    },
    featured: true,
    metrics: [
      { value: "+10", label: { he: "נקודות אנליטיקה", en: "Analytics endpoints" } },
      { value: "6", label: { he: "כנסים שמודלו", en: "Conferences modeled" } },
      { value: "51", label: { he: "משתתפים בנתונים", en: "Attendees seeded" } },
      { value: "5", label: { he: "אינדקסים מותאמים", en: "Query-tuned indexes" } },
    ],
    caseStudy: {
      overview: {
        he: "מערכת ניהול אירועים מבוססת MongoDB שנבנתה למארגן לדוגמה, EventTech IL, לניהול כנסי טכנולוגיה מקצה לקצה — אירועים, מרצים, משתתפים, הכנסות והוצאות. היא מחליפה גיליונות מפוזרים ב-REST API, שאילתות אנליטיקה עסקית ודשבורד חי. נבנתה כפרויקט הסיום בקורס MongoDB.",
        en: "A MongoDB-backed event management system built for a fictional organizer, EventTech IL, to manage technology conferences end to end — events, speakers, attendees, revenue and expenses. It replaces scattered spreadsheets with a REST API, business-analytics queries and a live dashboard. Built as the MongoDB course final project.",
      },
      architecture: [
        { he: "REST API ב-Node.js + Express שמגיש נקודות CRUD ואנליטיקה", en: "Node.js + Express REST API serving CRUD and analytics endpoints" },
        { he: "MongoDB עם סכימות Mongoose, ולידציה ו-5 אינדקסים מותאמים לשאילתות", en: "MongoDB with Mongoose schemas, validation and 5 query-tuned indexes" },
        { he: "מודל מסמכים שמשבץ מרצים והוצאות בתוך כל אירוע (במקום 4 טבלאות SQL + JOIN-ים)", en: "Document model that embeds speakers and expenses per event (vs. 4 SQL tables + JOINs)" },
        { he: "דשבורד ב-Vanilla JS עם Chart.js, ונקודות ייצוא ל-CSV עבור Power BI", en: "Vanilla-JS dashboard with Chart.js, plus CSV export endpoints for Power BI" },
      ],
      features: [
        { he: "CRUD מלא לאירועים, מרצים ומשתתפים", en: "Full CRUD for events, speakers and attendees" },
        { he: "מעל 10 נקודות אנליטיקה עסקית דרך Aggregation Pipelines", en: "10+ business-analytics endpoints via MongoDB aggregation pipelines" },
        { he: "ניתוח הכנסות, הוצאות ורווחיות לכל כנס", en: "Revenue, expense and profitability analysis per conference" },
        { he: "דשבורד אינטראקטיבי עם גרפים חיים ומרכז שאילתות", en: "Interactive dashboard with live charts and a query center" },
        { he: "ייצוא נתונים ל-Power BI (CSV) לדיווח המשך", en: "Power BI (CSV) data export for downstream reporting" },
      ],
      challenges: [
        { he: "בחירת מודל הנתונים הנכון — לשבץ מרצים/הוצאות מול להפנות אליהם", en: "Choosing the right data model — embedding speakers/expenses vs. referencing them" },
        { he: "כתיבת Aggregation Pipelines לרווחיות, נוכחות וביצועי מרצים", en: "Writing aggregation pipelines for profitability, attendance and speaker performance" },
        { he: "אכיפת תקינות נתונים עם ולידציית סכימה והודעות שגיאה ברורות", en: "Enforcing data integrity with schema validation and meaningful error messages" },
      ],
      lessons: [
        { he: "מידול לפי דפוסי השאילתות האמיתיים הופך את MongoDB לפשוט בהרבה מ-JOIN-ים ב-SQL", en: "Modeling around real query patterns makes MongoDB dramatically simpler than SQL JOINs" },
        { he: "אינדקסים צריך לתכנן לפי דפוסי הגישה האמיתיים, לא לנחש", en: "Indexes should be designed from the actual access patterns, not guessed" },
        { he: "Aggregation Pipelines הופכים מסמכים גולמיים למודיעין עסקי אמיתי", en: "Aggregation pipelines turn raw documents into genuine business intelligence" },
      ],
    },
    screenshots: [
      { src: "/screenshots/eventtech/overview.png", caption: { he: "סקירת הפרויקט ודשבורד המצגת", en: "Project overview & presentation dashboard" } },
      { src: "/screenshots/eventtech/events.png", caption: { he: "אוסף האירועים — מרצים, הוצאות והכנסות משובצים", en: "Events collection — embedded speakers, expenses & revenue" } },
      { src: "/screenshots/eventtech/attendees.png", caption: { he: "משתתפים עם כרטיסים ופרטי תשלום", en: "Attendees with tickets & payment details" } },
      { src: "/screenshots/eventtech/speakers.png", caption: { he: "מאגר מרצים ישראלים עם פרופילים מלאים", en: "Israeli speakers dataset with full profiles" } },
    ],
    accent: "violet",
  },
  {
    title: "Amit's Sweets",
    icon: "CRM",
    summary: {
      he: "פלטפורמת קינוחים בוטיק עם CRM ועוזרת AI",
      en: "Boutique dessert platform with CRM & AI concierge",
    },
    description: {
      he: "חנות חיה לעסק עוגות בוטיק: קטלוג עם תמחור חי, תהליך הזמנת עוגה אישית, ועוזרת AI שעוזרת ללקוחות לבחור עוגה ושולחת את ההזמנה ל-WhatsApp.",
      en: "A live storefront for a boutique cake business: a catalog with live pricing, a custom-cake flow, and an AI assistant that helps customers pick a cake and sends the order to WhatsApp.",
    },
    highlights: [
      { he: "קטלוג מוצרים עם חנות ידידותית ללקוח", en: "Product catalog with a customer-friendly storefront" },
      { he: "CRM משולב ותהליך הזמנות ב-WhatsApp Business", en: "Integrated CRM and WhatsApp Business order flow" },
      { he: "עוזרת AI להכוונת מוצרים ותמיכה", en: "AI concierge for product guidance and support" },
    ],
    achievements: [
      { he: "עוזרת AI", en: "AI concierge" },
      { he: "הזמנות ב-WhatsApp", en: "WhatsApp orders" },
      { he: "CRM מובנה", en: "Built-in CRM" },
    ],
    tech: ["React", "TypeScript", "CRM", "WhatsApp Business", "AI"],
    problem: {
      he: "עסק קינוחים בוטיק היה צריך נוכחות אונליין ודרך לנהל לקוחות והזמנות, בלי פלטפורמה כבדה ויקרה.",
      en: "A boutique dessert business needed an online presence and a way to manage customers and orders without a heavy, expensive platform.",
    },
    solution: {
      he: "בניתי חנות ב-React/TypeScript עם CRM קליל, תהליך הזמנות ב-WhatsApp Business ועוזרת AI שמכוונת את הלקוחות.",
      en: "Built a React/TypeScript storefront with a lightweight CRM, a WhatsApp Business ordering flow and an AI concierge that guides customers.",
    },
    outcome: {
      he: "פלטפורמת בוטיק חיה מול לקוחות עם עיצוב glassmorphism, עוזרת AI ותהליך הזמנות ב-WhatsApp — שמייעלת גילוי מוצרים, הזמנות אישיות וניהול לקוחות.",
      en: "A live, customer-facing boutique platform with a glassmorphism UI, an AI concierge and a WhatsApp ordering flow — streamlining discovery, custom orders and customer management.",
    },
    featured: false,
    links: { live: "https://www.amits-sweets.com/" },
    caseStudy: {
      overview: {
        he: "חנות בפרודקשן לקונדיטוריית בוטיק (amits-sweets.com). היא משלבת עיצוב glassmorphism (בסגנון OS) בעברית RTL עם קטלוג עוגות מתצורת, תהליך הזמנת עוגה אישית ועוזרת AI שמכוונת את הלקוחות ומרכיבה הזמנה מוכנה לשליחה ב-WhatsApp — מגובה ב-CRM קליל.",
        en: "A live production storefront for a boutique patisserie (amits-sweets.com). It pairs a polished, glassmorphism (OS-style) RTL Hebrew design with a configurable cake catalog, a custom-cake design flow and an AI concierge that guides customers and compiles a ready-to-send WhatsApp order — backed by a lightweight CRM.",
      },
      architecture: [
        { he: "חנות עמוד-יחיד ב-React + TypeScript, עברית RTL, עם מערכת עיצוב glassmorphism", en: "React + TypeScript single-page storefront, RTL Hebrew, with a glassmorphism design system" },
        { he: "קטלוג מתצורת עם חישוב מחיר חי (בסיס / טעם / גודל) יחד עם עגלה ותשלום", en: "Configurable catalog with live price calculation (base / flavor / size) plus cart & checkout" },
        { he: "עוזרת AI שממליצה לפי אירוע, תקציב וסגנון, ואז מרכיבה הזמנה מסודרת", en: "AI concierge that recommends by event, budget and style, then assembles a structured order" },
        { he: "תמחור משלוח לפי עיר ותיאום איסוף, עם מעבר ל-WhatsApp Business", en: "City-based delivery pricing and pickup coordination, with a WhatsApp Business handoff" },
      ],
      features: [
        { he: "עוזרת AI (\"העוזרת של עמית\") עם הצעות מהירות והעלאת תמונת השראה", en: "AI concierge ('Amit's assistant') with quick prompts and inspiration-image upload" },
        { he: "קטלוג עוגות מתצורת עם תמחור בזמן אמת", en: "Configurable cake catalog with real-time pricing" },
        { he: "תהליך מודרך לעיצוב עוגה אישית ← סיכום הזמנה מסודר ל-WhatsApp", en: "Guided custom-cake design flow → structured WhatsApp order summary" },
        { he: "ביקורות לקוחות (WhatsApp / Instagram) ופיד אינסטגרם חי", en: "Customer reviews (WhatsApp / Instagram) and a live Instagram feed" },
        { he: "מנוע נגישות מובנה: הגדלת טקסט, ניגודיות גבוהה ומצב כהה, צמצום תנועה", en: "Built-in accessibility engine: text scaling, high-contrast & dark themes, reduced motion" },
      ],
      challenges: [
        { he: "תכנון ממשק glassmorphism שנשאר חד, קריא ונגיש", en: "Designing a glassmorphism UI that stays crisp, readable and accessible" },
        { he: "הפיכת שיחת AI מודרכת לסיכום הזמנה נקי ומוכן לשליחה", en: "Turning a guided AI conversation into a clean, send-ready order summary" },
        { he: "תמחור בזמן אמת על פני תצורות עוגה רבות בפריסת RTL רספונסיבית", en: "Real-time pricing across many cake configurations on a responsive RTL layout" },
      ],
      lessons: [
        { he: "אסתטיקה ונגישות יכולות לדור בכפיפה אחת, עם שליטה מכוונת בניגודיות ובתנועה", en: "Aesthetics and accessibility can coexist with deliberate contrast and motion controls" },
        { he: "עוזרת AI מורידה את החסם להזמנה אישית", en: "An AI concierge lowers the barrier to placing a custom order" },
        { he: "פגישת הלקוחות ב-WhatsApp מתאימה לאיך שעסק בוטיק באמת מוכר", en: "Meeting customers on WhatsApp matches how a boutique business actually sells" },
      ],
    },
    screenshots: [
      { src: "/screenshots/amits/desktop.png", caption: { he: "חנות בדסקטופ — מסך פתיחה (עברית RTL)", en: "Desktop storefront — boutique hero (RTL Hebrew)" } },
      { src: "/screenshots/amits/ai-desktop.png", caption: { he: "עוזרת AI עם שכבת glassmorphism (דסקטופ)", en: "AI concierge with glassmorphism overlay (desktop)" } },
      { src: "/screenshots/amits/catalog.png", caption: { he: "קטלוג המוצרים — עוגות עם תמחור חי", en: "Product catalog — cakes with live pricing" } },
      { src: "/screenshots/amits/design-flow.png", caption: { he: "תהליך עיצוב עוגה אישית — 4 שלבים", en: "Custom-cake design flow — 4 steps" } },
      { src: "/screenshots/amits/reviews.png", caption: { he: "ביקורות לקוחות מ-WhatsApp ו-Instagram", en: "Customer reviews from WhatsApp & Instagram" } },
      { src: "/screenshots/amits/mobile-home.png", caption: { he: "חנות במובייל", en: "Mobile storefront" } },
      { src: "/screenshots/amits/ai-mobile.png", caption: { he: "עוזרת AI במובייל", en: "AI concierge on mobile" } },
    ],
    accent: "rose",
  },
  {
    title: "ProfileCrafter",
    icon: "Android",
    summary: {
      he: "אפליקציית אנדרואיד לרישום לאירועים והנפקת כרטיסים",
      en: "Native Android event registration & ticketing app",
    },
    description: {
      he: "אפליקציית אנדרואיד לרישום לאירועים. טופס עם ולידציה (פרטים, בחירת תאריך/שעה, סוגי כרטיסים) יוצר כרטיס עם קוד QR שניתן לשתף, ומוסיף את האירוע ליומן בטלפון.",
      en: "An Android app for event sign-ups. A validated form (details, date/time pickers, ticket tiers) creates a QR-code ticket you can share, and adds the event to the phone's calendar.",
    },
    highlights: [
      { he: "טפסים ב-Material Design עם ולידציה, בחירת תאריך/שעה וסוגי כרטיסים", en: "Material Design forms with validation, date/time pickers and ticket tiers" },
      { he: "מייצר כרטיס עם קוד QR לסריקה (ZXing) עם שיתוף וייצוא ליומן", en: "Generates a scannable QR-code ticket (ZXing) with share & calendar export" },
      { he: "שומר רישומים עם SharedPreferences והרשאות בזמן ריצה", en: "Persists registrations with SharedPreferences and runtime permissions" },
    ],
    achievements: [
      { he: "כרטוס QR", en: "QR ticketing" },
      { he: "Material Design", en: "Material Design" },
      { he: "ייצוא ליומן", en: "Calendar export" },
    ],
    tech: ["Java", "Android", "Material Design", "QR Codes", "SharedPreferences"],
    problem: {
      he: "רישום לאירועים וכרטיסים מטופלים לרוב ידנית, בלי קליטה מאומתת של פרטי המשתתף ובלי כרטיס נייד שניתן לאמת.",
      en: "Event sign-ups and tickets are often handled manually, with no validated capture of attendee details or a portable, verifiable ticket.",
    },
    solution: {
      he: "בניתי אפליקציית אנדרואיד נייטיב עם טפסים מאומתים ב-Material Design שמייצרת כרטיס עם קוד QR לסריקה ומייצאת את האירוע ליומן המכשיר.",
      en: "Built a native Android app with validated Material Design forms that generates a scannable QR-code ticket and exports the event to the device calendar.",
    },
    outcome: {
      he: "תהליך שלם מרישום ועד כרטיס, עם כרטיסי QR לשיתוף, ייצוא ליומן ושמירת רישומים.",
      en: "A self-contained registration-to-ticket flow with shareable QR tickets, calendar export and persisted registrations.",
    },
    accent: "sky",
  },
  {
    title: "PersonalProfile",
    icon: "Mobile",
    summary: {
      he: "אפליקציית פרופיל רב-מסכית באנדרואיד עם Fragments",
      en: "Multi-screen Android profile app with fragments",
    },
    description: {
      he: "אפליקציית אנדרואיד עם Fragments וניווט תחתון (פרופיל, כישורים, צור קשר), טופס רב-שלבי מאומת, דיאלוגים מותנים ומעברי מסך מותאמים. נבנתה בעברית/RTL.",
      en: "An Android app with bottom-nav fragments (profile, skills, contact), a validated multi-step form, conditional dialogs and custom screen transitions. Built in Hebrew/RTL.",
    },
    highlights: [
      { he: "ניווט תחתון עם Fragments של פרופיל, כישורים וצור קשר", en: "Bottom-navigation with Profile, Skills and Contact fragments" },
      { he: "טופס מאומת עם דיאלוגים מותנים ולוגיקה לפי גיל", en: "Validated form with conditional dialogs and age-based logic" },
      { he: "מסך תוצאה מותאם אישית, שיתוף (Intents) ומעברים מותאמים", en: "Personalized result screen, share intents and custom transitions" },
    ],
    achievements: [
      { he: "ארכיטקטורת Fragments", en: "Fragment architecture" },
      { he: "ולידציית טפסים", en: "Form validation" },
      { he: "תמיכת RTL", en: "RTL support" },
    ],
    tech: ["Java", "Android", "Fragments", "Material Design"],
    problem: {
      he: "בניית חוויית מובייל רב-מסכית דורשת ניווט נקי, ולידציית טפסים חזקה וזרימות מותנות — קל שזה ייצא מבולגן.",
      en: "Building a multi-screen mobile experience requires clean navigation, robust form validation and conditional flows — easy to get messy.",
    },
    solution: {
      he: "בניתי אפליקציית אנדרואיד מבוססת Fragments עם ניווט תחתון, טופס רב-שלבי מאומת, דיאלוגים מותנים ומעברי מסך מותאמים, הכול ב-RTL/עברית.",
      en: "Built a fragment-based Android app with bottom navigation, a validated multi-step form, conditional dialogs and custom screen transitions, fully in RTL/Hebrew.",
    },
    outcome: {
      he: "אפליקציית נייטיב רב-מסכית ומלוטשת שמדגימה ארכיטקטורת אנדרואיד טובה ו-UX מאומת ומחושב.",
      en: "A polished, multi-screen native app demonstrating solid Android architecture and thoughtful, validated UX.",
    },
    accent: "teal",
  },
  {
    title: "Terraform & Ansible Website",
    icon: "Terraform",
    summary: {
      he: "פרויקט DevOps — תשתית כקוד ואוטומציה",
      en: "DevOps capstone — Infrastructure as Code & automation",
    },
    description: {
      he: "פרויקט DevOps שבונה ומגדיר סביבת אתר מלאה עם Terraform ו-Ansible. אוטומטי, חוזר על עצמו ומנוהל בגרסאות.",
      en: "A DevOps project that builds and configures a full website environment with Terraform and Ansible. Automated, repeatable and version-controlled.",
    },
    highlights: [
      { he: "הקמת תשתית עם Terraform", en: "Infrastructure provisioning with Terraform" },
      { he: "ניהול קונפיגורציה והטמעה עם Ansible", en: "Configuration management and deployment with Ansible" },
      { he: "קונפיגורציה מבוססת תבניות עם Jinja על שרתי Linux", en: "Templated configuration with Jinja on Linux hosts" },
    ],
    achievements: [
      { he: "הקמת IaC", en: "IaC provisioning" },
      { he: "קונפיגורציה אוטומטית", en: "Automated config" },
      { he: "פריסות חוזרות", en: "Repeatable deploys" },
    ],
    tech: ["Terraform", "Ansible", "Jinja", "Linux"],
    links: { github: "https://github.com/nirab96Developer/terraform-ansible-website" },
    problem: {
      he: "הקמה והגדרה ידנית של סביבות שרת איטית, חשופה לטעויות, ואי אפשר לשחזר אותה באמינות.",
      en: "Manually provisioning and configuring server environments is slow, error-prone and impossible to reproduce reliably.",
    },
    solution: {
      he: "השתמשתי ב-Terraform להקמת התשתית וב-Ansible (עם תבניות Jinja) כדי להגדיר ולפרוס סביבת אתר מלאה כקוד.",
      en: "Used Terraform to provision infrastructure and Ansible (with Jinja templating) to configure and deploy a complete website environment as code.",
    },
    outcome: {
      he: "סביבה אוטומטית לחלוטין, מנוהלת בגרסאות וחוזרת על עצמה, שאפשר לפרק ולבנות מחדש בעקביות.",
      en: "A fully automated, version-controlled and repeatable environment that can be torn down and rebuilt consistently.",
    },
    accent: "emerald",
  },
  {
    title: "Secret Message Decoder",
    icon: "Cryptography",
    summary: {
      he: "ממשק Python להצפנה וניתוח של צופן קיסר",
      en: "Python GUI for Caesar cipher encryption & analysis",
    },
    description: {
      he: "כלי דסקטופ ב-Python/Tkinter להצפנה, פענוח ושבירה (brute-force) של צופן קיסר, כולל מצב שמציג את הטקסט הסביר ביותר על פני כל ההיסטים.",
      en: "A Python/Tkinter desktop tool to encrypt, decrypt and brute-force Caesar ciphers, including a mode that shows the most likely plaintext across every shift.",
    },
    highlights: [
      { he: "הצפנה ופענוח עם היסט מתכוונן", en: "Encryption and decryption with adjustable shifts" },
      { he: "ניתוח brute-force על פני כל המפתחות האפשריים", en: "Brute-force analysis across all key candidates" },
      { he: "ממשק דסקטופ נקי ב-Tkinter", en: "Clean Tkinter desktop interface" },
    ],
    achievements: [
      { he: "מנוע brute-force", en: "Brute-force engine" },
      { he: "ממשק דסקטופ", en: "Desktop GUI" },
      { he: "כלי צפנים", en: "Cipher tooling" },
    ],
    tech: ["Python", "Tkinter", "Algorithms", "Cryptography"],
    links: { github: "https://github.com/nirab96Developer/secret-message-decoder" },
    problem: {
      he: "קשה להבין צפנים קלאסיים בלי כלי מעשי שמאפשר להצפין, לפענח ולשבור אותם אינטראקטיבית.",
      en: "Understanding classical ciphers is hard without a hands-on tool to encrypt, decrypt and break them interactively.",
    },
    solution: {
      he: "בניתי אפליקציית דסקטופ ב-Python/Tkinter להצפנה, פענוח וניתוח brute-force של צופן קיסר על פני כל היסט אפשרי.",
      en: "Built a Python/Tkinter desktop app for Caesar-cipher encryption, decryption and brute-force analysis across every possible shift.",
    },
    outcome: {
      he: "כלי לימוד אינטראקטיבי שהופך את מנגנון הצפנים ואת ניתוח ה-brute-force למוחשי וויזואלי.",
      en: "An interactive learning tool that makes cipher mechanics and brute-force cryptanalysis tangible and visual.",
    },
    accent: "amber",
  },
];

export type ImpactItem = {
  icon: string;
  title: Loc;
  description: Loc;
  metric?: string;
};

export const IMPACT: ImpactItem[] = [
  {
    icon: "ManagementImpact",
    title: { he: "ניהול אפליקציות", en: "Application management" },
    description: {
      he: "אחראי על מערכת שמאות אנשים משתמשים בה כל יום, ושומר אותה יציבה, זמינה ומשתפרת.",
      en: "I own a system that hundreds of people use every day, and keep it stable, available and improving.",
    },
  },
  {
    icon: "SqlImpact",
    title: { he: "תחקור תקלות ב-SQL Server", en: "SQL Server troubleshooting" },
    description: {
      he: "נכנס לעומק ה-SQL Server כדי לאתר ולתקן בעיות נתונים וביצועים, והופך תקלות פרודקשן עמומות לפתרונות ברורים.",
      en: "I dig into SQL Server to find and fix data and performance problems, and turn vague production failures into clear fixes.",
    },
  },
  {
    icon: "IntegrationImpact",
    title: { he: "אינטגרציית מערכות", en: "Systems integration" },
    description: {
      he: "מחבר אפליקציות, ERP, בסיסי נתונים ו-API-ים (כולל Linked Servers) כדי שהמידע יזרום נכון בין המערכות.",
      en: "I connect apps, ERP, databases and APIs (including linked servers) so data moves correctly between systems.",
    },
  },
  {
    icon: "AutomationImpact",
    title: { he: "אוטומציה", en: "Automation" },
    description: {
      he: "מחליף עבודה ידנית חוזרת באוטומציה, כדי שהצוות יבזבז פחות זמן על עבודה שחוזרת על עצמה.",
      en: "I replace repetitive manual work with automation, so the team spends less time on busywork.",
    },
  },
  {
    icon: "UsersImpact",
    title: { he: "תמיכה ל-200+ משתמשים", en: "Support for 200+ users" },
    description: {
      he: "אני הכתובת לבסיס של 200+ משתמשים, והופך את הבקשות שלהם לשינויים ולתיקונים מהירים.",
      en: "I'm the go-to person for a 200+ user base, turning their requests into changes and quick fixes.",
    },
    metric: "+200",
  },
];

export type Experience = {
  /** Short progression stage label, e.g. "IT Infrastructure" — drives the journey breadcrumb. */
  stage: Loc;
  role: Loc;
  company: Loc;
  client?: Loc;
  period: Loc;
  highlight: Loc;
  summary: Loc;
  bullets: Loc[];
  tags: Loc[];
};

/**
 * Career story is told oldest → newest so the upward progression reads naturally:
 * Technical Support → IT Infrastructure → Operations Management → NOC → Information Systems.
 */

export const EXPERIENCE: Experience[] = [
  {
    stage: { he: "מערכות מידע ואינטגרציה", en: "Information Systems & Integration" },
    role: { he: "מומחה מערכות מידע ואינטגרציה", en: "Information Systems & Integration Specialist" },
    company: { he: "ONE Technologies", en: "ONE Technologies" },
    client: { he: "לקוח: קק\"ל (קרן קיימת לישראל)", en: "Client: KKL-JNF (Keren Kayemeth LeIsrael)" },
    period: { he: "2024 – היום", en: "2024 – Present" },
    highlight: {
      he: "אחראי בלעדי על מערכת ארגונית קריטית שמאות משתמשים מסתמכים עליה.",
      en: "Sole owner of a business-critical enterprise system relied on by hundreds of users.",
    },
    summary: {
      he: "אחראי על תפעול מערכת מידע ארגונית מרכזית — זמינות, יציבות ורציפות תפעולית — ומשמש כגשר בין העסק, הפיתוח, ה-DBA, ה-DevOps, התשתיות והספקים.",
      en: "Own and operate a central enterprise information system — responsible for availability, stability and operational continuity, and acting as the bridge between business, development, DBA, DevOps, infrastructure and vendors.",
    },
    bullets: [
      { he: "אחראי על מערכת ארגונית קריטית שמשרתת מאות משתמשים — אחראי לזמינות ולרציפות שלה", en: "Own a business-critical enterprise system used by hundreds of users — accountable for its availability and continuity" },
      { he: "מוביל תחקור שורש ופתרון של תקלות פרודקשן מורכבות", en: "Lead root-cause investigation and resolution of complex Production issues" },
      { he: "כותב שאילתות SQL ומנתח נתונים כדי לאתר חריגות ולהוביל תיקונים", en: "Author SQL queries and data analysis to detect anomalies and drive fixes" },
      { he: "מנהל את זרימת המידע בין אפליקציות, ERP, בסיסי נתונים ומערכות חיצוניות", en: "Govern data flow across applications, ERP, databases and external systems" },
      { he: "בונה ומייצב אינטגרציות מול API-ים, בסיסי נתונים ו-Linked Servers", en: "Build and stabilize integrations across APIs, databases and Linked Servers" },
      { he: "מנתח תהליכים עסקיים, מגדיר דרישות ומטמיע שינויים במערכת", en: "Analyze business processes, define requirements and roll out system changes" },
    ],
    tags: [
      { he: "מערכות ארגוניות", en: "Enterprise Systems" },
      { he: "SQL Server", en: "SQL Server" },
      { he: "אינטגרציות", en: "Integrations" },
      { he: "Production", en: "Production" },
      { he: "ERP", en: "ERP" },
    ],
  },
  {
    stage: { he: "מהנדס NOC", en: "NOC Engineer" },
    role: { he: "מהנדס NOC", en: "NOC Engineer" },
    company: { he: "Ness Technologies", en: "Ness Technologies" },
    client: { he: "לקוח: מגן דוד אדום (מד\"א)", en: "Client: Magen David Adom (MDA)" },
    period: { he: "2024", en: "2024" },
    highlight: {
      he: "אחריות על זמינות בקו הראשון לארגון חירום לאומי — 24/7, מעל 2,000 משתמשים.",
      en: "Frontline reliability for a national emergency service — 24/7, 2,000+ users.",
    },
    summary: {
      he: "שמרתי על התשתיות והאבטחה של ארגון חירום לאומי ממוקד תפעול 24/7, עם אחריות לטיפול באירועים בסביבה של מעל 2,000 משתמשים.",
      en: "Safeguarded infrastructure and security across a national emergency organization from a 24/7 operations center, owning incident response for a 2,000+ user environment.",
    },
    bullets: [
      { he: "ניטרתי שרתים, תשתיות ואירועי אבטחה בזמן אמת", en: "Monitored servers, infrastructure and security events in real time" },
      { he: "טיפלתי באירועים בארגון של מעל 2,000 משתמשים — תחנות קצה, מובייל ואפליקציות", en: "Owned incident response for a 2,000+ user organization across endpoints, mobile and applications" },
      { he: "עבדתי עם Active Directory, Exchange, DNS ו-TCP/IP", en: "Operated Active Directory, Exchange, DNS and TCP/IP environments" },
      { he: "ניהלתי הרשאות משתמשים ותשתיות IT פנים-ארגוניות", en: "Administered user permissions and internal IT infrastructure" },
      { he: "עבדתי במסגרת צוות חירום 24/7", en: "Operated within a 24/7 emergency response team" },
    ],
    tags: [
      { he: "NOC", en: "NOC" },
      { he: "Active Directory", en: "Active Directory" },
      { he: "תשתיות", en: "Infrastructure" },
      { he: "24/7", en: "24/7" },
    ],
  },
  {
    stage: { he: "ניהול תפעול", en: "Operations Management" },
    role: { he: "מנהל תפעול מפעל", en: "Factory Operations Manager" },
    company: { he: "דייליט 2005", en: "Daylet 2005" },
    period: { he: "2018 – 2022", en: "2018 – 2022" },
    highlight: {
      he: "ניהלתי 25 עובדים ותקציב של 500 אלף ₪, והעליתי את הרווחיות ב-20%.",
      en: "Led 25 people and a ₪500K budget, lifting profitability 20%.",
    },
    summary: {
      he: "ניהול התפעול היומיומי וקווי הייצור של המפעל — כאן למדתי לנהל אנשים, תקציבים ותהליכים, מיומנויות שמלוות אותי היום בעבודה מול בעלי עניין במערכות מידע.",
      en: "Ran the plant's day-to-day operations and production lines — where I learned to lead people, budgets and processes, the stakeholder skills I lean on in systems work today.",
    },
    bullets: [
      { he: "ניהלתי 25 עובדים ב-3 קווי ייצור", en: "Managed 25 employees across 3 production lines" },
      { he: "אחריות תקציבית מלאה (כ-500 אלף ₪)", en: "Full budget responsibility (~₪500K)" },
      { he: "ייעלתי תהליכי תפעול והעליתי תפוקה", en: "Improved operational efficiency and throughput" },
      { he: "העליתי את הרווחיות התפעולית ב-20%", en: "Increased operating profitability by 20%" },
    ],
    tags: [
      { he: "ניהול", en: "Leadership" },
      { he: "תפעול", en: "Operations" },
      { he: "תקציב", en: "Budget" },
    ],
  },
  {
    stage: { he: "תשתיות IT", en: "IT Infrastructure" },
    role: { he: "תמיכת IT ותשתיות", en: "IT Support & Infrastructure" },
    company: { he: "דייליט 2005", en: "Daylet 2005" },
    period: { he: "2018 – 2023", en: "2018 – 2023" },
    highlight: {
      he: "הקמתי את מערך ה-IT מאפס וחסכתי 15% בעלויות מחשוב.",
      en: "Built the IT function from scratch and cut computing costs 15%.",
    },
    summary: {
      he: "אחריות מקצה לקצה על תשתיות ה-IT של החברה — שרתים, רשתות ותמיכת משתמשים — כולל הקמת מחלקת IT ותהליכים מסודרים מאפס.",
      en: "Owned the company's IT infrastructure end to end — servers, networks and end-user support — including standing up the IT function and its processes from scratch.",
    },
    bullets: [
      { he: "ניהול תשתיות IT — שרתים, רשתות, חומרה ותוכנה", en: "Managed IT infrastructure — servers, networks, hardware and software" },
      { he: "עבודה עם Active Directory, Exchange ו-DNS", en: "Administered Active Directory, Exchange and DNS" },
      { he: "תמיכת משתמשי קצה בכל החברה", en: "End-user support across the whole company" },
      { he: "חסכתי 15% בעלויות מחשוב", en: "Reduced IT costs by 15%" },
      { he: "בניתי תהליכי IT פנים-ארגוניים מסודרים", en: "Built internal IT processes from scratch" },
    ],
    tags: [
      { he: "תשתיות IT", en: "IT Infrastructure" },
      { he: "Active Directory", en: "Active Directory" },
      { he: "חיסכון בעלויות", en: "Cost savings" },
    ],
  },
  {
    stage: { he: "תמיכה טכנית", en: "Technical Support" },
    role: { he: "נציג תמיכה טכנית", en: "Technical Support Representative" },
    company: { he: "פרטנר תקשורת", en: "Partner Communications" },
    period: { he: "2017 – 2018", en: "2017 – 2018" },
    highlight: {
      he: "עמדתי ועברתי יעדי שירות ומכירה במוקד עמוס.",
      en: "Consistently exceeded service and sales targets in a high-volume center.",
    },
    summary: {
      he: "תפקיד מול לקוחות בתחילת הדרך, שבנה את האינטואיציה לפתרון תקלות ואת כישורי התקשורת שמלווים אותי בעבודת המערכות מאז.",
      en: "An early customer-facing role that built the troubleshooting instinct and communication skills behind the systems work that followed.",
    },
    bullets: [
      { he: "תמיכה טכנית בלקוחות מול מערכות תקשורת", en: "Customer technical support across communication systems" },
      { he: "אבחון ופתרון תקלות רשת (נתבים, חיבוריות)", en: "Network troubleshooting (routers, connectivity)" },
      { he: "עבודה עם פרוטוקולי תקשורת", en: "Worked with communication protocols" },
      { he: "עמידה ביעדי שירות ומכירה", en: "Met service and sales targets" },
    ],
    tags: [
      { he: "תקשורת", en: "Networking" },
      { he: "פתרון תקלות", en: "Troubleshooting" },
      { he: "מול לקוחות", en: "Customer-facing" },
    ],
  },
];

export type Certification = { title: Loc; issuer: Loc; year: string };

export const EDUCATION = {
  degree: {
    title: { he: "הנדסאי תוכנה — בוגר בהצטיינות", en: "Practical Software Engineering — Graduated with Honors" },
    institution: { he: "המכללה למינהל", en: "The College of Management Academic Studies" },
    period: { he: "2022 – 2025", en: "2022 – 2025" },
    gpa: { he: "ממוצע 91", en: "GPA 91" },
    finalProject: {
      he: "פרויקט גמר: Forewise — פלטפורמת תפעול וניהול פרויקטים (ציון 100)",
      en: "Final project: Forewise — operations & project management platform (graded 100)",
    },
    focus: [
      { he: "Full Stack", en: "Full Stack" },
      { he: "SQL", en: "SQL" },
      { he: "MongoDB", en: "MongoDB" },
      { he: "React", en: "React" },
      { he: "DevOps", en: "DevOps" },
      { he: "ניתוח מערכות", en: "Systems Analysis" },
    ] as Loc[],
  },
  certifications: [
    { title: { he: "MCSA — ניהול רשתות", en: "MCSA — Network Administration" }, issuer: { he: "מכללת פרקטיקיו", en: "Practicio College" }, year: "2023" },
    { title: { he: "טכנאי מחשבים ורשתות", en: "Computer & Network Technician" }, issuer: { he: "מכללת פרקטיקיו", en: "Practicio College" }, year: "2023" },
    { title: { he: "ניהול Linux", en: "Linux Administration" }, issuer: { he: "מכללת פרקטיקיו", en: "Practicio College" }, year: "2023" },
  ] as Certification[],
  languages: [
    { name: { he: "עברית", en: "Hebrew" }, level: { he: "שפת אם", en: "Native" } },
    { name: { he: "אנגלית", en: "English" }, level: { he: "רמה מקצועית מלאה", en: "Full professional" } },
  ] as { name: Loc; level: Loc }[],
};


