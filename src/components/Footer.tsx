import { ArrowUp, Mail } from "lucide-react";
import type { Dictionary } from "@/lib/content";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, Monogram } from "./BrandIcons";

type Props = { t: Dictionary["footer"]; name: string; newTab: string };

export function Footer({ t, name, newTab }: Props) {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
    { href: site.github, label: "GitHub", Icon: GitHubIcon, external: true },
    { href: `mailto:${site.email}`, label: "Email", Icon: Mail, external: false },
  ];

  return (
    <footer className="bg-ink-950 py-12 text-white">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Monogram className="size-10" />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-lilac">
              © {year} {name}. {t.rights}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={external ? `${label} ${newTab}` : label}
              className="inline-flex size-10 items-center justify-center rounded-full text-lilac ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/5 hover:text-teal"
            >
              <Icon className="size-[1.1rem]" />
            </a>
          ))}
          <a
            href="#top"
            aria-label={t.backToTop}
            className="ms-2 inline-flex size-10 items-center justify-center rounded-full bg-teal text-ink transition-colors hover:bg-teal-300"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="container-page mt-8 border-t border-white/[0.06] pt-6 text-xs text-lilac/70">{t.built}</p>
    </footer>
  );
}
