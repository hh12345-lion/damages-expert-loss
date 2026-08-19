export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.damagesexpertwitness.co.uk";

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
