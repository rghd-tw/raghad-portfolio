import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Briefcase,
  Car,
  Check,
  Map as MapIcon,
  Store,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { CapabilityIcon, Dictionary } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ScreenshotGallery } from "./ScreenshotGallery";

const capabilityIcons: Record<CapabilityIcon, LucideIcon> = {
  target: Target,
  traffic: Car,
  population: Users,
  competitors: Store,
  activity: BarChart3,
  map: MapIcon,
  ai: Bot,
  business: Briefcase,
};

type Props = { t: Dictionary["ayn"]; newTab: string };

export function FeaturedProject({ t, newTab }: Props) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent_45%)]" />
      <div
        aria-hidden="true"
        className="absolute -top-32 end-[-8rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-teal/[0.08] blur-[130px]"
      />

      <div className="container-page">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-teal">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 id="projects-title" className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="text-6xl font-extrabold tracking-[-0.04em] sm:text-7xl lg:text-8xl">{t.name}</span>
                <span lang="ar" className="text-4xl font-bold text-teal sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-plex-arabic), system-ui, sans-serif" }}>
                  {t.nameAr}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-xl font-semibold text-lilac-200 sm:text-2xl">{t.category}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-lilac">{t.summary}</p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-teal">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-teal" />
                </span>
                {t.liveBadge}
              </span>
              <a
                href={site.aynLive}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex h-14 w-full items-center justify-between gap-3 rounded-2xl bg-teal px-6 text-lg font-bold text-ink shadow-[0_18px_40px_-14px_rgb(37_198_179/0.75)] transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_22px_48px_-14px_rgb(37_198_179/0.9)]"
              >
                {t.cta}
                <span className="sr-only"> {newTab}</span>
                <ArrowUpRight
                  className="size-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-3 text-sm text-lilac">{t.ctaNote}</p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-medium tracking-wide text-lilac">{t.roleLabel}</p>
                <p className="mt-1.5 font-semibold text-white">{t.role}</p>
                <p className="mt-0.5 font-mono text-sm text-teal">{t.year}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Gallery */}
        <Reveal className="mt-16 sm:mt-20">
          <h3 className="sr-only">{t.galleryTitle}</h3>
          <ScreenshotGallery t={t} />
        </Reveal>

        {/* Details */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:col-span-7 sm:p-8">
            <h3 className="text-lg font-bold">{t.capabilitiesTitle}</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.capabilities.map((c) => {
                const Icon = capabilityIcons[c.icon];
                return (
                  <li
                    key={c.text}
                    className="group flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-ink-950/40 p-3.5 transition-colors duration-300 hover:border-teal/30"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal ring-1 ring-teal/20 transition-colors duration-300 group-hover:bg-teal/15">
                      <Icon className="size-[1.15rem]" aria-hidden="true" />
                    </span>
                    <span className="text-[0.95rem] leading-snug text-lilac-200">{c.text}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={100} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <h3 className="text-lg font-bold">{t.contributionsTitle}</h3>
              <ul className="mt-5 space-y-3.5">
                {t.contributions.map((c) => (
                  <li key={c} className="flex gap-3 text-[0.95rem] leading-relaxed text-lilac-200">
                    <Check className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <h3 className="text-lg font-bold">{t.stackTitle}</h3>
              <ul className="mt-5 flex flex-wrap gap-2" dir="ltr">
                {t.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-lilac-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
