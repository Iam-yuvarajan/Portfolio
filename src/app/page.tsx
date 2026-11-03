import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import { hasValue } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { GitHubContributions } from "@/components/sections/github-contributions";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

const { person, contact, socials } = portfolio;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: siteUrl,
  email: `mailto:${contact.email}`,
  jobTitle: "Electronics and Communication Engineering Student",
  address: { "@type": "PostalAddress", addressLocality: "Hosur", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  sameAs: [socials.github, socials.linkedin, socials.instagram, socials.leetcode, socials.skillrack].filter(hasValue),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-4 sm:px-6">
        <Hero />
        <About />
        <GitHubContributions />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
