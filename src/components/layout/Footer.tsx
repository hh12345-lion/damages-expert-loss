import Link from "next/link";
import { footerColumns } from "@/data/nav";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { SITE_EMAIL, SITE_REGION_LABEL, SITE_SCOPE_NOTE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="text-sm text-white/70">
            DamagesExpertWitness.co.uk connects UK solicitors with damages expert
            witnesses across England and Wales, Scotland, and Northern Ireland. We
            are not a law firm and do not provide legal advice.
          </p>
          <p className="mt-3 text-sm text-white/70">{SITE_SCOPE_NOTE}</p>
          <p className="mt-3 text-sm text-white/80">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-medium text-accent hover:text-accent/90 hover:underline"
            >
              {SITE_EMAIL}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <CookieSettingsButton />
          </div>
          <p className="mt-4 text-sm text-white/60">
            © 2025 DamagesExpertWitness. {SITE_REGION_LABEL}.
          </p>
        </div>
      </div>
    </footer>
  );
}
