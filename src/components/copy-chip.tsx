"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useCopy } from "@/lib/use-copy";
import { cn } from "@/lib/utils";

const chip =
  "inline-flex h-8 items-center gap-1.5 rounded-full border bg-card px-3 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground [&_svg]:size-3.5 [&_svg]:shrink-0";

/** Chip that copies a value on click. */
export function CopyChip({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  const copy = useCopy();
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      className={chip}
      aria-label={`Copy ${label.toLowerCase()}: ${value}`}
      onClick={async () => {
        await copy(value, label);
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      }}
    >
      {icon}
      <span className="max-w-[16rem] truncate">{value}</span>
      {done ? <Check aria-hidden className="text-brand" /> : <Copy aria-hidden className="opacity-60" />}
    </button>
  );
}

/** Chip that opens a link. */
export function LinkChip({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(chip)}>
      {icon}
      {label}
    </a>
  );
}
