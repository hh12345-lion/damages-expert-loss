import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Damages Expert Witness Glossary | Key Legal & Finance Terms",
  description:
    "Definitions of key damages and expert witness terms — from general damages to quantum, Ogden Tables, multiplier/multiplicand, and expert evidence rules.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const faqSchema = glossaryTerms.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
          faqPageSchema(faqSchema),
        ]}
      />
      <PageHero
        title="Damages Expert Witness Glossary"
        subtitle="Key legal and financial terms for damages quantification and expert witness evidence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Glossary" },
        ]}
      />
      <Section>
        <dl className="mx-auto max-w-3xl space-y-8">
          {glossaryTerms.map((term) => (
            <div key={term.slug} id={term.slug}>
              <dt className="text-lg font-semibold text-heading">{term.term}</dt>
              <dd className="mt-2 leading-relaxed text-body">
                {term.definition}
                {term.link && (
                  <>
                    {" "}
                    <Link
                      href={term.link.href}
                      className="font-medium text-primary hover:underline"
                    >
                      {term.link.label} →
                    </Link>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
      <CTASection />
    </>
  );
}
