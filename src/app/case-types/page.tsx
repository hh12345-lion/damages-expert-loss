import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Case Types Requiring a Damages Expert Witness",
  description:
    "Which legal cases need a damages expert witness? Personal injury, clinical negligence, loss of earnings, commercial disputes, and international arbitration explained.",
  path: "/case-types",
});

export default function CaseTypesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Types", path: "/case-types" },
        ])}
      />
      <PageHero
        title="Case Types Requiring a Damages Expert Witness"
        subtitle="From loss of earnings and pension loss to commercial contract damages, IP infringement, and investment treaty arbitration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types" },
        ]}
      />
      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseTypes.map((ct) => (
            <Card
              key={ct.slug}
              href={`/case-types/${ct.slug}`}
              title={ct.title}
              description={ct.metaDescription}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
