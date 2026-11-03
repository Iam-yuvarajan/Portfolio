import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal className="space-y-4 text-[15px] leading-7 text-muted-foreground sm:text-base">
        {portfolio.about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </Reveal>
    </Section>
  );
}
