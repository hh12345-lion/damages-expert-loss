import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/fees";

export const metadata = createMetadata({
  title:
    "Damages Expert Witness Fees UK | 2025 Hourly Rates & Report Costs",
  description:
    "UK damages expert witnesses charge £150–£600+/hour depending on specialism. Learn about PI quantum rates, commercial damages fees, and arbitration expert costs.",
  path: PATH,
});

const relatedLinks = [
  { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  { href: "/qualifications", label: "Expert Qualifications" },
  { href: "/faq", label: "Damages Expert Witness FAQ" },
  { href: "/services", label: "Damages Expert Witness Services" },
  { href: "/contact", label: "Instruct an Expert Witness" },
];

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Fees", path: PATH },
          ]),
        ]}
      />
      <PageHero
        title="Damages Expert Witness Fees UK"
        subtitle="2025 indicative hourly rates and report costs for personal injury quantum, commercial damages, international arbitration, and actuarial work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fees" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <p>
            Damages expert witness fees vary by discipline, seniority, claim complexity,
            and forum. Figures below are indicative UK market ranges for 2025 — confirm
            rates in writing before work commences. We do not operate contingency fees;
            experts charge on time spent or agreed fixed fees. See{" "}
            <Link href="/how-to-instruct">how to instruct</Link> for letter of
            instruction and fee agreement points.
          </p>

          <h2>Personal Injury Quantum Experts</h2>
          <p>
            Forensic accountants quantifying loss of earnings, pension loss, and
            Schedules of Loss in PI and clinical negligence typically charge:
          </p>
          <ul>
            <li>
              <strong>£150–£300 per hour</strong> — general PI quantum (associate to
              mid-level forensic accountant)
            </li>
            <li>
              <strong>£250–£450 per hour</strong> — senior specialist or FCA with APIL
              accreditation and High Court experience
            </li>
            <li>
              <strong>Schedule of Loss preparation:</strong> £1,500–£6,000 depending on
              heads of loss and document volume
            </li>
            <li>
              <strong>Report update before trial:</strong> £500–£2,000 for supplementary
              quantum reflecting new evidence
            </li>
          </ul>
          <p>
            Catastrophic injury and clinical negligence with multiple future heads,
            accommodation (post <em>George v Biggs</em> [2023]), and PPO modelling may
            exceed these ranges. See{" "}
            <Link href="/practice-areas/clinical-negligence">
              clinical negligence
            </Link>{" "}
            and{" "}
            <Link href="/guides/schedule-of-loss-expert-evidence">
              Schedule of Loss guide
            </Link>
            .
          </p>

          <h2>Commercial Damages Experts</h2>
          <p>
            Commercial forensic accountants applying but-for lost profits analysis and
            consequential loss quantification typically charge:
          </p>
          <ul>
            <li>
              <strong>£250–£500 per hour</strong> — general commercial quantum
            </li>
            <li>
              <strong>£450–£700 per hour</strong> — senior specialist for High Court and
              complex multi-year counterfactual models
            </li>
            <li>
              <strong>Complex quantum report:</strong> £8,000–£30,000+ depending on
              trading history, number of scenarios, and IP or professional negligence
              context
            </li>
          </ul>
          <p>
            Shareholder disputes, business interruption, and professional negligence
            (SAAMCo scope) often require extensive document review and sensitivity
            analysis. See{" "}
            <Link href="/services#commercial-loss-profits">
              commercial loss and lost profits
            </Link>
            .
          </p>

          <h2>International Arbitration Quantum Experts</h2>
          <p>
            Economists and senior forensic specialists in ICC, LCIA, ICSID, and UNCITRAL
            proceedings command premium rates reflecting cross-border complexity,
            DCF scrutiny, and hearing preparation:
          </p>
          <ul>
            <li>
              <strong>£500–£1,000+ per hour</strong> — senior arbitration quantum expert
            </li>
            <li>
              <strong>Major arbitration engagement:</strong> £50,000–£500,000+ for
              multi-phase reports, replies, witness conferencing, and oral evidence
            </li>
          </ul>
          <p>
            Investment treaty cases involving Chorzów Factory full reparation, fair
            market value, and lost profits DCF models sit at the upper end. Tribunal-appointed
            experts&apos; fees are typically borne by the parties as directed in the
            procedural order.
          </p>

          <h2>Actuaries (Pension Loss)</h2>
          <p>
            Fellows of the Institute and Faculty of Actuaries (FIA) instructed for
            defined benefit pension loss, CETV analysis, fatal accident dependency, and
            PPO modelling typically charge <strong>£200–£450 per hour</strong>. Fixed
            fees for pension loss reports in straightforward cases may be agreed; complex
            schemes require actuarial and forensic accountant coordination on Ogden
            Tables 35–38.
          </p>

          <h2>Fee Structures</h2>
          <p>
            Common arrangements include:
          </p>
          <ul>
            <li>
              <strong>Hourly rates</strong> — time recorded against agreed rate card;
              most flexible for evolving scope
            </li>
            <li>
              <strong>Fixed fee</strong> — for defined deliverables (e.g. initial Schedule
              of Loss to trial window)
            </li>
            <li>
              <strong>Retainer</strong> — advance payment against future time in
              long-running arbitration
            </li>
          </ul>
          <p>
            <strong>Contingency and success fees are not permitted</strong> for expert
            witnesses under CPR Part 35 — the expert must remain independent. In family
            proceedings under FPR Part 25, court permission may be required for expert
            evidence and advance approval of fees.
          </p>

          <h2>Cost Recovery</h2>
          <p>
            In civil litigation in England and Wales, expert witness costs are generally
            recoverable as part of the winning party&apos;s costs, subject to assessment
            (standard or indemnity basis) and any costs management order cap. In personal
            injury, costs usually follow the event at conclusion of the claim. SJE fees
            are typically shared equally in the first instance unless the court orders
            otherwise.
          </p>
          <p>
            In arbitration, costs (including expert fees) are awarded in the tribunal&apos;s
            costs decision, often following the outcome on liability and quantum. Early
            agreement of expert fee arrangements in the joint letter (SJE) or individual
            letters (PAE) avoids disputes and wasted costs applications.
          </p>
          <p>
            For qualification requirements and instruction process, see{" "}
            <Link href="/qualifications">qualifications</Link> and{" "}
            <Link href="/contact">contact</Link> to obtain a tailored fee estimate for
            your matter.
          </p>

          <RelatedLinks links={relatedLinks} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
