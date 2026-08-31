import { appendRow, type CellValue } from "@/lib/google-sheets";
import {
  BRAND_NAME,
  type LeadNotificationInput,
} from "@/lib/leadNotification";
import { getSiteDomain } from "@/lib/seo";

export { BRAND_NAME };

/** Row 1 headers on one shared GOOGLE_SHEET_TAB_NAME (Form Type distinguishes rows) */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Brand Name",
  "Form Type",
  "Full Name",
  "Email",
  "Phone Number",
  "Organisation",
  "Case Description",
  "Domain",
] as const;

export interface LeadSubmission extends LeadNotificationInput {
  organisation?: string;
  description?: string;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function opt(value: unknown): string {
  if (value == null) return "";
  return sanitize(String(value));
}

function formTypeLabel(formType?: string): string {
  return formType === "instruct" ? "Instruct" : "Contact";
}

function formatPhoneForSheet(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")) {
    return `'${phone}`;
  }
  return phone;
}

export function parseLeadBody(body: unknown): LeadSubmission | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = opt(b.fullName);
  const email = opt(b.email).toLowerCase();

  if (!fullName || !email) return null;

  const formType =
    b.formType === "instruct" || b.formType === "contact"
      ? b.formType
      : "contact";

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    formType,
    organisation: opt(b.organisation),
    description: opt(b.description ?? b.message),
  };
}

export function buildLeadSheetRow(
  lead: LeadSubmission,
  domain = getSiteDomain()
): CellValue[] {
  return [
    new Date().toISOString(),
    BRAND_NAME,
    formTypeLabel(lead.formType),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone ?? ""),
    lead.organisation ?? "",
    lead.description ?? "",
    domain,
  ];
}

export async function appendLeadToSheet(lead: LeadSubmission): Promise<void> {
  await appendRow(buildLeadSheetRow(lead));
}
