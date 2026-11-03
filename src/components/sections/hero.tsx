import { Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/ui/badge";
import { CopyChip, LinkChip } from "@/components/copy-chip";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const { person, contact, socials } = portfolio;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-12 pb-14 sm:pt-16 sm:pb-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Avatar src={person.avatar} name={person.name} initials={person.initials} />
        <div className="min-w-0">
          <h1 id="hero-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {person.name}
          </h1>
          <p className="mt-1.5 text-base text-muted-foreground sm:text-lg">{person.role}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden />
            {person.location}
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="What I do">
        {person.roles.map((r) => (
          <li key={r}>
            <Badge variant="brand">{r}</Badge>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        <CopyChip value={contact.email} label="Email" icon={<Mail aria-hidden />} />
        {hasValue(contact.phone) && (
          <CopyChip value={contact.phoneDisplay} label="Phone" icon={<Phone aria-hidden />} />
        )}
        <LinkChip href={socials.linkedin} label="LinkedIn" icon={<LinkedInIcon />} />
        <LinkChip href={socials.github} label="GitHub" icon={<GitHubIcon />} />
      </div>
    </section>
  );
}
