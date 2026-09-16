import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PreparingFinancialEvidenceArticle } from "@/components/blog/PreparingFinancialEvidenceArticle";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { blogSlugs, getBlogPost } from "@/data/blog";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

const articles: Record<string, () => React.ReactNode> = {
  "preparing-financial-evidence-for-damages-expert": () => (
    <PreparingFinancialEvidenceArticle />
  ),
};

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const renderArticle = articles[slug];
  if (!renderArticle) notFound();

  const path = `/blog/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
          articleSchema({
            headline: post.title,
            description: post.description,
            path,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
        ]}
      />

      <PageHero
        title={post.title}
        subtitle={post.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <Section>
        <div className="mx-auto mb-10 max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden border border-border bg-section-alt">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="mx-2">·</span>
            Reviewed {post.lastReviewed}
          </p>
        </div>

        {renderArticle()}

        <p className="mx-auto mt-10 max-w-3xl text-sm">
          <Link
            href="/blog"
            className="font-medium text-accent hover:text-primary"
          >
            ← Back to the blog
          </Link>
        </p>
      </Section>

      <CTASection />
    </>
  );
}
