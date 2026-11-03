# Yuvarajan J — Portfolio

A minimal, single-page portfolio built with **Next.js (App Router) · TypeScript · Tailwind CSS · shadcn-style UI · Framer Motion · next-themes · cmdk · lucide-react**.

- Light / dark / system themes
- Command palette: press **Ctrl + K** (or **⌘ + K** on Mac)
- Resume viewer and download
- Live GitHub repo stats and contribution graph
- Contact form that works without a backend

---

## 1. Install

You need **Node.js 20.9 or newer** ([download](https://nodejs.org)). Check with `node -v`.

```bash
cd portfolio
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000. The page reloads automatically when you save a file.

## 3. Replace the placeholders

**All of your content is in one file: `src/data/portfolio.ts`.** You never need to edit the components.

- Anything that looks like `[[SOMETHING]]` is a placeholder.
- Placeholder **text** shows on the site with a **dashed outline**, so you can see what is left.
- Placeholder or empty **links** (`""`) are **hidden** automatically (e.g. a "Live Demo" button with no URL).
- To add more achievements or certifications, copy one `{ ... }` block in the array and edit it.

Quick search for what's left:

```bash
grep -n "\[\[" src/data/portfolio.ts
```

## 4. Add your photo and resume

| What | Where | Notes |
| --- | --- | --- |
| Profile photo | `public/images/me.jpg` | Square, 400×400 px or larger. Until it exists, your initials "YJ" are shown. |
| Resume PDF | `public/resume/Yuvarajan_Resume.pdf` | Use exactly this file name. Until it exists, the viewer shows "Resume not uploaded yet". |

## 5. Deploy to Vercel (free)

**Option A: from GitHub (recommended)**

1. Create a new **empty** repository on GitHub (e.g. `portfolio`).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Iam-yuvarajan/portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new, sign in with GitHub, and **Import** the repository.
4. Leave every setting at its default and click **Deploy**. Done.

Every later `git push` redeploys automatically.

**Option B: from the terminal**

```bash
npx vercel        # preview deployment (first run asks you to log in)
npx vercel --prod # production deployment
```

### Custom domain (optional)

Add the domain in Vercel → Project → Settings → Domains, then add an environment variable
`NEXT_PUBLIC_SITE_URL=https://your-domain.com` so SEO links (sitemap, Open Graph) use it.
Without it, the site uses your Vercel production URL automatically.

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (run this before deploying to catch errors) |
| `npm run start` | Serve the production build locally |
| `npm run typecheck` | TypeScript check |

## Project structure

```
src/
  app/            layout, page, globals.css (design tokens), SEO files (sitemap, robots, OG image, icon)
  components/     reusable pieces (Section, Timeline, ProjectCard, CommandMenu, ThemeToggle, ResumeDialog…)
    sections/     one file per page section
    ui/           shadcn-style primitives (Button, Badge, Card, Dialog, Command)
  data/portfolio.ts   ← ALL your content
  lib/            helpers (placeholder detection, clipboard, GitHub stats)
  types/          TypeScript types for the content
public/
  images/me.jpg            ← your photo
  resume/Yuvarajan_Resume.pdf  ← your resume
```

## Contact form upgrade (optional)

The form opens the visitor's email app with everything prefilled (`mailto:`), so it needs no server.
To receive messages directly, see the comment at the top of `src/components/contact-form.tsx`
(Formspree or Resend instructions).
