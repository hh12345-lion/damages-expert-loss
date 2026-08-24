import { services } from "./services";
import { caseTypes } from "./case-types";
import { practiceAreas } from "./practice-areas";

export const navServiceLinks = services.map((s) => ({
  href: `/services#${s.id}`,
  label: s.name,
}));

export const navCaseTypeLinks = caseTypes.map((c) => ({
  href: `/case-types/${c.slug}`,
  label: c.title,
}));

export const navPracticeAreaLinks = practiceAreas.map((p) => ({
  href: `/practice-areas/${p.slug}`,
  label: p.title,
}));

/** Dropdown under Types of Damages - pillar sections */
export const navTypesOfDamagesLinks = [
  { href: "/types-of-damages", label: "Complete Guide" },
  {
    href: "/types-of-damages#compensatory-principle",
    label: "Compensatory Principle",
  },
  {
    href: "/types-of-damages#general-vs-special",
    label: "General vs Special Damages",
  },
  {
    href: "/types-of-damages#pecuniary-vs-non-pecuniary",
    label: "Pecuniary vs Non-Pecuniary",
  },
  {
    href: "/types-of-damages#types-by-category",
    label: "Damages by Category",
  },
  {
    href: "/types-of-damages#personal-injury-heads",
    label: "Personal Injury Heads" },
  {
    href: "/types-of-damages#commercial-heads",
    label: "Commercial Damages Heads",
  },
  { href: "/types-of-damages#discount-rate", label: "Discount Rate" },
  { href: "/types-of-damages#interest-on-damages", label: "Interest on Damages" },
];

/** Resources dropdown - desktop nav */
export const navResourcesLinks = [
  { href: "/guides", label: "Solicitor Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

export const navResourceLinks = [
  ...navResourcesLinks,
  { href: "/glossary", label: "Glossary" },
  { href: "/types-of-damages", label: "Types of Damages" },
];

export const mobileNavGroups = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/practice-areas", label: "Practice Areas" },
      { href: "/case-types", label: "Case Types" },
    ],
  },
  {
    title: "Types of Damages",
    links: navTypesOfDamagesLinks,
  },
  {
    title: "Resources",
    links: navResourcesLinks,
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { href: "/services#loss-of-earnings", label: "Loss of Earnings" },
      { href: "/services#pension-loss", label: "Pension Loss" },
      { href: "/services#future-care-costs", label: "Future Care Costs" },
      {
        href: "/services#commercial-loss-profits",
        label: "Commercial Lost Profits",
      },
      { href: "/services#ip-infringement-damages", label: "IP Infringement" },
      {
        href: "/services#professional-negligence-quantum",
        label: "Professional Negligence",
      },
      {
        href: "/services#international-arbitration-quantum",
        label: "Arbitration Quantum",
      },
      { href: "/services#expert-determination", label: "Expert Determination" },
    ],
  },
  {
    title: "Practice Areas",
    links: [
      ...navPracticeAreaLinks,
      { href: "/case-types", label: "All Case Types →" },
    ],
  },
  {
    title: "Resources",
    links: navResourceLinks,
  },
  {
    title: "About",
    links: [
      { href: "/qualifications", label: "Qualifications" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

/** Flat header links — editorial slash-nav, no dropdowns */
export const headerNavLinks = [
  { href: "/services", label: "Services" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-types", label: "Case Types" },
  { href: "/types-of-damages", label: "Damages Guide" },
  { href: "/guides", label: "Guides" },
];

/** Grouped links for the full-width topics panel */
export const headerTopicGroups = [
  {
    title: "Services & areas",
    links: [
      { href: "/services", label: "All services" },
      { href: "/practice-areas", label: "Practice areas" },
      { href: "/case-types", label: "Case types" },
      { href: "/types-of-damages", label: "Types of damages" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/guides", label: "Solicitor guides" },
      { href: "/how-to-instruct", label: "How to instruct" },
      { href: "/qualifications", label: "Qualifications" },
      { href: "/glossary", label: "Glossary" },
      { href: "/what-is-a-damages-expert-witness", label: "What is a damages expert?" },
    ],
  },
  {
    title: "Instruct",
    links: [
      { href: "/contact", label: "Submit an enquiry" },
      { href: "/how-to-instruct", label: "Instruction process" },
    ],
  },
];

/** Single-row footer ribbon — not column grids */
export const footerRibbonLinks = [
  { href: "/services", label: "Services" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-types", label: "Case Types" },
  { href: "/types-of-damages", label: "Damages Guide" },
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/contact", label: "Contact" },
];
