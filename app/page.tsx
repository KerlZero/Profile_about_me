export default function ResumePortfolio() {
  const skills = [
    "Manual Testing",
    "API Testing",
    "Test Case Design",
    "SQL",
    "Postman",
    "Playwright",
    "Jira",
    "Requirement Analysis",
  ];

  const experiences = [
    {
      role: "Senior Software Tester",
      company: "MISUMI (Thailand) Co., Ltd.",
      period: "Mar 2023 - Jul 2025",
      details: [
        "Performed end-to-end testing for e-commerce web and mobile applications.",
        "Validated frontend, backend, and third-party integrations.",
        "Designed and executed test cases based on business requirements.",
      ],
    },
    {
      role: "Senior Software Quality Assurance",
      company: "ACCORD INNOVATIONS Co., Ltd.",
      period: "Sep 2025 - Dec 2025",
      details: [
        "Analyzed requirements and identified gaps before test execution.",
        "Created detailed test scenarios and reported defects clearly to developers.",
        "Collaborated with Tech Lead, System Analyst, and Product Owner.",
      ],
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform Testing",
      description:
        "Tested checkout, shop search, booking flow, and UI behavior across web and mobile platforms.",
    },
    {
      title: "API & Integration Validation",
      description:
        "Verified request/response data, scheduled jobs, and third-party service integrations.",
    },
    {
      title: "Automation with Playwright",
      description:
        "Built reusable UI automation scripts to improve regression testing efficiency.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold tracking-wide">Saran Chuephoodee</h1>
            <p className="text-sm text-slate-400">Senior Software Tester</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              Available for QA / Tester roles
            </p>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Building quality software with thoughtful testing.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I am a Senior Software Tester with experience in web, mobile, API, and
              end-to-end testing. I focus on requirement analysis, test case design,
              defect investigation, and automation with Playwright.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Profile</p>
                <p className="mt-3 text-slate-300">
                  Detail-oriented QA professional with strong experience in e-commerce,
                  frontend/backend validation, and cross-functional collaboration.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-3xl font-bold">6+</p>
                  <p className="mt-1 text-sm text-slate-400">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-3xl font-bold">Web / Mobile</p>
                  <p className="mt-1 text-sm text-slate-400">Testing Coverage</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-3xl font-bold">API</p>
                  <p className="mt-1 text-sm text-slate-400">Validation Focus</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-3xl font-bold">Playwright</p>
                  <p className="mt-1 text-sm text-slate-400">Automation Learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-14">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">About</p>
            <h3 className="mt-3 text-3xl font-semibold">Who I am</h3>
            <p className="mt-6 leading-8 text-slate-300">
              I enjoy working closely with developers, system analysts, and product owners
              to ensure software meets business requirements and delivers a reliable user
              experience. My strength is turning requirements into clear test scenarios,
              identifying risks early, and providing actionable defect reports.
            </p>
          </div>
        </section>

        <section id="experience" className="py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Experience</p>
          <h3 className="mt-3 text-3xl font-semibold">Work history</h3>
          <div className="mt-8 space-y-6">
            {experiences.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <div>
                    <h4 className="text-xl font-semibold">{item.role}</h4>
                    <p className="text-slate-300">{item.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>
                <ul className="mt-5 space-y-2 text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Skills</p>
          <h3 className="mt-3 text-3xl font-semibold">Tools and strengths</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Projects</p>
          <h3 className="mt-3 text-3xl font-semibold">Selected highlights</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-14">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold">Let’s work together</h3>
            <p className="mt-4 max-w-2xl leading-8 text-slate-200">
              If you are looking for someone with strong testing experience in web,
              mobile, API, and cross-team collaboration, feel free to contact me.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-slate-100">
              <a href="mailto:your-email@example.com" className="rounded-2xl bg-white/10 px-5 py-3 hover:bg-white/15">
                your-email@example.com
              </a>
              <a href="https://www.linkedin.com" className="rounded-2xl bg-white/10 px-5 py-3 hover:bg-white/15">
                LinkedIn
              </a>
              <a href="https://github.com" className="rounded-2xl bg-white/10 px-5 py-3 hover:bg-white/15">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
