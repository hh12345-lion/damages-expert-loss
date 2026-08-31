# DamagesExpertWitness

Lead-generation website for legal teams seeking damages expert witnesses (quantum, loss of earnings, commercial damages).

## Tech stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Netlify deployment with `@netlify/plugin-nextjs`
- Contact form → n8n webhook via `/api/submit-lead` (see `Lead_notification_setup.md`)

## Setup

```bash
npm install
npm run dev
```

## Environment variables (Netlify)

| Variable | Purpose |
|----------|---------|
| `Lead_notification_url` | n8n webhook URL (POST). `LEAD_NOTIFICATION_URL` accepted as fallback |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL; derives `domain` in webhook payload |
| `GOOGLE_SHEET_ID` | Optional Sheets backup (one shared tab + Form Type) |
| `GOOGLE_SHEET_TAB_NAME` | Shared tab name (default `Sheet1`) |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` / `GOOGLE_PRIVATE_KEY` | Sheets service account |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional Google Analytics 4 |
| `GOOGLE_SITE_VERIFICATION` | Search Console meta tag |
| `BING_SITE_VERIFICATION` | Bing Webmaster meta tag |

Contact form POSTs `fullName`, `email`, `phone`, and `formType: "contact"` to `/api/submit-lead`. The webhook receives: `Full Name`, `Email`, `Phone Number`, `Brand name`, `domain`.

See [Lead_notification_setup.md](Lead_notification_setup.md) for full wiring details.

## Build & deploy

```bash
npm run seo:generate   # Regenerate public/sitemap.xml + public/robots.txt
npm run seo:verify     # Fail if generated files drift from URL inventory
npm run build          # seo:generate + next build
npm start
```

See [docs/SITEMAP-AND-ROBOTS.md](docs/SITEMAP-AND-ROBOTS.md) for how the URL inventory and crawlers files work.

## Design

- Plum `#2D1B4E` / gold `#B8860B` / cream `#FAF7F2`
- Literata + Plus Jakarta Sans
- Light header, dark footer, centered hero, minimal contact form

Canonical host: **https://www.damagesexpertwitness.co.uk**
