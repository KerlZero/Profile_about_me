export type ExperienceItem = {
  year: string;
  period: string;
  role: string;
  company: string;
  project: string;
  summary: string;
  context: string;
  highlights: string[];
  skills: string[];
  tags?: string[];
  roleStory?: string;
  projectHighlightTitle?: string;
  projectHighlightSummary?: string;
  responsibilities?: string[];
  keyTakeaway?: string;
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

export type NoteItem = {
  title: string;
  category: string;
  description: string;
};

export type DomainCard = {
  title: string;
  accent: string;
  items: string[];
};

export const profile = {
  name: "Saran Chuephoodee",
  title: "Senior Software Tester and System Analyst",
  location: "Thailand",
  greeting: "Hey, I&apos;m Saran.",
  intro:
    "I am Saran Chuephoodee, Software Tester and System Analysis with 8 years of experience across Telecom, Insurance, and E-Commerce domains.",
  summary: "",
  headline:
    "Building quality across software, systems, and business workflows.",
  email: "d.saranc@gmail.com",
  phoneDisplay: "0932094456",
  phoneHref: "tel:+66932094456",
  linkedinUrl: "https://www.linkedin.com/in/saran-chuephoodee-61aa9b3b7",
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
    context:
      "Contract role focused on a business-critical commerce platform where release confidence depended on both technical validation and requirement clarity.",
    roleStory:
      "This role strengthened my end-to-end QA ownership in a complex e-commerce web project, combining requirement analysis, test design, backend validation, defect management, and stakeholder communication to support confident release decisions.",
    projectHighlightTitle: "Ascend Commerce (True VC)",
    projectHighlightSummary:
      "Delivered end-to-end validation for an e-commerce web platform, covering backend processing, frontend behavior, requirement alignment, and production readiness from both technical and business perspectives.",
    highlights: [
      "Created test cases directly from business requirements and architecture context.",
      "Validated APIs, scheduled jobs, and downstream processes triggered by third-party services.",
      "Raised requirement conflicts early and coordinated with product and technical stakeholders.",
    ],
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
      "Requirement analysis",
      "API testing",
      "Scheduled jobs",
      "Defect management",
      "Stakeholder communication",
    ],
    keyTakeaway:
      "This experience reinforced the value of combining technical validation with strong requirement understanding and clear communication to support both software quality and sound business decisions.",
    tags: ["Web", "QA", "API"],
  },
  {
    year: "2023",
    period: "Mar 2023 - Jul 2025",
    role: "Senior Software Tester (Permanent)",
    company: "MISUMI (THAILAND) Co., Ltd.",
    project: "Application and Web E-commerce",
    summary:
      "This role expanded my experience in large-scale e-commerce quality assurance across web and mobile platforms, with strong focus on frontend behavior, API alignment, mobile debugging, test planning, and execution coordination.",
    context:
      "MISUMI\nSenior Software Tester (Permanent)\nMISUMI (THAILAND) Co., Ltd.\nProject: Application and Web E-commerce\nMar 2023 - Jul 2025",
    roleStory:
      "This role expanded my experience in large-scale e-commerce quality assurance across web and mobile platforms, with strong focus on frontend behavior, API alignment, mobile debugging, test planning, and execution coordination.",
    projectHighlightTitle: "Application and Web E-commerce",
    projectHighlightSummary:
      "Supported quality delivery for an e-commerce website and mobile applications on iOS and Android, combining frontend validation, API-related review, local debugging, and coordinated release execution.",
    highlights: [
      "Tested Android builds with APKs and iOS releases through TestFlight.",
      "Supported debugging with local builds, Android Studio, and Xcode logs.",
      "Planned testing scope and coordinated work across vendors and junior testers.",
    ],
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
    keyTakeaway:
      "This role improved my ability to lead broader testing scope, coordinate multiple contributors, and investigate issues from both application and integration perspectives.",
    tags: ["Mobile", "Web", "E-commerce"],
  },
  {
    year: "2022",
    period: "Jul 2022 - Nov 2022",
    role: "Senior System Analyst (Permanent)",
    company: "Mimo tech",
    project: "AIS FBB-Fibre Workflow",
    summary:
      "This role expanded my responsibility from feature analysis into workflow ownership, migration validation, team guidance, and daily production support across business-critical onboarding systems.",
    context:
      "MIMO\nSenior System Analyst (Permanent)\nMimo tech\nProject: AIS FBB-Fibre Workflow\nJuly 2022 - Nov 2022",
    roleStory:
      "This role expanded my responsibility from feature analysis into workflow ownership, migration validation, team guidance, and daily production support across business-critical onboarding systems.",
    projectHighlightTitle: "AIS FBB-Fibre Workflow",
    projectHighlightSummary:
      "Led analysis and validation for customer profile and document verification systems that supported downstream order creation and installation scheduling across multiple onboarding channels.",
    highlights: [
      "Worked with Oracle-based logic and validated migration outputs to PostgreSQL.",
      "Adjusted unsupported converted database syntax to preserve business behavior.",
      "Guided developers and testers while coordinating with cross-system partners.",
    ],
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
    keyTakeaway:
      "This role strengthened my ability to connect business logic, technical constraints, migration work, and production support into a complete delivery perspective.",
    tags: ["DB", "Workflow", "Migration"],
  },
];

export const timeline: ExperienceItem[] = [
  ...selectedWork,
  {
    year: "2021",
    period: "Jun 2021 - Jun 2022",
    role: "System Analyst (Contract)",
    company: "Epic Consulting Co., Ltd.",
    project: "AIS FBB Fibre Web Register",
    summary:
      "This role marked my move into system analysis, starting with small- to medium-scale enhancements before expanding into channel growth initiatives, payment integration, and production support across customer subscription workflows.",
    context:
      "EPIC\nSystem Analyst (Contract)\nEpic Consulting Co., Ltd.\nProject: AIS FBB-Fibre Web Register\nJun 2021 - Jun 2022",
    roleStory:
      "This role marked my move into system analysis, starting with small- to medium-scale enhancements before expanding into channel growth initiatives, payment integration, and production support across customer subscription workflows.",
    projectHighlightTitle: "AIS FBB-Fibre Web Register",
    projectHighlightSummary:
      "Supported requirement analysis and functional design for internet subscription systems, including enhancement work, new channel expansion, payment flow integration, and coordination across internal teams and external partners.",
    highlights: [
      "Prepared functional specs for developers.",
      "Briefed testers on detailed business and system logic.",
      "Supported production issues across release cycles.",
    ],
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
    keyTakeaway:
      "This role developed my ability to translate requirements into workable solutions, support delivery across teams, and balance new business scope with stability of existing workflows.",
    tags: ["Analysis", "Payment", "Support"],
  },
  {
    year: "2018",
    period: "Sep 2018 - Mar 2021",
    role: "Software Tester (Contract)",
    company: "APAR TECHNOLOGIES (THAILAND) LTD.",
    project: "Backend & Enterprise Validation",
    summary:
      "At this stage, I expanded from foundation-level testing into broader functional, integration, and regression validation across multiple environments, building stronger release discipline and enterprise testing exposure.",
    context:
      "APAR\nSoftware Tester (Contract)\nAPAR TECHNOLOGIES (THAILAND) LTD.\nProject: Backend & Enterprise Validation\nSep 2018 - Mar 2021",
    roleStory:
      "At this stage, I expanded from foundation-level testing into broader functional, integration, and regression validation across multiple environments, building stronger release discipline and enterprise testing exposure.",
    projectHighlightTitle: "Multi-Environment Testing & Regression Coverage",
    projectHighlightSummary:
      "Supported testing in Dev, SIT, and UAT environments with strong focus on backend validation, regression execution, and defect tracking through closure.",
    highlights: [
      "Performed SQL-based backend validation.",
      "Designed and executed regression test scenarios.",
      "Tracked defects through closure during test cycles.",
    ],
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
    keyTakeaway:
      "This role strengthened my understanding of delivery cycles and taught me how to maintain quality consistently across repeated releases and multiple environments.",
    tags: ["SQL", "Regression", "SIT/UAT"],
  },
  {
    year: "2017",
    period: "Aug 2017 - Sep 2018",
    role: "Associate Software Test Engineering (Permanent)",
    company: "AWARE TECHNOLOGY SOLUTIONS",
    project: "Enterprise System Testing",
    summary:
      "This was the starting point of my QA career, where I built a strong foundation in SQL validation, structured test design, and disciplined documentation for backend-focused system verification.",
    context:
      "AWARE\nAssociate Software Test Engineering (Permanent)\nAWARE TECHNOLOGY SOLUTIONS\nProject: Enterprise System Testing\nAug 2017 - Sep 2018",
    roleStory:
      "This was the starting point of my QA career, where I built a strong foundation in SQL validation, structured test design, and disciplined documentation for backend-focused system verification.",
    projectHighlightTitle: "Backend Validation & QA Foundation",
    projectHighlightSummary:
      "Worked on backend-focused validation by checking database results against expected business rules and documenting structured test evidence for reliable execution.",
    highlights: [
      "Validated backend data against business rules.",
      "Designed test cases, steps, and scenarios.",
      "Documented results and defect evidence clearly.",
    ],
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
    keyTakeaway:
      "This role built the discipline of structured testing and taught me the importance of accuracy when validating system behavior from the data layer upward.",
    tags: ["Backend", "QA", "SQL"],
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

export const notes: NoteItem[] = [
  {
    title: "Testing where business logic is the real product",
    category: "QA Strategy",
    description:
      "I focus on flows where data, rules, and cross-team assumptions matter more than surface-level UI checks alone.",
  },
  {
    title: "Requirement clarity before execution speed",
    category: "System Analysis",
    description:
      "A clear test cycle starts by finding conflicts early, asking better questions, and protecting the team from ambiguous scope.",
  },
  {
    title: "From backend validation to release readiness",
    category: "Delivery",
    description:
      "My strongest work usually sits between technical investigation and practical release decisions.",
  },
  {
    title: "Growing automation from a strong manual foundation",
    category: "Learning",
    description:
      "I am building automation capability while keeping manual testing depth as the base for better scenario design.",
  },
];

export const domainExposure: DomainCard[] = [
  {
    title: "Telecom Platforms",
    accent: "from-cyan-400/30 via-sky-500/10 to-transparent",
    items: [
      "Customer profile and document verification workflows",
      "Order preparation and installation appointment scheduling",
      "Oracle to PostgreSQL business logic migration",
      "Cross-system coordination with third-party platforms",
      "Subscription channel support and service workflow alignment",
      "Production support across release cycles and operational issues",
    ],
  },
  {
    title: "E-Commerce Platforms",
    accent: "from-amber-400/25 via-orange-500/10 to-transparent",
    items: [
      "Web and mobile user journey validation",
      "Frontend and backend behavior consistency checks",
      "RESTful API, scheduled job, and background process testing",
      "Release coordination across business-critical features",
      "Device-based testing for Android APK and iOS TestFlight builds",
      "Debugging support through local builds and log inspection",
    ],
  },
  {
    title: "Leadership & Delivery",
    accent: "from-fuchsia-400/25 via-pink-500/10 to-transparent",
    items: [
      "Test planning and task distribution",
      "Supervising developers and testers",
      "Production support by release cycle",
      "Cross-functional collaboration with operations and vendors",
      "Requirement alignment across internal teams and partners",
      "Delivery support for both project changes and production issues",
    ],
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
