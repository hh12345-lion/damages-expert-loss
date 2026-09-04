/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://damagesexpertwitness.co.uk";

/** Public origin for sitemap/canonicals — never localhost or Netlify preview. */
export function getPublicSiteUrl(): string {
  const fallback = PRODUCTION_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.protocol = "https:";
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();

export const SITE_NAME = "DamagesExpertWitness";
export const SITE_EMAIL = "contact@damagesexpertwitness.co.uk";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/damages-expert-witness";

/** Shown in footer and key copy — global service scope */
export const SITE_REGION_LABEL = "Global";
export const SITE_SCOPE_NOTE =
  "We connect legal teams worldwide with qualified damages expert witnesses for litigation, arbitration, and expert determination. We are not a law firm and do not provide legal advice.";

export const COLORS = {
  primary: "#2D1B4E",
  primaryDark: "#1A0F2E",
  accent: "#B8860B",
  surfaceDark: "#1A0F2E",
  background: "#FAF7F2",
  sectionAlt: "#FAF7F2",
  border: "#DDD0C0",
  heading: "#1A0F2E",
  body: "#4A4458",
} as const;
