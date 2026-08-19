import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  organizationSchema,
  serviceNode,
} from "@/lib/schema";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Damages Expert Witness Services | Full Service List",
  description:
    "Damages expert witness services: loss of earnings, pension loss, lost profits, quantum of damages, personal injury, commercial litigation, and international arbitration.",
  path: "/services",
});

export default function ServicesPage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      ...services.map((s) =>
        serviceNode(s.id, s.name, s.description)
      ),
    ],
  };

  return (
    <>
      <JsonLd
        data={[
          graph,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHero
        title="Damages Expert Witness Services"
        subtitle="Eight core quantum services  -  from loss of earnings and pension loss to commercial lost profits, IP infringement, and international arbitration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <Section>
        <div className="space-y-16">
          {services.map((service) => {
            const relatedCases = caseTypes.filter((c) =>
              service.caseTypeSlugs.includes(c.slug)
            );
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded border border-border bg-white p-6 shadow-card md:p-8"
              >
                <h2 className="text-xl font-bold text-heading sm:text-2xl">
                  {service.name}
                </h2>
                <p className="mt-4 leading-relaxed text-body">
                  {service.description}
                </p>
                <h3 className="mt-8 text-lg font-semibold text-heading">
                  Methodology
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[480px] border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="border border-border bg-section-alt px-3 py-2 text-left font-semibold text-heading">
                          Step
                        </th>
                        <th className="border border-border bg-section-alt px-3 py-2 text-left font-semibold text-heading">
                          Detail
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.methodology.map((row) => (
                        <tr key={row.step}>
                          <td className="border border-border px-3 py-2 font-medium text-heading">
                            {row.step}
                          </td>
                          <td className="border border-border px-3 py-2 text-body">
                            {row.detail}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {relatedCases.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-heading">
                      Related case types:
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {relatedCases.map((ct) => (
                        <li key={ct.slug}>
                          <Link
                            href={`/case-types/${ct.slug}`}
                            className="rounded bg-section-alt px-3 py-1 text-sm text-primary hover:underline"
                          >
                            {ct.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
