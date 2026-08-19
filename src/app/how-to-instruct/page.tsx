import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/how-to-instruct";

export const metadata = createMetadata({
  title:
    "How to Instruct a Damages Expert Witness | Step-by-Step Guide",
  description:
    "Step-by-step guide on instructing the right damages expert witness — SJE vs party-appointed, letters of instruction, and procedural compliance.",
  path: PATH,
});

const relatedLinks = [
  { href: "/qualifications", label: "Expert Qualifications" },
  { href: "/guides/single-joint-expert-damages", label: "Single Joint Expert Guide" },
  { href: "/what-is-a-damages-expert-witness", label: "What Is a Damages Expert Witness?" },
  { href: "/contact", label: "Instruct an Expert Witness" },
];

const steps = [
  {
    title: "Identify Your Practice Area",
    body: (
      <>
        Determine which audience and procedural framework applies: personal injury or
        clinical negligence (loss of earnings, care, pension); commercial litigation
        (lost profits, wasted expenditure, IP); family financial remedy (FPR Part 25);
        or international arbitration (ICC, LCIA, ICSID, UNCITRAL). Our{" "}
        <Link href="/practice-areas">practice areas hub</Link> routes each audience to
        the right experts and <Link href="/case-types">case types</Link>.
      </>
    ),
  },
  {
    title: "Identify Heads of Loss",
    body: (
      <>
        List every pecuniary head requiring quantification: earnings, pension, care,
        accommodation, lost profits, consequential loss, account of profits, or treaty
        damages. Cross-check against the{" "}
        <Link href="/types-of-damages">types of damages guide</Link> and relevant{" "}
        <Link href="/services">service pages</Link>. Instruct actuarial input early if
        defined benefit pension loss or PPO modelling is in issue.
      </>
    ),
  },
  {
    title: "Confirm Civil, Family, or Arbitration Framework",
    body: (
      <>
        CPR Part 35 applies in civil courts in England and Wales. FPR Part 25 applies
        in family financial remedy proceedings (court permission and fee approval may be
        required). International arbitration follows institutional rules and the IBA
        Rules on the Taking of Evidence  -  confirm the procedural timetable for expert
        reports and any tribunal directions on witness conferencing.
      </>
    ),
  },
  {
    title: "Decide: Single Joint Expert or Party-Appointed Expert?",
    body: null,
  },
  {
    title: "Verify Qualifications and Independence",
    body: (
      <>
        Confirm ACA/FCA, FIA, or PhD credentials as appropriate, APIL accreditation
        for PI, CPR Part 35 compliance, professional indemnity insurance, and no
        conflict of interest. See our{" "}
        <Link href="/qualifications">qualifications page</Link> and red flags checklist.
      </>
    ),
  },
  {
    title: "Prepare the Letter of Instruction",
    body: (
      <>
        The letter should identify issues for the expert, set out agreed and disputed
        facts, specify the legal framework without asking for legal advice, list
        documents provided, state the timetable, and address fees. For an SJE, agree the
        joint letter with the opponent or seek court determination of disputed terms.
        See the <Link href="/guides/single-joint-expert-damages">SJE guide</Link>.
      </>
    ),
  },
  {
    title: "Provide Documents and Manage the Timetable",
    body: (
      <>
        Supply complete financial records, pleadings, medical and care expert reports
        (where relevant), and prior expert reports. Agree extensions in writing if
        disclosure is late. Update the expert before trial if new evidence materially
        changes quantum. Submit your instruction via our{" "}
        <Link href="/contact">contact form</Link> for a matched expert within one
        business day.
      </>
    ),
  },
];

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "How to Instruct", path: PATH },
          ]),
        ]}
      />
      <PageHero
        title="How to Instruct a Damages Expert Witness"
        subtitle="A seven-step process for solicitors and counsel  -  from practice area identification to SJE vs party-appointed experts and arbitration hot-tubbing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How to Instruct" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <p>
            Instructing the right damages expert witness at the right time reduces
            costs, narrows issues, and produces court-ready quantum evidence. This guide
            is structured for the three audiences DamagesExpertWitness.co.uk serves:
            personal injury and clinical negligence solicitors, commercial litigation
            teams, and international arbitration counsel.
          </p>

          <h2>Three Audiences, One Process</h2>
          <p>
            <strong>PI and clinical negligence:</strong> instruct forensic accountants
            (often APIL-accredited) for Schedules of Loss; actuaries for complex pension
            and PPO work. <strong>Commercial litigation:</strong> instruct forensic
            accountants for but-for lost profits and consequential loss.{" "}
            <strong>International arbitration:</strong> instruct economists with IBA
            Rules experience, DCF capability, and witness conferencing preparation.
            Steps 1–3 tailor the framework; steps 4–7 are common to all forums.
          </p>

          <h2>Seven-Step Instruction Timeline</h2>
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="list-none pl-0">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="mt-0 text-lg font-semibold text-heading">
                      {step.title}
                    </h3>
                    {index === 3 ? (
                      <>
                        <p className="mt-2 leading-relaxed text-body">
                          The choice between a Single Joint Expert (SJE) and
                          party-appointed experts (PAEs) affects cost, adversarial
                          strategy, and timetable. Consider claim value, complexity, and
                          whether the court is likely to direct an SJE at the CMC.
                        </p>
                        <div className="mt-4 overflow-x-auto">
                          <table className="min-w-[640px]">
                            <thead>
                              <tr>
                                <th>Factor</th>
                                <th>Single Joint Expert (SJE)</th>
                                <th>Party-Appointed Expert (PAE)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Appointment</td>
                                <td>Joint instruction or court direction under CPR 35.7</td>
                                <td>Each party instructs own expert</td>
                              </tr>
                              <tr>
                                <td>Cost</td>
                                <td>Typically shared equally; one report</td>
                                <td>Two (or more) reports; joint meeting and statement</td>
                              </tr>
                              <tr>
                                <td>Best for</td>
                                <td>Lower-value PI, straightforward quantum</td>
                                <td>High-value clinical negligence, commercial, arbitration</td>
                              </tr>
                              <tr>
                                <td>Letter of instruction</td>
                                <td>Joint letter agreed by both parties or court-settled</td>
                                <td>Separate confidential instructions per party</td>
                              </tr>
                              <tr>
                                <td>Testing evidence</td>
                                <td>Cross-examination of single expert</td>
                                <td>Competing reports; CPR 35.12 joint statement</td>
                              </tr>
                              <tr>
                                <td>Arbitration</td>
                                <td>Tribunal-appointed expert under IBA Art 6</td>
                                <td>Party experts under IBA Art 5; hot-tubbing common</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h4 className="mt-6 text-base font-semibold text-heading">
                          Hot-tubbing and witness conferencing (arbitration)
                        </h4>
                        <p>
                          In international arbitration, tribunals frequently use
                          witness conferencing  -  colloquially &quot;hot-tubbing&quot;  - 
                          where experts give evidence concurrently and respond to each
                          other&apos;s and counsel&apos;s questions. This is distinct from
                          sequential cross-examination in English court trials. Prepare
                          party experts for joint sessions: agree methodology
                          differences in advance, produce IBA-compliant reports with
                          clear assumptions, and consider a pre-hearing expert meeting to
                          identify agreements. Our{" "}
                          <Link href="/guides/international-arbitration-quantum">
                            arbitration quantum guide
                          </Link>{" "}
                          covers tribunal-appointed experts and Chorzów Factory
                          quantification.
                        </p>
                      </>
                    ) : (
                      <div className="mt-2 leading-relaxed text-body">{step.body}</div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p>
            For fee expectations and cost recovery, agree terms in your letter of
            instruction before work begins. For CPR duties and credentials, see{" "}
            <Link href="/qualifications">qualifications</Link> and our{" "}
            <Link href="/glossary">glossary</Link>.
          </p>

          <RelatedLinks links={relatedLinks} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
