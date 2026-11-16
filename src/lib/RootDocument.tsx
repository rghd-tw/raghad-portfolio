import type { ReactNode } from "react";
import { jetbrains, manrope, plexArabic, plexArabicLazy } from "./fonts";
import type { Locale } from "./site";
import "../app/globals.css";

/** Shared <html>/<body> shell for the per-language root layouts. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const arabicFont = locale === "ar" ? plexArabic : plexArabicLazy;
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${manrope.variable} ${jetbrains.variable} ${arabicFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Enables scroll-reveal styles only when JavaScript runs. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
