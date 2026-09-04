import { caseTypeSlugs } from "@/data/case-types";
import { practiceAreaSlugs } from "@/data/practice-areas";
import { guideSlugs } from "@/data/guides";

import { getPublicSiteUrl } from "@/lib/site";

export const CANONICAL_HOST = getPublicSiteUrl();

export const APP_STATIC_PATHS = [
  "/",
  "/services",
  "/types-of-damages",
  "/practice-areas",
  "/case-types",
  "/what-is-a-damages-expert-witness",
  "/qualifications",
  "/how-to-instruct",
  "/guides",
  "/glossary",
  "/cookies",
] as const;

/** Paths indexed with noindex and/or excluded from the XML sitemap */
export const SITEMAP_EXCLUDED_PATHS = [
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
] as const;

/** Crawl rules written to public/robots.txt (not derived from the sitemap inventory) */
export const ROBOTS_DISALLOW_PATHS = [
  "/admin/",
  "/api/",
  "/private/",
  "/.netlify/",
  "/thank-you",
] as const;

export interface PublicUrlInventory {
  allPaths: string[];
  allUrls: string[];
}

export function buildPublicUrlInventory(): PublicUrlInventory {
  const dynamicPaths = [
    ...practiceAreaSlugs.map((slug) => `/practice-areas/${slug}`),
    ...caseTypeSlugs.map((slug) => `/case-types/${slug}`),
    ...guideSlugs.map((slug) => `/guides/${slug}`),
  ];

  const allPaths = [
    ...new Set([...APP_STATIC_PATHS, ...dynamicPaths]),
  ].sort((a, b) => a.localeCompare(b));

  return {
    allPaths,
    allUrls: allPaths.map((path) => toAbsoluteUrl(path)),
  };
}

export function toAbsoluteUrl(path: string): string {
  if (path === "/") return `${CANONICAL_HOST}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_HOST}${normalized}`;
}

export function getSitemapChangefreq(path: string): string {
  if (path === "/") return "weekly";
  if (path === "/cookies") return "yearly";
  return "monthly";
}

export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/services" || path === "/types-of-damages") return 0.95;
  if (path === "/practice-areas") return 0.93;
  if (path === "/case-types") return 0.92;
  if (path === "/what-is-a-damages-expert-witness") return 0.9;
  if (path.startsWith("/practice-areas/")) return 0.9;
  if (path === "/qualifications" || path === "/how-to-instruct") {
    return 0.88;
  }
  if (path.startsWith("/case-types/")) return 0.88;
  if (path === "/guides") return 0.87;
  if (path.startsWith("/guides/")) return 0.8;
  if (path === "/glossary") return 0.75;
  if (path === "/cookies") return 0.5;
  return 0.7;
}
