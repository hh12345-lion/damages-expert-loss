export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.damagesexpertwitness.co.uk";

export const SITE_NAME = "DamagesExpertWitness";
export const SITE_EMAIL = "info@damagesexpertwitness.co.uk";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/damages-expert-witness";

export const COLORS = {
  primary: "#4A1942",
  accent: "#C9A84C",
  background: "#FFFFFF",
  sectionAlt: "#FAF8FB",
  border: "#E8E0EC",
  heading: "#4A1942",
  body: "#374151",
} as const;
