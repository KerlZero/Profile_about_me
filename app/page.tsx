'use client'

import { useState } from "react";

export default function ResumePortfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const careerJourney = [
    {
      shortLabel: "AWARE",
      period: "Aug 2017 - Sep 2018",
      role: "Associate Software Test Engineering (Permanent)",
      company: "AWARE TECHNOLOGY SOLUTIONS",
      story:
        "This was the starting point of my QA career, where I built a strong foundation in software testing, SQL validation, and understanding how system behavior should align with business requirements.",
      projectTitle: "Backend Validation & Structured QA Foundation",
      projectSummary:
        "Worked on backend-focused validation tasks by checking database results against business rules and preparing structured test artifacts for consistent test execution.",
      responsibilities: [
        "Executed SQL queries to validate backend data against business requirements.",
        "Designed and documented test cases, test steps, and test scenarios.",
        "Recorded test execution results and defect details in a structured format.",
      ],
      skills: ["SQL", "Test Case Design", "Backend Validation", "Defect Documentation"],
      takeaway:
        "I learned the discipline of structured testing and the importance of accuracy when validating system behavior against detailed business requirements.",
    },
    {
      shortLabel: "APAR",
      period: "Sep 2018 - Mar 2021",
      role: "Software Tester (Contract)",
      company: "APAR TECHNOLOGIES (THAILAND) LTD.",
      story:
        "In this stage, I expanded from basic validation into full functional, integration, and regression testing across multiple environments. This role strengthened my understanding of release cycles and quality control in enterprise delivery.",
      projectTitle: "Multi-Environment Testing & Regression Coverage",
      projectSummary:
        "Supported testing in Dev, SIT, and UAT environments with strong focus on backend validation, regression execution, and issue tracking through closure.",
      responsibilities: [
        "Performed backend data validation using SQL queries.",
        "Executed functional, integration, and regression testing across multiple environments.",
        "Designed test cases, test steps, and test scenarios for release validation.",
        "Logged defects and tracked them through closure during the testing lifecycle.",
      ],
      skills: ["Regression Testing", "Integration Testing", "SIT/UAT", "Defect Lifecycle"],
      takeaway:
        "I learned how testing supports the full software delivery cycle and how to maintain quality consistently across repeated releases and environments.",
    },
    {
      shortLabel: "EPIC / MIMO",
      period: "Jun 2021 - Nov 2022",
      role: "System Analyst (Contract) / Senior System Analyst (Permanent)",
      company: "EPIC CONSULTING CO., LTD. / MIMO TECH COMPANY LIMITED",
      story:
        "This phase shifted my perspective from validating software to shaping how systems should work. I moved deeper into requirement analysis, workflow design, production support, and system coordination for telecom service platforms.",
      projectTitle: "Telecom Onboarding & Subscription Service Platforms",
      projectSummary:
        "Worked on customer onboarding, service subscription, document verification, installation scheduling, payment channels, and business flow improvements for telecom-related platforms.",
      responsibilities: [
        "Analyzed business requirements and translated them into functional specifications.",
        "Designed workflows for onboarding, verification, order creation, and installation scheduling.",
        "Coordinated with developers, testers, and third-party vendors to align integrations and delivery scope.",
        "Validated database logic and supported business rule implementation across Oracle and PostgreSQL environments.",
        "Supported production issues and change requests across release cycles.",
      ],
      skills: ["Requirement Analysis", "Workflow Design", "System Documentation", "Production Support"],
      takeaway:
        "I learned to view software from a broader business perspective, focusing not only on whether the system works, but whether the process truly fits the business need end to end.",
    },
    {
      shortLabel: "MISUMI",
      period: "Mar 2023 - Jul 2025",
      role: "Senior Software Tester (Permanent)",
      company: "MISUMI (THAILAND) CO., LTD.",
      story:
        "This role deepened my experience in e-commerce platforms, web and mobile validation, and release coordination. I worked across frontend, backend behavior, mobile builds, and integration points to ensure stable end-to-end delivery.",
      projectTitle: "E-Commerce Web & Mobile Platform Validation",
      projectSummary:
        "Led testing efforts for e-commerce systems covering web and mobile applications, API consistency checks, mobile build validation, and large-scope release coordination.",
      responsibilities: [
        "Led testing activities for e-commerce web and mobile applications.",
        "Conducted frontend testing alongside backend and API behavior validation.",
        "Tested Android APK and iOS TestFlight builds across physical devices.",
        "Investigated logs via Android Studio and Xcode to analyze API and integration behavior.",
        "Planned test cycles and coordinated tasks across vendors and junior testers.",
        "Used Power Automate to manage and track test workflows for releases.",
      ],
      skills: ["E-Commerce Testing", "Mobile Testing", "API Validation", "Release Coordination"],
      takeaway:
        "I strengthened my ability to manage complex testing scopes, coordinate multiple stakeholders, and maintain quality across different channels and release timelines.",
    },
    {
      shortLabel: "ACCORD",
      period: "Sep 2025 - Dec 2025",
      role: "Senior Software Quality Assurance (Contract)",
      company: "ACCORD INNOVATIONS CO., LTD.",
      story:
        "This role sharpened my focus on requirement understanding, risk identification, and business impact analysis before execution. I worked closely with technical and business stakeholders to improve testing clarity and release confidence.",
      projectTitle: "End-to-End QA for E-Commerce Web Project",
      projectSummary:
        "Supported an e-commerce web platform from backend to frontend, with strong focus on requirement analysis, detailed test design, defect reporting, and communication of requirement gaps.",
      responsibilities: [
        "Analyzed requirements from the Tech Lead and created detailed test cases from business and system needs.",
        "Identified requirement conflicts and requested clarification from analysts and stakeholders.",
        "Executed functional, integration, and UI testing while reporting defects clearly to the development team.",
        "Communicated directly with Product Owners when requirement conflicts affected business decisions.",
      ],
      skills: ["Requirement Gap Analysis", "Risk-Based Testing", "Stakeholder Communication", "E2E Validation"],
      takeaway:
        "I reinforced the importance of understanding requirements deeply before testing begins, especially when unclear requirements can impact implementation, quality, and business decisions.",
    },
  ];

  const skillStages = [
    {
      title: "Foundation",
      description: "Core testing fundamentals built early in my career.",
      items: ["SQL", "Test Case Design", "Functional Testing", "Backend Validation"],
    },
    {
      title: "Growth",
      description: "Expanded coverage across release cycles and environments.",
      items: ["Regression Testing", "Integration Testing", "SIT / UAT", "Defect Lifecycle"],
    },
    {
      title: "Business Understanding",
      description: "Moved beyond execution into process and requirement thinking.",
      items: ["Requirement Analysis", "Workflow Design", "System Documentation", "Production Support"],
    },
    {
      title: "Current Focus",
      description: "Combining structured QA with modern tooling and broader ownership.",
      items: ["API Validation", "E-Commerce Testing", "Cross-team Collaboration", "Playwright (Basic)"],
    },
  ];

  const projectGroups = [
    {
      title: "Telecom Platforms",
      items: [
        "Customer onboarding workflow",
        "Subscription service enhancements",
        "Document verification and installation scheduling",
        "Payment flow improvements and channel expansion",
      ],
    },
    {
      title: "E-Commerce Platforms",
      items: [
        "Web and mobile user journey validation",
        "Frontend and backend behavior consistency checks",
        "API and integration verification",
        "Release readiness across large testing scopes",
      ],
    },
    {
      title: "Enterprise Validation",
      items: [
        "Backend data verification with SQL",
        "Regression testing across Dev, SIT, and UAT",
        "Business flow validation",
        "Production issue investigation and release support",
      ],
    },
  ];

  const activeRole = careerJourney[activeTab];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold tracking-wide">Saran Chuephoodee</h1>
            <p className="text-sm text-slate-400">Senior Software Tester / System Analyst</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#story" className="hover:text-white">My Story</a>
            <a href="#journey" className="hover:text-white">Career Journey</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              Career Story Portfolio
            </p>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              From software testing fundamentals to business-focused quality assurance.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am Saran Chuephoodee, a QA and System Analysis professional with 8 years of experience across Telecom, Insurance, and E-Commerce domains. My journey has grown from backend validation and test execution into requirement analysis, workflow thinking, and end-to-end quality ownership.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#journey"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                View My Journey
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-8 shadow-2xl">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Profile Snapshot</p>
                  <h3 className="mt-3 text-2xl font-semibold">Quality + Analysis</h3>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Location</p>
                  <p className="mt-1 text-sm font-medium text-white">Bangkok, Thailand</p>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-300">
                Experienced in backend validation, requirement analysis, system integration, and end-to-end testing with a strong ability to connect business needs to practical quality assurance.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Experience</p>
                  <p className="mt-2 text-3xl font-bold">8 Years</p>
                  <p className="mt-2 text-sm text-slate-300">Testing, analysis, validation</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Domains</p>
                  <p className="mt-2 text-3xl font-bold">3 Core</p>
                  <p className="mt-2 text-sm text-slate-300">Telecom, Insurance, E-Commerce</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Strength</p>
                  <p className="mt-2 text-2xl font-bold">API / Flow</p>
                  <p className="mt-2 text-sm text-slate-300">Business rule and data validation</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current Focus</p>
                  <p className="mt-2 text-2xl font-bold">Playwright</p>
                  <p className="mt-2 text-sm text-slate-300">Growing automation capability</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Core Value</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Turning complex requirements into clear validation paths, practical test coverage, and confident release decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="py-14">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">My Story</p>
            <h3 className="mt-3 text-3xl font-semibold">How my career has grown</h3>
            <p className="mt-6 leading-8 text-slate-300">
              I started with backend validation and structured testing, where I learned how to check data accuracy and build clear test scenarios. Over time, I expanded into functional, integration, and regression testing across multiple environments. Later, I moved into system analysis and requirement design, which helped me see software not only from a testing perspective, but also from the business process view. Today, I combine QA execution, requirement understanding, and collaboration across teams to help deliver reliable software with stronger release confidence.
            </p>
          </div>
        </section>

        <section id="journey" className="py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Career Journey</p>
          <h3 className="mt-3 text-3xl font-semibold">The story behind each role</h3>
          <p className="mt-4 max-w-3xl text-slate-300">
            Each step in my career helped me build new technical skills, broader business understanding, and stronger ownership of quality.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="space-y-2">
                {careerJourney.map((item, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={`${item.role}-${item.company}`}
                      onClick={() => setActiveTab(index)}
                      className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-cyan-400/40 bg-cyan-400/10"
                          : "border-white/5 bg-transparent hover:bg-white/5"
                      }`}
                    >
                      <p className={`text-sm font-semibold ${isActive ? "text-cyan-300" : "text-white"}`}>
                        {item.shortLabel}
                      </p>
                      <p className="mt-1 text-sm text-slate-300">{item.role}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.period}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{activeRole.shortLabel}</p>
                  <h4 className="mt-2 text-2xl font-semibold">{activeRole.role}</h4>
                  <p className="mt-2 text-slate-300">{activeRole.company}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                  {activeRole.period}
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role Story</p>
                  <p className="mt-3 leading-8 text-slate-300">{activeRole.story}</p>
                </div>

                <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Project / Domain Highlight</p>
                  <h5 className="mt-3 text-xl font-semibold">{activeRole.projectTitle}</h5>
                  <p className="mt-3 leading-7 text-slate-300">{activeRole.projectSummary}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">What I Did</p>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    {activeRole.responsibilities.map((detail) => (
                      <li key={detail} className="flex gap-3 rounded-2xl border border-white/5 bg-slate-950/40 p-4">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                        <span className="leading-7">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Skills I Built</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {activeRole.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">What I Learned</p>
                  <p className="mt-3 leading-7 text-slate-300">{activeRole.takeaway}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Skills Over Time</p>
          <h3 className="mt-3 text-3xl font-semibold">How my skill set has evolved</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillStages.map((stage) => (
              <div key={stage.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{stage.title}</p>
                <p className="mt-4 leading-7 text-slate-300">{stage.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stage.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Projects & Domains</p>
          <h3 className="mt-3 text-3xl font-semibold">The kinds of systems I have worked on</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projectGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold">{group.title}</h4>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Professional Growth</p>
            <h3 className="mt-3 text-3xl font-semibold">What this journey says about me</h3>
            <p className="mt-4 max-w-4xl leading-8 text-slate-200">
              My career path shows steady growth from technical execution into wider business understanding. I have learned how to validate systems carefully, analyze requirements more deeply, coordinate across teams more effectively, and support software quality from both technical and operational perspectives. That combination helps me contribute not only as a tester, but as someone who understands the bigger picture behind each release.
            </p>
          </div>
        </section>

        <section id="contact" className="py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold">Let’s connect</h3>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              If you are looking for someone with experience in software testing, requirement analysis, API validation, and cross-functional collaboration, feel free to reach out.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-slate-100">
              <a href="mailto:Kerlzero@gmail.com" className="rounded-2xl bg-white/10 px-5 py-3 hover:bg-white/15">
                Kerlzero@gmail.com
              </a>
              <a href="#" className="rounded-2xl bg-white/10 px-5 py-3 hover:bg-white/15">
                LinkedIn
              </a>
              <a href="#" className="rounded-2xl bg-white/10 px-5 py-3 hover:bg-white/15">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
