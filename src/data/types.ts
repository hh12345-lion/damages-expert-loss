export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface ContentPage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: FAQ[];
  relatedLinks?: RelatedLink[];
  practiceAreaSlugs?: string[];
  serviceIds?: string[];
}

export interface GuidePage extends ContentPage {
  aboutServiceId?: string;
  sections: { heading: string; content: string }[];
}

export interface PracticeAreaPage extends ContentPage {
  subtitle?: string;
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  link?: { href: string; label: string };
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  methodology: { step: string; detail: string }[];
  caseTypeSlugs: string[];
}

export interface ExpertProfile {
  name: string;
  jobTitle: string;
  description: string;
  credentials: string[];
  specialisms: string[];
}
