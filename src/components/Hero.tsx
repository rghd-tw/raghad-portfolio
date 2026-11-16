import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import type { Dictionary } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

type Props = { t: Dictionary["hero"]; newTab: string };

export function Hero({ t, newTab }: Props) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ink pt-[4.5rem] text-white"
    >
      {/* Background: grid + soft light, kept deliberately subtle */}
      <div aria-hidden="true" className="bg-grid noise-fade absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-40 start-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet-700/40 blur-[140px] rtl:translate-x-1/2"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 end-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-teal/10 blur-[120px]"
      />

      <div className="container-page grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-20">
        <div>
          <Reveal>
            <p className="eyebrow text-teal">{t.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-6 text-[2.75rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl rtl:leading-[1.2] rtl:tracking-normal"
            >
              {t.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg font-medium text-lilac-200 sm:text-xl">{t.title}</p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-lilac sm:text-[1.05rem]">{t.intro}</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-teal px-6 text-[0.95rem] font-semibold text-ink shadow-[0_10px_30px_-10px_rgb(37_198_179/0.7)] transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_14px_36px_-10px_rgb(37_198_179/0.85)]"
              >
                {t.ctaPrimary}
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
              >
                <Mail className="size-4" aria-hidden="true" />
                {t.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <ul className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {t.facts.map((f) => (
                <li key={f.label}>
                  <span className="block text-xl font-bold tracking-tight text-white sm:text-2xl">{f.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-lilac sm:text-sm">{f.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroVisual t={t.visual} newTab={newTab} />
        </Reveal>
      </div>
    </section>
  );
}

/** Abstract spatial-analysis panel — a nod to AYN, not a screenshot. */
function HeroVisual({ t, newTab }: { t: Dictionary["hero"]["visual"]; newTab: string }) {
  return (
    <div className="animate-float-soft relative">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-violet/90 to-ink-950/90 p-5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-wide text-lilac">{t.label}</span>
          <a
            href={site.aynLive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal ring-1 ring-teal/30 transition-colors hover:bg-teal/20"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-teal" />
            </span>
            {t.status}
            <ArrowUpRight className="size-3 rtl:-scale-x-100" aria-hidden="true" />
            <span className="sr-only">AYN {newTab}</span>
          </a>
        </div>

        <svg viewBox="0 0 400 300" className="mt-4 w-full rounded-2xl bg-ink-950/70" aria-hidden="true">
          <defs>
            <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#25C6B3" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#25C6B3" stopOpacity="0" />
            </radialGradient>
            <pattern id="hv-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="rgb(255 255 255 / 0.05)" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#hv-grid)" />
          {/* city blocks */}
          <g fill="rgb(255 255 255 / 0.035)" stroke="rgb(255 255 255 / 0.06)">
            <rect x="30" y="30" width="90" height="60" rx="6" />
            <rect x="150" y="24" width="70" height="80" rx="6" />
            <rect x="262" y="40" width="110" height="56" rx="6" />
            <rect x="24" y="190" width="100" height="80" rx="6" />
            <rect x="268" y="176" width="96" height="92" rx="6" />
            <rect x="152" y="196" width="80" height="70" rx="6" />
          </g>
          {/* streets */}
          <g stroke="#4a2f5d" strokeLinecap="round">
            <path d="M0 140 L400 120" strokeWidth="14" />
            <path d="M240 0 L218 300" strokeWidth="12" />
            <path d="M130 0 L140 300" strokeWidth="8" />
            <path d="M0 175 L400 168" strokeWidth="5" opacity="0.7" />
          </g>
          {/* competitor / activity points */}
          <g fill="#b8a9c9">
            <circle cx="96" cy="128" r="3.5" />
            <circle cx="300" cy="113" r="3.5" />
            <circle cx="190" cy="220" r="3.5" />
            <circle cx="330" cy="210" r="3.5" />
            <circle cx="62" cy="230" r="3.5" />
          </g>
          {/* analysis route */}
          <path
            className="animate-dash"
            d="M48 250 C 110 210, 160 170, 228 128 S 330 70, 360 60"
            fill="none"
            stroke="#25C6B3"
            strokeWidth="2"
            strokeDasharray="6 7"
          />
          {/* recommended site */}
          <circle cx="228" cy="128" r="58" fill="url(#hv-glow)" />
          <circle className="animate-pulse-ring" cx="228" cy="128" r="14" fill="none" stroke="#25C6B3" strokeWidth="2" />
          <circle cx="228" cy="128" r="9" fill="#21152f" stroke="#25C6B3" strokeWidth="3" />
          <circle cx="228" cy="128" r="3" fill="#25C6B3" />
        </svg>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-lilac-200">{t.metric}</span>
            <span className="font-mono text-xs text-teal">AI</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-teal/60 to-teal rtl:bg-gradient-to-l" />
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.layers.map((l) => (
              <li
                key={l}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-lilac-200"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
