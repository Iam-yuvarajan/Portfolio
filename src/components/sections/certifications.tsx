import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { PlaceholderText } from "@/components/placeholder-text";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

/** To add certifications, edit the `certifications` array in src/data/portfolio.ts. */
export function Certifications() {
  const items = portfolio.certifications;

  return (
    <Section id="certifications" title="Certifications">
      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed px-4 py-6 text-center text-sm text-muted-foreground">
          Certifications coming soon.
        </p>
      ) : (
        <Reveal>
          <ul className="divide-y rounded-xl border bg-card">
            {items.map((c, i) => (
              <li key={`${c.title}-${i}`} className="flex items-center gap-3 px-4 py-3.5">
                <BadgeCheck className="size-4 shrink-0 text-brand" aria-hidden />
                <div className="min-w-0 flex-1">
                  <PlaceholderText as="h3" value={c.title} className="block text-sm font-medium" />
                  <p className="mt-0.5 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground">
                    <PlaceholderText value={c.issuer} />
                    <span aria-hidden>·</span>
                    <PlaceholderText value={c.date} />
                  </p>
                </div>
                {hasValue(c.link) && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${c.title} certificate`}
                    className="grid size-8 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}
