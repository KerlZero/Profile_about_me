"use client";

import { useCallback, useState } from "react";
import type { ExperienceItem } from "../content";
import { Reveal } from "./reveal";
import { TimelineList } from "./timeline-list";

const careerProgress = [
  {
    id: "bridge",
    year: "Now",
    title: "Bridge role",
    note: "Connecting business intent, quality confidence, and execution across teams.",
  },
  {
    id: "ownership",
    year: "2023",
    title: "Broader ownership",
    note: "Handled larger e-commerce scope across web, mobile, APIs, and release coordination.",
  },
  {
    id: "systems",
    year: "2021",
    title: "System thinking",
    note: "Moved from pure testing into requirements, workflow analysis, and delivery support.",
  },
  {
    id: "foundation",
    year: "2017",
    title: "QA foundation",
    note: "Built discipline in backend validation, structured test design, and issue tracking.",
  },
];

type TimelineSectionProps = {
  items: ExperienceItem[];
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-kicker">
      {children}
    </p>
  );
}

export function TimelineSection({ items }: TimelineSectionProps) {
  const [activeStage, setActiveStage] = useState<string>("bridge");
  const [progressRatio, setProgressRatio] = useState(0);

  const resolveStage = useCallback((year: string) => {
    if (year === "2017" || year === "2018") return "foundation";
    if (year === "2021" || year === "2022") return "systems";
    if (year === "2023") return "ownership";
    return "bridge";
  }, []);

  const handleActiveYearChange = useCallback(
    (year: string) => setActiveStage(resolveStage(year)),
    [resolveStage]
  );
  const activeIndex = careerProgress.findIndex(
    (progress) => progress.id === activeStage
  );
  const stageStartIndexes = careerProgress.map((progress) => {
    const itemIndex = items.findIndex((item) => resolveStage(item.year) === progress.id);
    return itemIndex === -1 ? 0 : itemIndex;
  });
  const totalSteps = Math.max(items.length - 1, 1);
  const stageOffsets = stageStartIndexes.map((index) => (index / totalSteps) * 100);
  const progressHeight = `${progressRatio * 100}%`;
  const railHeight = `${Math.max(items.length * 12.25, 62)}rem`;

  return (
    <div className="grid items-stretch gap-8 md:grid-cols-[220px_1fr]">
      <Reveal className="h-full overflow-hidden">
        <SectionLabel>Timeline</SectionLabel>
        <h2 className="section-headline section-headline-compact mt-5 max-w-xs">
          A path shaped by <span className="section-accent accent-cyan">quality and systems.</span>
        </h2>
        <p className="mt-5 max-w-[17rem] text-base leading-8 text-slate-300">
          A progression from QA foundations into broader analysis, delivery support, and cross-team execution.
        </p>
        <div className="relative mt-6 h-full overflow-hidden pl-7 pt-4 pb-28" style={{ minHeight: railHeight }}>
          <div className="absolute bottom-24 left-[0.5625rem] top-[0.875rem] w-px bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(96,165,250,0.9),rgba(245,158,11,0.18))]" />
          <div
            className="absolute left-[0.5rem] top-[0.875rem] w-[2px] rounded-full bg-[linear-gradient(180deg,rgba(103,232,249,0.92),rgba(59,130,246,0.88),rgba(14,165,233,0.28))] shadow-[0_0_16px_rgba(34,211,238,0.2)] transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ height: progressHeight, maxHeight: "calc(100% - 8.125rem)" }}
          />
          <div className="relative h-full">
            {careerProgress.map((item, index) => {
              const isDirectMatch = item.id === activeStage;
              const isPastMatch = !isDirectMatch && activeIndex > index;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative flex min-h-[8rem] flex-col justify-start transition duration-300 ${
                    isDirectMatch ? "translate-x-1" : "opacity-70"
                  }`}
                  style={{ position: "absolute", top: `${stageOffsets[index]}%` }}
                >
                  <span
                    className={`absolute left-[-1.6875rem] top-[0.375rem] flex h-4 w-4 items-center justify-center rounded-full border transition duration-300 ${
                      isDirectMatch
                        ? "border-cyan-200/80 bg-cyan-300 shadow-[0_0_0_7px_rgba(34,211,238,0.16)]"
                        : isPastMatch
                          ? "border-cyan-300/40 bg-cyan-300/20"
                          : "border-cyan-300/25 bg-slate-950"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition duration-300 ${
                        isDirectMatch
                          ? "bg-slate-950"
                          : isPastMatch
                            ? "bg-cyan-200"
                            : "bg-cyan-300"
                      }`}
                    />
                  </span>
                  <p
                    className={`text-[0.68rem] uppercase tracking-[0.26em] transition duration-300 ${
                      isDirectMatch ? "text-cyan-200/90" : "text-slate-500"
                    }`}
                  >
                    {item.year}
                  </p>
                  <p
                    className={`mt-2 text-base font-medium tracking-[-0.02em] transition duration-300 ${
                      isDirectMatch ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`mt-2 text-sm leading-7 transition duration-300 ${
                      isDirectMatch ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {item.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <TimelineList
        items={items}
        onActiveYearChange={handleActiveYearChange}
        onProgressChange={setProgressRatio}
      />
    </div>
  );
}
