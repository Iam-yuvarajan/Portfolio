"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CutoutFigure } from "@/components/cutout-figure";

interface PageShellProps {
  eyebrow: string;
  title: string;
  ghost: string;
  cutout?: boolean;
  children: React.ReactNode;
}

/** Shared page header with the oversized watermark word and the flying cutout. */
export function PageShell({ eyebrow, title, ghost, cutout = false, children }: PageShellProps) {
  const reduced = useReducedMotion();

  return (
    <div className="relative min-h-dvh overflow-hidden px-6 pt-28 pb-28 sm:px-10 sm:pt-32 lg:px-24">
      <span aria-hidden="true" className="ghost-word">
        {ghost}
      </span>
      {cutout && <CutoutFigure />}

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        <div className="mt-14 max-w-3xl space-y-12">{children}</div>
      </motion.div>
    </div>
  );
}
