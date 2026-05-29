import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { experts } from "@/data/experts";

export const metadata = createMetadata({
  title:
    "Our Damages Expert Witnesses | UK Forensic Accountants & Quantum Specialists",
  description:
    "DamagesExpertWitness.co.uk connects UK solicitors with qualified damages expert witnesses  -  forensic accountants, actuaries, and quantum economists for all types of litigation.",
  path: "/experts",
});

export default function ExpertsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Experts", path: "/experts" },
          ]),
          ...experts.map((e) => personSchema(e)),
        ]}
      />
      <PageHero
        title="Our Damages Expert Witnesses"
        subtitle="Qualified forensic accountants, actuaries, and quantum economists matched to your practice area and heads of loss."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experts" },
        ]}
      />
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="rounded border border-border bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-bold text-heading">{expert.name}</h2>
              <p className="mt-1 text-sm font-medium text-accent">
                {expert.jobTitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                {expert.description}
              </p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase text-heading">
                  Credentials
                </p>
                <ul className="mt-2 space-y-1 text-sm text-body">
                  {expert.credentials.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase text-heading">
                  Specialisms
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {expert.specialisms.map((s) => (
                    <li
                      key={s}
                      className="rounded bg-section-alt px-2 py-1 text-xs text-body"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-body">
          We match your case with the most suitable expert from our panel based
          on practice area, heads of loss, forum, and urgency. Submit your
          instruction request via our contact form.
        </p>
      </Section>
      <CTASection />
    </>
  );
}
