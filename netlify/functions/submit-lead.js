/**
 * POST /api/submit-lead (via netlify.toml redirect) → n8n webhook.
 * @see Lead_notification_setup.md
 */
const BRAND_NAME = "Damages Expert Witness";

function getSiteDomain() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://damagesexpertwitness.co.uk";

  try {
    const hostname = new URL(url.replace(/\/$/, "")).hostname;
    return hostname.replace(/^www\./i, "");
  } catch {
    return "damagesexpertwitness.co.uk";
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    console.error("Lead_notification_url is not configured");
    return json(503, { error: "Lead notification is not configured" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone =
    body.phone != null && body.phone !== undefined
      ? String(body.phone).trim()
      : "";

  if (!fullName || !email) {
    return json(400, { error: "fullName and email are required" });
  }

  const outbound = {
    "Full Name": fullName,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });

    if (!res.ok) {
      console.error("Webhook responded with", res.status, await res.text());
      return json(502, { error: "Failed to deliver lead" });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("Webhook request failed", err);
    return json(502, { error: "Failed to deliver lead" });
  }
};

function json(statusCode, data) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};
