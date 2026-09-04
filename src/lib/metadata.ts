import type { Metadata } from "next";
import { SITE_URL } from "./site";

export const DEFAULT_OG_IMAGE = "/opengraph-image";

export function buildHreflangAlternates(path: string = "") {
  const url = `${SITE_URL}${path}`;
  return {
    canonical: url,
    languages: {
      en: url,
      "x-default": url,
    },
  };
}

export function trimDescription(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 3).trimEnd()}...`;
}

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  nofollow = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  nofollow?: boolean;
}): Metadata {
  const robots =
    noindex || nofollow
      ? { index: !noindex, follow: !nofollow }
      : { index: true, follow: true };

  const metaDescription = trimDescription(description);
  const pageUrl = `${SITE_URL}${path}`;

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.BING_SITE_VERIFICATION;

  return {
    title,
    description: metaDescription,
    metadataBase: new URL(SITE_URL),
    alternates: buildHreflangAlternates(path),
    openGraph: {
      title,
      description: metaDescription,
      url: pageUrl,
      siteName: "DamagesExpertWitness",
      locale: "en",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, alt: "Damages Expert Witness" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [DEFAULT_OG_IMAGE],
    },
    robots,
    ...(googleVerification && {
      verification: { google: googleVerification },
    }),
    ...(bingVerification && {
      other: { "msvalidate.01": bingVerification },
    }),
  };
}
