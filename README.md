# DamagesExpertWitness

Lead-generation website for legal teams seeking damages expert witnesses (quantum, loss of earnings, commercial damages).

## Tech stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Netlify deployment with `@netlify/plugin-nextjs`
- Contact form → Google Sheets and/or n8n webhook via `/api/submit-lead`

## Setup

```bash
npm install
npm run dev
```

## Environment variables (Netlify)

| Variable | Purpose |
|----------|---------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Google service account email (Sheets API) |
| `GOOGLE_PRIVATE_KEY` | Service account private key (keep `\n` escapes in quotes) |
| `GOOGLE_SHEET_ID` | Spreadsheet ID from the Google Sheets URL |
| `GOOGLE_SHEET_TAB_NAME` | Tab name (e.g. `Sheet10`) |
| `Lead_notification_url` | Optional n8n/webhook URL (JSON payload on submit) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default: `https://www.damagesexpertwitness.co.uk`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional Google Analytics 4 |
| `GOOGLE_SITE_VERIFICATION` | Search Console meta tag |
| `BING_SITE_VERIFICATION` | Bing Webmaster meta tag |

Contact form rows use headers in `src/lib/lead-submission.ts` (`LEAD_SHEET_HEADERS`). Add row 1 in your sheet tab with those column names.

Test Sheets: `npm run test:sheets`

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
