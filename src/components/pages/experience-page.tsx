import { portfolio } from "@/data/portfolio";
import { PageShell } from "@/components/page-shell";
import { PlaceholderText } from "@/components/placeholder-text";
import { Reveal } from "@/components/reveal";

const { person, stats, experience } = portfolio;

export function ExperiencePage() {
  return (
    <PageShell eyebrow="02 / Experience" title={`Experience — ${person.name}`} ghost="WORK">
      <Reveal>
        <article className="panel p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{person.name}</h2>
          <p className="mt-3 max-w-2xl text-paper/75">
            {person.role}. I like building things end to end — the interface people touch and the parts behind it.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {person.roles.map((role) => (
              <li key={role} className="rounded-full border border-line px-3 py-1.5 text-xs text-paper/75">
                {role}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      <Reveal>
        <section aria-labelledby="numbers-heading">
          <h2 id="numbers-heading" className="eyebrow mb-5">In numbers</h2>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink p-5">
                <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
                <dt className="eyebrow mt-2">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      <section aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="eyebrow mb-6">Timeline</h2>
        <ol className="space-y-5">
          {experience.map((item, index) => (
            <Reveal key={`${item.role}-${item.period}`} delay={index * 0.05}>
              <li className="panel relative p-6 sm:p-8">
                <span aria-hidden className="absolute top-8 -left-[5px] size-2.5 rounded-full bg-paper max-sm:hidden" />
                <p className="eyebrow">{item.period}{item.location ? ` · ${item.location}` : ""}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{item.role}</h3>
                <p className="mt-1 text-paper/60">
                  <PlaceholderText value={item.organization} />
                </p>
                <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-paper/80">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1 shrink-0 bg-paper/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
