"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          onClick={() => scrollToSection("top")}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-4 bottom-4 z-30 grid size-10 place-items-center rounded-full border bg-background/90 shadow-md backdrop-blur transition-colors hover:bg-accent sm:right-6 sm:bottom-6"
        >
          <ArrowUp className="size-4" aria-hidden />
        </m.button>
      )}
    </AnimatePresence>
  );
}
