import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { GitHubIcon, InstagramIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons";

const { person, socials } = portfolio;

/** The fixed logo / back arrow / social rail used on every page. */
export function SiteRail() {
  const links = [
    { href: socials.linkedin, label: "LinkedIn", icon: <LinkedInIcon className="size-[18px]" /> },
    { href: socials.github, label: "GitHub", icon: <GitHubIcon className="size-[18px]" /> },
    { href: socials.leetcode, label: "LeetCode", icon: <LeetCodeIcon className="size-[18px]" /> },
    { href: socials.instagram, label: "Instagram", icon: <InstagramIcon className="size-[18px]" /> },
  ].filter((link) => hasValue(link.href));

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex h-20 items-start justify-between px-6 pt-5 sm:px-10">
        <Link
          href="/"
          aria-label={`${person.name}, back to home`}
          className="font-script pointer-events-auto text-2xl leading-none tracking-tight transition-opacity hover:opacity-60"
        >
          {person.initials}
        </Link>

        <span className="eyebrow pointer-events-auto hidden sm:block">
          {person.role.split(" · ")[0]}
        </span>

        <Link
          href="/"
          aria-label="Back to home"
          className="pointer-events-auto absolute left-1/2 top-5 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-line transition-colors hover:bg-paper hover:text-ink"
        >
          <ArrowLeft className="size-[18px]" aria-hidden />
        </Link>
      </div>

      <nav
        aria-label="Social links"
        className="fixed bottom-16 left-5 z-40 flex items-center gap-4 sm:bottom-8 sm:left-8 sm:gap-5"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-paper/70 transition-transform duration-300 hover:scale-125 hover:text-paper"
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </>
  );
}
