import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const { person, socials } = portfolio;

const links = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: socials.instagram, Icon: InstagramIcon },
].filter((l) => hasValue(l.href));

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-3xl flex-col-reverse items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {person.name}. Built with Next.js.
        </p>
        <ul className="flex items-center gap-1">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-md transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
