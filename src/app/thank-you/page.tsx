import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Thank You | DamagesExpertWitness",
  description:
    "Your damages expert witness instruction request has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const nextSteps = [
  {
    title: "Case review",
    detail:
      "We review your enquiry to identify suitable quantum specialists for your matter.",
  },
  {
    title: "Expert match",
    detail:
      "You receive a response within one business day with forensic accountant, actuary, or arbitration quantum options.",
  },
  {
    title: "Instruction",
    detail:
      "Once you confirm, we facilitate introduction and support your letter of instruction and document list.",
  },
];

const helpfulLinks = [
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/types-of-damages", label: "Types of Damages" },
];

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank You — Request Received"
        subtitle="Your instruction enquiry has been submitted successfully. A member of our team will review your details shortly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
      />
      <Section narrow>
        <div
          className="flex flex-col items-center border border-border bg-white p-8 text-center shadow-card"
          role="status"
          aria-live="polite"
        >
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-2xl font-bold text-accent"
            aria-hidden
          >
            ✓
          </span>
          <p className="mt-4 text-lg font-semibold text-heading">
            Instruction request received
          </p>
          <p className="mt-2 text-body">
            We aim to respond within{" "}
            <strong className="font-semibold text-heading">
              one business day
            </strong>{" "}
            with a suitable damages expert witness match for your matter.
          </p>
        </div>

        <h2 className="mt-12 font-display text-xl font-bold text-heading">
          What happens next
        </h2>
        <ol className="mt-6 space-y-6">
          {nextSteps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary text-sm font-bold text-white"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-heading">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-body">
          Urgent matters or follow-up questions? Email{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-medium text-primary underline underline-offset-2 hover:text-accent"
          >
            {SITE_EMAIL}
          </a>
          .
        </p>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm font-semibold text-heading">While you wait</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {helpfulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-section-alt"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center font-semibold text-primary underline underline-offset-2 hover:text-accent"
          >
            Return to homepage
          </Link>
        </div>
      </Section>
      <section className="border-t border-border bg-section-warm py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
            Need another expert or a different head of loss?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            You can submit a further enquiry at any time for PI quantum,
            commercial damages, clinical negligence, or international
            arbitration matters.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center bg-primary px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-primary-dark"
          >
            Submit another enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
