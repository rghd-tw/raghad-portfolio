import { IBM_Plex_Sans_Arabic, JetBrains_Mono, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-plex-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/**
 * Same family for the English page, without preloading: it is only fetched
 * if Arabic glyphs are rendered (e.g. the "أَيْن" wordmark).
 */
export const plexArabicLazy = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-plex-arabic",
  display: "swap",
  weight: ["700"],
  preload: false,
});
