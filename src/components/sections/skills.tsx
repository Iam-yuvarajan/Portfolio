import { portfolio } from "@/data/portfolio";
import type { SkillIcon } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { lucideIcons } from "@/components/icon-map";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

function SkillGlyph({ icon }: { icon: SkillIcon }) {
  if (icon.type === "lucide") {
    const Icon = lucideIcons[icon.name];
    return <Icon className="size-6 text-brand" aria-hidden />;
  }
  const folder = icon.slug.split("-")[0];
  return (
    <img
      src={`${DEVICON}/${folder}/${icon.slug}.svg`}
      alt=""
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      className={cn("size-6", icon.invertOnDark && "dark:invert")}
    />
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-7">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">{group.title}</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex min-h-14 items-center gap-3 rounded-lg border bg-card px-3 py-2.5 transition-colors hover:bg-accent/60"
                >
                  <SkillGlyph icon={skill.icon} />
                  <span className="min-w-0 text-sm leading-tight">
                    <span className="block font-medium">{skill.name}</span>
                    {skill.note && <span className="block text-xs text-muted-foreground">{skill.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
