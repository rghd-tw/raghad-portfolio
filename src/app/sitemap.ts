import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const url = (p: string) => new URL(p, base).toString();
  const languages = { en: url("/"), ar: url("/ar") };
  return [
    { url: url("/"), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: url("/ar"), changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
