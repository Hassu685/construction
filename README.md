# BuildNova Estimating & Construction

A premium, animated marketing website for a construction estimating and project management company, built with Next.js 15 (App Router), JavaScript, Tailwind CSS, Framer Motion and Lucide icons.

## Design direction

- **Signature motif:** a "surveyor's blueprint" language — dimension lines with tick marks, corner brackets that appear on hover (like a viewfinder locking onto a measurement), and a faint navy blueprint grid — tying the visual identity to estimating and precision rather than generic construction stock imagery.
- **Type system:** Space Grotesk (display, geometric and confident) paired with Inter (body) and JetBrains Mono for all numeric data — stats, prices, dates — so figures read like measured quantities.
- **Palette:** Deep Navy `#0F172A`, Slate `#1E293B`, Construction Gold `#F59E0B`, Surface `#F8FAFC`, Success `#10B981`, exactly as specified in the brief.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches Space Grotesk, Inter and JetBrains Mono at build time, so an internet connection is required the first time you run `npm run build` or `npm run dev`.

## Project structure

```
app/                  Route segments (App Router), one folder per page
  about/
  services/
  estimating-services/
  projects/[slug]/
  testimonials/
  faq/
  contact/
components/
  layout/             Navbar, Footer
  sections/           Page-level sections (Hero, Process, FAQ, etc.)
  ui/                 Reusable primitives (Button, Reveal, ProjectCard, etc.)
lib/                  Site content/config, icon map, project images
```

## Content

All copy, services, projects, testimonials and FAQ content lives in `lib/data.js` — edit that file to update site content without touching components. Placeholder images are served from Unsplash; swap the URLs in `lib/projectImages.js` and section components with your own licensed photography before launch.

## Notes for production launch

- Replace the Google Maps embed URL and office address in `lib/data.js` with your real coordinates.
- Wire the contact form and newsletter form (currently client-side only) to your email/CRM provider of choice.
- Add real client logos to `components/sections/TrustedBy.jsx` in place of the text placeholders.
