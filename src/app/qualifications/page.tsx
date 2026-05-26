import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { experts } from "@/data/experts";

const PATH = "/qualifications";

export const metadata = createMetadata({
  title:
    "Damages Expert Witness Qualifications UK | ACA, CFA & Forensic Credentials",
  description:
    "What credentials should a UK damages expert witness hold? ACA, CFA, CFE, actuarial, and APIL accreditation explained — plus CPR Part 35 and FPR Part 25 compliance.",
  path: PATH,
});

const relatedLinks = [
  { href: "/experts", label: "Our Expert Witnesses" },
  { href: "/what-is-a-damages-expert-witness", label: "What Is a Damages Expert Witness?" },
  { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  { href: "/fees", label: "Expert Witness Fees" },
  { href: "/glossary#cpr-part-35", label: "CPR Part 35 (Glossary)" },
  { href: "/contact", label: "Instruct an Expert Witness" },
];

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Qualifications", path: PATH },
          ]),
        ]}
      />
      <PageHero
        title="Damages Expert Witness Qualifications & Credentials"
        subtitle="What to look for when instructing forensic accountants, actuaries, and economists for UK litigation and arbitration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <p>
            Instructing a damages expert witness without verifying credentials and
            CPR Part 35 compliance exposes your client to wasted costs, excluded
            evidence, and adverse costs orders. This page sets out the professional
            qualifications, experience, and procedural standards UK solicitors should
            require before appointing a quantum expert.
          </p>

          <h2>Three Expert Profiles</h2>
          <p>
            Damages quantification draws on three principal disciplines. The right
            expert depends on heads of loss, forum, and complexity — not every claim
            requires all three.
          </p>

          <h3>Forensic Accountant (Commercial &amp; PI Quantum)</h3>
          <p>
            Forensic accountants quantify loss of earnings, commercial lost profits,
            wasted expenditure, IP damages, and professional negligence quantum. Look
            for:
          </p>
          <ul>
            <li>
              <strong>ACA or FCA</strong> — Associate or Fellow of the Institute of
              Chartered Accountants in England and Wales (ICAEW)
            </li>
            <li>
              <strong>ACCA or FCCA</strong> — Chartered Certified Accountant
              credentials
            </li>
            <li>
              <strong>CFA</strong> — Chartered Financial Analyst (relevant for valuation
              and investment analysis)
            </li>
            <li>
              <strong>CFE</strong> — Certified Fraud Examiner (where fraud or dishonesty
              context affects quantum)
            </li>
            <li>
              <strong>APIL First Tier accreditation</strong> — for personal injury and
              clinical negligence specialists
            </li>
            <li>
              <strong>Fellow of the Expert Witness Institute (FEWI)</strong> —
              demonstrates dedicated expert witness practice
            </li>
          </ul>

          <h3>Actuary (Pension Loss &amp; Life Expectancy)</h3>
          <p>
            Actuaries are instructed for complex defined benefit pension loss, cash
            equivalent transfer value (CETV) analysis, periodical payments order (PPO)
            modelling indexed to ASHE, and fatal accident dependency claims under the
            Fatal Accidents Act 1976. The benchmark credential is:
          </p>
          <ul>
            <li>
              <strong>FIA</strong> — Fellow of the Institute and Faculty of Actuaries
            </li>
          </ul>
          <p>
            Actuaries work alongside forensic accountants on Ogden Tables 35–38 pension
            loss and life expectancy assumptions. See{" "}
            <Link href="/services#pension-loss">pension loss assessment</Link> and{" "}
            <Link href="/case-types/pension-loss-calculation">
              pension loss case type
            </Link>
            .
          </p>

          <h3>Economist / Academic (International Arbitration)</h3>
          <p>
            Investment treaty and high-value commercial arbitration often require
            economists with advanced academic training and tribunal experience:
          </p>
          <ul>
            <li>
              <strong>PhD in Economics or Finance</strong> — rigorous quantitative
              training for DCF and econometric analysis
            </li>
            <li>
              <strong>IBA Rules on Evidence experience</strong> — party-appointed and
              tribunal-appointed expert proceedings
            </li>
            <li>
              <strong>Publication and ranking recognition</strong> — e.g. Who&apos;s Who
              Legal arbitration expert witness listings where applicable
            </li>
            <li>
              <strong>Track record in ICC, LCIA, ICSID, and UNCITRAL</strong> forums
            </li>
          </ul>
          <p>
            See our{" "}
            <Link href="/practice-areas/international-arbitration">
              international arbitration practice area
            </Link>{" "}
            and{" "}
            <Link href="/guides/international-arbitration-quantum">
              arbitration quantum guide
            </Link>
            .
          </p>

          <h2>Experience Requirements</h2>
          <p>
            Beyond formal credentials, solicitors should verify practical quantum
            experience:
          </p>
          <ul>
            <li>Minimum 10 years in forensic accounting, actuarial, or economic damages work</li>
            <li>Regular preparation of CPR Part 35 compliant expert reports</li>
            <li>Prior oral evidence in the High Court, County Court, Employment Tribunal, or arbitration</li>
            <li>Professional indemnity insurance at appropriate limits for the claim value</li>
            <li>No conflict of interest and willingness to comply with the Ikarian Reefer duty of independence</li>
          </ul>
          <p>
            Request a CV, list of recent cases (anonymised if necessary), and sample
            report structure before confirming instruction. Our panel profiles are on the{" "}
            <Link href="/experts">experts page</Link>.
          </p>

          <h2>CPR Part 35 and FPR Part 25</h2>
          <p>
            Civil Procedure Rules Part 35 and Practice Direction 35 govern expert
            evidence in civil proceedings. Experts must be independent, provide
            objective opinions within their expertise, and prepare reports in the
            prescribed format. The expert&apos;s overriding duty is to the court. Material
            instructions must be disclosed in the report. Experts may meet under CPR
            35.12 and produce a joint statement identifying agreements and disagreements.
          </p>
          <p>
            In family financial remedy proceedings, Family Procedure Rules Part 25
            applies equivalent duties. Court permission is required for expert evidence,
            and fees may need advance approval. See{" "}
            <Link href="/glossary#cpr-part-35">CPR Part 35</Link> and{" "}
            <Link href="/glossary#fpr-part-25">FPR Part 25</Link> in our glossary.
          </p>
          <p>
            International arbitration is not governed by CPR Part 35, but tribunals
            expect comparable independence under the IBA Rules on the Taking of Evidence.
            Party experts should meet before the hearing and produce joint documents
            where the tribunal directs.
          </p>

          <h2>APIL Accreditation (PI Specialists)</h2>
          <p>
            The Association of Personal Injury Lawyers (APIL) operates an expert witness
            accreditation scheme. First Tier accreditation indicates the expert has
            demonstrated competence in personal injury quantum and understands PI
            procedure and Schedules of Loss. For clinical negligence and catastrophic
            injury, APIL accreditation alongside FCA/ACA credentials is a strong
            indicator of specialist capability. AvMA and other directories provide
            additional verification for clinical negligence matters.
          </p>

          <h2>Red Flags</h2>
          <p>
            Do not instruct an expert who exhibits any of the following:
          </p>
          <ul>
            <li>
              <strong>Advocacy in the report</strong> — arguing the client&apos;s case
              rather than providing independent opinion
            </li>
            <li>
              <strong>Contingency or success fees</strong> — experts must not have a
              financial interest in the outcome (CPR Part 35)
            </li>
            <li>
              <strong>Inadequate PI insurance</strong> — or refusal to confirm cover
            </li>
            <li>
              <strong>No prior litigation experience</strong> — academic economists
              without tribunal testimony may struggle under cross-examination
            </li>
            <li>
              <strong>Failure to disclose material instructions</strong> — or selective
              presentation of documents
            </li>
            <li>
              <strong>Unwillingness to engage in joint expert process</strong> — where
              SJE or CPR 35.12 meeting is directed
            </li>
            <li>
              <strong>Practising outside area of expertise</strong> — e.g. a general
              accountant without forensic damages experience instructed on complex
              arbitration DCF
            </li>
            <li>
              <strong>Conflict of interest</strong> — prior advisory relationship with
              the opposing party without disclosure
            </li>
          </ul>
          <p>
            If in doubt, obtain a second opinion on credentials or use our matching
            service to identify a vetted expert for your practice area and heads of loss.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="rounded border border-border bg-white p-6 shadow-card"
            >
              <h3 className="text-lg font-bold text-heading">{expert.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {expert.jobTitle}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-body">
                {expert.credentials.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="prose-content mx-auto mt-10 max-w-3xl">
          <RelatedLinks links={relatedLinks} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
