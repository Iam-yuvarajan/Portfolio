import { cn, isPlaceholder } from "@/lib/utils";

/**
 * Renders a value from portfolio.ts. If it still contains a [[PLACEHOLDER]],
 * it gets a dashed outline so it is easy to spot.
 */
export function PlaceholderText({
  value,
  className,
  as: Tag = "span",
}: {
  value: string;
  className?: string;
  as?: "span" | "p" | "h3" | "time";
}) {
  const placeholder = isPlaceholder(value);
  return (
    <Tag
      className={cn(placeholder && "placeholder-value break-all", className)}
      title={placeholder ? "Placeholder: edit src/data/portfolio.ts" : undefined}
    >
      {value}
    </Tag>
  );
}
