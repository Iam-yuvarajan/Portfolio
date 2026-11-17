import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { PageShell } from "@/components/page-shell";
import { PlaceholderText } from "@/components/placeholder-text";
import { Reveal } from "@/components/reveal";
import { lucideIcons } from "@/components/icon-map";

const { person, about, education, achievements, certifications } = portfolio;
const realAchievements = achievements.filter((a) => hasValue(a.title));
const realCertifications = certifications.filter((c) => hasValue(c.title));

export function AboutPage() {
  return (
    <PageShell eyebrow="01 / About" title={`About ${person.name}`} ghost="ABOUT" cutout>
      <Reveal>
        <div className="space-y-5 font-display text-lg leading-relaxed text-paper/85 sm:text-xl">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 text-sm text-paper/60">
          More about my work: <Link className="underline underline-offset-4 hover:text-paper" href="/experience">experience</Link>,{" "}
          <Link className="underline underline-offset-4 hover:text-paper" href="/work">projects</Link> and{" "}
          <Link className="underline underline-offset-4 hover:text-paper" href="/skills">skills</Link>.
        </p>
      </Reveal>

      <Reveal>
        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="eyebrow mb-5">Education</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <article key={item.degree} className="panel p-5">
                <PlaceholderText as="h3" value={item.degree} className="text-base leading-snug font-medium" />
                <p className="mt-2 text-sm text-paper/60">
                  <PlaceholderText value={item.institution} /> · {item.period}
                </p>
                <dl className="mt-5 space-y-2">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between gap-4 text-sm">
                      <dt className="text-paper/55">{stat.label}</dt>
                      <dd className="text-right font-mono">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {(realAchievements.length > 0 || realCertifications.length > 0) && (
        <Reveal>
          <section aria-labelledby="recognition-heading">
            <h2 id="recognition-heading" className="eyebrow mb-5">Recognition &amp; certifications</h2>
            <div className="space-y-3">
              {realAchievements.map((item) => {
                const Icon = lucideIcons[item.icon];
                return (
                  <article key={item.title} className="panel flex flex-wrap items-center gap-4 p-5">
                    <Icon className="size-6 shrink-0" aria-hidden />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-paper/60">{item.issuer} · {item.date}</p>
                      <p className="mt-1 text-sm text-paper/75">{item.description}</p>
                    </div>
                    {hasValue(item.link) && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} certificate`}>
                        <ArrowUpRight className="size-5" aria-hidden />
                      </a>
                    )}
                  </article>
                );
              })}
              {realCertifications.map((item) => (
                <article key={item.title} className="panel flex flex-wrap items-center gap-4 p-5">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-paper/60">{item.issuer} · {item.date}</p>
                  </div>
                  {hasValue(item.link) && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} certificate`}>
                      <ArrowUpRight className="size-5" aria-hidden />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      )}
    </PageShell>
  );
}
