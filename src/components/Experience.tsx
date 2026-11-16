import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience({ t }: { t: Dictionary["experience"] }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-mist py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading id="experience" eyebrow={t.eyebrow} title={t.title} />

        <ol className="relative mt-14 space-y-6 border-s border-line ps-6 sm:ps-10">
          {t.items.map((item, i) => (
            <Reveal as="li" key={item.role} delay={i * 100} className="relative">
              <span
                aria-hidden="true"
                className="absolute -start-[calc(1.5rem+5px)] top-9 size-[9px] rounded-full bg-teal ring-4 ring-mist sm:-start-[calc(2.5rem+5px)]"
              />
              <article className="rounded-3xl border border-line bg-white p-7 shadow-[0_1px_2px_rgb(33_21_47/0.04)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgb(33_21_47/0.18)] sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{item.role}</h3>
                    <p className="mt-1.5 font-medium text-teal-700">{item.type}</p>
                  </div>
                  {item.period && (
                    <span className="rounded-full bg-mist px-3 py-1 font-mono text-sm text-slate-ink ring-1 ring-line">
                      {item.period}
                    </span>
                  )}
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-slate-ink">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-teal-700" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-ink/[0.04] px-3 py-1 text-sm font-medium text-ink">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
