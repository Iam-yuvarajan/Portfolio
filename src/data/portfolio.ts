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
    // Edit if this isn't how you say it.
    pronunciation: {
      phonetic: "yoo-vuh-RAA-jun",
      native: "யுவராஜன்",
      spoken: "Yoo vuh raa jun",
    },
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

  // Headline numbers for the Experience page. Edit these to match your journey.
  stats: [
    { value: "03", label: "projects shipped" },
    { value: "05", label: "skill areas" },
    { value: "2024", label: "started ECE" },
    { value: "∞", label: "things to learn" },
  ],

  // Add your real roles/internships here. These are seeded from the projects
  // and education already in this file — replace them whenever you're ready.
  experience: [
    {
      role: "ECE Student & Self-taught Developer",
      organization: "Sri Sairam College of Engineering",
      period: "2024 – Present",
      location: "Hosur, Tamil Nadu, India",
      bullets: [
        "Studying Electronics and Communication Engineering while building software on the side.",
        "Learning cloud technologies and cybersecurity alongside AI and web development.",
        "Treating every project as a chance to learn something new and ship it.",
      ],
    },
    {
      role: "Developer — Personal & Hackathon Projects",
      organization: "Independent",
      period: "2024 – Present",
      location: "Remote",
      bullets: [
        "Built YUVA AI, a password-gated personal AI chat assistant.",
        "Built Sollunga AI Bot, a Telegram order bot that understands Tamil, English and Tanglish.",
        "Built Trust CV, a zero-trust integrity platform for computer vision pipelines, for Smart India Hackathon.",
      ],
    },
  ],

  contact: {
    email: "yuvarajan278@gmail.com",
    emailSubject: "Hello Yuvarajan, let's connect",
    phoneDisplay: "+91 93420 38458",
    phone: "+919342038458",
    whatsapp: "919342038458",
  },

  socials: {
    githubUsername: "Iam-yuvarajan",
    github: "https://github.com/Iam-yuvarajan",
    linkedin: "https://www.linkedin.com/in/yuvarajan-j26/",
    instagram: "https://www.instagram.com/_yuva._.rajan__/",
    // Optional: paste your profile URLs, or leave as-is to hide them.
    leetcode: "https://leetcode.com/u/yuvarajan_software",
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
      period: "Aug 2026",
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
      period: "Oct 2026",
      language: "Python",
      links: {
        github: "https://github.com/Iam-yuvarajan/solluga-ai",
        live: "",
        caseStudy: "",
      },
    },
    {
      title: "Trust CV",
      description:
        "A zero-trust integrity platform for computer vision pipelines, built for Smart India Hackathon. It adds cryptographic lineage and tamper evidence from dataset to model inference.",
      tags: ["Python", "Computer Vision", "SIH"],
      period: "Sep 2026",
      language: "Python",
      links: {
        github: "https://github.com/Iam-yuvarajan/Trust-CV-SIH",
        live: "https://trust-cv-sih.vercel.app",
        caseStudy: "",
      },
    },
    {
      title: "Four Worlds Portfolio",
      description:
        "A themed personal portfolio built with Next.js, TypeScript and GSAP, with an interactive Q&A panel, API routes and a GitHub contributions heatmap.",
      tags: ["Next.js", "TypeScript", "GSAP"],
      period: "Nov 2026",
      language: "TypeScript",
      links: {
        github: "https://github.com/Iam-yuvarajan/yuvarajan-portfolio",
        live: "https://jyuvarajan.vercel.app",
        caseStudy: "",
      },
    },
    {
      title: "Password Generator",
      description:
        "A Python command-line tool that creates strong random passwords with a chosen length, mixing uppercase, lowercase, digits and special characters.",
      tags: ["Python", "CLI", "Security"],
      period: "Aug 2026",
      language: "Python",
      links: {
        github: "https://github.com/Iam-yuvarajan/password-generator",
        live: "",
        caseStudy: "",
      },
    },
    {
      title: "Bunk Calc",
      description:
        "A small attendance calculator that tells you how many classes you can safely skip, or how many you need to attend to hit your target percentage.",
      tags: ["HTML", "CSS", "JavaScript"],
      period: "Oct 2026",
      language: "HTML",
      links: {
        github: "https://github.com/Iam-yuvarajan/Bunk-Calc",
        live: "",
        caseStudy: "",
      },
    },
  ],

  education: [
    {
      degree: "B.E./B.Tech in Electronics and Communication Engineering",
      institution: "Sri Sairam College of Engineering",
      period: "2024 – Present",
      stats: [
        { label: "Current semester", value: "5th" },
        { label: "CGPA (through 5th sem)", value: "6.68 / 10" },
      ],
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "SDA Hr Sec School",
      period: "2023 – 2024",
      stats: [{ label: "Percentage", value: "75%" }],
    },
    {
      degree: "Secondary (10th)",
      institution: "SDA Hr Sec School",
      period: "2020 – 2021",
      stats: [{ label: "Percentage", value: "77%" }],
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
