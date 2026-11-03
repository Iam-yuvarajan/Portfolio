import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { cn, isPlaceholder } from "@/lib/utils";
import { PlaceholderText } from "@/components/placeholder-text";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Timeline, TimelineItem } from "@/components/timeline";

function StatBadge({ label, value }: { label: string; value: string }) {
  const placeholder = isPlaceholder(value);
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 rounded-md border bg-card px-2.5 py-1 text-xs",
        placeholder && "border-dashed border-brand/70 bg-brand-soft/60",
      )}
      title={placeholder ? "Placeholder: edit src/data/portfolio.ts" : undefined}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold tabular-nums">{value}</span>
    </span>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline>
        {portfolio.education.map((e, i) => (
          <TimelineItem key={e.degree}>
            <Reveal delay={i * 0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="flex items-center gap-2 font-medium">
                  <GraduationCap className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                  {e.degree}
                </h3>
                <PlaceholderText value={e.period} className="text-xs text-muted-foreground tabular-nums" />
              </div>
              <PlaceholderText as="p" value={e.institution} className="mt-1 inline-block text-sm text-muted-foreground" />
              <div className="mt-3 flex flex-wrap gap-2">
                {e.stats.map((s) => (
                  <StatBadge key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            </Reveal>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
