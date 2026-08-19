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
        title="Damages Expert Witness"
        subtitle="Global expert witness matching for legal teams. Connect with qualified forensic accountants, actuaries, and quantum specialists for personal injury, commercial litigation, clinical negligence, and international arbitration."
      />
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-body">
            DamagesExpertWitness connects solicitors, counsel, and in-house
            legal teams worldwide with quantum experts for every head of loss —
            from earnings and pension calculations to but-for commercial models
            and investment treaty damages in cross-border proceedings.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        <h2 className="text-center font-display text-2xl font-bold text-heading sm:text-3xl">
          Damages Expert Witness Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          Quantum evidence across all major heads of financial loss, in court
          and arbitration.
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
            className="inline-flex min-h-[44px] items-center font-semibold text-primary hover:text-accent"
          >
            View all services →
          </Link>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-heading">
              Why instruct through us?
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
                <span>
                  Personal injury, commercial, and arbitration specialists
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Court and tribunal compliant expert reports</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Response within one business day</span>
              </li>
            </ul>
          </div>
          <div className="border border-border bg-white p-6 shadow-card">
            <h3 className="font-display text-lg font-semibold text-heading">
              Master resource: types of damages
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Our comprehensive guide to general damages, special damages,
              pecuniary and non-pecuniary loss, compensatory principles, and
              discount rate methodology — the definitive reference for
              litigation teams instructing quantum experts.
            </p>
            <Link
              href="/types-of-damages"
              className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-primary hover:text-accent"
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
