export type ExperienceItem = {
  year: string;
  period: string;
  role: string;
  company: string;
  project: string;
  summary: string;
  highlights: string[];
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type CredentialItem = {
  title: string;
  issuer: string;
  note: string;
};

export const profile = {
  name: "Saran Chuephoodee",
  title: "Senior Software Tester and System Analyst",
  location: "Thailand",
  intro:
    "I help teams ship reliable software by connecting requirement analysis, backend validation, end-to-end testing, and release readiness.",
  summary:
    "Over 8 years, I have worked across telecom, insurance, and e-commerce products, growing from backend-focused QA into broader system analysis and delivery support.",
  email: "Kerlzero@gmail.com",
  phoneDisplay: "0932094456",
  phoneHref: "tel:+66932094456",
  cvPath: "/CV_Saran_11032026.pdf",
};

export const capabilities: CapabilityGroup[] = [
  {
    title: "Testing and QA",
    items: [
      "Manual testing",
      "Functional testing",
      "Integration testing",
      "Regression testing",
      "End-to-end testing",
      "UAT support",
    ],
  },
  {
    title: "Systems and Data",
    items: [
      "RESTful API validation",
      "SQL and PL/SQL",
      "Oracle and PostgreSQL",
      "Scheduled job testing",
      "Business rule verification",
      "Cross-system workflow analysis",
    ],
  },
  {
    title: "Tools and Delivery",
    items: [
      "Postman",
      "SoapUI",
      "JIRA",
      "Confluence",
      "Android Studio",
      "Xcode",
      "TestFlight",
      "Power Automate",
    ],
  },
];

export const selectedWork: ExperienceItem[] = [
  {
    year: "2025",
    period: "Sep 2025 - Dec 2025",
    role: "Senior Software Quality Assurance",
    company: "Accord Innovations",
    project: "Ascend Commerce",
    summary:
      "Owned end-to-end QA across a complex e-commerce web platform, combining requirement analysis, backend validation, defect management, and release communication.",
    highlights: [
      "Created test cases directly from business requirements and architecture context.",
      "Validated APIs, scheduled jobs, and downstream processes triggered by third-party services.",
      "Raised requirement conflicts early and coordinated with product and technical stakeholders.",
    ],
  },
  {
    year: "2023",
    period: "Mar 2023 - Jul 2025",
    role: "Senior Software Tester",
    company: "Misumi Thailand",
    project: "E-commerce web and mobile platforms",
    summary:
      "Led broad testing scope for web and mobile commerce experiences, balancing UI validation, API consistency checks, debugging, and execution planning.",
    highlights: [
      "Tested Android builds with APKs and iOS releases through TestFlight.",
      "Supported debugging with local builds, Android Studio, and Xcode logs.",
      "Planned testing scope and coordinated work across vendors and junior testers.",
    ],
  },
  {
    year: "2022",
    period: "Jul 2022 - Nov 2022",
    role: "Senior System Analyst",
    company: "Mimo Tech",
    project: "AIS FBB fibre workflows",
    summary:
      "Expanded from QA into workflow ownership, migration validation, and daily production support for business-critical onboarding systems.",
    highlights: [
      "Worked with Oracle-based logic and validated migration outputs to PostgreSQL.",
      "Adjusted unsupported converted database syntax to preserve business behavior.",
      "Guided developers and testers while coordinating with cross-system partners.",
    ],
  },
];

export const timeline: ExperienceItem[] = [
  ...selectedWork,
  {
    year: "2021",
    period: "Jun 2021 - Jun 2022",
    role: "System Analyst",
    company: "Epic Consulting",
    project: "AIS FBB Fibre Web Register",
    summary:
      "Translated requirements into functional specifications, supported delivery through production, and coordinated payment and channel expansion work.",
    highlights: [
      "Prepared functional specs for developers.",
      "Briefed testers on detailed business and system logic.",
      "Supported production issues across release cycles.",
    ],
  },
  {
    year: "2018",
    period: "Sep 2018 - Mar 2021",
    role: "Software Tester",
    company: "Apar Technologies",
    project: "Backend and enterprise validation",
    summary:
      "Built strong release discipline through backend data checks, regression coverage, and multi-environment testing across Dev, SIT, and UAT.",
    highlights: [
      "Performed SQL-based backend validation.",
      "Designed and executed regression test scenarios.",
      "Tracked defects through closure during test cycles.",
    ],
  },
  {
    year: "2017",
    period: "Aug 2017 - Sep 2018",
    role: "Associate Software Test Engineer",
    company: "Aware Technology Solutions",
    project: "Enterprise system testing",
    summary:
      "Started with structured backend-focused QA work and built a foundation in SQL validation, documentation, and test design.",
    highlights: [
      "Validated backend data against business rules.",
      "Designed test cases, steps, and scenarios.",
      "Documented results and defect evidence clearly.",
    ],
  },
];

export const credentials: CredentialItem[] = [
  {
    title: "IT Passport Examination (IP)",
    issuer: "ITPE - NSTDA Academy",
    note:
      "Validated foundational knowledge in information technology, software development, networks, security, and project-related IT concepts.",
  },
  {
    title: "Application Development Fundamentals",
    issuer: "Microsoft Technology Associate",
    note:
      "Covered core application development fundamentals including software logic, programming concepts, and development principles.",
  },
];

export const education = [
  {
    title: "Bachelor of Engineering in Software Engineering",
    school: "University of Phayao",
    period: "2013 - 2016",
    note:
      "Studied software engineering with focus on programming fundamentals, software development processes, and structured problem solving.",
  },
  {
    title: "High School",
    school: "Singburi School",
    period: "Graduated 2012",
    note:
      "Built the academic foundation that prepared me for engineering studies and a long-term technical career path.",
  },
];
