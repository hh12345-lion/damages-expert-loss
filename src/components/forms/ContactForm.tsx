"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/site";

/**
 * POST lead payload to /api/submit-lead → Google Sheets (+ optional n8n webhook).
 * Configure Netlify env vars: GOOGLE_* and/or Lead_notification_url.
 */
export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const data = new FormData(e.currentTarget);
    const leadPayload = {
      fullName: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      organisation: String(data.get("organisation") ?? "").trim(),
      description: String(data.get("description") ?? "").trim(),
    };

    if (!leadPayload.fullName || !leadPayload.email) {
      setStatus("error");
      setErrorMessage("Please enter your name and email.");
      return;
    }

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      const body = await res.json().catch(() => null);
      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? (body?.message ??
              "Lead delivery is not configured. Set Google Sheets or Lead_notification_url in Netlify.")
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 border border-border bg-white px-3 py-2 text-base text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="organisation" className={labelClass}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Practice area, forum, and what expert support you need"
          className={`${inputClass} min-h-[100px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage ?? "Something went wrong."}{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Send enquiry"}
      </button>
    </form>
  );
}
