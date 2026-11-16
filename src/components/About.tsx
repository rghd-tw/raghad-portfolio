import { GraduationCap, Languages, MapPin, Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="about" eyebrow={t.eyebrow} title={t.title} />
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-slate-ink">
            {t.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80} as="p">
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Reveal className="rounded-3xl bg-ink p-7 text-white sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 text-teal">
              <GraduationCap className="size-5" aria-hidden="true" />
              <h3 className="text-sm font-semibold tracking-wide">{t.educationLabel}</h3>
            </div>
            <p className="mt-5 text-xl font-bold tracking-tight">{t.degree}</p>
            <p className="mt-1 text-lilac-200">{t.university}</p>
            <p className="mt-4 inline-flex rounded-full bg-white/[0.06] px-3 py-1 text-sm text-lilac ring-1 ring-white/10">
              {t.graduation}
            </p>
          </Reveal>

          <Reveal delay={80} className="rounded-3xl border border-line bg-mist p-6">
            <div className="flex items-center gap-3 text-teal-700">
              <Languages className="size-5" aria-hidden="true" />
              <h3 className="text-sm font-semibold tracking-wide">{t.languagesLabel}</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {t.languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold">{l.name}</span>
                  <span className="text-sm text-slate-ink">{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="rounded-3xl border border-line bg-mist p-6">
            <div className="flex items-center gap-3 text-teal-700">
              <MapPin className="size-5" aria-hidden="true" />
              <h3 className="text-sm font-semibold tracking-wide">{t.locationLabel}</h3>
            </div>
            <p className="mt-4 font-semibold">{t.location}</p>
          </Reveal>

          <Reveal delay={240} className="rounded-3xl border border-line p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 text-teal-700">
              <Sparkles className="size-5" aria-hidden="true" />
              <h3 className="text-sm font-semibold tracking-wide">{t.interestsLabel}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.interests.map((i) => (
                <li key={i} className="rounded-full bg-mist px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
