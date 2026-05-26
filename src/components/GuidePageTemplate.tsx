import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import type { GuidePage } from "@/data/types";
import type { BreadcrumbItem } from "@/components/PageHero";
import type { RelatedLink } from "@/data/types";

interface GuidePageTemplateProps {
  page: GuidePage;
  breadcrumbs: BreadcrumbItem[];
  relatedLinks?: RelatedLink[];
}

export function GuidePageTemplate({
  page,
  breadcrumbs,
  relatedLinks,
}: GuidePageTemplateProps) {
  const links = relatedLinks ?? page.relatedLinks ?? [];
  const path = `/guides/${page.slug}`;
  const breadcrumbItems = breadcrumbs
    .filter((b) => b.href)
    .map((b) => ({ name: b.label, path: b.href! }))
    .concat([{ name: page.h1, path }]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          articleSchema({
            headline: page.h1,
            description: page.metaDescription,
            path,
            aboutServiceId: page.aboutServiceId,
          }),
        ]}
      />
      <PageHero title={page.h1} breadcrumbs={breadcrumbs} />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          {page.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-body">
              {p}
            </p>
          ))}
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mt-10 text-xl font-bold text-heading">
                {section.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-body">
                {section.content}
              </p>
            </div>
          ))}
          <RelatedLinks links={links} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
