import { NextResponse } from "next/server";
import {
  notifyLeadWebhook,
  parseLeadNotificationBody,
} from "@/lib/leadNotification";

export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        error: "NOT_CONFIGURED",
        message: "Set Lead_notification_url in environment variables.",
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

  const lead = parseLeadNotificationBody(body);
  if (!lead) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
  if (!webhookOk) {
    return NextResponse.json({ error: "Failed to deliver lead" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
