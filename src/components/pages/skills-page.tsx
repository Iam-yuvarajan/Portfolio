import { portfolio } from "@/data/portfolio";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { SkillGlyph } from "@/components/skill-glyph";

const { skills } = portfolio;

export function SkillsPage() {
  return (
    <PageShell eyebrow="04 / Skills" title={`Skills of ${portfolio.person.name}`} ghost="SKILLS">
      <p className="max-w-2xl text-paper/70">
        The tools I reach for — grouped by where they show up in my work.
      </p>

      <div className="space-y-10">
        {skills.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <section aria-labelledby={`skills-${index}`}>
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h2 id={`skills-${index}`} className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {group.title}
                </h2>
                <span className="eyebrow">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="panel flex min-h-16 items-center gap-3 px-4 py-3 transition-colors hover:bg-paper/10"
                  >
                    <SkillGlyph icon={skill.icon} />
                    <span className="min-w-0 text-sm leading-tight">
                      <span className="block font-medium">{skill.name}</span>
                      {skill.note && <span className="block text-xs text-paper/50">{skill.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
