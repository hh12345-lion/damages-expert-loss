export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  lastReviewed: string;
  image: string;
  imageAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "preparing-financial-evidence-for-damages-expert",
    title:
      "Preparing Financial Evidence for a Damages Expert: A Practical Guide for Legal Teams",
    description:
      "Practical guidance for solicitors on gathering and organising financial evidence for a damages or quantum expert: records, forecasts, gaps, and clear assumptions.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    lastReviewed: "September 2026",
    image: "/images/blog/preparing-financial-evidence-for-damages-expert.png",
    imageAlt:
      "Professional calculating figures with a calculator and writing in a notebook",
  },
];

export const blogSlugs = blogPosts.map((post) => post.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
