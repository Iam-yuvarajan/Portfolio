import type { SkillIcon } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { lucideIcons } from "@/components/icon-map";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

export function SkillGlyph({ icon }: { icon: SkillIcon }) {
  if (icon.type === "lucide") {
    const Icon = lucideIcons[icon.name];
    return <Icon className="size-6 text-paper/80" aria-hidden />;
  }
  const folder = icon.slug.split("-")[0];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${DEVICON}/${folder}/${icon.slug}.svg`}
      alt=""
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      className={cn("size-6", icon.invertOnDark && "invert")}
    />
  );
}
