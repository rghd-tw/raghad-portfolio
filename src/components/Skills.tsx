import { Bot, Code2, Database, Layers, Wrench, type LucideIcon } from "lucide-react";
import type { Dictionary, SkillIcon } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  layers: Layers,
  ai: Bot,
  tools: Wrench,
  database: Database,
};

// Bento layout on large screens: two wide cards on top, three below.
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function Skills({ t }: { t: Dictionary["skills"] }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-white py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading id="skills" eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {t.groups.map((g, i) => {
            const Icon = icons[g.icon];
            const featured = g.icon === "ai";
            return (
              <Reveal
                key={g.name}
                delay={i * 70}
                className={`rounded-3xl p-7 transition-all duration-500 ${spans[i] ?? "lg:col-span-2"} ${
                  i === t.groups.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
                } ${
                  featured
                    ? "bg-ink text-white"
                    : "border border-line bg-mist hover:-translate-y-1 hover:border-teal/40 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgb(33_21_47/0.25)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-11 items-center justify-center rounded-2xl ${
                      featured ? "bg-teal/15 text-teal ring-1 ring-teal/25" : "bg-white text-teal-700 ring-1 ring-line"
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{g.name}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
                        featured ? "bg-white/[0.06] text-lilac-200 ring-1 ring-white/10" : "bg-white text-ink ring-1 ring-line"
                      }`}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
