import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { notifyLeadWebhook } from "@/lib/leadNotification";
import { appendLeadToSheet, parseLeadBody } from "@/lib/lead-submission";

async function softFailAppendSheet(
  lead: NonNullable<ReturnType<typeof parseLeadBody>>,
  context: string
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;

  try {
    await appendLeadToSheet(lead);
  } catch (err) {
    console.error("Google Sheets error:", {
      context,
      message: err instanceof Error ? err.message : "Unknown error",
      sheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
      tab: process.env.GOOGLE_SHEET_TAB_NAME,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Webhook is the primary lead path.
 * Sheets: one shared GOOGLE_SHEET_TAB_NAME + Form Type; soft-fail only.
 */
export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl?.trim() && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "NOT_CONFIGURED",
        message: "Set Lead_notification_url and/or Google Sheets env vars.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lead = parseLeadBody(body);
  if (!lead) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  if (webhookUrl?.trim()) {
    const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
    if (!webhookOk) {
      return NextResponse.json(
        { error: "Failed to deliver lead" },
        { status: 502 }
      );
    }

    await softFailAppendSheet(lead, "submit-lead");
    return NextResponse.json({ ok: true });
  }

  await softFailAppendSheet(lead, "submit-lead-sheets-only");
  return NextResponse.json({ ok: true });
}
