# DamagesExpertWitness.co.uk

Lead-generation website for UK solicitors, barristers, and international arbitration counsel seeking damages expert witnesses (quantum, loss of earnings, commercial damages).

## Tech stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Static export-ready build (no custom backend)
- Formspree contact form
- Apex → www redirect via `middleware.ts`

## Setup

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_FORMSPREE_FORM_ID from formspree.io
npm run dev
```

## Environment variables

| Variable | Purpose |
|----------|---------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Google service account email (Sheets API) |
| `GOOGLE_PRIVATE_KEY` | Service account private key (keep `\n` escapes in quotes) |
| `GOOGLE_SHEET_ID` | Spreadsheet ID from the Google Sheets URL |
| `GOOGLE_SHEET_TAB_NAME` | Tab name (e.g. `Sheet10`) |
| `Lead_notification_url` | Optional n8n/webhook URL (4-field JSON on submit) |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Optional Formspree fallback if Sheets/webhook unset |

Contact form rows use headers in `src/lib/lead-submission.ts` (`LEAD_SHEET_HEADERS`). Add row 1 in **Sheet10** with those column names.

Test Sheets: `npm run test:sheets`
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default: `https://www.damagesexpertwitness.co.uk`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional Google Analytics 4 |
| `GOOGLE_SITE_VERIFICATION` | Search Console meta tag |
| `BING_SITE_VERIFICATION` | Bing Webmaster meta tag |

## Build & deploy

```bash
npm run seo:generate   # Regenerate public/sitemap.xml + public/robots.txt
npm run seo:verify     # Fail if generated files drift from URL inventory
npm run build          # seo:generate + next build
npm start
```

See [docs/SITEMAP-AND-ROBOTS.md](docs/SITEMAP-AND-ROBOTS.md) for how the URL inventory and crawlers files work.

## Site structure

- **21 routes**  -  homepage, services, types-of-damages pillar, practice areas (hub + 4), case types (hub + 12), guides (hub + 6), experts, glossary, FAQ, fees, qualifications, how-to-instruct, contact, thank-you, privacy, terms, 404
- **SEO**  -  JSON-LD (Organization, ProfessionalService, FAQPage, Article, Person, BreadcrumbList), auto-generated sitemap with priority weights
- **Design**  -  burgundy `#4A1942` / gold `#C9A84C`, Inter font, responsive 320px+

Canonical host: **https://www.damagesexpertwitness.co.uk**
