'use client'

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type CareerLevel =
  | "senior-qa"
  | "senior-tester"
  | "senior-analyst"
  | "analyst"
  | "tester"
  | "associate";

type CareerItem = {
  shortLabel: string;
  year: string;
  level: CareerLevel;
  period: string;
  role: string;
  company: string;
  project: string;
  story: string;
  projectTitle: string;
  projectSummary: string;
  responsibilities: string[];
  skills: string[];
  takeaway: string;
};

type AccentCard = {
  title: string;
  items: string[];
  accent: string;
};

type CertificateCard = {
  title: string;
  issuer: string;
  note: string;
  accent: string;
};

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#journey", label: "Journey" },
  { href: "#tools", label: "Tools" },
  { href: "#projects", label: "Domains" },
  { href: "#certificates", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const careerJourney: CareerItem[] = [
  {
    shortLabel: "ACCORD",
    year: "2025",
    level: "senior-qa",
    period: "Sep 2025 - Dec 2025",
    role: "Senior Software Quality Assurance (Contract)",
    company: "ACCORD INNOVATIONS CO., LTD.",
    project: "Ascend Commerce (True VC)",
    story:
      "This role strengthened my end-to-end QA ownership in a complex e-commerce web project, combining requirement analysis, test design, backend validation, defect management, and stakeholder communication to support confident release decisions.",
    projectTitle: "Ascend Commerce (True VC)",
    projectSummary:
      "Delivered end-to-end validation for an e-commerce web platform, covering backend processing, frontend behavior, requirement alignment, and production readiness from both technical and business perspectives.",
    responsibilities: [
      "Received requirements from the Tech Lead, analyzed the information, and created detailed test cases based on business requirements and system architecture.",
      "Identified requirement conflicts, raised concerns proactively, and requested additional documentation or workflow clarification from the System Analyst or relevant stakeholders when needed.",
      "Executed testing according to specifications and raised bugs or tickets clearly to inform the development team.",
      "Communicated directly with the Product Owner when requirement conflicts affected business decisions.",
      "Designed comprehensive test scenarios and test cases covering end-to-end business flows.",
      "Performed backend testing including RESTful APIs, scheduled jobs, background processes, and downstream internal processing triggered by third-party services.",
      "Managed, prioritized, and reported defects with clear reproduction steps, expected versus actual results, logs, and supporting evidence.",
      "Coordinated with Developers, Operations, and external vendors to ensure timely and high-quality delivery.",
    ],
    skills: [
      "End-to-End Testing",
      "RESTful APIs",
      "Scheduled Jobs",
      "Requirement Analysis",
      "Defect Management",
      "Stakeholder Communication",
    ],
    takeaway:
      "This experience reinforced the value of combining technical validation with strong requirement understanding and clear communication to support both software quality and sound business decisions.",
  },
  {
    shortLabel: "MISUMI",
    year: "2023",
    level: "senior-tester",
    period: "Mar 2023 - Jul 2025",
    role: "Senior Software Tester (Permanent)",
    company: "MISUMI (THAILAND) Co., Ltd.",
    project: "Application and Web E-commerce",
    story:
      "This role expanded my experience in large-scale e-commerce quality assurance across web and mobile platforms, with strong focus on frontend behavior, API alignment, mobile debugging, test planning, and execution coordination.",
    projectTitle: "Application and Web E-commerce",
    projectSummary:
      "Supported quality delivery for an e-commerce website and mobile applications on iOS and Android, combining frontend validation, API-related review, local debugging, and coordinated release execution.",
    responsibilities: [
      "Performed frontend-focused testing for e-commerce web and mobile applications across business flows and user interface behavior.",
      "Reviewed certain functionalities together with API behavior to validate frontend and backend consistency.",
      "Tested Android applications directly on devices using APK files and tested iOS builds through TestFlight.",
      "Pulled source code to build applications locally for debugging and inspected logs through Android Studio and Xcode.",
      "Verified API behavior and application integration through local debugging and frontend log analysis.",
      "Planned testing scope and distributed execution tasks among vendors and junior testers.",
      "Collaborated with the development team on complex testing scenarios to ensure full coverage of functionality and requirements.",
      "Used Power Automate to manage test case workflows for each release and for large short-term projects.",
    ],
    skills: [
      "E-commerce Testing",
      "Web Testing",
      "Mobile Testing",
      "Android Studio",
      "Xcode",
      "Power Automate",
      "Test Planning",
    ],
    takeaway:
      "This role improved my ability to lead broader testing scope, coordinate multiple contributors, and investigate issues from both application and integration perspectives.",
  },
  {
    shortLabel: "MIMO",
    year: "2022",
    level: "senior-analyst",
    period: "July 2022 - Nov 2022",
    role: "Senior System Analyst (Permanent)",
    company: "Mimo tech",
    project: "AIS FBB-Fibre Workflow",
    story:
      "This role expanded my responsibility from feature analysis into workflow ownership, migration validation, team guidance, and daily production support across business-critical onboarding systems.",
    projectTitle: "AIS FBB-Fibre Workflow",
    projectSummary:
      "Led analysis and validation for customer profile and document verification systems that supported downstream order creation and installation scheduling across multiple onboarding channels.",
    responsibilities: [
      "Owned systems related to customer profile and document verification across onboarding channels before downstream order creation.",
      "Worked with Oracle-based business logic implemented through packages and stored procedures, with outputs consumed by Java-based frontend services.",
      "Supported platform migration from on-premise infrastructure to the cloud, including database transition from Oracle to PostgreSQL.",
      "Validated and remediated converted database logic after vendor tools transformed Oracle procedures into PostgreSQL.",
      "Manually adjusted unsupported syntax and functions to preserve original business behavior.",
      "Supervised two developers and three testers while providing consultation on system logic and functionality design.",
      "Coordinated with third-party platforms and cross-system stakeholders to ensure alignment.",
      "Handled daily production support issues for each release.",
    ],
    skills: [
      "Senior System Analysis",
      "Database Migration Validation",
      "Oracle / PostgreSQL",
      "Team Coordination",
      "Cross-system Integration",
      "Production Support",
    ],
    takeaway:
      "This role strengthened my ability to connect business logic, technical constraints, migration work, and production support into a complete delivery perspective.",
  },
  {
    shortLabel: "EPIC",
    year: "2021",
    level: "analyst",
    period: "Jun 2021 - Jun 2022",
    role: "System Analyst (Contract)",
    company: "Epic Consulting Co., Ltd.",
    project: "AIS FBB-Fibre Web Register",
    story:
      "This role marked my move into system analysis, starting with small- to medium-scale enhancements before expanding into channel growth initiatives, payment integration, and production support across customer subscription workflows.",
    projectTitle: "AIS FBB-Fibre Web Register",
    projectSummary:
      "Supported requirement analysis and functional design for internet subscription systems, including enhancement work, new channel expansion, payment flow integration, and coordination across internal teams and external partners.",
    responsibilities: [
      "Prepared functional specifications for developers based on requirements briefed by the Scrum team.",
      "Briefed testers on detailed testing requirements and supported both development and testing through deployment to production.",
      "Handled enhancement and defect-fix scope for small- to medium-scale functionalities.",
      "Supported a major initiative to expand subscription channels to Pocket Net WiFi while keeping the existing home internet workflow unaffected.",
      "Helped define one-time payment flow support for the new channel, including QR code and credit card payment methods.",
      "Oversaw developers and testers according to project scale while guiding business and system logic.",
      "Acted as a key liaison with third-party partners to align requirements and execution.",
      "Handled daily production support for each release cycle.",
    ],
    skills: [
      "System Analysis",
      "Functional Specification",
      "Business Logic Guidance",
      "Payment Flow Integration",
      "Third-party Coordination",
      "Production Support",
    ],
    takeaway:
      "This role developed my ability to translate requirements into workable solutions, support delivery across teams, and balance new business scope with stability of existing workflows.",
  },
  {
    shortLabel: "APAR",
    year: "2018",
    level: "tester",
    period: "Sep 2018 - Mar 2021",
    role: "Software Tester (Contract)",
    company: "APAR TECHNOLOGIES (THAILAND) LTD.",
    project: "Backend & Enterprise Validation",
    story:
      "At this stage, I expanded from foundation-level testing into broader functional, integration, and regression validation across multiple environments, building stronger release discipline and enterprise testing exposure.",
    projectTitle: "Multi-Environment Testing & Regression Coverage",
    projectSummary:
      "Supported testing in Dev, SIT, and UAT environments with strong focus on backend validation, regression execution, and defect tracking through closure.",
    responsibilities: [
      "Performed backend data validation using SQL queries.",
      "Executed functional, integration, and regression testing.",
      "Designed test cases, test steps, and test scenarios.",
      "Executed regression test cases in Dev, SIT, and UAT environments and logged defects through closure during testing.",
    ],
    skills: [
      "Regression Testing",
      "Integration Testing",
      "SIT/UAT",
      "Defect Lifecycle",
    ],
    takeaway:
      "This role strengthened my understanding of delivery cycles and taught me how to maintain quality consistently across repeated releases and multiple environments.",
  },
  {
    shortLabel: "AWARE",
    year: "2017",
    level: "associate",
    period: "Aug 2017 - Sep 2018",
    role: "Associate Software Test Engineering (Permanent)",
    company: "AWARE TECHNOLOGY SOLUTIONS",
    project: "Enterprise System Testing",
    story:
      "This was the starting point of my QA career, where I built a strong foundation in SQL validation, structured test design, and disciplined documentation for backend-focused system verification.",
    projectTitle: "Backend Validation & QA Foundation",
    projectSummary:
      "Worked on backend-focused validation by checking database results against expected business rules and documenting structured test evidence for reliable execution.",
    responsibilities: [
      "Executed SQL queries to validate backend data based on business requirements.",
      "Developed and designed test cases, test steps, and test scenarios.",
      "Documented test results with test status and defect information.",
    ],
    skills: [
      "SQL",
      "Test Case Design",
      "Backend Validation",
      "Defect Documentation",
    ],
    takeaway:
      "This role built the discipline of structured testing and taught me the importance of accuracy when validating system behavior from the data layer upward.",
  },
];

const toolCards: AccentCard[] = [
  {
    title: "Testing & QA",
    items: ["Manual Testing", "Functional Testing", "Integration Testing", "Regression Testing", "User Acceptance Testing", "End-to-End Testing"],
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "API & Data",
    items: ["RESTful APIs", "SQL", "PL/SQL", "Oracle", "PostgreSQL", "Scheduled Jobs"],
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    title: "Tools & Platforms",
    items: ["Postman", "SoapUI", "JIRA", "Confluence", "pgAdmin", "PL/SQL Developer", "Android Studio", "Xcode", "TestFlight"],
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    title: "Automation & Workflow",
    items: ["Power Automate", "Playwright (Basic)", "Automation Workflow", "Release Tracking", "Test Case Routing", "Execution Coordination"],
    accent: "from-pink-500/20 to-rose-500/10",
  },
];

const certificates: CertificateCard[] = [
  {
    title: "IT PASSPORT EXAMINATION (LEVEL : IP)",
    issuer: "ITPE - NSTDA ACADEMY",
    note: "Validated foundational knowledge in information technology, software development concepts, systems, networks, security, and project-related IT understanding.",
    accent: "from-sky-500/20 to-blue-500/10",
  },
  {
    title: "APPLICATION DEVELOPMENT FUNDAMENTALS",
    issuer: "Microsoft Technology Associate (MTA)",
    note: "Covered core application development fundamentals including programming concepts, software logic, and basic development principles.",
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
];

const projectGroups: AccentCard[] = [
  {
    title: "Telecom Platforms",
    items: [
      "Customer profile and document verification workflows",
      "Order preparation and installation appointment scheduling",
      "Oracle to PostgreSQL business logic migration",
      "Cross-system coordination with third-party platforms",
      "Subscription channel support and service workflow alignment",
      "Production support across release cycles and operational issues",
    ],
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "E-Commerce Platforms",
    items: [
      "Web and mobile user journey validation",
      "Frontend and backend behavior consistency checks",
      "RESTful API, scheduled job, and background process testing",
      "Release coordination across business-critical features",
      "Device-based testing for Android APK and iOS TestFlight builds",
      "Debugging support through local builds and log inspection",
    ],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Leadership & Delivery",
    items: [
      "Test planning and task distribution",
      "Supervising developers and testers",
      "Production support by release cycle",
      "Cross-functional collaboration with operations and vendors",
      "Requirement alignment across internal teams and partners",
      "Delivery support for both project changes and production issues",
    ],
    accent: "from-rose-500/20 to-pink-500/10",
  },
];

const yearMarkerClass: Record<CareerLevel, string> = {
  "senior-qa": "border-rose-300/70 bg-gradient-to-br from-rose-200 to-rose-300 text-slate-950 shadow-[0_12px_30px_rgba(251,113,133,0.26)]",
  "senior-tester": "border-cyan-300/70 bg-gradient-to-br from-cyan-200 to-cyan-300 text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.26)]",
  "senior-analyst": "border-violet-300/70 bg-gradient-to-br from-violet-200 to-violet-300 text-slate-950 shadow-[0_12px_30px_rgba(196,181,253,0.26)]",
  analyst: "border-emerald-300/70 bg-gradient-to-br from-emerald-200 to-emerald-300 text-slate-950 shadow-[0_12px_30px_rgba(52,211,153,0.24)]",
  tester: "border-amber-300/70 bg-gradient-to-br from-amber-200 to-amber-300 text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.24)]",
  associate: "border-slate-300/70 bg-gradient-to-br from-slate-200 to-slate-300 text-slate-950 shadow-[0_12px_30px_rgba(203,213,225,0.22)]",
};

const sectionStyles = {
  hero: "bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.96),rgba(49,46,129,0.82))]",
  panelA: "bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(17,24,39,0.96),rgba(14,116,144,0.18))]",
  panelB: "bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(23,23,23,0.96),rgba(126,34,206,0.18))]",
  panelC: "bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(17,24,39,0.96),rgba(5,150,105,0.16))]",
  panelD: "bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(28,25,23,0.96),rgba(234,88,12,0.16))]",
} as const;

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  return (
    <div>
      <div className={`mb-5 h-1 w-20 rounded-full bg-gradient-to-r ${accent} md:mb-6 md:w-24`} />
      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300 md:text-sm">{eyebrow}</p>
      <h3 className="mt-2 text-[1.65rem] font-semibold leading-tight text-white md:mt-3 md:text-3xl">{title}</h3>
    </div>
  );
}

function RevealSection({ id, className, children }: { id?: string; className: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function ResumePortfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [pendingScrollIndex, setPendingScrollIndex] = useState<number | null>(null);
  const shouldScrollToCareerRef = useRef(false);
  const careerHeaderRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.location.hash === "") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    if (!shouldScrollToCareerRef.current || pendingScrollIndex === null) return;

    let timeoutId = 0;

    timeoutId = window.setTimeout(() => {
      const el = careerHeaderRefs.current[pendingScrollIndex];
      if (!el) return;

      const headerOffset = 104;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      shouldScrollToCareerRef.current = false;
      setPendingScrollIndex(null);
    }, 360);

    return () => window.clearTimeout(timeoutId);
  }, [activeTab, pendingScrollIndex]);

  const handleSelectCareer = (index: number) => {
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    shouldScrollToCareerRef.current = true;
    setPendingScrollIndex(index);
    setActiveTab(index);
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_22%),radial-gradient(circle_at_80%_18%,_rgba(168,85,247,0.12),_transparent_20%),radial-gradient(circle_at_50%_100%,_rgba(245,158,11,0.08),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#0b1120_45%,_#111827_100%)] text-white">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-lg font-semibold tracking-wide sm:text-xl">Saran Chuephoodee</h1>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Senior Software Tester / System Analyst</p>
          </div>

          <nav className="hidden gap-5 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-3 py-2 text-sm text-white ring-1 ring-white/10 transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileNavOpen}
          >
            <span className="mr-2 text-xs uppercase tracking-[0.2em] text-slate-300">Menu</span>
            <span>{mobileNavOpen ? "−" : "+"}</span>
          </button>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/8 lg:hidden"
            >
              <div className="mx-auto grid max-w-6xl gap-2 px-4 py-4 sm:px-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileNavOpen(false)}
                    className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/8 transition hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 sm:space-y-8 sm:py-10 md:space-y-10 lg:space-y-12 lg:py-12">
        <RevealSection className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:rounded-[2rem] lg:p-12 ${sectionStyles.hero}`}>
          <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 sm:mb-6 sm:w-24" />
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-200 ring-1 ring-white/10 sm:px-4 sm:text-sm">
                Career Story
              </p>
              <h2 className="text-[2rem] font-bold leading-[1.08] sm:text-[2.5rem] md:text-5xl lg:text-6xl">
                Building quality across software, systems, and business workflows.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                I am Saran Chuephoodee, Software Tester and System Analysis with 8 years of experience across Telecom, Insurance, and E-Commerce domains.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] sm:px-6"
                >
                  View My Journey
                </a>
                {/* <a
                  href="/CV_Saran_11032026.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02] sm:px-6"
                >
                  Download CV
                </a> */}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-xl sm:p-7 lg:rounded-[2rem] lg:p-8 xl:p-9">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/18 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-violet-500/18 blur-3xl" />

              <div className="relative space-y-5 sm:space-y-6">
                <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left md:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.18 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="h-28 w-28 shrink-0 overflow-hidden rounded-[1.5rem] ring-1 ring-white/10 shadow-lg shadow-cyan-500/20 sm:h-32 sm:w-32 lg:h-36 lg:w-36 lg:rounded-[2rem]"
                  >
                    <img src="/profile.jpg" alt="Saran Chuephoodee" className="h-full w-full object-cover" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h3 className="whitespace-nowrap text-[1.35rem] font-semibold sm:text-[1.45rem] lg:text-[1.6rem]">
                      Quality + Analysis
                    </h3>
                    {/* <p className="mt-2 text-sm text-slate-300">Bangkok, Thailand</p> */}
                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">
                      Experienced in backend validation, requirement analysis, system integration, and end-to-end testing with a strong ability to connect business needs to practical quality assurance.
                    </p>
                  </div>
                </div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {[
                    ["Experience", "8 Years", "Testing, analysis, validation", "from-cyan-500/15 to-sky-500/10"],
                    ["Domains", "3 Core", "Telecom, Insurance, E-Commerce", "from-violet-500/15 to-fuchsia-500/10"],
                    ["Strength", "API / Flow", "Business rule and data validation", "from-emerald-500/15 to-teal-500/10"],
                    ["Current Focus", "Playwright", "Growing automation capability", "from-amber-500/15 to-orange-500/10"],
                  ].map(([label, value, desc, accent]) => (
                    <motion.div key={label} variants={staggerItem} className={`rounded-2xl bg-gradient-to-br ${accent} p-4 ring-1 ring-white/10 backdrop-blur sm:p-5`}>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs">{label}</p>
                      <p className="mt-2 text-2xl font-bold sm:text-3xl">{value}</p>
                      <p className="mt-2 text-sm text-slate-300">{desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="overview" className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:rounded-[2rem] ${sectionStyles.panelA}`}>
          <SectionHeading eyebrow="Professional Overview" title="Built on quality, systems thinking, and ownership" accent="from-cyan-400 via-sky-400 to-violet-400" />
          <p className="mt-6 text-[15px] leading-8 text-slate-300 md:text-base">
            I started with backend validation and structured testing, where I learned how to check data accuracy and build clear test scenarios. Over time, I expanded into functional, integration, and regression testing across multiple environments. Later, I moved into system analysis and requirement design, which helped me see software not only from a testing perspective, but also from the business process view. Today, I combine QA execution, requirement understanding, and collaboration across teams to help deliver reliable software with stronger release confidence.
          </p>
        </RevealSection>

        <RevealSection id="journey" className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:rounded-[2rem] ${sectionStyles.panelB}`}>
          <SectionHeading eyebrow="Career Journey" title="Career timeline and highlights" accent="from-violet-400 via-fuchsia-400 to-cyan-400" />

          <div className="mt-8 grid gap-8 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-10">
            <div className="relative hidden xl:block">
              <div className="absolute left-[21px] top-[20px] bottom-[20px] w-[2px] rounded-full bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.14)]" />
              <div className="space-y-4">
                {careerJourney.map((item, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={`${item.role}-${item.company}`}
                      onClick={() => handleSelectCareer(index)}
                      className="group relative flex w-full items-start gap-4 rounded-2xl p-2 text-left"
                    >
                      <div
                        className={`relative z-10 mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border text-[11px] font-semibold shadow-sm transition backdrop-blur-sm ${
                          isActive
                            ? `${yearMarkerClass[item.level]} ring-2 ring-white/20 bg-clip-padding`
                            : "border-white/15 bg-slate-900 text-slate-200 ring-1 ring-white/5 group-hover:border-cyan-300 group-hover:bg-slate-800"
                        }`}
                      >
                        {item.year}
                      </div>
                      <div
                        className={`min-w-0 rounded-2xl px-4 py-3 transition ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-400/20 via-sky-400/12 to-violet-400/20 ring-1 ring-cyan-400/30 shadow-[0_20px_50px_rgba(34,211,238,0.16)]"
                            : "bg-white/5 group-hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <p className={`text-sm font-semibold ${isActive ? "text-cyan-200" : "text-white"}`}>{item.shortLabel}</p>
                          {isActive ? <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" /> : null}
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{item.period}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              {careerJourney.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <motion.div
                    id={`career-card-${index}`}
                    key={`${item.company}-${item.period}`}
                    layout
                    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                    className={`relative overflow-hidden rounded-3xl transition ${
                      isActive
                        ? "bg-[linear-gradient(135deg,rgba(14,23,42,0.9),rgba(30,41,59,0.92))] shadow-[0_30px_90px_rgba(2,12,27,0.6)] ring-1 ring-cyan-400/30 backdrop-blur-2xl"
                        : "bg-white/[0.04]"
                    }`}
                  >
                    {isActive ? <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" /> : null}
                    <div
                      ref={(el) => {
                        careerHeaderRefs.current[index] = el;
                      }}
                    >
                      <button
                        onClick={() => handleSelectCareer(index)}
                        className="flex w-full flex-col gap-4 px-5 py-5 text-left sm:px-6 xl:flex-row xl:items-center xl:justify-between"
                      >
                        <div>
                          <div className="mb-3 flex items-center gap-3 xl:hidden">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl border bg-slate-900 text-[11px] font-semibold shadow-sm backdrop-blur-sm ${yearMarkerClass[item.level]}`}>
                              {item.year}
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.shortLabel}</p>
                              {isActive ? <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" /> : null}
                            </div>
                          </div>
                          <p className="hidden text-sm uppercase tracking-[0.2em] text-cyan-300 xl:block">{item.shortLabel}</p>
                          <h4 className="mt-1 text-lg font-semibold leading-snug sm:text-xl md:text-[1.35rem]">{item.role}</h4>
                          <p className="mt-2 text-sm text-slate-300 md:text-base">{item.company}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">Project: {item.project}</p>
                        </div>
                        <div className={`w-fit shrink-0 rounded-2xl px-4 py-3 text-sm ring-1 transition ${isActive ? "bg-cyan-400/10 text-cyan-100 ring-cyan-400/25" : "bg-white/5 text-slate-300 ring-white/10"}`}>
                          {item.period}
                        </div>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                            <div className="space-y-5 sm:space-y-6">
                              <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role Story</p>
                                <p className="mt-3 text-[15px] leading-8 text-slate-300 md:text-base">{item.story}</p>
                              </div>

                              <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-5 ring-1 ring-white/10">
                                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Project Highlight</p>
                                <h5 className="mt-3 text-xl font-semibold leading-snug md:text-[1.3rem]">{item.projectTitle}</h5>
                                <p className="mt-3 text-[15px] leading-8 text-slate-300 md:text-base">{item.projectSummary}</p>
                              </div>

                              <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Responsibilities</p>
                                <motion.ul variants={staggerContainer} initial="hidden" animate="show" className="mt-4 space-y-3 text-slate-300">
                                  {item.responsibilities.map((detail) => (
                                    <motion.li key={detail} variants={staggerItem} className="flex gap-3 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/5">
                                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                                      <span className="text-[15px] leading-7 md:text-base">{detail}</span>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </div>

                              <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Skills Built</p>
                                <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-4 flex flex-wrap gap-3">
                                  {item.skills.map((skill) => (
                                    <motion.span key={skill} variants={staggerItem} className="rounded-full bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-2 text-sm text-slate-100 ring-1 ring-white/5">
                                      {skill}
                                    </motion.span>
                                  ))}
                                </motion.div>
                              </div>

                              <div className="rounded-3xl bg-slate-950/60 p-5 ring-1 ring-white/5">
                                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Key Takeaway</p>
                                <p className="mt-3 text-[15px] leading-8 text-slate-300 md:text-base">{item.takeaway}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="tools" className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:rounded-[2rem] ${sectionStyles.panelD}`}>
          <SectionHeading eyebrow="Tools & Technologies" title="Tools that support delivery" accent="from-amber-400 via-orange-400 to-rose-400" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-4 sm:grid-cols-2 xl:mt-10 xl:grid-cols-4 xl:gap-6 xl:items-stretch">
            {toolCards.map((card) => (
              <motion.div key={card.title} variants={staggerItem} className={`rounded-3xl bg-gradient-to-br ${card.accent} p-[1px] h-full`}>
                <div className="flex h-full flex-col rounded-3xl bg-slate-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/90 sm:p-6">
                  <h4 className="text-lg font-semibold leading-snug md:text-[1.15rem]">{card.title}</h4>
                  <div className="mt-5 flex flex-wrap content-start gap-2">
                    {card.items.map((item) => (
                      <span key={item} className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </RevealSection>

        <RevealSection id="projects" className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:rounded-[2rem] ${sectionStyles.panelA}`}>
          <SectionHeading eyebrow="Domain Exposure" title="Domains and delivery scope" accent="from-cyan-400 via-violet-400 to-fuchsia-400" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-4 sm:grid-cols-2 xl:mt-10 xl:grid-cols-3 xl:gap-6">
            {projectGroups.map((group) => (
              <motion.div key={group.title} variants={staggerItem} className={`rounded-3xl bg-gradient-to-br ${group.accent} p-[1px] h-full ${group.title === "Leadership & Delivery" ? "sm:col-span-2 xl:col-span-1" : ""}`}>
                <div className="flex h-full flex-col rounded-3xl bg-slate-950/80 p-5 sm:p-6">
                  <h4 className="text-xl font-semibold leading-snug md:text-[1.3rem]">{group.title}</h4>
                  <ul className="mt-5 space-y-3 text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span className="text-[15px] leading-7 md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </RevealSection>

        <RevealSection id="certificates" className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:rounded-[2rem] ${sectionStyles.panelB}`}>
          <SectionHeading eyebrow="Certifications" title="Certifications" accent="from-violet-400 via-fuchsia-400 to-pink-400" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-5 md:grid-cols-2 xl:mt-10 xl:gap-7">
            {certificates.map((cert) => (
              <motion.div key={cert.title} variants={staggerItem} className={`rounded-3xl bg-gradient-to-br ${cert.accent} p-[1px]`}>
                <div className="rounded-3xl bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/90 sm:p-7">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Certificate</p>
                  <h4 className="mt-3 text-[1.02rem] font-semibold leading-snug md:text-[1.02rem] lg:text-[1.08rem] xl:text-[1.12rem]">
                    {cert.title}
                  </h4>
                  <p className="mt-3 text-slate-300">{cert.issuer}</p>
                  <p className="mt-4 text-[15px] leading-8 text-slate-400 md:text-base">{cert.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </RevealSection>

        <RevealSection id="education" className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:rounded-[2rem] ${sectionStyles.panelC}`}>
          <SectionHeading eyebrow="Education" title="Education background" accent="from-emerald-400 via-cyan-400 to-sky-400" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-4 md:grid-cols-2 xl:mt-10 xl:gap-6">
            <motion.div variants={staggerItem} className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur sm:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold leading-snug md:text-[1.3rem]">Bachelor of Engineering in Software Engineering</h4>
                  <p className="mt-2 text-slate-300">University of Phayao</p>
                </div>
                <div className="shrink-0 whitespace-nowrap rounded-2xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
                  2013 - 2016
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-8 text-slate-400 md:text-base">
                Studied software engineering with focus on programming fundamentals, software development processes, and structured problem solving that later supported my work in QA and system analysis.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur sm:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold leading-snug md:text-[1.3rem]">High School</h4>
                  <p className="mt-2 text-slate-300">Singburi School</p>
                </div>
                <div className="shrink-0 whitespace-nowrap rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
                  Graduated 2012
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-8 text-slate-400 md:text-base">
                Completed upper secondary education and built the academic foundation that prepared me for engineering studies and a technical career path.
              </p>
            </motion.div>
          </motion.div>
        </RevealSection>

        <RevealSection className="rounded-[1.75rem] bg-gradient-to-br from-cyan-500/10 via-sky-500/8 to-violet-500/10 p-6 shadow-[0_20px_80px_rgba(6,182,212,0.08)] sm:p-8 lg:rounded-[2rem]">
          <SectionHeading eyebrow="Professional Positioning" title="What this journey says about me" accent="from-cyan-300 via-sky-300 to-violet-300" />
          <div className="mt-8 rounded-3xl bg-slate-950/55 p-6 ring-1 ring-white/10 backdrop-blur-xl sm:mt-10 sm:p-8">
            <p className="max-w-4xl text-[15px] leading-8 text-slate-200 md:text-base">
              My career path shows steady growth from technical execution into wider business understanding. I have learned how to validate systems carefully, analyze requirements more deeply, coordinate across teams more effectively, and support software quality from both technical and operational perspectives. That combination helps me contribute not only as a tester, but as someone who understands the bigger picture behind each release.
            </p>
          </div>
        </RevealSection>

        <RevealSection id="contact" className={`rounded-[1.75rem] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:rounded-[2rem] ${sectionStyles.panelD}`}>
          <SectionHeading eyebrow="Contact" title="Let’s connect" accent="from-amber-400 via-orange-400 to-rose-400" />
          <div className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl sm:mt-10 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
              <div>
                <p className="text-base font-medium text-white sm:text-lg">Open to software testing, QA, and system analysis opportunities.</p>
                <p className="mt-3 text-[15px] leading-8 text-slate-300 md:text-base">
                  You can reach me directly by email or phone for job opportunities, project discussions, or professional networking.
                </p>
              </div>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <motion.a
                  variants={staggerItem}
                  href="mailto:Kerlzero@gmail.com"
                  className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(34,211,238,0.28)]"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-800/70">Email</div>
                  <div className="mt-2 text-sm">Kerlzero@gmail.com</div>
                </motion.a>
                <motion.a
                  variants={staggerItem}
                  href="tel:093209xxxx"
                  className="rounded-2xl bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 px-5 py-4 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(192,38,211,0.26)]"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-white/70">Phone</div>
                  <div className="mt-2 text-sm">0932094456</div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </RevealSection>
      </main>
    </div>
  );
}
