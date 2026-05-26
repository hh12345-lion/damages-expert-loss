import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { GuidePageTemplate } from "@/components/GuidePageTemplate";
import { getGuide, guideSlugs } from "@/data/guides";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getGuide(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getGuide(slug);
  if (!page) notFound();

  return (
    <GuidePageTemplate
      page={page}
      relatedLinks={page.relatedLinks}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: page.title },
      ]}
    />
  );
}
