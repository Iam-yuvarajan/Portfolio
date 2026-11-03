"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Download, ExternalLink, FileText, LoaderCircle } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const { path, fileName } = portfolio.resume;

type Status = "checking" | "ready" | "missing";

const ResumeContext = createContext<{ openResume: () => void } | null>(null);

/** Opens the resume viewer from anywhere (header, command menu, section). */
export function useResumeDialog() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResumeDialog must be used inside <ResumeDialogProvider>");
  return ctx;
}

export function ResumeDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openResume = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ openResume }), [openResume]);

  return (
    <ResumeContext.Provider value={value}>
      {children}
      <ResumeDialog open={open} onOpenChange={setOpen} />
    </ResumeContext.Provider>
  );
}

export function DownloadResumeButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button asChild {...props}>
      <a href={path} download={fileName}>
        <Download aria-hidden />
        Download
      </a>
    </Button>
  );
}

function ResumeDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [status, setStatus] = useState<Status>("checking");

  // Check that the PDF actually exists before trying to embed it.
  useEffect(() => {
    if (!open) return;
    const controller = new AbortController();
    setStatus("checking");
    fetch(path, { method: "HEAD", cache: "no-store", signal: controller.signal })
      .then((res) => {
        const type = res.headers.get("content-type") ?? "";
        setStatus(res.ok && type.includes("pdf") ? "ready" : "missing");
      })
      .catch((err: unknown) => {
        // Network hiccup: let the browser try to embed it anyway.
        if (!(err instanceof DOMException && err.name === "AbortError")) setStatus("ready");
      });
    return () => controller.abort();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-dvh w-screen max-w-none flex-col gap-0 rounded-none p-0 sm:h-[90dvh] sm:w-[calc(100%-2rem)] sm:max-w-4xl sm:rounded-xl">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b px-4 py-3 pr-12">
          <div className="min-w-0 flex-1">
            <DialogTitle>Resume</DialogTitle>
            <DialogDescription className="truncate">{fileName}</DialogDescription>
          </div>
          {status === "ready" && (
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={path} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden />
                  <span className="hidden sm:inline">Open in new tab</span>
                  <span className="sm:hidden">Open</span>
                </a>
              </Button>
              <DownloadResumeButton size="sm" />
            </div>
          )}
        </div>

        <div className="relative min-h-0 flex-1 bg-muted">
          {status === "checking" && (
            <div className="grid h-full place-items-center text-muted-foreground" role="status">
              <LoaderCircle className="size-5 animate-spin" aria-hidden />
              <span className="sr-only">Loading resume…</span>
            </div>
          )}

          {status === "missing" && (
            <Fallback
              title="Resume not uploaded yet"
              text={`Add your PDF at public${path} and redeploy.`}
            />
          )}

          {status === "ready" && (
            <object
              data={`${path}#view=FitH`}
              type="application/pdf"
              aria-label="Resume PDF"
              className="h-full w-full"
            >
              {/* Shown by browsers that can't embed PDFs (most mobile browsers). */}
              <Fallback
                title="Your browser can't show the PDF here"
                text="Open it in a new tab or download it instead."
                actions
              />
            </object>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Fallback({ title, text, actions = false }: { title: string; text: string; actions?: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <FileText className="size-8 text-muted-foreground" aria-hidden />
      <p className="font-medium">{title}</p>
      <p className="max-w-sm text-sm text-muted-foreground">{text}</p>
      {actions && (
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          <Button asChild variant="outline">
            <a href={path} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden />
              Open in new tab
            </a>
          </Button>
          <DownloadResumeButton />
        </div>
      )}
    </div>
  );
}
