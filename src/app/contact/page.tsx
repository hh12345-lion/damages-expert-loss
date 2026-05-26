import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = createMetadata({
  title:
    "Instruct a Damages Expert Witness | DamagesExpertWitness.co.uk",
  description:
    "Submit your case details to be matched with a qualified UK damages expert witness. CPR Part 35 compliant. Personal injury, commercial, and arbitration specialists available.",
  path: "/contact",
});

const trustPoints = [
  "CPR Part 35 & FPR Part 25 compliant",
  "PI, commercial & arbitration specialists",
  "Forensic accountants & actuaries",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Damages Expert Witness"
        subtitle="Submit your case details and we will match you with a qualified UK quantum specialist."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="rounded border border-border bg-section-alt p-6">
            <h2 className="text-lg font-semibold text-heading">Why instruct through us?</h2>
            <ul className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-body">
                  <span className="font-bold text-accent">✓</span>
                  <span>{point}</span>
                </li>
              ))}
              <li className="flex gap-3 text-sm text-body">
                <span className="font-bold text-accent">✓</span>
                <span>
                  Email:{" "}
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="font-medium text-primary underline underline-offset-2 hover:text-accent"
                  >
                    {SITE_EMAIL}
                  </a>
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
