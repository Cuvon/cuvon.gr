# Cuvon Website

Public website for Cuvon — healthcare product import and distribution, Greece.

Live at **https://www.cuvon.gr**

---

## Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Framework | Next.js 14 App Router (TypeScript) |
| Styling   | Tailwind CSS                       |
| Fonts     | Inter via next/font/google         |
| Hosting   | Vercel                             |
| Repo      | github.com/Cuvon/cuvon.gr          |

Fully static — no CMS, no database, no environment variables required.

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Deploy

Push to `main`. Vercel builds and deploys automatically.

```bash
git add -A
git commit -m "your message"
git push origin main
```

---

## For AI assistants

See `CLAUDE.md` for full architecture, brand rules, deployment configuration,
known issues, and handover context.
