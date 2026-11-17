"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The character illustration that flies in from the bottom-right.
 * Drop a transparent PNG at public/images/me-cutout.png and it will be used
 * automatically; until then the existing photo is shown with a soft mask.
 */
export function CutoutFigure() {
  const [src, setSrc] = useState("/images/me-cutout.png");
  const imgRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();
  const isFallback = src.endsWith("me.jpg");

  // The first image request can fail before React hydrates, so onError alone
  // isn't enough. Check once on mount and fall back to the existing photo.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) setSrc("/images/me.jpg");
  }, [src]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute top-[12%] right-[3%] z-0 hidden h-[min(65vh,600px)] w-[min(34vw,380px)] md:block"
      initial={reduced ? false : { x: "25vw", y: "75vh", opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt=""
        onError={() => setSrc("/images/me.jpg")}
        className={`cutout-img ${isFallback ? "rounded-[45%_45%_12%_12%] [mask-image:radial-gradient(ellipse_65%_80%_at_50%_65%,#000_55%,transparent_100%)]" : ""}`}
      />
      <span className="font-script absolute -top-8 right-6 rotate-6 text-xl text-paper/70">that&apos;s me!</span>
    </motion.div>
  );
}
