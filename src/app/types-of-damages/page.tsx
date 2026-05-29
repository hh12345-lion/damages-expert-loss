import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const PATH = "/types-of-damages";
const H1 = "Types of Damages in UK Law: A Complete Guide for Solicitors";
const DESCRIPTION =
  "The complete guide to types of damages recoverable in UK litigation  -  general damages, special damages, pecuniary loss, non-pecuniary loss, compensatory, aggravated, and restitutionary damages explained.";

export const metadata = createMetadata({
  title:
    "Types of Damages in UK Law | General, Special, Pecuniary & Non-Pecuniary Explained",
  description: DESCRIPTION,
  path: PATH,
});

const relatedLinks = [
  { href: "/case-types", label: "Case Types Requiring a Damages Expert" },
  { href: "/services", label: "Damages Expert Witness Services" },
  { href: "/glossary", label: "Damages & Quantum Glossary" },
  { href: "/guides", label: "Solicitor Guides" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Instruct an Expert Witness" },
];

export default function TypesOfDamagesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Types of Damages", path: PATH },
          ]),
          articleSchema({
            headline: H1,
            description: DESCRIPTION,
            path: PATH,
            aboutServiceId: "commercial-loss-profits",
          }),
        ]}
      />
      <PageHero
        title={H1}
        subtitle="Definition-first guide to recoverable damages in UK civil litigation and arbitration  -  for solicitors instructing quantum experts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Types of Damages" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <p className="leading-relaxed text-body">
            Understanding the taxonomy of damages is essential before instructing a
            quantum expert or drafting a Schedule of Loss. UK law distinguishes
            damages by function (compensatory, aggravated, exemplary), by
            quantifiability (general versus special), and by whether the loss is
            financial (pecuniary) or non-financial (non-pecuniary). This guide sets
            out the framework solicitors need when assessing heads of loss across{" "}
            <Link href="/practice-areas/personal-injury-quantum">
              personal injury
            </Link>
            ,{" "}
            <Link href="/practice-areas/commercial-damages">
              commercial litigation
            </Link>
            , and{" "}
            <Link href="/practice-areas/international-arbitration">
              international arbitration
            </Link>
            . For expert support on quantification, see our{" "}
            <Link href="/services">damages expert witness services</Link> and{" "}
            <Link href="/contact">instruction form</Link>.
          </p>

          <h2 id="compensatory-principle">The Compensatory Principle</h2>
          <p>
            Compensatory damages aim to restore the claimant to the position they
            would have been in had the wrong not occurred. In tort, the classic
            formulation is that the claimant should receive the sum that puts them
            in the same position as if the tort had not been committed (
            <em>Livingstone v Rawyards Coal Co</em> (1880) 5 App Cas 25). In
            contract, the parallel principle requires putting the innocent party in
            the position they would have been in if the contract had been performed (
            <em>Robinson v Harman</em> [1848] 1 Ex 850).
          </p>
          <p>
            The compensatory principle underpins expectation damages (loss of the
            bargain), reliance damages (wasted expenditure), and most pecuniary
            special damages in personal injury. It does not justify punitive or
            exemplary awards except in the limited categories recognised at common
            law. A{" "}
            <Link href="/what-is-a-damages-expert-witness">
              damages expert witness
            </Link>{" "}
            quantifies the financial expression of compensatory loss; the court
            assesses non-pecuniary general damages such as pain, suffering, and loss
            of amenity (PSLA) without expert quantification, typically using the
            Judicial College Guidelines.
          </p>

          <h2 id="general-vs-special">General Damages vs Special Damages</h2>
          <p>
            General damages compensate harm that the court assesses as a whole
            without precise mathematical proof of amount. Special damages compensate
            quantifiable financial losses proved by evidence, usually supported by a
            forensic accountant, actuary, or economist.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[640px]">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Definition</th>
                  <th>Examples</th>
                  <th>Quantification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>General Damages</td>
                  <td>
                    Non-quantifiable harm assessed by the court as a global sum
                  </td>
                  <td>
                    PSLA, loss of amenity, Smith v Manchester handicap on the labour
                    market
                  </td>
                  <td>Judicial College Guidelines; judicial discretion</td>
                </tr>
                <tr>
                  <td>Special Damages</td>
                  <td>
                    Quantifiable financial loss proved on evidence, past and future
                  </td>
                  <td>
                    Past and future loss of earnings, care costs, medical expenses,
                    pension loss
                  </td>
                  <td>
                    Forensic accountant / actuary; Ogden Tables for future pecuniary
                    heads
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            In commercial litigation, expectation damages (lost profits) function as
            the primary compensatory head, while consequential losses are often
            treated as special damages subject to <em>Hadley v Baxendale</em> [1854]
            remoteness. See our{" "}
            <Link href="/guides/commercial-damages-but-for-guide">
              commercial damages and but-for guide
            </Link>{" "}
            and the <Link href="/glossary#general-damages">general damages</Link> and{" "}
            <Link href="/glossary#special-damages">special damages</Link> glossary
            entries for further detail.
          </p>

          <h2 id="pecuniary-vs-non-pecuniary">Pecuniary vs Non-Pecuniary Loss</h2>
          <p>
            Pecuniary loss is financial loss measurable in monetary terms; non-pecuniary
            loss is harm not readily expressed as a sum of money, such as pain and
            suffering.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[560px]">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Definition</th>
                  <th>Recoverable?</th>
                  <th>Expert needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pecuniary</td>
                  <td>Financial loss capable of monetary quantification</td>
                  <td>Yes (subject to causation and remoteness)</td>
                  <td>Usually yes  -  forensic accountant, actuary, or economist</td>
                </tr>
                <tr>
                  <td>Non-pecuniary</td>
                  <td>Pain, suffering, loss of amenity, injury to feelings</td>
                  <td>Yes in appropriate claims</td>
                  <td>No  -  assessed by the judge (expert may assist on financial context only)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="types-by-category">Types of Damages by Category</h2>
          <p>
            Beyond the general/special divide, UK law recognises distinct categories
            of damages with different purposes and availability. The table below
            summarises when each arises and whether expert evidence is typically
            required.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[720px]">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Definition</th>
                  <th>Examples</th>
                  <th>Expert needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Compensatory</td>
                  <td>
                    Restore claimant to pre-wrong position  -  expectation, reliance, or
                    tortious loss
                  </td>
                  <td>
                    Lost profits, loss of earnings, care costs, wasted expenditure
                  </td>
                  <td>Yes for pecuniary heads</td>
                </tr>
                <tr>
                  <td>Aggravated</td>
                  <td>
                    Additional sum where defendant&apos;s conduct was high-handed or
                    outrageous (tort)
                  </td>
                  <td>Insult added to injury; oppressive conduct in defamation</td>
                  <td>Rarely  -  court assessment; financial context occasionally relevant</td>
                </tr>
                <tr>
                  <td>Exemplary / Punitive</td>
                  <td>
                    Punish defendant and deter repetition  -  limited categories (
                    <em>Rookes v Barnard</em> [1964])
                  </td>
                  <td>Oppressive government conduct; calculated profit-making wrong</td>
                  <td>No  -  not available in ordinary contract claims</td>
                </tr>
                <tr>
                  <td>Nominal</td>
                  <td>Token award where breach or tort proved but no loss suffered</td>
                  <td>Technical breach with no measurable financial consequence</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Restitutionary</td>
                  <td>
                    Disgorge unjust enrichment or account for profits rather than
                    compensate loss
                  </td>
                  <td>Account of profits in IP; disgorgement in fiduciary breach</td>
                  <td>Yes  -  forensic analysis of profits and infringer accounts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>1. Compensatory Damages</h3>
          <p>
            Compensatory damages are the default remedy in contract and tort. In
            contract, subcategories include expectation damages (benefit of the
            bargain), reliance damages (expenditure wasted on the contract), and
            occasionally damages measured by the defendant&apos;s gain where
            appropriate. In tort and PI, compensatory damages cover both pecuniary
            special damages and non-pecuniary general damages. Our{" "}
            <Link href="/services#commercial-loss-profits">
              commercial loss and lost profits
            </Link>{" "}
            service applies but-for methodology under the Robinson v Harman standard.
          </p>

          <h3>2. Aggravated Damages</h3>
          <p>
            Aggravated damages compensate for mental distress caused by the manner in
            which the wrong was committed, not the wrong itself. They are available in
            tort, not in ordinary breach of contract. Quantum experts rarely quantify
            aggravated damages, though financial evidence may inform the court&apos;s
            assessment of the claimant&apos;s circumstances.
          </p>

          <h3>3. Exemplary (Punitive) Damages</h3>
          <p>
            Exemplary damages punish the defendant and mark the court&apos;s disapproval.
            They are confined to categories established in <em>Rookes v Barnard</em>{" "}
            [1964] AC 1129 and subsequent authority. They are not recoverable for
            ordinary commercial breach of contract. No damages expert is instructed
            solely for exemplary awards.
          </p>

          <h3>4. Nominal Damages</h3>
          <p>
            Where liability is established but no compensatable loss is proved, the
            court may award a nominal sum (traditionally a small token amount). Expert
            evidence on quantum is unnecessary, though solicitors may still need advice
            on whether pursuing a claim is cost-effective.
          </p>

          <h3>5. Restitutionary Damages</h3>
          <p>
            Restitutionary remedies include account of profits and disgorgement of
            unjust enrichment. In intellectual property disputes, the claimant may
            elect between compensatory lost profits and an account of the
            defendant&apos;s profits. Forensic accountants analyse infringer accounts
            and reasonable royalty alternatives  -  see{" "}
            <Link href="/case-types/ip-infringement-damages">
              IP infringement damages
            </Link>{" "}
            and <Link href="/services#ip-infringement-damages">IP infringement services</Link>.
          </p>

          <h2 id="personal-injury-heads">Personal Injury Damages  -  Key Heads</h2>
          <p>
            Personal injury and clinical negligence claims combine general and special
            damages. The quantum expert&apos;s role is to quantify pecuniary special
            damages in a Schedule of Loss compliant with CPR Part 35.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[640px]">
              <thead>
                <tr>
                  <th>Head</th>
                  <th>Type</th>
                  <th>How Quantified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PSLA</td>
                  <td>General</td>
                  <td>Judicial College Guidelines</td>
                </tr>
                <tr>
                  <td>Past loss of earnings</td>
                  <td>Special</td>
                  <td>Net earnings × period from accident to trial/settlement</td>
                </tr>
                <tr>
                  <td>Future loss of earnings</td>
                  <td>Special</td>
                  <td>Annual multiplicand × Ogden multiplier at prescribed discount rate</td>
                </tr>
                <tr>
                  <td>Past care costs</td>
                  <td>Special</td>
                  <td>Actual cost incurred (receipts and care expert evidence)</td>
                </tr>
                <tr>
                  <td>Future care costs</td>
                  <td>Special</td>
                  <td>Annual care cost × Ogden multiplier (life expectancy from medical expert)</td>
                </tr>
                <tr>
                  <td>Pension loss</td>
                  <td>Special</td>
                  <td>Ogden Tables 35–38; actuary for complex defined benefit schemes</td>
                </tr>
                <tr>
                  <td>Medical expenses</td>
                  <td>Special</td>
                  <td>Receipts plus projected future treatment costs</td>
                </tr>
                <tr>
                  <td>Smith v Manchester</td>
                  <td>General</td>
                  <td>Typically up to two years&apos; net earnings for residual labour market handicap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For methodology detail, see{" "}
            <Link href="/guides/loss-of-earnings-ogden-tables-guide">
              loss of earnings and Ogden Tables
            </Link>
            ,{" "}
            <Link href="/guides/schedule-of-loss-expert-evidence">
              Schedule of Loss expert evidence
            </Link>
            , and{" "}
            <Link href="/case-types/loss-of-earnings-personal-injury">
              loss of earnings case type
            </Link>
            .
          </p>

          <h2 id="commercial-heads">Commercial Damages  -  Key Heads</h2>
          <p>
            Commercial and contractual disputes focus on financial compensatory heads,
            often quantified through counterfactual (but-for) modelling by a forensic
            accountant.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[640px]">
              <thead>
                <tr>
                  <th>Head</th>
                  <th>Type</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lost profits</td>
                  <td>Expectation (compensatory)</td>
                  <td>But-for counterfactual model vs actual performance</td>
                </tr>
                <tr>
                  <td>Wasted expenditure</td>
                  <td>Reliance</td>
                  <td>Verified expenditure on the contract or project</td>
                </tr>
                <tr>
                  <td>Consequential loss</td>
                  <td>Special</td>
                  <td>
                    <em>Hadley v Baxendale</em> foreseeability; but-for where appropriate
                  </td>
                </tr>
                <tr>
                  <td>Loss of chance</td>
                  <td>Probabilistic</td>
                  <td>
                    <em>Allied Maples</em> percentage reduction of full loss or separate
                    valuation of lost opportunity
                  </td>
                </tr>
                <tr>
                  <td>Account of profits</td>
                  <td>Restitutionary</td>
                  <td>Analysis of infringer&apos;s or wrongdoer&apos;s profits</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Explore relevant{" "}
            <Link href="/case-types/commercial-contract-damages">
              commercial contract damages
            </Link>
            ,{" "}
            <Link href="/case-types/professional-negligence-damages">
              professional negligence quantum
            </Link>
            , and{" "}
            <Link href="/practice-areas/commercial-damages">
              commercial practice area
            </Link>{" "}
            pages for instruction pathways.
          </p>

          <h2 id="discount-rate">Discount Rate &amp; Present Value</h2>
          <p>
            The discount rate is the rate used to reduce future pecuniary losses to
            present value when awarding a lump sum, reflecting the assumption that the
            claimant will invest the award and achieve a real return. Under the Damages
            Act 1996 as amended by the Civil Liability Act 2018, the Lord Chancellor has
            set the prescribed discount rate for future pecuniary loss in personal injury
            at <strong>-0.25%</strong>. A negative rate increases Ogden multipliers
            and therefore lump sum awards for future loss of earnings, care, and pension
            loss.
          </p>
          <p>
            The expert applies the multiplier from the Government Actuary&apos;s
            Department Ogden Tables to an annual multiplicand (net annual loss) for
            each future head. The discount rate does not apply to past losses, which
            are awarded at actual value plus interest. See{" "}
            <Link href="/glossary#discount-rate">discount rate</Link> and{" "}
            <Link href="/glossary#civil-liability-act-2018">
              Civil Liability Act 2018
            </Link>{" "}
            in our glossary, and the <Link href="/faq">FAQ on discount rate impact</Link>.
          </p>

          <h2 id="interest-on-damages">Interest on Damages</h2>
          <p>
            Courts award interest on damages under the Senior Courts Act 1981 section
            35A (and equivalent provisions in the County Courts Act 1984). The purpose
            is to compensate the claimant for being kept out of their money from the
            date the loss arose until payment.
          </p>
          <p>
            For special damages, interest typically runs from the date of accrual of
            each loss (often the date of accident or breach) to trial or settlement,
            commonly at half the short-term investment account rate for the relevant
            period. For general damages in personal injury, a rate of 2% per annum from
            service of proceedings to trial is conventional. Quantum experts calculate
            interest on past pecuniary losses as part of the Schedule of Loss, ensuring
            the figures align with the heads of loss and dates of loss asserted in the
            pleadings.
          </p>
          <p>
            Future losses capitalised via Ogden methodology are not subject to
            additional interest in the same way, because the lump sum is discounted to
            present value at award. Solicitors should ensure interest calculations are
            updated before trial if there is a material delay, and that Counter-Schedules
            address interest assumptions consistently.
          </p>

          <RelatedLinks links={relatedLinks} title="Related Resources" />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
