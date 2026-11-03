"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Copy, Download, FileText, Hash, Mail, Monitor, Moon, Search, Sun } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { sections } from "@/lib/site";
import { hasValue, scrollToSection } from "@/lib/utils";
import { useCopy } from "@/lib/use-copy";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useResumeDialog } from "@/components/resume-dialog";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const { socials, contact, resume } = portfolio;

const links = [
  { label: "GitHub", url: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", url: socials.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", url: socials.instagram, Icon: InstagramIcon },
  { label: "LeetCode", url: socials.leetcode, Icon: ArrowUpRight },
  { label: "SkillRack", url: socials.skillrack, Icon: ArrowUpRight },
].filter((l) => hasValue(l.url));

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const pending = useRef<(() => void) | null>(null);
  const { setTheme } = useTheme();
  const { openResume } = useResumeDialog();
  const copy = useCopy();

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.userAgent));
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** Close first, then run the action once the dialog has fully closed. */
  const run = useCallback((action: () => void) => {
    pending.current = action;
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        aria-keyshortcuts="Control+K Meta+K"
        className="gap-2 px-2 text-muted-foreground sm:pr-1.5 sm:pl-2.5"
      >
        <Search aria-hidden />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border bg-muted px-1.5 font-mono text-[11px] leading-5 sm:inline">
          {isMac ? "⌘" : "Ctrl"} K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showClose={false}
          className="top-[15%] max-w-xl translate-y-0 overflow-hidden p-0"
          onCloseAutoFocus={() => {
            const action = pending.current;
            pending.current = null;
            if (action) setTimeout(action, 0);
          }}
        >
          <DialogTitle className="sr-only">Command menu</DialogTitle>
          <DialogDescription className="sr-only">
            Search sections and quick actions. Use arrow keys to move and Enter to select.
          </DialogDescription>
          <Command loop>
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup heading="Sections">
                <CommandItem value="Home top overview" onSelect={() => run(() => scrollToSection("top"))}>
                  <Hash aria-hidden />
                  Home
                </CommandItem>
                {sections.map((s) => (
                  <CommandItem key={s.id} value={s.label} onSelect={() => run(() => scrollToSection(s.id))}>
                    <Hash aria-hidden />
                    {s.label}
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem value="Copy email" onSelect={() => run(() => copy(contact.email, "Email"))}>
                  <Copy aria-hidden />
                  Copy email
                </CommandItem>
                <CommandItem
                  value="Send email"
                  onSelect={() =>
                    run(() => {
                      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`;
                    })
                  }
                >
                  <Mail aria-hidden />
                  Send an email
                </CommandItem>
                <CommandItem value="View resume" onSelect={() => run(openResume)}>
                  <FileText aria-hidden />
                  View resume
                </CommandItem>
                <CommandItem
                  value="Download resume"
                  onSelect={() =>
                    run(() => {
                      const a = document.createElement("a");
                      a.href = resume.path;
                      a.download = resume.fileName;
                      a.click();
                    })
                  }
                >
                  <Download aria-hidden />
                  Download resume
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />
              <CommandGroup heading="Links">
                {links.map(({ label, url, Icon }) => (
                  <CommandItem
                    key={label}
                    value={`Open ${label}`}
                    onSelect={() => run(() => window.open(url, "_blank", "noopener,noreferrer"))}
                  >
                    <Icon aria-hidden />
                    {label}
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />
              <CommandGroup heading="Theme">
                <CommandItem value="Light theme" onSelect={() => run(() => setTheme("light"))}>
                  <Sun aria-hidden />
                  Light
                </CommandItem>
                <CommandItem value="Dark theme" onSelect={() => run(() => setTheme("dark"))}>
                  <Moon aria-hidden />
                  Dark
                </CommandItem>
                <CommandItem value="System theme" onSelect={() => run(() => setTheme("system"))}>
                  <Monitor aria-hidden />
                  System
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
