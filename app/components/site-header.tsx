"use client";

import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsHidden(false);
        lastScrollY.current = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY < 24) {
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
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-[#081226]/70 backdrop-blur-xl transition-all duration-500 ${
        isHidden && !isMenuOpen
          ? "translate-y-[-10px] opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-[20px] font-medium tracking-[0.16em] text-white uppercase"
          onClick={() => setIsMenuOpen(false)}
        >
          SARAN C.
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
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
        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/18 md:hidden"
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <span
            aria-hidden="true"
            className={`relative h-3 w-4 transition ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
          >
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition ${
                isMenuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] h-px w-4 bg-current transition ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-current transition ${
                isMenuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-white/10 transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="min-h-0">
          <div className="mx-auto grid max-w-6xl gap-2 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
