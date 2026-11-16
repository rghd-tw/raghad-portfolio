import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/content";
import { manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Raghad Altuwayjiri",
  robots: { index: false },
};

export default function GlobalNotFound() {
  const t = getDictionary("en").notFound;
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <main className="bg-grid relative flex min-h-svh flex-col items-center justify-center bg-ink px-6 text-center text-white">
          <p className="font-mono text-sm tracking-[0.2em] text-teal">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-4 text-lilac">{t.text}</p>
          <Link
            href="/"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-teal px-6 font-semibold text-ink transition-colors hover:bg-teal-300"
          >
            {t.back}
          </Link>
        </main>
      </body>
    </html>
  );
}
