import { ArrowUpRight, BookOpen, Clock, Star } from "lucide-react";
import type { Project } from "@/types/portfolio";
import type { RepoStats } from "@/lib/use-github-stats";
import { hasValue } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitHubIcon } from "@/components/icons";
import { PlaceholderText } from "@/components/placeholder-text";

const dateFmt = new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric" });

export function ProjectCard({ project, stats }: { project: Project; stats?: RepoStats }) {
  const { github, live, caseStudy } = project.links;
  const language = stats?.language ?? project.language;

  return (
    <Card className="group flex h-full flex-col p-5 transition-colors hover:border-foreground/20 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <PlaceholderText value={project.period} className="text-xs text-muted-foreground" />
      </div>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.tags.map((t) => (
          <li key={t}>
            <Badge>{t}</Badge>
          </li>
        ))}
      </ul>

      {(language || stats) && (
        <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {language && (
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Language</dt>
              <span aria-hidden className="size-2 rounded-full bg-brand" />
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
                <dd>
                  Updated <time dateTime={stats.updatedAt}>{dateFmt.format(new Date(stats.updatedAt))}</time>
                </dd>
              </div>
            </>
          )}
        </dl>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {hasValue(github) && (
          <Button asChild variant="outline" size="sm">
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
              <GitHubIcon />
              GitHub
            </a>
          </Button>
        )}
        {hasValue(live) && (
          <Button asChild size="sm">
            <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
              <ArrowUpRight aria-hidden />
              Live Demo
            </a>
          </Button>
        )}
        {hasValue(caseStudy) && (
          <Button asChild variant="ghost" size="sm">
            <a href={caseStudy} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} case study`}>
              <BookOpen aria-hidden />
              Case Study
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}
