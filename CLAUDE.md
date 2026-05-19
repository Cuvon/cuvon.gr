# Cuvon Website — Claude Handover

This file is the primary briefing for any AI assistant continuing work on this project.
Read it fully before making any changes.

---

## What this is

**Cuvon** is a focused healthcare product distributor for the Greek market.
This is their public website — informational, bilingual (EN + GR), fully static.
No CMS. No contact form. No backend. Just fast, clean pages.

Live at: **https://www.cuvon.gr**

---

## Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Framework  | Next.js 14 App Router (TypeScript)      |
| Styling    | Tailwind CSS — brand tokens locked      |
| Fonts      | Inter via `next/font/google`            |
| Hosting    | Vercel (project: `cuvon-web`)           |
| Repo       | https://github.com/Cuvon/cuvon.gr       |
| Domain     | www.cuvon.gr (DNS via Papaki)           |

**Zero environment variables required.** The build runs with no `.env` file.

---

## Running locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Architecture

### Fully static
All pages are statically generated at build time. No ISR, no server actions,
no external API calls. Vercel serves them from its CDN.

### Bilingual (EN / GR)
- English routes: `/`, `/about`, `/products`, `/partners`, `/operations`, `/contact`
- Greek routes:  `/gr`, `/gr/about`, `/gr/products`, `/gr/partners`, `/gr/operations`, `/gr/contact`
- Language detection happens in `Nav.tsx` and `Footer.tsx` via `usePathname()`
- `html[lang]` defaults to `"en"` in the root layout; Greek routes flip it to `"el"` via
  `components/LangOverride.tsx` (a tiny `useEffect` client component — see note below)

### Middleware
`middleware.ts` is intentionally a **no-op** with a dummy matcher (`/_lang`).
Do not add logic to it. Reason: Next.js 14 + `next/font/google` causes a
`ReferenceError: __dirname is not defined` crash in Vercel's edge runtime.
The middleware function exists only so Next.js doesn't warn about a missing export.

### Sanity directory
A `sanity/` directory exists at the repo root. It is **dead code** — Sanity was
removed for the v1 static launch. The directory is excluded in `tsconfig.json`
and `tailwind.config.ts`. Do not import from it. Do not delete it via the CLI
(mounted filesystem restrictions); stub files with `export {}` if needed.

---

## File structure

```
/
├── app/
│   ├── layout.tsx              # Root layout: Nav + Footer, lang="en"
│   ├── sitemap.ts              # Auto-generates /sitemap.xml
│   ├── page.tsx                # Home (EN)
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── partners/page.tsx
│   ├── operations/page.tsx
│   ├── contact/page.tsx
│   ├── news/page.tsx           # Redirects → / (news removed for v1)
│   ├── news/[slug]/page.tsx    # Redirects → / (news removed for v1)
│   └── gr/                     # Greek mirror of all EN routes
│       ├── layout.tsx          # Sets lang="el" via LangOverride
│       ├── page.tsx
│       └── [about|products|partners|operations|contact]/page.tsx
├── components/
│   ├── Nav.tsx                 # 'use client' — mobile toggle + lang detection
│   ├── Footer.tsx              # 'use client' — lang detection
│   ├── LangOverride.tsx        # 'use client' — sets document.documentElement.lang
│   ├── PageHeader.tsx          # Dark hero used on every inner page
│   ├── SectionLabel.tsx        # Small teal uppercase label above headings
│   ├── DiffCard.tsx            # Numbered card for differentiators/pillars
│   ├── OpsBlock.tsx            # Left-teal-border block for operations sections
│   ├── CtaSection.tsx          # Dark blue CTA strip at the bottom of pages
│   └── ContactForm.tsx         # STUB — export {} only, not used
├── lib/
│   ├── sanity.ts               # STUB — export {} only
│   ├── sanity.queries.ts       # STUB — export {} only
│   └── actions.ts              # STUB — export {} only
├── public/
│   ├── logo.svg                # Brand blue (#294C7D) — nav logo
│   ├── logo-white.svg          # White (#FFFFFF) — footer logo
│   ├── robots.txt
│   └── images/                 # Static images (warehouse, facility)
├── sanity/                     # DEAD CODE — excluded from TS/Tailwind
├── middleware.ts               # No-op — dummy matcher, do not add logic
├── next.config.js              # Minimal: const nextConfig = {}
├── tailwind.config.ts          # Brand tokens — do not modify colours
└── tsconfig.json               # Excludes "sanity" directory
```

---

## Brand system

Defined in `tailwind.config.ts`. **Do not add or change colours.**

### Colours
| Token         | Hex       | Role                              |
|---------------|-----------|-----------------------------------|
| `deep-blue`   | `#1D3557` | Primary — trust, structure        |
| `slate-blue`  | `#46627F` | Secondary — hierarchy, depth      |
| `soft-teal`   | `#6FA8A3` | Accent — use sparingly            |
| `warm-sand`   | `#D9D2C4` | Warmth, humanity                  |
| `light-grey`  | `#F2F4F6` | Background — clinical base        |
| `body`        | `#2E3A4A` | Body text                         |
| `caption`     | `#6B7A8D` | Secondary text                    |

Usage ratio: 70% white/light-grey · 20% deep-blue · 10% teal or sand.

### Logo
SVG paths extracted from the original artwork (`cuvon.svg`).
- Nav: `/public/logo.svg` — fill `#294C7D` (10% lighter than deep-blue)
- Footer: `/public/logo-white.svg` — fill `#FFFFFF`
- Dimensions: `width={105} height={22}` in Next.js `<Image>`

### Typography
Sole typeface: **Inter** (self-hosted via `next/font/google`).
Scale defined in `tailwind.config.ts`: `display`, `h1`–`h3`, `lead`, `body`, `caption`, `label`.

### Copy rules
- Words banned: *innovative*, *committed*, *passionate*
- Tone: direct, specific, no filler
- All text should be legible: white text on dark backgrounds must be at minimum `/85` opacity
  (Tailwind e.g. `text-white/85`). Lower values have been confirmed illegible in production.

---

## Contact

No contact form. Direct email links only:

| Audience                        | Email                    |
|---------------------------------|--------------------------|
| Manufacturers & partners        | partners@cuvon.gr        |
| Pharmacies & existing customers | customers@cuvon.gr       |
| General enquiries               | info@cuvon.gr            |

Address: Vasilissis Olgas 24, Marousi 151 22, Greece.

---

## Deployment

### Workflow
Push to `main` → Vercel auto-builds and deploys to production.

```bash
git add -A
git commit -m "your message"
git push origin main
```

### Vercel project settings (critical)
- **Project name:** `cuvon-web`
- **Team:** nikos-skondreas-projects
- **Framework Preset:** Next.js ← must be set or all routes return 404
- **Root Directory:** blank (`./`) ← repo root IS the Next.js project
- **Environment variables:** none required
- **Build command:** `next build` (default)

### DNS
Domain managed at Papaki. Points to Vercel via A/CNAME records.
Both `cuvon.gr` and `www.cuvon.gr` should resolve to the site.

---

## SEO

- `app/sitemap.ts` generates `/sitemap.xml` with all EN + GR routes and `hreflang` alternates
- `public/robots.txt` allows all crawlers, references the sitemap
- Each page exports `generateMetadata()` or a static `metadata` object
- `metadataBase` is set to `https://cuvon.gr` in the root layout
- OG image: `/public/og-default.png` (create this — not yet in place)

---

## Known issues / decisions log

| Issue | Decision |
|-------|----------|
| Sanity removed for v1 static launch | Stubs in lib/, news routes redirect to /, sanity/ excluded from TS |
| Next.js 14 middleware crashes with `__dirname` on Vercel edge | Middleware disabled (dummy matcher). Do not re-enable without testing on edge runtime |
| White text opacity — low values (≤72) are illegible on `deep-blue` | Use `/85` minimum for lead/body text, `/75` for footer links, `/60` for fine print |
| next/font/google + edge runtime incompatibility | Do not import next/font inside any file that could be bundled into the edge runtime |

---

## What comes next (owner's intent)

- **News/blog:** Ready to re-enable when CMS is chosen. Routes exist, just redirecting.
- **Contact form:** lib/actions.ts is stubbed. Re-add Resend integration when needed.
- **Products:** Currently static copy. Could be data-driven once portfolio is confirmed.
- **OG image:** `/public/og-default.png` should be created (1200×630).
- **Analytics:** Not yet installed.
- **Greek content:** All GR pages exist and are translated. Review copy with a native speaker.
