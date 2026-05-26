import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to Instruct a Damages Expert Witness?",
  description = "Submit your case details and we will match you with a qualified UK forensic accountant, actuary, or quantum specialist. CPR Part 35 compliant reports. Response within 1 business day.",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary/90">{description}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Instruct an Expert Witness
        </Link>
      </div>
    </section>
  );
}
