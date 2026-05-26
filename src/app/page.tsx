import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
  serviceNode,
} from "@/lib/schema";
import { services } from "@/data/services";
import { practiceAreas } from "@/data/practice-areas";

export default function HomePage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      professionalServiceSchema(services.map((s) => s.name)),
      websiteSchema,
      ...services.map((s) =>
        serviceNode(s.id, s.name, s.shortDescription)
      ),
    ],
  };

  return (
    <>
      <JsonLd data={graph} />
      <PageHero
        title="Damages Expert Witness UK"
        subtitle="Connect with qualified forensic accountants, actuaries, and quantum specialists for personal injury, commercial litigation, clinical negligence, and international arbitration."
      />
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-body">
            DamagesExpertWitness.co.uk helps UK solicitors, barristers, and
            international arbitration counsel instruct the right quantum expert
            for every head of loss — from Ogden Table earnings calculations to
            but-for commercial models and ICSID investment treaty damages.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {practiceAreas.map((area) => (
            <Card
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              title={area.title}
              description={area.paragraphs[0].slice(0, 160) + "…"}
            />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="text-center text-2xl font-bold text-heading sm:text-3xl">
          Damages Expert Witness Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          CPR Part 35 compliant quantum evidence across all major heads of
          financial loss.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <Card
              key={service.id}
              href={`/services#${service.id}`}
              title={service.name}
              description={service.shortDescription}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex min-h-[44px] items-center font-semibold text-primary hover:underline"
          >
            View all services →
          </Link>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-heading">
              Why Instruct Through Us?
            </h2>
            <ul className="mt-6 space-y-4 text-body">
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>
                  Matched with ACA, FCA, FIA, and APIL-accredited experts
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Personal injury, commercial, and arbitration specialists</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>CPR Part 35 and FPR Part 25 compliant reports</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Response within 1 business day</span>
              </li>
            </ul>
          </div>
          <div className="rounded border border-border bg-section-alt p-6">
            <h3 className="text-lg font-semibold text-heading">
              Master Resource: Types of Damages
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Our comprehensive guide to general damages, special damages,
              pecuniary and non-pecuniary loss, compensatory principles, and
              discount rate methodology — the definitive reference for UK
              litigation solicitors.
            </p>
            <Link
              href="/types-of-damages"
              className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-primary hover:underline"
            >
              Read the complete guide →
            </Link>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
