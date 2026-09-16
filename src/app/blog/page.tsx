import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/data/blog";

export const metadata = createMetadata({
  title: "Blog | Damages Expert Witness",
  description:
    "Practical articles for solicitors on preparing financial evidence, instructing damages experts, and quantum assessment in UK proceedings.",
  path: "/blog",
});

export default function BlogHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        title="Damages evidence notes for legal teams"
        subtitle="Practical guidance on preparing financial material, organising quantum evidence, and instructing independent damages experts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] overflow-hidden border border-border bg-section-alt">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <Card
                href={`/blog/${post.slug}`}
                title={post.title}
                description={post.description}
              />
            </article>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
