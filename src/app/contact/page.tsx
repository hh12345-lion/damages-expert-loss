import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_EMAIL, SITE_SCOPE_NOTE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact | Instruct a Damages Expert Witness",
  description:
    "Submit your enquiry to be matched with a qualified damages expert witness. Personal injury, commercial, and international arbitration specialists.",
  path: "/contact",
});

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
        title="Instruct a damages expert witness"
        subtitle="Send a brief enquiry and we will match you with a qualified quantum specialist."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Section narrow>
        <p className="mb-8 text-center text-sm text-muted">{SITE_SCOPE_NOTE}</p>
        <div className="border border-border bg-white p-6 shadow-card sm:p-8">
          <ContactForm />
        </div>
        <p className="mt-6 text-center text-sm text-body">
          Prefer email?{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-medium text-primary underline underline-offset-2 hover:text-accent"
          >
            {SITE_EMAIL}
          </a>
        </p>
      </Section>
    </>
  );
}
