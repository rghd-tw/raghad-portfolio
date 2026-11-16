"use client";

import { useEffect, useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import type { Dictionary } from "@/lib/content";
import { localePath, type Locale } from "@/lib/site";
import { Monogram } from "./BrandIcons";

const SECTIONS = ["about", "projects", "experience", "skills", "achievements", "contact"] as const;

type Props = {
  locale: Locale;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
  name: string;
};

export function Navbar({ locale, nav, a11y, name }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const switchHref = localePath[otherLocale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keep the current section when switching language.
  const switchLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hash = window.location.hash;
    if (hash) {
      e.preventDefault();
      window.location.assign(switchHref + hash);
    }
  };

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid
          ? "bg-ink/85 shadow-[0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav aria-label={a11y.primaryNav} className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3 rounded-lg" aria-label={a11y.home}>
          <Monogram className="size-10 transition-transform duration-500 group-hover:-rotate-6" />
          <span className="hidden text-[0.95rem] font-semibold tracking-tight text-white sm:block">{name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === id ? "text-white" : "text-lilac hover:text-white"
                }`}
              >
                {nav[id]}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-teal transition-transform duration-500 ${
                    active === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            onClick={switchLanguage}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={nav.switchAria}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-white transition-colors duration-300 hover:border-teal/70 hover:bg-white/5"
          >
            <Languages className="size-4 text-teal" aria-hidden="true" />
            <span>{nav.switchLabel}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/5 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="container-page flex flex-col py-4">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-2 py-3.5 text-lg font-medium text-lilac-200 transition-colors hover:text-white"
              >
                {nav[id]}
                <span aria-hidden="true" className={`size-1.5 rounded-full ${active === id ? "bg-teal" : "bg-transparent"}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
