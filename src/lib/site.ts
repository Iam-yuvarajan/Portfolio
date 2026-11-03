import { portfolio } from "@/data/portfolio";

/**
 * Public URL of the site. On Vercel this is detected automatically.
 * To use a custom domain, set NEXT_PUBLIC_SITE_URL (e.g. https://yuvarajan.dev).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const siteTitle = `${portfolio.person.name} | AI Engineer, Builder`;

/** Section ids, in page order. Used by the page and the command menu. */
export const sections = [
  { id: "about", label: "About" },
  { id: "github", label: "GitHub Contributions" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
