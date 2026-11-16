export const site = {
  name: { en: "Raghad Altuwayjiri", ar: "رغد التويجري" },
  email: "rghd.altwj@gmail.com",
  phoneDisplay: "+966 55 275 2802",
  phoneHref: "tel:+966552752802",
  linkedin: "https://linkedin.com/in/raghad-altuwajjiri-b794a540b",
  github: "https://github.com/rghd-tw",
  aynLive: "https://ayn-wheat.vercel.app/",
} as const;

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL when a custom domain is used;
 * on Vercel the production URL is picked up automatically.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);
  return new URL("http://localhost:3000");
}

export type Locale = "en" | "ar";
export const locales: Locale[] = ["en", "ar"];
export const localePath: Record<Locale, string> = { en: "/", ar: "/ar" };
