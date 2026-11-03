"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { repoSlug } from "@/lib/utils";
import { useGitHubStats } from "@/lib/use-github-stats";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const { projects, socials } = portfolio;
const slugs = projects.map((p) => repoSlug(p.links.github)).filter((s): s is string => s !== null);

export function Projects() {
  const stats = useGitHubStats(slugs);

  return (
    <Section id="projects" title="Projects" description="Things I've built recently.">
      <ul className="grid gap-4">
        {projects.map((project, i) => {
          const slug = repoSlug(project.links.github);
          return (
            <li key={project.title}>
              <Reveal delay={i * 0.05} className="h-full">
                <ProjectCard project={project} stats={slug ? stats[slug] : undefined} />
              </Reveal>
            </li>
          );
        })}
      </ul>
      <Reveal className="mt-6">
        <a
          href={`${socials.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          View all repositories on GitHub
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </Reveal>
    </Section>
  );
}
