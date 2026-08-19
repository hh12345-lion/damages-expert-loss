import Link from "next/link";
import { footerColumns } from "@/data/nav";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_REGION_LABEL,
  SITE_SCOPE_NOTE,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-slate-300">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <p className="font-display text-xl font-semibold text-white">
                {SITE_NAME}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {SITE_SCOPE_NOTE}
              </p>
              <p className="mt-4 text-sm">
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="font-medium text-accent-light hover:text-white"
                >
                  {SITE_EMAIL}
                </a>
              </p>
            </div>
            <p className="text-xs tracking-widest text-slate-500 uppercase">
              {SITE_REGION_LABEL} service
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Expert witness referral
            — not legal advice.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <CookieSettingsButton className="hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
