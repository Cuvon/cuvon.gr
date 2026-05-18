# Cuvon Website

Built with care. Reliably delivered.

## Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | Next.js 14 (App Router)             |
| Styling  | Tailwind CSS (brand tokens locked)  |
| CMS      | Sanity v3                           |
| Hosting  | Vercel                              |
| Forms    | Server Actions + Resend             |
| Images   | next/image (Sanity CDN)             |
| SEO      | Next.js Metadata API                |

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local.example` to `.env.local` and fill in values:

```bash
cp .env.local.example .env.local
```

Required variables:

| Variable                       | Where to get it                        |
|--------------------------------|----------------------------------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID`| sanity.io → project settings           |
| `NEXT_PUBLIC_SANITY_DATASET`   | Usually `production`                   |
| `SANITY_API_TOKEN`             | sanity.io → API → Tokens → add Viewer  |
| `RESEND_API_KEY`               | resend.com → API Keys                  |
| `CONTACT_EMAIL_TO`             | Email to receive contact form submissions |
| `NEXT_PUBLIC_SITE_URL`         | `https://cuvon.gr` (or preview URL)    |

### 3. Set up Sanity

```bash
# Initialise the Sanity project (first time only)
npx sanity init --project your_project_id --dataset production

# Run the studio locally
npm run sanity
```

Studio runs at `http://localhost:3333`.

### 4. Run dev server

```bash
npm run dev
```

App runs at `http://localhost:3000`.

---

## Project structure

```
cuvon-web/
├── app/
│   ├── layout.tsx          # Root layout — Nav + Footer
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── partners/page.tsx
│   ├── operations/page.tsx
│   ├── news/
│   │   ├── page.tsx        # News listing (fetches from Sanity)
│   │   └── [slug]/page.tsx # Individual post
│   └── contact/page.tsx
├── components/
│   ├── Nav.tsx             # 'use client' — mobile toggle state
│   ├── Footer.tsx
│   ├── PageHeader.tsx
│   ├── SectionLabel.tsx
│   ├── DiffCard.tsx
│   ├── OpsBlock.tsx
│   ├── CtaSection.tsx
│   └── ContactForm.tsx     # 'use client' — form state
├── lib/
│   ├── sanity.ts           # Sanity client (next-sanity)
│   ├── sanity.queries.ts   # All GROQ queries (centralised)
│   └── actions.ts          # Contact form Server Action (Resend)
├── sanity/
│   ├── sanity.config.ts    # Sanity Studio config
│   └── schemas/
│       ├── post.ts         # News post schema
│       ├── product.ts      # Product schema
│       ├── siteSettings.ts # Singleton settings
│       └── index.ts        # Schema registry
├── tailwind.config.ts      # Brand tokens — do not modify colours
└── .env.local.example
```

## CMS content types

| Type           | Purpose                                              |
|----------------|------------------------------------------------------|
| `post`         | News posts — product updates, partnerships, notices  |
| `product`      | Portfolio products grouped by area                   |
| `siteSettings` | Singleton — contact email, social links, default SEO |

## Deploy (Vercel)

1. Push to GitHub
2. Import in Vercel
3. Set all env vars in Vercel project settings
4. Deploy — Vercel auto-builds on push to `main`

ISR is configured: news posts revalidate every 60 seconds, products every 5 minutes. No full redeploy required for CMS content changes.

## Brand constraints

All brand decisions are locked in `tailwind.config.ts`. Do not add colours, fonts, or spacing values outside what is defined there. Refer to `Cuvon_Brand_Guide.pdf` for the full specification.

Words banned from copy: *innovative*, *committed*, *passionate*.
