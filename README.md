# abhimishra91.github.io

Personal portfolio of **Abhishek Kumar Mishra** — built with [Astro](https://astro.build), hosted free on GitHub Pages.

## Editing content

You rarely need to touch code. Content lives in two places:

| What | Where |
| --- | --- |
| Headline, metrics, "Lead / Architect / Deploy" cards, experience, stack, open source, about, links | `src/data/profile.ts` |
| Case studies (one Markdown file each) | `src/content/work/*.md` |
| Résumé PDF | `public/Abhishek_Kumar_Mishra_Resume.pdf` |
| Portrait | `src/assets/portrait.jpg` |
| Link-preview image (LinkedIn / Slack / WhatsApp) | `public/og.png` (1200×630) |

### Adding a case study

Copy any file in `src/content/work/`, rename it (the file name becomes the URL: `/work/<file-name>/`) and edit the front matter:

```yaml
title: My new project
company: Company name
period: "2024 — 2025"
role: What I did
order: 6             # position in the grid
featured: false      # true = the large card
summary: One or two sentences.
lens: [lead, architect, deploy]   # which "mode" this is evidence for
tags: [Python, LangGraph]
outcomes:
  - value: "~40%"
    label: faster something
flow:                # simplified architecture, drawn as a pipeline
  - label: Input
    detail: Where data comes from
  - label: Model
```

Write the body in plain Markdown (`## Context`, `## The challenge`, `## What I did`, `## Outcome`).

## Running locally

Requires Node 22.12+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then builds to dist/
```

## Deployment

Every push to `master` builds and deploys automatically via `.github/workflows/deploy.yml`.
Pushes to other branches and pull requests only build, so broken changes never go live.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Features

- ⌘K / Ctrl K (or `/`) command palette to jump to any section, case study or action
- Lens filters that re-cut the work for EM, Staff+ and forward-deployed roles
- Animated agent-graph hero and per-project architecture pipelines
- Light / dark theme, respects reduced-motion, works without JavaScript
- SEO: sitemap, Open Graph image, JSON-LD `Person` schema, redirects from the old Jekyll URLs
