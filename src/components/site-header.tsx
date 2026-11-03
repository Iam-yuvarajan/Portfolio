"use client";

import { FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHubIcon } from "@/components/icons";
import { useResumeDialog } from "@/components/resume-dialog";

export function SiteHeader() {
  const { openResume } = useResumeDialog();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-2 px-4 sm:px-6">
        <a
          href="#top"
          aria-label={`${portfolio.person.name}, back to top`}
          className="grid size-9 place-items-center rounded-lg border bg-card font-mono text-sm font-semibold tracking-tight transition-colors hover:bg-accent"
        >
          {portfolio.person.initials}
        </a>

        <nav aria-label="Quick actions" className="flex items-center gap-1 sm:gap-1.5">
          <Button variant="ghost" size="sm" onClick={openResume} className="px-2.5">
            <FileText aria-hidden />
            Resume
          </Button>
          <CommandMenu />
          <Button asChild variant="ghost" size="icon">
            <a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <GitHubIcon />
            </a>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
