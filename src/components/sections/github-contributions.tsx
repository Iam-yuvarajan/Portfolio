"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useImageFallback } from "@/lib/use-image-fallback";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";

const { githubUsername, github } = portfolio.socials;
// Colour is the light-theme accent; in dark mode the image is inverted + hue-rotated.
const chartUrl = `https://ghchart.rshah.org/3b5bdb/${githubUsername}`;

export function GitHubContributions() {
  const { ref, failed, onError } = useImageFallback();

  return (
    <Section
      id="github"
      title="GitHub Contributions"
      description={`Activity over the last year from @${githubUsername}.`}
      action={
        <Button asChild variant="outline" size="sm">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            View GitHub Profile
            <ArrowUpRight aria-hidden />
          </a>
        </Button>
      }
    >
      <Reveal>
        <Card className="p-4">
          {failed ? (
            <div className="grid aspect-[663/104] min-h-28 place-items-center text-center text-sm text-muted-foreground">
              <p>
                The contribution graph couldn&apos;t load right now.{" "}
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-brand underline-offset-4 hover:underline">
                  See it on GitHub
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="-mx-1 overflow-x-auto px-1 pb-1">
              {/* Plain <img>: remote SVG, sized via width/height to avoid layout shift. */}
              <img
                ref={ref}
                src={chartUrl}
                alt={`GitHub contribution graph for ${githubUsername}`}
                width={663}
                height={104}
                loading="lazy"
                decoding="async"
                onError={onError}
                className="h-auto w-full min-w-[600px] dark:hue-rotate-180 dark:invert dark:brightness-90"
              />
            </div>
          )}
        </Card>
      </Reveal>
    </Section>
  );
}
