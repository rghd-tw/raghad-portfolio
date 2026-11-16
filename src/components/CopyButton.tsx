"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = { value: string; label: string; copiedLabel: string };

export function CopyButton({ value, label, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable; the mailto link still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      title={label}
      className="relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-slate-ink ring-1 ring-line transition-colors hover:bg-mist hover:text-ink"
    >
      {copied ? <Check className="size-4 text-teal-700" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      <span aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
}
