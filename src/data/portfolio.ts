import type { Portfolio } from "@/types/portfolio";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL PERSONAL CONTENT LIVES IN THIS FILE.
 *  Edit the values below; you never need to touch the components.
 *
 *  Placeholders look like [[SOMETHING]].
 *   • Text that still holds a placeholder shows on the site with a dashed
 *     outline, so you can see what is left to fill in.
 *   • Links that are empty ("") or still hold a placeholder are hidden.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const portfolio: Portfolio = {
  person: {
    name: "Yuvarajan J",
    initials: "YJ",
    role: "ECE Student · Developer · AI Enthusiast",
    roles: ["Vibe Coder", "App Developer", "Website Builder", "AI Learner"],
    location: "Hosur, Tamil Nadu, India",
    avatar: "/images/me.jpg",
    seoDescription:
      "Yuvarajan J is an Electronics and Communication Engineering student and developer building Python, web and AI projects, with a growing interest in cloud and cybersecurity.",
  },

  about: [
    "I'm an Electronics and Communication Engineering student who enjoys building software as much as understanding the hardware underneath it. Most of what I know comes from hands-on projects: writing Python, building websites, creating Telegram bots and using AI tools to turn rough ideas into things people can actually use.",
    "I'm working toward a career in the IT industry. Alongside AI, I'm learning cloud technologies and cybersecurity, and I treat every project as a chance to learn something new. My goal is to keep turning ideas into practical solutions and to grow into a versatile IT professional.",
  ],

  contact: {
    email: "yuva0051@gmail.com",
    emailSubject: "Hello Yuvarajan, let's connect",
    phoneDisplay: "+91 93420 38458",
    phone: "+919342038458",
    whatsapp: "919342038458",
  },

  socials: {
    githubUsername: "Iam-yuvarajan",
    github: "https://github.com/Iam-yuvarajan",
    linkedin: "https://www.linkedin.com/in/yuvarajan-j-52a46a273/",
    instagram: "https://www.instagram.com/_yuva._.rajan__/",
    // Optional: paste your profile URLs, or leave as-is to hide them.
    leetcode: "[[OPTIONAL_PLACEHOLDER]]",
    skillrack: "[[OPTIONAL_PLACEHOLDER]]",
  },

  // Devicon slugs: https://devicon.dev  (use the file name, e.g. "python-original")
  skills: [
    {
      title: "Languages & Web",
      items: [
        { name: "Python", icon: { type: "devicon", slug: "python-original" } },
        { name: "HTML", icon: { type: "devicon", slug: "html5-original" } },
        { name: "CSS", icon: { type: "devicon", slug: "css3-original" } },
        { name: "JavaScript", note: "Basic", icon: { type: "devicon", slug: "javascript-original" } },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: { type: "devicon", slug: "git-original" } },
        { name: "GitHub", icon: { type: "devicon", slug: "github-original", invertOnDark: true } },
        { name: "Telegram Bot API", icon: { type: "lucide", name: "send" } },
      ],
    },
    {
      title: "AI & Vision",
      items: [
        { name: "AI / LLM tools & prompting", icon: { type: "lucide", name: "sparkles" } },
        { name: "Computer Vision", note: "Basic", icon: { type: "devicon", slug: "opencv-original" } },
      ],
    },
    {
      title: "Hardware",
      items: [
        { name: "Electronics fundamentals", icon: { type: "lucide", name: "cpu" } },
        { name: "Embedded fundamentals", icon: { type: "lucide", name: "circuit-board" } },
      ],
    },
    {
      title: "Currently learning",
      items: [
        { name: "Cloud", note: "Learning", icon: { type: "lucide", name: "cloud" } },
        { name: "Cybersecurity", note: "Learning", icon: { type: "lucide", name: "shield-check" } },
      ],
    },
  ],

  // Featured projects. Live stats (stars, language, last update) are fetched
  // from the GitHub API using the `github` link; `language` is the fallback.
  projects: [
    {
      title: "YUVA AI",
      description:
        "A personal AI chat assistant where conversations are unlocked with a password, so only people I share it with can use it.",
      tags: ["JavaScript", "AI", "Web App"],
      period: "[[PERIOD]]",
      language: "JavaScript",
      links: {
        github: "https://github.com/Iam-yuvarajan/personal-ai",
        live: "https://yuva-ai.onrender.com/",
        caseStudy: "",
      },
    },
    {
      title: "Sollunga AI Bot",
      description:
        "An AI-powered Telegram bot that takes orders for local Indian shops. Customers can order in Tamil, English or Tanglish.",
      tags: ["Python", "Telegram Bot", "AI"],
      period: "[[PERIOD]]",
      language: "Python",
      links: {
        github: "https://github.com/Iam-yuvarajan/solluga-ai",
        live: "[[LIVE_URL_PLACEHOLDER]]",
        caseStudy: "",
      },
    },
    {
      title: "Trust CV",
      description:
        "A zero-trust integrity platform for computer vision pipelines, built for Smart India Hackathon. It adds cryptographic lineage and tamper evidence from dataset to model inference.",
      tags: ["Python", "Computer Vision", "SIH"],
      period: "[[PERIOD]]",
      language: "Python",
      links: {
        github: "https://github.com/Iam-yuvarajan/Trust-CV-SIH",
        live: "https://trust-cv-sih.vercel.app",
        caseStudy: "",
      },
    },
  ],

  education: [
    {
      degree: "B.E./B.Tech in Electronics and Communication Engineering",
      institution: "[[COLLEGE_NAME]]",
      period: "[[START_YEAR]] – [[END_YEAR]]",
      stats: [{ label: "CGPA", value: "[[CGPA]] / 10" }],
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "[[12TH_SCHOOL_NAME]]",
      period: "[[12TH_YEAR]]",
      stats: [{ label: "Percentage", value: "[[12TH_PERCENTAGE]]%" }],
    },
    {
      degree: "Secondary (10th)",
      institution: "[[10TH_SCHOOL_NAME]]",
      period: "[[10TH_YEAR]]",
      stats: [{ label: "Percentage", value: "[[10TH_PERCENTAGE]]%" }],
    },
  ],

  /**
   * HOW TO ADD MORE ACHIEVEMENTS
   * Copy one { ... } block below, paste it after the last one (keep the comma),
   * and edit the values. `icon` can be "trophy", "medal" or "award".
   * Delete every block (leave `achievements: []`) to show the empty state.
   */
  achievements: [
    {
      title: "[[ACHIEVEMENT_1_TITLE]]",
      issuer: "[[ACHIEVEMENT_1_ISSUER_OR_EVENT]]",
      date: "[[ACHIEVEMENT_1_DATE]]",
      description: "[[ACHIEVEMENT_1_DESCRIPTION]]",
      link: "[[ACHIEVEMENT_1_CERTIFICATE_URL]]",
      icon: "trophy",
    },
    {
      title: "[[ACHIEVEMENT_2_TITLE]]",
      issuer: "[[ACHIEVEMENT_2_ISSUER_OR_EVENT]]",
      date: "[[ACHIEVEMENT_2_DATE]]",
      description: "[[ACHIEVEMENT_2_DESCRIPTION]]",
      link: "[[ACHIEVEMENT_2_CERTIFICATE_URL]]",
      icon: "medal",
    },
    {
      title: "[[ACHIEVEMENT_3_TITLE]]",
      issuer: "[[ACHIEVEMENT_3_ISSUER_OR_EVENT]]",
      date: "[[ACHIEVEMENT_3_DATE]]",
      description: "[[ACHIEVEMENT_3_DESCRIPTION]]",
      link: "[[ACHIEVEMENT_3_CERTIFICATE_URL]]",
      icon: "award",
    },
    {
      title: "[[ACHIEVEMENT_4_TITLE]]",
      issuer: "[[ACHIEVEMENT_4_ISSUER_OR_EVENT]]",
      date: "[[ACHIEVEMENT_4_DATE]]",
      description: "[[ACHIEVEMENT_4_DESCRIPTION]]",
      link: "[[ACHIEVEMENT_4_CERTIFICATE_URL]]",
      icon: "trophy",
    },
  ],

  // Same idea as achievements: copy a block to add one, empty array hides the list.
  certifications: [
    {
      title: "[[CERTIFICATION_1_TITLE]]",
      issuer: "[[CERTIFICATION_1_ISSUER]]",
      date: "[[CERTIFICATION_1_DATE]]",
      link: "[[CERTIFICATION_1_URL]]",
    },
    {
      title: "[[CERTIFICATION_2_TITLE]]",
      issuer: "[[CERTIFICATION_2_ISSUER]]",
      date: "[[CERTIFICATION_2_DATE]]",
      link: "[[CERTIFICATION_2_URL]]",
    },
    {
      title: "[[CERTIFICATION_3_TITLE]]",
      issuer: "[[CERTIFICATION_3_ISSUER]]",
      date: "[[CERTIFICATION_3_DATE]]",
      link: "[[CERTIFICATION_3_URL]]",
    },
  ],

  // Put your PDF at public/resume/Yuvarajan_Resume.pdf
  resume: {
    path: "/resume/Yuvarajan_Resume.pdf",
    fileName: "Yuvarajan_Resume.pdf",
  },
};
