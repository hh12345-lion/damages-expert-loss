import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const PATH = "/privacy";

export const metadata = createMetadata({
  title: "Privacy Policy | DamagesExpertWitness.co.uk",
  description:
    "Privacy policy for DamagesExpertWitness.co.uk  -  how we collect, use, and protect personal data under UK GDPR.",
  path: PATH,
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: PATH },
          ]),
        ]}
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How DamagesExpertWitness.co.uk handles your personal data under UK data protection law."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <p className="text-sm text-body">
            <strong>Last updated:</strong> 26 May 2025
          </p>
          <p>
            {SITE_NAME} ({SITE_URL}) is committed to protecting your privacy. This policy
            explains how we collect, use, store, and protect personal data when you use
            our website and instruction services. We process personal data in accordance
            with the UK General Data Protection Regulation (UK GDPR) and the Data
            Protection Act 2018.
          </p>

          <h2>Who We Are</h2>
          <p>
            {SITE_NAME} operates damagesexpertwitness.co.uk as a referral service
            connecting legal teams with qualified damages
            expert witnesses. We are not a law firm and do not provide legal advice. For
            data protection enquiries, contact us at{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
          </p>

          <h2>Data We Collect</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul>
            <li>
              <strong>Identity and contact data</strong>  -  name, firm name, job title,
              email address, telephone number, and postal address when you submit our
              contact or instruction form
            </li>
            <li>
              <strong>Case information</strong>  -  details you provide about your matter,
              practice area, heads of loss, forum, and urgency (may include information
              about clients where you disclose it in the instruction)
            </li>
            <li>
              <strong>Technical data</strong>  -  IP address, browser type, device
              information, and cookies where you consent to analytics
            </li>
            <li>
              <strong>Communications</strong>  -  correspondence by email or through our
              contact form
            </li>
          </ul>

          <h2>How We Use Your Data</h2>
          <p>We use personal data to:</p>
          <ul>
            <li>Respond to instruction requests and match you with suitable experts</li>
            <li>Communicate about your enquiry and referral</li>
            <li>Improve our website and services (where analytics consent is given)</li>
            <li>Comply with legal obligations and defend legal claims</li>
            <li>Maintain records for business administration and quality assurance</li>
          </ul>
          <p>
            <strong>Lawful bases:</strong> processing is based on (a) performance of
            steps at your request prior to a contract (responding to enquiries); (b) our
            legitimate interests in operating a referral service and improving the
            website, balanced against your rights; and (c) consent where required for
            non-essential cookies and marketing communications.
          </p>

          <h2>Sharing Your Data</h2>
          <p>
            We may share your contact and case details with expert witnesses on our
            panel solely for the purpose of responding to your instruction request.
            We use secure form processing (Google Sheets and/or webhook delivery) to
            transmit contact form submissions. We do not sell personal data to third
            parties.
          </p>
          <p>
            We may disclose data where required by law, court order, or regulatory
            authority, or to professional advisers bound by confidentiality.
          </p>

          <h2>International Transfers</h2>
          <p>
            Our website and form processors may store or process data outside the UK. Where
            transfers occur, we ensure appropriate safeguards (such as UK International
            Data Transfer Agreement addenda or adequacy regulations) are in place.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain enquiry and instruction data for as long as necessary to fulfil the
            referral, handle follow-up, and meet legal and regulatory requirements  - 
            typically up to six years for business records unless a longer period is
            required. Analytics data is retained according to the configured retention
            period in Google Analytics (where enabled and consented).
          </p>

          <h2>Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure in certain circumstances</li>
            <li>Restrict or object to processing in certain circumstances</li>
            <li>Data portability where processing is based on consent or contract</li>
            <li>Withdraw consent at any time (without affecting prior lawful processing)</li>
          </ul>
          <p>
            To exercise these rights, email {SITE_EMAIL}. You may lodge a complaint with
            the Information Commissioner&apos;s Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              rel="noopener noreferrer"
              target="_blank"
            >
              ico.org.uk
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            We use essential cookies for site functionality. Analytics cookies (e.g. Google
            Analytics) are used only where you have given consent via our cookie banner.
            You can withdraw consent at any time through your browser settings,{" "}
            <strong>Cookie Settings</strong> in the footer, or as described in our{" "}
            <Link href="/cookies">Cookie Policy</Link>.
          </p>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect
            personal data against unauthorised access, alteration, disclosure, or
            destruction. No transmission over the internet is completely secure; you
            provide information at your own risk where not using encrypted channels.
          </p>

          <h2>Children</h2>
          <p>
            Our services are directed at legal professionals. We do not knowingly collect
            data from children under 18.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date
            at the top will change when we do. Continued use of the site after changes
            constitutes acceptance of the updated policy where permitted by law.
          </p>

          <p>
            See also our <Link href="/terms">Terms of Use</Link> and{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}
