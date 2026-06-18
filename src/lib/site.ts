export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.damagesexpertwitness.co.uk";

export const SITE_NAME = "DamagesExpertWitness";
export const SITE_EMAIL = "contact@damagesexpertwitness.co.uk";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/damages-expert-witness";

/** Shown in footer and key copy — UK-only service, no geo banners */
export const SITE_REGION_LABEL = "United Kingdom";
export const SITE_SCOPE_NOTE =
  "This service is for UK solicitors, barristers, and counsel instructing damages expert witnesses in England and Wales, Scotland, and Northern Ireland, and for UK-seated international arbitration. We do not provide expert witness referral services outside the United Kingdom.";

export const COLORS = {
  primary: "#4A1942",
  accent: "#C9A84C",
  background: "#FFFFFF",
  sectionAlt: "#FAF8FB",
  border: "#E8E0EC",
  heading: "#4A1942",
  body: "#374151",
} as const;
