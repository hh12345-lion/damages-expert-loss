"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/site";

const practiceAreas = [
  "Personal Injury",
  "Clinical Negligence",
  "Commercial Litigation",
  "International Arbitration",
  "Employment / Discrimination",
  "Family / Financial Remedy",
  "Other",
];

const damagesTypes = [
  "Loss of Earnings",
  "Pension Loss",
  "Future Care Costs",
  "Commercial Lost Profits",
  "IP Infringement Damages",
  "Professional Negligence Loss",
  "Investment Treaty Damages",
  "Shareholder Dispute",
  "Employment Loss",
  "Other",
];

const courts = [
  "High Court",
  "County Court",
  "Family Court",
  "Employment Tribunal",
  "ICC / LCIA / ICSID Arbitration",
  "First-tier Tribunal (Tax)",
  "Other",
];

const claimValues = [
  "Under £50k",
  "£50k–£250k",
  "£250k–£1M",
  "£1M–£10M",
  "Over £10M",
  "Unknown",
];

const urgencyOptions = [
  "Urgent (within 5 days)",
  "Within 2 weeks",
  "Within 1 month",
  "Planning ahead",
];

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

/**
 * POST full lead payload to /api/submit-lead → Google Sheets (+ optional n8n webhook).
 * Fallback: Formspree when neither Sheets nor webhook is configured (503).
 */
export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submitToFormspree(form: HTMLFormElement): Promise<boolean> {
    if (!formspreeUrl) return false;
    try {
      const res = await fetch(formspreeUrl, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const leadPayload = {
      fullName: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      organisation: String(data.get("organisation") ?? "").trim(),
      practiceArea: String(data.get("practiceArea") ?? "").trim(),
      damagesType: String(data.get("damagesType") ?? "").trim(),
      court: String(data.get("court") ?? "").trim(),
      expertType: String(data.get("expertType") ?? "").trim(),
      claimValue: String(data.get("claimValue") ?? "").trim(),
      deadline: String(data.get("deadline") ?? "").trim(),
      urgency: String(data.get("urgency") ?? "").trim(),
      description: String(data.get("description") ?? "").trim(),
    };

    if (!leadPayload.fullName || !leadPayload.email) {
      setStatus("error");
      setErrorMessage("Please enter your full name and email.");
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

      if (res.status === 503 && formspreeUrl) {
        const ok = await submitToFormspree(form);
        if (ok) {
          router.push("/thank-you");
          return;
        }
      }

      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? "Lead delivery is not configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      if (formspreeUrl && (await submitToFormspree(form))) {
        router.push("/thank-you");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 rounded border border-border px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Full Name *
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
          <label htmlFor="organisation" className={labelClass}>
            Law Firm / Organisation *
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="practiceArea" className={labelClass}>
            Practice Area
          </label>
          <select id="practiceArea" name="practiceArea" className={inputClass}>
            {practiceAreas.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="damagesType" className={labelClass}>
            Damages Type
          </label>
          <select id="damagesType" name="damagesType" className={inputClass}>
            {damagesTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="court" className={labelClass}>
            Court / Forum
          </label>
          <select id="court" name="court" className={inputClass}>
            {courts.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="expertType" className={labelClass}>
            SJE or party-appointed
          </label>
          <select id="expertType" name="expertType" className={inputClass}>
            <option value="SJE">SJE</option>
            <option value="Party-appointed">Party-appointed</option>
            <option value="Not decided">Not decided</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="claimValue" className={labelClass}>
            Approximate claim value
          </label>
          <select id="claimValue" name="claimValue" className={inputClass}>
            {claimValues.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="deadline" className={labelClass}>
            Hearing / deadline date
          </label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            className={inputClass}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="urgency" className={labelClass}>
          Urgency
        </label>
        <select id="urgency" name="urgency" className={inputClass}>
          {urgencyOptions.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief case description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage ?? "Something went wrong."}{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-accent/90 disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Submitting…" : "Instruct an Expert Witness"}
      </button>
    </form>
  );
}
