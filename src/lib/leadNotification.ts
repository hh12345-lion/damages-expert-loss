import { getSiteDomain } from "@/lib/seo";

/** Display name sent to n8n — fixed per site */
export const BRAND_NAME = "Damages Expert Witness";

export interface LeadNotificationInput {
  fullName: string;
  email: string;
  phone: string;
  formType?: "contact" | "instruct";
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export function parseLeadNotificationBody(
  body: unknown
): LeadNotificationInput | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = sanitize(String(b.fullName ?? ""));
  const email = sanitize(String(b.email ?? "")).toLowerCase();

  if (!fullName || !email) return null;

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    formType:
      b.formType === "instruct" || b.formType === "contact"
        ? b.formType
        : undefined,
  };
}

/** Outbound JSON for Lead_notification_url — identical shape across all brand sites */
export function buildWebhookPayload(lead: LeadNotificationInput) {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone || "",
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };
}

export async function notifyLeadWebhook(
  lead: LeadNotificationInput,
  webhookUrl: string
): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildWebhookPayload(lead)),
    });
    return res.ok;
  } catch (err) {
    console.error("Lead webhook failed:", err);
    return false;
  }
}
