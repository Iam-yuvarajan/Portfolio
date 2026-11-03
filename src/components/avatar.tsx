"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useImageFallback } from "@/lib/use-image-fallback";

/** Round avatar; shows initials if the image file is missing or fails. */
export function Avatar({
  src,
  name,
  initials,
  className,
}: {
  src: string;
  name: string;
  initials: string;
  className?: string;
}) {
  const { ref, failed, onError } = useImageFallback();

  return (
    <div
      className={cn("relative size-24 shrink-0 overflow-hidden rounded-full border bg-muted sm:size-28", className)}
      role={failed ? "img" : undefined}
      aria-label={failed ? name : undefined}
    >
      <span
        aria-hidden
        className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-soft to-muted text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {initials}
      </span>
      {!failed && (
        <Image
          ref={ref}
          src={src}
          alt={`Portrait of ${name}`}
          fill
          sizes="(min-width: 640px) 112px, 96px"
          preload
          className="object-cover"
          onError={onError}
        />
      )}
    </div>
  );
}
