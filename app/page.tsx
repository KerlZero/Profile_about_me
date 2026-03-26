import {
  credentials,
  domainExposure,
  education,
  notes,
  profile,
  timeline,
} from "./content";
import { Reveal } from "./components/reveal";
import { HeroPhoto } from "./components/hero-photo";
import { SiteHeader } from "./components/site-header";
import { TimelineSection } from "./components/timeline-section";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#notes", label: "Notes" },
  { href: "#timeline", label: "Timeline" },
  { href: "#domains", label: "Domains" },
  { href: "#contact", label: "Contact" },
];

function SectionHeadline({
  eyebrow,
  title,
  accent,
  description,
  compact = false,
  accentClassName = "",
  wideDescription = false,
  headlineClassName = "",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  compact?: boolean;
  accentClassName?: string;
  wideDescription?: boolean;
  headlineClassName?: string;
}) {
  return (
    <div>
      <p className="section-kicker">{eyebrow}</p>
      <h2
        className={`section-headline mt-5 ${compact ? "section-headline-compact" : ""} ${headlineClassName}`}
      >
        {title}{" "}
        {accent ? (
          <span className={`section-accent ${accentClassName}`}>{accent}</span>
        ) : null}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 text-slate-300 ${
            wideDescription
              ? "max-w-4xl"
              : compact
                ? "max-w-[17rem]"
                : "max-w-xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative isolate snap-y snap-mandatory overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_18%),radial-gradient(circle_at_80%_12%,rgba(59,130,246,0.12),transparent_20%),linear-gradient(180deg,#020617_0%,#06101f_18%,#0a1830_34%,#0d1f3c_52%,#12284a_68%,#0d213d_84%,#081226_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="site-tech-grid absolute inset-0 opacity-45" />
        <div className="site-tech-stars site-tech-stars-sm absolute inset-0 opacity-28" />
        <div className="site-tech-stars site-tech-stars-lg absolute inset-0 opacity-18" />
        <div className="site-tech-links absolute inset-0 opacity-25" />
        <div className="site-tech-node site-tech-node-a absolute" />
        <div className="site-tech-node site-tech-node-b absolute" />
        <div className="site-tech-node site-tech-node-c absolute" />
      </div>
      <SiteHeader navItems={navItems} />

      <section
        id="top"
        className="snap-start snap-always mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-start gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 xl:gap-16"
      >
        <div className="min-w-0 flex">
          <Reveal className="flex min-h-[calc(100vh-73px-7rem)] w-full flex-col lg:min-h-[calc(100vh-73px-8rem)] lg:justify-center">
            <div className="lg:mt-[6.25rem]">
              <p className="section-kicker">Introduction</p>
              <h1 className="section-headline mt-5 max-w-4xl text-4xl sm:text-5xl md:text-[3.6rem] lg:text-[4.35rem] xl:text-[4.7rem]">
                Building quality across software, systems, and{" "}
                <span className="section-accent">business workflows.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {profile.intro}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#timeline"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
                >
                  View timeline
                </a>
                <a
                  href={profile.cvPath}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>
            <a
              href="#about"
              className="mt-auto inline-flex w-fit items-center gap-3 text-sm font-medium uppercase tracking-[0.32em] text-cyan-100 transition hover:text-white"
            >
              <span className="h-px w-16 bg-[linear-gradient(90deg,rgba(103,232,249,0.95),rgba(103,232,249,0.1))] scroll-dot" />
              Scroll
            </a>
          </Reveal>
        </div>

        <Reveal className="min-w-0" delay={120} direction="right">
          <div className="mx-auto flex w-full max-w-[22rem] flex-col items-center lg:ml-auto lg:items-start lg:-mt-[1.9375rem] lg:translate-x-[50px]">
            <HeroPhoto src="/profile.jpg" alt={profile.name} />
            <p className="mt-5 text-center text-sm uppercase tracking-[0.22em] text-slate-500 lg:text-left">
              <span className="block">Senior Software Tester</span>
              <span className="block">and System Analyst</span>
              <span className="block">· {profile.location}</span>
            </p>
            {profile.summary ? (
              <p className="mt-4 max-w-xl text-center text-[15px] leading-7 text-slate-300 lg:text-left">
                {profile.summary}
              </p>
            ) : null}
          </div>
        </Reveal>
      </section>

      <section
        id="about"
        className="snap-start snap-always mx-auto flex min-h-screen max-w-6xl items-center px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <Reveal>
            <SectionHeadline
              eyebrow="About"
              title="Precision in software quality."
              accent="Context in delivery."
              compact
              accentClassName="accent-cyan"
            />
          </Reveal>
          <Reveal className="max-w-4xl" delay={80} direction="left">
            <p className="text-3xl leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              I bring together software quality, system analysis, and delivery thinking to turn business needs into clearer workflows, stronger validation, and more reliable release outcomes.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300">
              My work is grounded in requirement clarity, workflow verification, and practical support across teams and release cycles. I aim to contribute where technical detail and business understanding need to work together with consistency and care.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="notes"
        className="snap-start snap-always mx-auto flex min-h-screen max-w-6xl items-center px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <Reveal>
            <SectionHeadline
              eyebrow="Selected Notes"
              title="Perspectives on testing,"
              accent="analysis, and delivery."
              compact
              accentClassName="accent-violet"
              description="Brief reflections on the principles that shape how I work across quality assurance, system analysis, and day-to-day delivery."
            />
          </Reveal>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {notes.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <article className="group grid gap-3 py-6 transition duration-500 hover:translate-x-2 md:grid-cols-[180px_1fr]">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500 transition duration-500 group-hover:text-cyan-200/85">
                    {item.category}
                  </p>
                  <div>
                    <h3 className="text-2xl tracking-[-0.03em] text-white transition duration-500 group-hover:text-cyan-50">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300 transition duration-500 group-hover:text-slate-200">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="snap-start snap-always mx-auto min-h-screen max-w-6xl px-5 py-12 sm:px-8 md:py-16"
      >
        <TimelineSection items={timeline} />
      </section>

      <section
        id="domains"
        className="snap-start snap-always mx-auto flex min-h-screen max-w-6xl items-center px-5 py-12 sm:px-8 md:py-16"
      >
        <Reveal className="w-full">
          <SectionHeadline
            eyebrow="Domain Exposure"
            title="Domains and delivery"
            accent="scope."
            accentClassName="accent-cyan"
            headlineClassName="lg:whitespace-nowrap"
            wideDescription
            description="Experience across these domains reflects the ability to adapt quickly to different business rules, customer journeys, and operational constraints. The work spans not only product knowledge, but also the coordination, validation, and delivery support needed to move each environment forward with confidence."
          />
          <div className="mt-10 grid gap-6 xl:auto-rows-fr xl:grid-cols-3">
            {domainExposure.map((card, index) => (
              <Reveal
                key={card.title}
                className="h-full"
                delay={index * 70}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <article className="panel-surface panel-violet interactive-panel h-full rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.72),rgba(15,23,42,0.58))] p-6">
                  <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${card.accent}`} />
                  <h3 className="mt-7 text-2xl tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-cyan-300" />
                        <span className="text-base leading-8 text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="snap-start snap-always mx-auto flex min-h-screen max-w-6xl items-center px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <Reveal>
            <SectionHeadline
              eyebrow="Background"
              title="Credentials,"
              accent="education, and foundations."
              compact
              accentClassName="accent-amber"
              description="The formal background behind the hands-on work, including certifications, engineering study, and the early path that shaped how I approach software quality."
            />
          </Reveal>
          <div className="space-y-10">
            <div>
              <Reveal direction="left">
                <h3 className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">
                  Credentials
                </h3>
              </Reveal>
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                {credentials.map((item, index) => (
                  <Reveal
                  key={item.title}
                  delay={index * 70}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                    <article className="panel-surface panel-cyan interactive-panel rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        {item.issuer}
                      </p>
                      <h4 className="mt-4 text-xl tracking-[-0.02em] text-white">
                        {item.title}
                      </h4>
                      <p className="mt-4 text-base leading-7 text-slate-300">
                        {item.note}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="left">
              <h3 className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">
                Education
              </h3>
            </Reveal>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              {education.map((item, index) => (
                <Reveal
                  key={item.title}
                  className="h-full"
                  delay={index * 70}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <article className="panel-surface panel-amber interactive-panel h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                      {item.period}
                    </p>
                    <h4 className="mt-4 text-xl tracking-[-0.02em] text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-base text-slate-300">{item.school}</p>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {item.note}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="snap-start snap-always mx-auto flex min-h-screen max-w-6xl items-center px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-headline section-headline-compact mt-5">
                Professional
                <br />
                contact
                <br />
                <span className="section-accent accent-cyan">and</span>
                <br />
                <span className="section-accent accent-cyan">opportunities.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal className="pt-2 md:pt-6" delay={80}>
            <div className="panel-surface panel-cyan rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(8,18,38,0.92),rgba(15,23,42,0.98),rgba(8,145,178,0.18))] px-6 py-8 text-slate-100 sm:px-8 sm:py-10">
            <h2 className="text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
              Open to meaningful collaboration.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Open to thoughtful conversations around software quality, system analysis, delivery support, and collaborative work across teams. If there is an opportunity to contribute through careful validation and structured execution, I would be pleased to connect.
            </p>
            <div className="mt-8 flex flex-col items-end gap-4 sm:flex-row sm:flex-wrap sm:justify-end">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/18 sm:w-auto"
              >
                LinkedIn
              </a>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {profile.name}. Designed and built for a calmer, editorial presentation.
        </p>
        <div className="flex flex-wrap gap-5">
          <a href="#top" className="transition hover:text-white">
            Home
          </a>
          <a href="#timeline" className="transition hover:text-white">
            Timeline
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
