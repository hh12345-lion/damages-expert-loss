import type { RelatedLink } from "@/data/types";

export type { RelatedLink };

const caseTypeDefaults: Record<string, RelatedLink[]> = {
  "loss-of-earnings-personal-injury": [
    { href: "/practice-areas/personal-injury-quantum", label: "Personal Injury Quantum" },
    { href: "/services#loss-of-earnings", label: "Loss of Earnings Service" },
    { href: "/guides/loss-of-earnings-ogden-tables-guide", label: "Ogden Tables Guide" },
    { href: "/types-of-damages", label: "Types of Damages" },
  ],
  "pension-loss-calculation": [
    { href: "/practice-areas/personal-injury-quantum", label: "Personal Injury Quantum" },
    { href: "/services#pension-loss", label: "Pension Loss Assessment" },
    { href: "/glossary", label: "Glossary" },
  ],
  "fatal-accident-dependency": [
    { href: "/practice-areas/personal-injury-quantum", label: "Personal Injury Quantum" },
    { href: "/services#loss-of-earnings", label: "Loss of Earnings" },
    { href: "/glossary", label: "Glossary" },
  ],
  "future-care-costs": [
    { href: "/practice-areas/clinical-negligence", label: "Clinical Negligence" },
    { href: "/services#future-care-costs", label: "Future Care Costs" },
    { href: "/guides/clinical-negligence-quantum-guide", label: "Clinical Negligence Guide" },
  ],
  "clinical-negligence-quantum": [
    { href: "/practice-areas/clinical-negligence", label: "Clinical Negligence" },
    { href: "/services#future-care-costs", label: "Future Care Costs" },
    { href: "/guides/clinical-negligence-quantum-guide", label: "Quantum Guide" },
  ],
  "commercial-contract-damages": [
    { href: "/practice-areas/commercial-damages", label: "Commercial Litigation" },
    { href: "/services#commercial-loss-profits", label: "Commercial Loss & Lost Profits" },
    { href: "/guides/commercial-damages-but-for-guide", label: "But-For Guide" },
  ],
  "ip-infringement-damages": [
    { href: "/practice-areas/commercial-damages", label: "Commercial Litigation" },
    { href: "/services#ip-infringement-damages", label: "IP Infringement Damages" },
    { href: "/types-of-damages", label: "Types of Damages" },
  ],
  "professional-negligence-damages": [
    { href: "/practice-areas/commercial-damages", label: "Commercial Litigation" },
    { href: "/services#professional-negligence-quantum", label: "Professional Negligence Quantum" },
    { href: "/glossary", label: "Glossary" },
  ],
  "employment-discrimination-loss": [
    { href: "/practice-areas/commercial-damages", label: "Commercial Litigation" },
    { href: "/services#loss-of-earnings", label: "Loss of Earnings" },
    { href: "/fees", label: "Expert Witness Fees" },
  ],
  "investment-treaty-damages": [
    { href: "/practice-areas/international-arbitration", label: "International Arbitration" },
    { href: "/services#international-arbitration-quantum", label: "Arbitration Quantum" },
    { href: "/guides/international-arbitration-quantum", label: "Arbitration Guide" },
  ],
  "shareholder-dispute-damages": [
    { href: "/practice-areas/commercial-damages", label: "Commercial Litigation" },
    { href: "/services#commercial-loss-profits", label: "Commercial Loss" },
    { href: "/types-of-damages", label: "Types of Damages" },
  ],
  "tax-dispute-quantum": [
    { href: "/practice-areas/commercial-damages", label: "Commercial Litigation" },
    { href: "/services#commercial-loss-profits", label: "Commercial Loss" },
    { href: "/qualifications", label: "Expert Qualifications" },
  ],
};

export function mergeCaseTypeLinks(
  slug: string,
  pageLinks?: RelatedLink[]
): RelatedLink[] {
  const defaults = caseTypeDefaults[slug] ?? [];
  const merged = [...(pageLinks ?? []), ...defaults];
  const seen = new Set<string>();
  return merged.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}
