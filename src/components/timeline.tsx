import { cn } from "@/lib/utils";

export function Timeline({ children, className }: { children: React.ReactNode; className?: string }) {
  return <ol className={cn("relative space-y-8 border-l pl-6 sm:pl-8", className)}>{children}</ol>;
}

export function TimelineItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative">
      <span
        aria-hidden
        className="absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full border-2 border-background bg-brand ring-1 ring-border sm:-left-[calc(2rem+5px)]"
      />
      {children}
    </li>
  );
}
