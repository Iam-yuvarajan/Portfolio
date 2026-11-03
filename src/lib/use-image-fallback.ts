"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an <img> failed to load. Also catches errors that fired
 * before React hydrated (which onError alone would miss).
 */
export function useImageFallback() {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return { ref, failed, onError: () => setFailed(true) };
}
