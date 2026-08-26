/**
 * Site hostname for lead webhook `domain` field (no protocol, no www).
 * @see Lead_notification_setup.md
 */
export function getSiteDomain(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.damagesexpertwitness.co.uk";

  try {
    const hostname = new URL(url.replace(/\/$/, "")).hostname;
    return hostname.replace(/^www\./i, "");
  } catch {
    return "damagesexpertwitness.co.uk";
  }
}
