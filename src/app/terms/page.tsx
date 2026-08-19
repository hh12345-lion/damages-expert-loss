import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const PATH = "/terms";

export const metadata = createMetadata({
  title: "Terms of Use | DamagesExpertWitness.co.uk",
  description:
    "Terms of use for DamagesExpertWitness.co.uk  -  referral service terms, limitations of liability, and governing law.",
  path: PATH,
  noindex: true,
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: PATH },
          ]),
        ]}
      />
      <PageHero
        title="Terms of Use"
        subtitle="Terms governing your use of DamagesExpertWitness.co.uk and our expert witness referral service."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <p className="text-sm text-body">
            <strong>Last updated:</strong> 26 May 2025
          </p>

          <h2>About This Website</h2>
          <p>
            {SITE_NAME} ({SITE_URL}) is an expert witness referral service. We connect
            solicitors, barristers, law firms, and international arbitration counsel
            with qualified damages expert witnesses  -  including forensic accountants,
            actuaries, and economists  -  for litigation and arbitration matters.
          </p>
          <p>
            <strong>
              We are not a law firm. We do not provide legal advice, regulated legal
              services, or representation.
            </strong>{" "}
            Nothing on this website constitutes legal advice. You should obtain
            independent legal advice on liability, procedure, and strategy from your own
            lawyers. Expert witnesses introduced through our service provide independent
            expert evidence subject to their own terms, professional duties, and
            engagement letters.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to these Terms of Use. If you
            do not agree, you must not use the site. We may update these terms from time
            to time; the &quot;Last updated&quot; date will change accordingly. Your
            continued use after changes constitutes acceptance where permitted by law.
          </p>

          <h2>Referral Service</h2>
          <p>
            When you submit an instruction request, we use the information you provide
            to identify a suitable expert from our panel. We do not guarantee availability,
            acceptance of instruction, outcome of the case, or quantum figures. Any
            engagement with an expert is a separate contract between you (or your client)
            and the expert; we are not a party to that contract unless expressly agreed
            in writing.
          </p>
          <p>
            We do not supervise experts&apos; work product, methodology, or compliance
            with CPR Part 35  -  that remains the instructing solicitor&apos;s and the
            expert&apos;s responsibility. You must verify credentials, conflicts, and
            insurance before confirming instruction.
          </p>

          <h2>Website Content</h2>
          <p>
            Content on this website (guides, glossary, fee ranges, case types) is provided
            for general information for legal professionals. While we aim for accuracy,
            law and practice change. We make no warranty that content is complete,
            current, or suitable for your specific matter. Reliance on website content is
            at your own risk.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise stated, copyright in the website content belongs to{" "}
            {SITE_NAME} or its licensors. You may view and print pages for your internal
            business use. You must not reproduce, distribute, or commercially exploit
            content without our prior written consent.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE_NAME} excludes liability for
            any loss or damage arising from your use of the website or reliance on its
            content, including indirect or consequential loss, loss of profit, or loss of
            opportunity. Nothing in these terms excludes liability for death or personal
            injury caused by negligence, fraud, or any liability that cannot be excluded
            under English law.
          </p>
          <p>
            Our total liability to you in connection with the referral service shall not
            exceed £100 except where a higher limit is required by law.
          </p>

          <h2>Third-Party Links and Experts</h2>
          <p>
            The website may link to third-party sites (directories, legislation, ICO).
            We are not responsible for third-party content. Experts on our panel are
            independent professionals; their views are their own and do not represent
            {SITE_NAME}.
          </p>

          <h2>Data Protection</h2>
          <p>
            Our use of personal data is described in the{" "}
            <Link href="/privacy">Privacy Policy</Link>, which forms part of these terms.
          </p>

          <h2>Governing Law and Jurisdiction</h2>
          <p>
            These terms are governed by the laws of <strong>England and Wales</strong>.
            The courts of England and Wales have exclusive jurisdiction to settle any
            dispute arising from or connected with these terms or your use of the website,
            subject to any mandatory rights you may have as a consumer (this site is
            intended for use by legal and professional users).
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> or the{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}
