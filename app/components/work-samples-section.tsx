"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GitHubProjectSample, SpecificationSample } from "../content";
import { Reveal } from "./reveal";

type WorkSamplesSectionProps = {
  githubProjects: GitHubProjectSample[];
  specificationSamples: SpecificationSample[];
};

type ModalType = "github" | "specifications" | null;

export function WorkSamplesSection({
  githubProjects,
  specificationSamples,
}: WorkSamplesSectionProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setModalVisible(true));
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    window.setTimeout(() => {
      setActiveModal(null);
    }, 320);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <Reveal>
          <div>
            <p className="section-kicker">Work Samples</p>
            <h2 className="section-headline section-headline-compact mt-5">
              Technical work
              <br />
              <span className="section-accent accent-cyan">and</span>
              <br />
              specification
              <br />
              samples.
            </h2>
            <p className="mt-5 max-w-[18rem] text-base leading-8 text-slate-300">
              Selected examples of automation work and supporting
              specifications that reflect both hands-on execution and the way
              system details are structured for review.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full" direction="left" delay={60}>
            <button
              type="button"
              onClick={() => openModal("github")}
              className="panel-surface panel-cyan interactive-panel flex h-full w-full flex-col rounded-[1.85rem] border border-white/10 bg-white/5 p-6 text-left"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                GitHub Projects
              </p>
              <h3 className="mt-5 text-3xl tracking-[-0.04em] text-white">
                Automation
                <br />
                execution samples.
              </h3>
              <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
                Two repository samples for
                <br />
                practical workflow support
                <br />
                and full end-to-end coverage.
              </p>
              <div className="mt-8 grid gap-3">
                {githubProjects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-[1.15rem] border border-white/10 bg-slate-950/15 px-4 py-4"
                  >
                    <p className="text-lg text-white">{project.title}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>
                ))}
              </div>
              <span className="mt-8 inline-flex w-fit items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100">
                Open details
              </span>
            </button>
          </Reveal>

          <Reveal className="h-full" direction="right" delay={120}>
            <button
              type="button"
              onClick={() => openModal("specifications")}
              className="panel-surface panel-violet interactive-panel flex h-full w-full flex-col rounded-[1.85rem] border border-white/10 bg-white/5 p-6 text-left"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                Specifications
              </p>
              <h3 className="mt-5 text-3xl tracking-[-0.04em] text-white">
                Flow and
                <br />
                document previews.
              </h3>
              <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
                Flow and document samples that show how logic, scope, and
                validation points are organized in working specifications.
              </p>
              <div className="mt-8 grid gap-3">
                {specificationSamples.map((sample) => (
                  <div
                    key={sample.title}
                    className="rounded-[1.15rem] border border-white/10 bg-slate-950/15 px-4 py-4"
                  >
                    <p className="text-lg text-white">{sample.title}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {sample.subtitle}
                    </p>
                  </div>
                ))}
              </div>
              <span className="mt-8 inline-flex w-fit items-center rounded-full border border-violet-300/25 bg-violet-300/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-violet-100">
                Open details
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      {activeModal ? (
        <div
          className={`fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-md transition duration-300 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,18,38,0.98),rgba(15,23,42,0.98),rgba(12,74,110,0.55))] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.7)] transition duration-300 sm:p-8 lg:p-10 ${
              modalVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 scale-[0.975] opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {activeModal === "github" ? (
              <GitHubProjectsModal
                projects={githubProjects}
                onClose={closeModal}
              />
            ) : (
              <SpecificationsModal
                samples={specificationSamples}
                onClose={closeModal}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function GitHubProjectsModal({
  projects,
  onClose,
}: {
  projects: GitHubProjectSample[];
  onClose: () => void;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
            GitHub Projects
          </p>
          <h3 className="mt-3 text-3xl leading-tight tracking-[-0.04em] text-white sm:text-[2.35rem]">
            Practical automation and
            <br />
            end-to-end reference work.
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Selected automation work across practical support tooling and full
            end-to-end execution examples.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white"
        >
          Close
        </button>
      </div>

      <div className="mt-8 grid gap-6">
        {projects.map((project, index) => (
          <section
            key={project.title}
            className={`panel-surface interactive-panel rounded-[1.6rem] border border-white/10 bg-white/5 p-6 ${
              index === 0 ? "panel-cyan" : "panel-violet"
            }`}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  {project.subtitle}
                </p>
                <h4 className="mt-3 text-2xl tracking-[-0.03em] text-white sm:text-[2rem]">
                  {project.title}
                </h4>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {project.description}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/20 hover:text-white"
              >
                View on GitHub
              </a>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {project.focus.map((item) => (
                <div
                  key={item}
                  className="interactive-panel rounded-[1.15rem] border border-white/10 bg-slate-950/20 p-4"
                >
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-slate-500">{project.displayUrl}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

function SpecificationsModal({
  samples,
  onClose,
}: {
  samples: SpecificationSample[];
  onClose: () => void;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
            Specifications
          </p>
          <h3 className="mt-3 text-3xl leading-tight tracking-[-0.04em] text-white sm:text-[2.35rem]">
            Flow and document previews
            <br />
            from working specifications.
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Selected flow and document samples from a working specification
            repository, showing how logic, scope, and review structure are
            organized for communication.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white"
        >
          Close
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {samples.map((sample, index) => (
          <section
            key={sample.title}
            className={`panel-surface interactive-panel overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 ${
              index === 0 ? "panel-cyan" : "panel-violet"
            }`}
          >
            <div className="border-b border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                {sample.subtitle}
              </p>
              <h4 className="mt-3 text-2xl tracking-[-0.03em] text-white sm:text-[2rem]">
                {sample.title}
              </h4>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {sample.description}
              </p>
            </div>

            <div className="flex h-full flex-col p-6 pt-0">
              <div
                className={`mt-6 overflow-hidden rounded-[1.25rem] border border-white/10 ${
                  sample.title === "Flow Sample"
                    ? "bg-[linear-gradient(180deg,rgba(239,246,255,0.94),rgba(226,232,240,0.9))]"
                    : "bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(15,23,42,0.92))]"
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-slate-400">
                    Preview
                  </p>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-slate-500">
                    {sample.title === "Flow Sample" ? "Diagram" : "Document"}
                  </p>
                </div>
                <SpecificationPreview sample={sample} />
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">{sample.displayUrl}</p>
                <a
                  href={sample.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/20 hover:text-white"
                >
                  View detail on GitHub
                </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function SpecificationPreview({ sample }: { sample: SpecificationSample }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div
        className={`flex h-[18rem] items-center justify-center px-6 ${
          sample.title === "Flow Sample" ? "bg-white/80" : "bg-slate-950/50"
        }`}
      >
        <div
          className={`w-full max-w-[32rem] rounded-[1.15rem] border border-white/10 p-5 ${
            sample.title === "Flow Sample"
              ? "bg-slate-100/90 shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
              : "bg-slate-950/60 shadow-[0_18px_40px_rgba(2,6,23,0.45)]"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
              Thumbnail
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
              {sample.title === "Flow Sample" ? "Sequence" : "Spec"}
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {sample.title === "Flow Sample" ? (
              <>
                <div className="h-3 w-44 rounded-full bg-cyan-300/60" />
                <div className="h-3 w-64 rounded-full bg-slate-400/50" />
                <div className="h-3 w-52 rounded-full bg-slate-400/35" />
                <div className="mt-6 grid grid-cols-4 gap-3">
                  {["Visitor", "Browser", "HTML", "CSS"].map((label) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-300/30 bg-white/70 px-3 py-2 text-center text-xs text-slate-700"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="h-3 w-40 rounded-full bg-white/85" />
                <div className="h-3 w-28 rounded-full bg-white/75" />
                <div className="h-3 w-56 rounded-full bg-cyan-300/80" />
                <div className="h-3 w-72 rounded-full bg-slate-300/75" />
                <div className="h-3 w-64 rounded-full bg-slate-300/70" />
                <div className="h-3 w-80 rounded-full bg-slate-300/65" />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group h-[18rem] overflow-hidden ${
        sample.title === "Flow Sample" ? "bg-white/80" : "bg-slate-950/50"
      }`}
    >
      <Image
        src={sample.imagePath}
        alt={sample.title}
        width={1280}
        height={880}
        onError={() => setImageFailed(true)}
        unoptimized
        className="h-full w-full object-contain object-top transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
      />
    </div>
  );
}
