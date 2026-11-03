"use client";

import { Eye, FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DownloadResumeButton, useResumeDialog } from "@/components/resume-dialog";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function Resume() {
  const { openResume } = useResumeDialog();

  return (
    <Section id="resume" title="Resume">
      <Reveal>
        <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
              <FileText className="size-5" aria-hidden />
            </span>
            <div>
              <p className="font-medium">{portfolio.resume.fileName}</p>
              <p className="text-sm text-muted-foreground">View it in the browser or download a copy.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={openResume} className="flex-1 sm:flex-none">
              <Eye aria-hidden />
              View Live
            </Button>
            <DownloadResumeButton className="flex-1 sm:flex-none" />
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
