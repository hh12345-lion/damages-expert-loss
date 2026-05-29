import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { faqItems } from "@/data/faqs";

export const metadata = createMetadata({
  title: "Damages Expert Witness FAQ UK | Common Questions Answered",
  description:
    "Answers to common questions about UK damages expert witnesses  -  general vs special damages, quantum methodology, CPR Part 35, SJE, fees, and more.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqPageSchema(faqItems),
        ]}
      />
      <PageHero
        title="Damages Expert Witness FAQ"
        subtitle="Common questions about quantum experts, Ogden Tables, CPR Part 35, fees, and instructing the right specialist."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {faqItems.map((faq) => (
            <div key={faq.question}>
              <h2 className="text-lg font-semibold text-heading">
                {faq.question}
              </h2>
              <p className="mt-3 leading-relaxed text-body">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
