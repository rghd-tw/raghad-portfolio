import type { Metadata, Viewport } from "next";
import { getDictionary } from "./content";
import { getSiteUrl, localePath, site, type Locale } from "./site";

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const path = localePath[locale];
  return {
    metadataBase: getSiteUrl(),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: site.name.en,
    authors: [{ name: site.name.en, url: site.github }],
    creator: site.name.en,
    keywords: [
      "Raghad Altuwayjiri",
      "رغد التويجري",
      "Software Developer",
      "Full-Stack Developer",
      "AI Integration",
      "OpenAI Agents SDK",
      "Next.js",
      "AYN",
      "Site selection",
      "Qassim University",
      "Saudi Arabia",
    ],
    alternates: {
      canonical: path,
      languages: { en: localePath.en, ar: localePath.ar, "x-default": localePath.en },
    },
    openGraph: {
      type: "profile",
      url: path,
      siteName: site.name[locale],
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
      firstName: "Raghad",
      lastName: "Altuwayjiri",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#21152f",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export function personJsonLd(locale: Locale) {
  const t = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name.en,
    alternateName: site.name.ar,
    jobTitle: t.hero.title,
    email: `mailto:${site.email}`,
    url: getSiteUrl().toString(),
    sameAs: [site.linkedin, site.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buraydah",
      addressCountry: "SA",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Qassim University" },
    knowsLanguage: ["ar", "en"],
  };
}
