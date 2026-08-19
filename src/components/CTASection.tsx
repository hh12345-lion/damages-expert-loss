import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Need a damages expert witness?",
  description = "Tell us about your matter and we will connect you with a qualified quantum specialist. Response within one business day.",
}: CTASectionProps) {
  return (
    <section className="border-y border-border bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl border border-border bg-section-alt px-8 py-10 text-center shadow-card sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-body">{description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center bg-primary px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-primary-dark"
          >
            Submit an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
