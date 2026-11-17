"use client";

import { useRef } from "react";
import { ArrowUpRight, BookOpen, Clock, Star } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { repoSlug } from "@/lib/utils";
import { useGitHubStats, type RepoStats } from "@/lib/use-github-stats";
import { GitHubIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";

const { projects } = portfolio;
const slugs = projects.map((p) => repoSlug(p.links.github)).filter((s): s is string => Boolean(s));

const dateFmt = new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric" });

function ProjectCard({
  project,
  index,
  stats,
}: {
  project: (typeof projects)[number];
  index: number;
  stats?: RepoStats;
}) {
  const { github, live, caseStudy } = project.links;
  const language = stats?.language ?? project.language;

  return (
    <li className="flip-card w-[270px] shrink-0 snap-start sm:w-[320px]">
      <div className="flip-card-inner" tabIndex={0} aria-label={`${project.title} — details`}>
        <article className="flip-face panel flex flex-col justify-between p-6 text-left">
          <div>
            <p className="eyebrow">{String(index + 1).padStart(2, "0")} / Project</p>
            <h3 className="mt-8 font-display text-3xl leading-tight font-semibold tracking-tight">{project.title}</h3>
          </div>
          <p className="text-sm text-paper/55">{project.tags.join(" · ")}</p>
        </article>

        <article className="flip-face flip-back panel flex flex-col p-6 text-left">
          <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/75">{project.description}</p>
          <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-paper/55">
            {language && (
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Language</dt>
                <span aria-hidden className="size-2 rounded-full bg-paper" />
                <dd>{language}</dd>
              </div>
            )}
            {stats && (
              <>
                <div className="flex items-center gap-1">
                  <dt className="sr-only">Stars</dt>
                  <Star className="size-3.5" aria-hidden />
                  <dd>{stats.stars}</dd>
                </div>
                <div className="flex items-center gap-1">
                  <dt className="sr-only">Last updated</dt>
                  <Clock className="size-3.5" aria-hidden />
                  <dd>{dateFmt.format(new Date(stats.updatedAt))}</dd>
                </div>
              </>
            )}
          </dl>
          <div className="mt-5 flex flex-wrap gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="rounded-full border border-line p-2 transition-colors hover:bg-paper hover:text-ink"
              >
                <GitHubIcon className="size-4" />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="rounded-full border border-line p-2 transition-colors hover:bg-paper hover:text-ink"
              >
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            )}
            {caseStudy && (
              <a
                href={caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} case study`}
                className="rounded-full border border-line p-2 transition-colors hover:bg-paper hover:text-ink"
              >
                <BookOpen className="size-4" aria-hidden />
              </a>
            )}
          </div>
        </article>
      </div>
    </li>
  );
}

export function WorkPage() {
  const stats = useGitHubStats(slugs);
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ down: false, startX: 0, scroll: 0 });

  return (
    <PageShell eyebrow="03 / Work" title={`Projects by ${portfolio.person.name}`} ghost="PROJECTS">
      <Reveal>
        <p className="max-w-2xl text-paper/70">
          A few things I&apos;ve built — web apps, bots and computer-vision experiments. Drag the row sideways, hover a
          card to flip it, and tap an icon to see the code or the live version.
        </p>
      </Reveal>

      <section aria-label="Projects" className="relative -mx-6 sm:-mx-10 lg:-mx-24">
        <ul
          ref={track}
          className="flex snap-x gap-6 overflow-x-auto px-6 py-10 sm:px-10 lg:px-24"
          onPointerDown={(e) => {
            drag.current = { down: true, startX: e.clientX, scroll: e.currentTarget.scrollLeft };
          }}
          onPointerMove={(e) => {
            if (!drag.current.down || !track.current) return;
            track.current.scrollLeft = drag.current.scroll - (e.clientX - drag.current.startX);
          }}
          onPointerUp={() => {
            drag.current.down = false;
          }}
          onPointerLeave={() => {
            drag.current.down = false;
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              stats={stats[repoSlug(project.links.github) ?? ""]}
            />
          ))}
        </ul>
      </section>

      <Reveal>
        <p className="font-script text-2xl text-paper/70">more things coming soon..</p>
      </Reveal>
    </PageShell>
  );
}
