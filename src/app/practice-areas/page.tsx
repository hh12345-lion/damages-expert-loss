import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { practiceAreas } from "@/data/practice-areas";

export const metadata = createMetadata({
  title:
    "Damages Expert Witnesses by Practice Area | PI, Commercial & Arbitration UK",
  description:
    "Damages expert witnesses for UK personal injury, clinical negligence, commercial litigation, and international arbitration. Find the right expert for your practice area.",
  path: "/practice-areas",
});

export default function PracticeAreasHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice-areas" },
        ])}
      />
      <PageHero
        title="Damages Expert Witnesses by Practice Area"
        subtitle="Three distinct audiences  -  personal injury & clinical negligence, commercial litigation, and international arbitration  -  each with dedicated quantum expertise."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas" },
        ]}
      />
      <Section>
        <p className="mx-auto mb-10 max-w-3xl text-center text-body">
          Unlike generic expert witness directories, we separate practice areas
          so you instruct the right specialist from the outset  -  PI quantum
          forensic accountants, commercial damages experts, or international
          arbitration economists.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Card
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              title={area.title}
              description={area.paragraphs[0].slice(0, 200) + "…"}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
