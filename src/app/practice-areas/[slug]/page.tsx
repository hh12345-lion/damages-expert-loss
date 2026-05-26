import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { getPracticeArea, practiceAreaSlugs } from "@/data/practice-areas";
import { caseTypes } from "@/data/case-types";
import Link from "next/link";

export function generateStaticParams() {
  return practiceAreaSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPracticeArea(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/practice-areas/${slug}`,
  });
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPracticeArea(slug);
  if (!page) notFound();

  const relatedCaseTypes = caseTypes.filter((c) =>
    c.practiceAreaSlugs?.includes(slug)
  );

  const path = `/practice-areas/${slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: page.h1, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          faqPageSchema(page.faqs),
        ]}
      />
      <PageHero
        title={page.h1}
        subtitle={page.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: page.title },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          {page.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-body">
              {p}
            </p>
          ))}

          {relatedCaseTypes.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-heading">Related Case Types</h2>
              <ul className="mt-4 space-y-2">
                {relatedCaseTypes.map((ct) => (
                  <li key={ct.slug}>
                    <Link
                      href={`/case-types/${ct.slug}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {ct.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h2 className="mt-10 text-xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-8">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-heading">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-relaxed text-body">{faq.answer}</p>
              </div>
            ))}
          </div>

          <RelatedLinks links={page.relatedLinks ?? []} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
