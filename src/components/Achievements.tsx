import { Award, Crown, Trophy, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [Trophy, Award, Crown];

export function Achievements({ t }: { t: Dictionary["achievements"] }) {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="relative isolate overflow-hidden bg-violet py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]"
      />
      <div className="container-page">
        <SectionHeading id="achievements" eyebrow={t.eyebrow} title={t.title} tone="dark" />

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {t.items.map((a, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <Reveal
                as="li"
                key={a.title}
                delay={i * 100}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40"
              >
                <div
                  aria-hidden="true"
                  className="absolute -end-10 -top-10 size-40 rounded-full bg-teal/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between">
                  <span aria-hidden="true" className="text-5xl font-extrabold tracking-tight text-teal sm:text-6xl">
                    {a.mark}
                  </span>
                  <Icon className="size-6 text-lilac" aria-hidden="true" />
                </div>
                <h3 className="mt-10 text-xl font-bold">{a.title}</h3>
                <p className="mt-1.5 text-lilac">{a.detail}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
