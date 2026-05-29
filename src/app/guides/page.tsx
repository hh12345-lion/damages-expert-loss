import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title:
    "Solicitor Guides: Damages Expert Witnesses UK | Quantum & Loss Assessment",
  description:
    "In-depth guides for UK solicitors on damages expert witnesses  -  loss of earnings, clinical negligence quantum, commercial damages, and international arbitration.",
  path: "/guides",
});

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        title="Solicitor Guides: Damages Expert Witnesses UK"
        subtitle="Practical guidance on Ogden Tables, Schedule of Loss preparation, but-for methodology, and international arbitration quantum."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides" },
        ]}
      />
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Card
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              title={guide.title}
              description={guide.metaDescription}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
