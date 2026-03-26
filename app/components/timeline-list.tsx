"use client";

import { useEffect, useRef, useState } from "react";
import type { ExperienceItem } from "../content";
import { Reveal } from "./reveal";

type TimelineListProps = {
  items: ExperienceItem[];
  onActiveYearChange?: (year: string) => void;
  onProgressChange?: (progress: number) => void;
};

export function TimelineList({
  items,
  onActiveYearChange,
  onProgressChange,
}: TimelineListProps) {
  const [activeItem, setActiveItem] = useState<ExperienceItem | null>(null);
  const [renderedItem, setRenderedItem] = useState<ExperienceItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const openItem = (item: ExperienceItem) => {
    setRenderedItem(item);
    setActiveItem(item);
    onActiveYearChange?.(item.year);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setModalVisible(true));
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    window.setTimeout(() => {
      setActiveItem(null);
      setRenderedItem(null);
    }, 320);
  };

  useEffect(() => {
    if (!activeItem) return;

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
  }, [activeItem]);

  useEffect(() => {
    const nodes = itemRefs.current.filter(
      (node): node is HTMLButtonElement => node !== null
    );
    if (!nodes.length) return;

    let ticking = false;

    const updateProgress = () => {
      const focusLine = window.innerHeight * 0.24;
      const absoluteFocus = window.scrollY + focusLine;

      const nodeSnapshots = nodes.map((node, index) => ({
        index,
        item: items[index],
        top: window.scrollY + node.getBoundingClientRect().top,
      }));

      const nearest = nodeSnapshots.reduce((closest, current) => {
        if (!closest) return current;

        return Math.abs(current.top - absoluteFocus) <
          Math.abs(closest.top - absoluteFocus)
          ? current
          : closest;
      }, nodeSnapshots[0]);

      if (nearest?.item) {
        onActiveYearChange?.(nearest.item.year);
      }

      const firstTop = nodeSnapshots[0]?.top ?? absoluteFocus;
      const lastTop =
        nodeSnapshots[nodeSnapshots.length - 1]?.top ?? absoluteFocus;
      const range = Math.max(lastTop - firstTop, 1);
      const nextProgress = Math.min(
        1,
        Math.max(0, (absoluteFocus - firstTop) / range)
      );

      onProgressChange?.(nextProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items, onActiveYearChange, onProgressChange]);

  return (
    <>
      <div className="space-y-5 lg:space-y-6">
        {items.map((item, index) => (
          <Reveal
            key={`${item.year}-${item.company}-${item.role}`}
            delay={index * 55}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <button
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              type="button"
              data-year={item.year}
              data-index={index}
              onClick={() => openItem(item)}
              className="panel-surface interactive-panel group w-full rounded-[1.6rem] border border-white/10 bg-white/5 p-5 text-left sm:p-6 lg:p-7"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                    {item.year} · {item.period}
                  </p>
                  <h3 className="mt-3 text-[1.45rem] leading-tight tracking-[-0.04em] text-white sm:text-[1.62rem] md:text-[1.8rem] lg:text-[1.85rem]">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-slate-100">
                    {item.company}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-400">
                    {item.project}
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {item.roleStory ?? item.summary}
                  </p>
                </div>
                <div className="shrink-0 md:pt-1">
                  <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100 transition group-hover:border-cyan-200/40 group-hover:bg-cyan-300/20">
                    View Details
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 md:grid-cols-2 md:gap-4">
                {item.highlights.slice(0, 2).map((highlight) => (
                  <p key={highlight} className="text-sm leading-7 text-slate-400">
                    {highlight}
                  </p>
                ))}
              </div>

            </button>
          </Reveal>
        ))}
      </div>

      {activeItem && renderedItem ? (
        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md transition duration-300 ${
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
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  {renderedItem.year} · {renderedItem.period}
                </p>
                <h3 className="mt-3 text-3xl leading-tight tracking-[-0.04em] text-white sm:text-[2.4rem]">
                  {renderedItem.role}
                </h3>
                <p className="mt-3 text-lg font-semibold text-slate-100">
                  {renderedItem.company}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-400">
                  {renderedItem.project}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <section className="panel-surface panel-cyan interactive-panel rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Role story
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {renderedItem.roleStory ?? renderedItem.summary}
                </p>
              </section>

              <section className="panel-surface panel-violet interactive-panel rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Project highlight
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  {renderedItem.projectHighlightTitle ?? renderedItem.project}
                </p>
                <p className="mt-3 text-base leading-8 text-slate-300">
                  {renderedItem.projectHighlightSummary ?? renderedItem.summary}
                </p>
              </section>
            </div>

            <section className="panel-surface panel-cyan interactive-panel mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                Responsibilities
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {(renderedItem.responsibilities ?? renderedItem.highlights).map((highlight) => (
                  <div
                    key={highlight}
                    className="interactive-panel rounded-[1.2rem] border border-white/10 bg-slate-950/20 p-4"
                  >
                    <p className="text-sm leading-7 text-slate-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto]">
              <div className="panel-surface panel-cyan interactive-panel rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Skills built
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {renderedItem.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {renderedItem.keyTakeaway ? (
                <div className="panel-surface panel-violet interactive-panel rounded-[1.5rem] border border-white/10 bg-white/5 p-5 lg:max-w-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                    Key takeaway
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {renderedItem.keyTakeaway}
                  </p>
                </div>
              ) : null}
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}
