"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { Toaster } from "sonner";
import { ResumeDialogProvider } from "@/components/resume-dialog";

function ThemedToaster() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      position="bottom-center"
      toastOptions={{ className: "!rounded-lg !border !border-border" }}
    />
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {/* reducedMotion="user" turns movement off for prefers-reduced-motion users. */}
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <ResumeDialogProvider>{children}</ResumeDialogProvider>
          <ThemedToaster />
        </LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  );
}
