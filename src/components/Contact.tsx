import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/content";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Props = { t: Dictionary["contact"]; newTab: string };

export function Contact({ t, newTab }: Props) {
  const channels = [
    { label: t.email, value: site.email, href: `mailto:${site.email}`, Icon: Mail, external: false },
    { label: t.phone, value: site.phoneDisplay, href: site.phoneHref, Icon: Phone, external: false },
    {
      label: t.linkedin,
      value: "raghad-altuwajjiri",
      href: site.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
    { label: t.github, value: "rghd-tw", href: site.github, Icon: GitHubIcon, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-mist py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading id="contact" eyebrow={t.eyebrow} title={t.title} />
          <Reveal delay={80}>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-slate-ink">{t.text}</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-ink">
              <MapPin className="size-4 text-teal-700" aria-hidden="true" />
              {t.location}
            </p>
          </Reveal>
        </div>

        <ul className="grid content-start gap-3 sm:grid-cols-3">
          {channels.map(({ label, value, href, Icon, external }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 70}
              className={`group relative flex flex-col justify-between gap-8 rounded-3xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-teal/50 hover:shadow-[0_24px_48px_-28px_rgb(33_21_47/0.3)] ${
                i === 0 ? "sm:col-span-3" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-ink text-teal">
                  <Icon className="size-5" />
                </span>
                {i === 0 ? (
                  <CopyButton value={site.email} label={t.copy} copiedLabel={t.copied} />
                ) : (
                  <ArrowUpRight
                    className="size-5 text-slate-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-700 rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div>
                <p className="text-sm text-slate-ink">{label}</p>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`mt-1 block font-semibold tracking-tight break-all text-ink after:absolute after:inset-0 after:rounded-3xl after:content-[''] ${
                    i === 0 ? "text-xl sm:text-2xl" : "text-base"
                  }`}
                  dir="ltr"
                  style={{ textAlign: "start" }}
                >
                  <bdi>{value}</bdi>
                  {external && <span className="sr-only"> {newTab}</span>}
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
