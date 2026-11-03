import { ArrowUpRight, Inbox } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { lucideIcons } from "@/components/icon-map";
import { PlaceholderText } from "@/components/placeholder-text";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

/** To add achievements, edit the `achievements` array in src/data/portfolio.ts. */
export function Achievements() {
  const items = portfolio.achievements;

  return (
    <Section id="achievements" title="Achievements">
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((a, i) => {
            const Icon = lucideIcons[a.icon];
            return (
              <li key={`${a.title}-${i}`}>
                <Reveal delay={(i % 2) * 0.05} className="h-full">
                  <Card className="flex h-full flex-col gap-3 p-5">
                    <div className="flex items-start gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <div className="min-w-0 space-y-1">
                        <PlaceholderText as="h3" value={a.title} className="block font-medium leading-snug" />
                        <p className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground">
                          <PlaceholderText value={a.issuer} />
                          <span aria-hidden>·</span>
                          <PlaceholderText value={a.date} />
                        </p>
                      </div>
                    </div>
                    <PlaceholderText as="p" value={a.description} className="text-sm leading-6 text-muted-foreground" />
                    {hasValue(a.link) && (
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
                      >
                        View certificate
                        <ArrowUpRight className="size-4" aria-hidden />
                        <span className="sr-only">for {a.title}</span>
                      </a>
                    )}
                  </Card>
                </Reveal>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed px-6 py-10 text-center">
      <Inbox className="size-6 text-muted-foreground" aria-hidden />
      <p className="font-medium">Achievements coming soon</p>
      <p className="max-w-xs text-sm text-muted-foreground">
        Hackathons, awards and milestones will show up here.
      </p>
    </div>
  );
}
