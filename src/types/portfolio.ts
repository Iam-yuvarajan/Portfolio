/** Lucide icons that the data file is allowed to reference by name. */
export type IconName =
  | "send"
  | "sparkles"
  | "cpu"
  | "circuit-board"
  | "cloud"
  | "shield-check"
  | "trophy"
  | "medal"
  | "award";

export type SkillIcon =
  /** Devicon slug, e.g. "python-original" → devicon CDN. */
  | { type: "devicon"; slug: string; invertOnDark?: boolean }
  | { type: "lucide"; name: IconName };

export interface Skill {
  name: string;
  /** Small qualifier shown under the name, e.g. "Basic" or "Learning". */
  note?: string;
  icon: SkillIcon;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface Project {
  title: string;
  /** Keep it to about two lines. */
  description: string;
  tags: string[];
  period: string;
  /** Static fallback used when the live GitHub API call fails. */
  language?: string;
  /** Leave a link empty ("") or as a [[PLACEHOLDER]] to hide its button. */
  links: {
    github: string;
    live: string;
    caseStudy: string;
  };
}

export interface EducationStat {
  label: string;
  value: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  stats: EducationStat[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  /** Optional certificate link; empty or placeholder hides the button. */
  link: string;
  icon: Extract<IconName, "trophy" | "medal" | "award">;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Portfolio {
  person: {
    name: string;
    initials: string;
    /** How to say your name. Shown under your name with a "listen" button. */
    pronunciation: {
      /** Phonetic spelling shown on the page. */
      phonetic: string;
      /** Name in native script; read aloud if the visitor's device has a Tamil voice. */
      native: string;
      /** Spelling fed to English text-to-speech when no Tamil voice exists. */
      spoken: string;
    };
    role: string;
    roles: string[];
    location: string;
    /** Path inside /public. A missing file falls back to initials. */
    avatar: string;
    seoDescription: string;
  };
  about: string[];
  /** Headline numbers shown on the Experience page. */
  stats: Stat[];
  /** Roles and projects timeline. Add your internships/jobs here. */
  experience: Experience[];
  contact: {
    email: string;
    emailSubject: string;
    /** Human-readable phone, shown on the page. */
    phoneDisplay: string;
    /** E.164 format used for tel: links, e.g. +919876543210. */
    phone: string;
    /** Country code + number, digits only, used for wa.me links. */
    whatsapp: string;
  };
  socials: {
    githubUsername: string;
    github: string;
    linkedin: string;
    instagram: string;
    leetcode: string;
    skillrack: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  certifications: Certification[];
  resume: {
    path: string;
    fileName: string;
  };
}
