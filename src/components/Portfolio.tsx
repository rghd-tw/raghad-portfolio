import { getDictionary } from "@/lib/content";
import { personJsonLd } from "@/lib/metadata";
import { site, type Locale } from "@/lib/site";
import { About } from "./About";
import { Achievements } from "./Achievements";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { FeaturedProject } from "./FeaturedProject";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";

/** The full single-page portfolio, rendered for one locale. */
export function Portfolio({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const name = site.name[locale];

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-teal px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        {t.a11y.skip}
      </a>
      <Navbar locale={locale} nav={t.nav} a11y={t.a11y} name={name} />
      <main id="main">
        <Hero t={t.hero} newTab={t.a11y.newTab} />
        <About t={t.about} />
        <FeaturedProject t={t.ayn} newTab={t.a11y.newTab} />
        <Experience t={t.experience} />
        <Skills t={t.skills} />
        <Achievements t={t.achievements} />
        <Contact t={t.contact} newTab={t.a11y.newTab} />
      </main>
      <Footer t={t.footer} name={name} newTab={t.a11y.newTab} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)) }}
      />
    </>
  );
}
