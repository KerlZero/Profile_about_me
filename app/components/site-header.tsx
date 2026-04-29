"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const lastScrollY = useRef(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewportMode = () => {
      const nextIsDesktop = mediaQuery.matches;
      setIsDesktop(nextIsDesktop);
      setIsHidden(false);
    };

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);

    return () => mediaQuery.removeEventListener("change", updateViewportMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isDesktop || currentScrollY < 24) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const handleMobileNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-[#081226]/70 backdrop-blur-xl transition-all duration-500 ${
        isHidden && isDesktop
          ? "translate-y-[-10px] opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-[20px] font-medium tracking-[0.16em] text-white uppercase"
        >
          SARAN C.
        </a>
        {isDesktop ? (
          <nav
            aria-label="Desktop navigation"
            className="flex items-center gap-6 text-sm text-slate-300"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
      <nav
        aria-label="Mobile navigation"
        className="border-t border-white/10 md:hidden"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleMobileNavClick(event, item.href)}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
