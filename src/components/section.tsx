import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  /** Extra element shown on the right of the heading (e.g. a link). */
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, title, description, action, className, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("border-t py-14 sm:py-16", className)}>
      <Reveal>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <div>
            <h2 id={headingId} className="text-xl font-semibold tracking-tight sm:text-2xl">
              {title}
            </h2>
            {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
          </div>
          {action}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
