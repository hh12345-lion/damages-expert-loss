import Link from "next/link";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/types-of-damages", label: "Types of Damages" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <section className="bg-primary py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-white/60">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white/80"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/80">Page not found</li>
            </ol>
          </nav>
          <p className="text-6xl font-bold tracking-tight text-accent sm:text-7xl">
            404
          </p>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            The page you are looking for does not exist, has been moved, or the
            URL may be incorrect. Use the links below to find damages expert
            witness services and resources for UK litigation and arbitration.
          </p>
        </div>
      </section>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold text-heading">Quick links</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {quickLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  index === quickLinks.length - 1
                    ? "inline-flex min-h-[44px] items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent/90"
                    : "inline-flex min-h-[44px] items-center rounded border border-border px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-section-alt"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-body">
            Looking to instruct a quantum expert?{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary underline underline-offset-2 hover:text-accent"
            >
              Submit your case details
            </Link>{" "}
            and we will respond within one business day.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-primary underline underline-offset-2 hover:text-accent"
          >
            Return to homepage
          </Link>
        </div>
      </Section>
      <CTASection
        title="Need a damages expert witness?"
        description="Personal injury quantum, commercial lost profits, clinical negligence, and international arbitration specialists — CPR Part 35 compliant."
      />
    </>
  );
}