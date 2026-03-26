import Image from "next/image";
import {
  capabilities,
  credentials,
  education,
  profile,
  selectedWork,
  timeline,
} from "./content";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-900/10 bg-[#f5f0e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-medium tracking-[0.16em] text-stone-900 uppercase">
            {profile.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-stone-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-8 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
      >
        <div>
          <SectionLabel>Introduction</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl leading-none tracking-[-0.05em] text-stone-950 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Hey, I&apos;m Saran.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            {profile.intro}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-stone-900 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-900 hover:text-[#f5f0e8]"
            >
              View selected work
            </a>
            <a
              href={profile.cvPath}
              className="inline-flex items-center justify-center rounded-full border border-stone-900/15 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
            >
              Download CV
            </a>
          </div>
        </div>

        <aside className="border-t border-stone-900 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-500">
              {profile.title}
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Based in {profile.location}. Open to QA, testing, and systems-focused opportunities.
            </p>
          </div>
        </aside>
      </section>

      <section
        id="work"
        className="mx-auto max-w-6xl border-t border-stone-900/10 px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <p className="mt-4 text-base leading-7 text-stone-600">
              A few roles that best show how I work across product quality, systems thinking, and release delivery.
            </p>
          </div>

          <div className="space-y-10">
            {selectedWork.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="grid gap-6 border-t border-stone-900 pt-6 md:grid-cols-[110px_1fr]"
              >
                <div className="text-sm text-stone-500">{item.year}</div>
                <div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h2 className="text-2xl tracking-[-0.03em] text-stone-950">
                        {item.role}
                      </h2>
                      <p className="mt-1 text-base text-stone-700">
                        {item.company} | {item.project}
                      </p>
                    </div>
                    <p className="text-sm text-stone-500">{item.period}</p>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
                    {item.summary}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-stone-600 md:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="border-t border-stone-900/10 pt-3">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-stone-900/10 px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <SectionLabel>About</SectionLabel>
          <div className="max-w-4xl">
            <p className="text-3xl leading-tight tracking-[-0.03em] text-stone-950 sm:text-4xl">
              I&apos;ve grown from backend validation into broader QA ownership and system analysis, and I work best where software quality needs both technical precision and business understanding.
            </p>
            <p className="mt-6 text-base leading-8 text-stone-700">
              My work sits between product expectations and engineering execution. I enjoy clarifying requirements, validating critical workflows, tracing issues across systems, and helping teams release with confidence. That combination is what I want the site to communicate clearly and quickly.
            </p>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="mx-auto max-w-6xl border-t border-stone-900/10 px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <p className="mt-4 text-base leading-7 text-stone-600">
              The tools and skills I rely on most often across testing, analysis, and delivery support.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {capabilities.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.75rem] border border-stone-900/10 bg-white/50 p-6"
              >
                <h3 className="text-lg tracking-[-0.02em] text-stone-950">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-700">
                  {group.items.map((item) => (
                    <li key={item} className="border-t border-stone-900/10 pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="mx-auto max-w-6xl border-t border-stone-900/10 px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <div>
            <SectionLabel>Timeline</SectionLabel>
            <p className="mt-4 text-base leading-7 text-stone-600">
              A concise view of the full career path.
            </p>
          </div>
          <div className="space-y-5">
            {timeline.map((item) => (
              <article
                key={`${item.year}-${item.company}-${item.role}`}
                className="grid gap-4 rounded-[1.5rem] border border-stone-900/10 bg-white/40 p-5 md:grid-cols-[90px_1fr]"
              >
                <p className="text-sm text-stone-500">{item.year}</p>
                <div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-xl tracking-[-0.02em] text-stone-950">
                      {item.role}
                    </h3>
                    <p className="text-sm text-stone-500">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-500">
                    {item.company}
                  </p>
                  <p className="mt-3 text-base leading-7 text-stone-700">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-stone-900/10 px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <SectionLabel>Credentials</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            {credentials.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-stone-900/10 bg-white/50 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                  {item.issuer}
                </p>
                <h3 className="mt-4 text-xl tracking-[-0.02em] text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-stone-700">
                  {item.note}
                </p>
              </article>
            ))}
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-stone-900/10 bg-white/50 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                  {item.period}
                </p>
                <h3 className="mt-4 text-xl tracking-[-0.02em] text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-stone-700">{item.school}</p>
                <p className="mt-4 text-base leading-7 text-stone-700">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-stone-900/10 px-5 py-12 sm:px-8 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <SectionLabel>Contact</SectionLabel>
          <div className="rounded-[2rem] border border-stone-900 bg-stone-900 px-6 py-8 text-[#f5f0e8] sm:px-8 sm:py-10">
            <h2 className="text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
              Let&apos;s connect.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
              I&apos;m open to software testing, QA, and system analysis roles where I can contribute to reliable delivery and clearer product quality.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-[#f5f0e8] px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-white"
              >
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-[#f5f0e8]/25 px-6 py-3 text-sm font-medium text-[#f5f0e8] transition hover:border-[#f5f0e8]"
              >
                {profile.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
