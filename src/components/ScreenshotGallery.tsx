"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { Dictionary } from "@/lib/content";

type Props = { t: Dictionary["ayn"] };

export function ScreenshotGallery({ t }: Props) {
  const shots = t.screenshots;
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = shots[index];
  const counter = t.galleryCounter.replace("{i}", String(index + 1)).replace("{n}", String(shots.length));

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + shots.length) % shots.length),
    [shots.length],
  );

  // Arrow keys follow reading direction (reversed in RTL).
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const rtl = document.documentElement.dir === "rtl";
    const forward = e.key === (rtl ? "ArrowLeft" : "ArrowRight");
    e.preventDefault();
    go(forward ? 1 : -1);
  };

  const openLightbox = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => (document.body.style.overflow = "");
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  return (
    <div onKeyDown={onKeyDown} className="relative">
      {/* Browser-style frame around the real screenshot */}
      <figure className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-ink-950 shadow-[0_50px_100px_-40px_rgb(0_0_0/0.8)] sm:rounded-[1.5rem]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3" dir="ltr">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto flex max-w-xs flex-1 items-center justify-center gap-2 rounded-md bg-white/[0.05] px-3 py-1 font-mono text-[0.7rem] text-lilac">
            <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
            ayn-wheat.vercel.app
          </div>
          <span className="w-[42px]" aria-hidden="true" />
        </div>

        <div className="group relative">
          <button
            type="button"
            onClick={openLightbox}
            className="block w-full cursor-zoom-in focus-visible:outline-offset-[-4px]"
            aria-label={`${t.galleryOpen}: ${current.title}`}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="(min-width: 1216px) 1150px, 100vw"
              priority={index === 0}
              className="animate-fade-in aspect-[1274/619] w-full bg-ink-950 object-contain"
            />
          </button>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute end-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
          >
            <Expand className="size-3.5" /> {t.galleryOpen}
          </span>

          <NavButton side="start" label={t.galleryPrev} onClick={() => go(-1)} />
          <NavButton side="end" label={t.galleryNext} onClick={() => go(1)} />
        </div>

        <figcaption className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
          <div aria-live="polite">
            <p className="font-semibold text-white">{current.title}</p>
            <p className="mt-0.5 text-sm text-lilac">{current.caption}</p>
          </div>
          <span className="shrink-0 font-mono text-xs text-lilac">
            {counter}
          </span>
        </figcaption>
      </figure>

      {/* Thumbnails */}
      <ul className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-7 sm:gap-3">
        {shots.map((s, i) => (
          <li key={s.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={s.title}
              aria-current={i === index ? "true" : undefined}
              className={`group relative block w-full overflow-hidden rounded-lg ring-1 transition-all duration-300 sm:rounded-xl ${
                i === index ? "ring-2 ring-teal" : "opacity-55 ring-white/10 hover:opacity-100 hover:ring-white/30"
              }`}
            >
              <Image
                src={s.src}
                alt=""
                width={s.width}
                height={s.height}
                sizes="(min-width: 640px) 160px, 25vw"
                className="aspect-[16/9] w-full object-cover object-top"
              />
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-lilac">{t.galleryNote}</p>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        aria-label={current.title}
        onClick={(e) => e.target === dialogRef.current && closeLightbox()}
        className="m-auto max-h-[94vh] w-[min(96vw,1400px)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-ink-950/90 backdrop:backdrop-blur-sm"
      >
        <div className="relative" onKeyDown={onKeyDown}>
          <Image
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="96vw"
            className="max-h-[82vh] w-full rounded-xl object-contain"
          />
          <div className="mt-3 flex items-center justify-between gap-4 text-white">
            <p className="text-sm">
              <span className="font-semibold">{current.title}</span>
              <span className="text-lilac"> — {counter}</span>
            </p>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label={t.galleryPrev} className={lightboxBtn}>
                <ChevronLeft className="size-5 rtl:rotate-180" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label={t.galleryNext} className={lightboxBtn}>
                <ChevronRight className="size-5 rtl:rotate-180" aria-hidden="true" />
              </button>
              <button type="button" onClick={closeLightbox} aria-label={t.galleryClose} className={lightboxBtn} autoFocus>
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

const lightboxBtn =
  "inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20";

function NavButton({ side, label, onClick }: { side: "start" | "end"; label: string; onClick: () => void }) {
  const Icon = side === "start" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 ${
        side === "start" ? "start-3 sm:start-4" : "end-3 sm:end-4"
      } inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/75 text-white shadow-lg ring-1 ring-white/15 backdrop-blur transition-all duration-300 hover:bg-teal hover:text-ink sm:size-11 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100`}
    >
      <Icon className="size-5 rtl:rotate-180" aria-hidden="true" />
    </button>
  );
}
