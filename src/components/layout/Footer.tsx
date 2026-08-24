import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { footerRibbonLinks } from "@/data/nav";
import { SITE_EMAIL, SITE_NAME, SITE_SCOPE_NOTE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-primary px-4 py-12 text-center sm:px-6 lg:px-8">
        <p className="font-display text-xl font-semibold text-white sm:text-2xl">
          Instruct a damages expert witness
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
          {SITE_SCOPE_NOTE}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center border border-accent px-6 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-primary"
          >
            Submit an enquiry
          </Link>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-border bg-white px-4 py-8 sm:px-6 lg:px-8">
        <nav
          aria-label="Footer"
          className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-1 gap-y-2 text-center"
        >
          {footerRibbonLinks.map((link, index) => (
            <span key={link.href} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-border select-none" aria-hidden>
                  ·
                </span>
              )}
              <Link
                href={link.href}
                className="text-sm text-body transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 bg-primary-dark px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Expert witness referral —
            not legal advice.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-white/90">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/90">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white/90">
              Cookies
            </Link>
            <CookieSettingsButton className="text-white/50 hover:text-white/90" />
          </div>
        </div>
      </div>
    </footer>
  );
}
