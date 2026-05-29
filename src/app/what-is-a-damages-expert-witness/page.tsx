import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/what-is-a-damages-expert-witness";

export const metadata = createMetadata({
  title:
    "What Is a Damages Expert Witness? | UK Role, Quantum & CPR Part 35",
  description:
    "A damages expert witness quantifies financial losses for UK courts and arbitration tribunals. General damages, special damages, quantum methodology, and CPR Part 35 explained.",
  path: PATH,
});

const relatedLinks = [
  { href: "/types-of-damages", label: "Types of Damages in UK Law" },
  { href: "/qualifications", label: "Expert Qualifications" },
  { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  { href: "/services", label: "Damages Expert Witness Services" },
  { href: "/faq", label: "Damages Expert Witness FAQ" },
  { href: "/contact", label: "Instruct an Expert Witness" },
];

export default function WhatIsDamagesExpertWitnessPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "What Is a Damages Expert Witness?", path: PATH },
          ]),
        ]}
      />
      <PageHero
        title="What Is a Damages Expert Witness?"
        subtitle="The role, duties, and methodology of UK quantum experts who quantify financial losses for courts and arbitration tribunals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is a Damages Expert Witness?" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <p>
            A damages expert witness is an independent financial professional  - 
            typically a forensic accountant, actuary, or economist  -  retained to
            provide a court- or tribunal-admissible opinion on the quantum of
            financial losses in litigation or arbitration. Unlike a medical expert,
            who addresses causation, diagnosis, and prognosis, the quantum expert
            translates those findings (and commercial facts) into monetary figures:
            past and future loss of earnings, pension loss, care costs, lost profits,
            and other pecuniary heads presented in a Schedule of Loss or expert
            report.
          </p>

          <h2>The Role of a Damages Expert Witness</h2>
          <p>
            The expert&apos;s primary function is to assist the court or tribunal on
            matters within their expertise. In practice, that means reviewing
            financial records, constructing loss models, stating assumptions
            transparently, and expressing opinions that can withstand
            cross-examination. The expert does not advise on liability or legal
            remedies; they quantify loss on the assumptions and facts instructed or
            agreed, and flag where further evidence is required.
          </p>
          <p>
            DamagesExpertWitness.co.uk connects UK solicitors and counsel with
            qualified experts across{" "}
            <Link href="/practice-areas/personal-injury-quantum">
              personal injury quantum
            </Link>
            ,{" "}
            <Link href="/practice-areas/clinical-negligence">
              clinical negligence
            </Link>
            ,{" "}
            <Link href="/practice-areas/commercial-damages">
              commercial litigation
            </Link>
            , and{" "}
            <Link href="/practice-areas/international-arbitration">
              international arbitration
            </Link>
            . Each engagement is matched to the appropriate discipline and heads of
            loss.
          </p>

          <h2>What Is Quantum?</h2>
          <p>
            Quantum is the amount of damages  -  the financial measure of the
            claimant&apos;s loss. Quantum experts apply established methodologies:
            multiplier/multiplicand analysis using Ogden Tables and the prescribed
            discount rate in personal injury; but-for counterfactual modelling in
            commercial breach claims; DCF and fair market value techniques in
            investment treaty arbitration; and account of profits analysis in IP
            disputes. The expert&apos;s report must separate facts, assumptions, and
            opinion, and show workings so that the opposing party and the tribunal
            can test the analysis.
          </p>
          <p>
            See our{" "}
            <Link href="/glossary#quantum">quantum glossary entry</Link> and{" "}
            <Link href="/types-of-damages">types of damages guide</Link> for the
            legal framework within which quantum is assessed.
          </p>

          <h2>General Damages vs Special Damages</h2>
          <p>
            General damages compensate non-quantifiable harm assessed by the court  - 
            in personal injury, PSLA, loss of amenity, and Smith v Manchester awards
            for handicap on the labour market. Special damages compensate provable
            financial losses: past and future earnings, care, medical expenses, and
            pension loss. The damages expert witness quantifies special damages and
            pecuniary heads; general damages in PI are usually assessed by the judge
            using Judicial College Guidelines without expert quantification.
          </p>
          <p>
            In commercial litigation, lost profits (expectation damages) are the
            primary compensatory head, often quantified by forensic accountants using
            but-for analysis. Consequential losses are treated as special damages and
            must satisfy <em>Hadley v Baxendale</em> remoteness. The distinction
            matters for instruction: ensure your expert is briefed on which heads
            require quantification and which remain for judicial assessment.
          </p>

          <h2>CPR Part 35 and Expert Duties</h2>
          <p>
            In civil proceedings in England and Wales, expert evidence is governed by
            Civil Procedure Rules Part 35 and Practice Direction 35. The expert owes
            an overriding duty to the court, not the instructing party. Reports must
            state the substance of all material instructions, comply with the
            prescribed format, and address range of opinion where appropriate.
            Non-compliance can result in exclusion of evidence or adverse costs
            orders.
          </p>
          <p>
            CPR 35.7 allows the court to direct appointment of a Single Joint Expert
            (SJE). Party-appointed experts (PAEs) remain standard in high-value and
            complex disputes. In family financial remedy proceedings, FPR Part 25
            imposes equivalent duties. International arbitration follows the IBA Rules
            on the Taking of Evidence, with similar independence requirements for
            party-appointed and tribunal-appointed experts.
          </p>
          <p>
            Full detail on credentials and compliance is on our{" "}
            <Link href="/qualifications">qualifications page</Link> and in the{" "}
            <Link href="/guides/single-joint-expert-damages">
              Single Joint Expert guide
            </Link>
            .
          </p>

          <h2>How a Damages Expert Differs from Other Experts</h2>
          <p>
            Medical experts establish injury, treatment needs, and life expectancy.
            Care experts assess hours of care and hourly rates. Accommodation experts
            opine on property adaptations. The quantum expert uses those inputs to
            capitalise annual costs, calculate net loss of earnings, and prepare the
            financial schedule. In commercial cases, industry experts may explain
            market conditions, but the forensic accountant quantifies the financial
            impact. Coordination between disciplines early avoids inconsistent
            assumptions in the Schedule of Loss.
          </p>

          <h2>When to Instruct a Damages Expert Witness</h2>
          <p>
            Instruct as early as practicable  -  ideally at pre-action or immediately on
            issue  -  so the expert can advise on document preservation, viable heads of
            loss, and whether actuarial or care expert input is needed. Delay risks
            incomplete analysis, rushed assumptions, and a report that cannot withstand
            scrutiny at trial or in arbitration.
          </p>
          <ul>
            <li>
              <strong>Personal injury / clinical negligence:</strong> when pecuniary
              losses exceed trivial amounts, future loss of earnings or care is in
              issue, or pension loss requires Ogden Tables 35–38.
            </li>
            <li>
              <strong>Commercial litigation:</strong> when lost profits, wasted
              expenditure, or consequential losses require but-for modelling and
              financial records analysis.
            </li>
            <li>
              <strong>Arbitration:</strong> when treaty or contract damages require DCF,
              fair market value, or Chorzów Factory full reparation quantification.
            </li>
            <li>
              <strong>Professional negligence:</strong> when SAAMCo scope requires
              quantification of the financial loss within the adviser&apos;s duty.
            </li>
          </ul>
          <p>
            Use our{" "}
            <Link href="/how-to-instruct">step-by-step instruction guide</Link>,{" "}
            <Link href="/fees">fees guide</Link>, and{" "}
            <Link href="/case-types">case types hub</Link> to identify the right
            expert for your matter. Submit an instruction via{" "}
            <Link href="/contact">contact</Link> for a match within one business day.
          </p>

          <RelatedLinks links={relatedLinks} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
