"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavDropdown } from "@/components/layout/NavDropdown";
import {
  navPracticeAreaLinks,
  navCaseTypeLinks,
  navResourcesLinks,
} from "@/data/nav";

const directLinks = [
  { href: "/services", label: "Services" },
  { href: "/types-of-damages", label: "Damages Guide" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`whitespace-nowrap px-3 py-2 text-sm transition-colors ${
        active
          ? "font-semibold text-primary"
          : "text-body hover:text-accent"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-nav backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          onClick={closeMobile}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-primary bg-primary font-display text-sm font-bold text-accent"
            aria-hidden
          >
            DW
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-base font-semibold text-heading sm:text-lg">
              Damages Expert
            </span>
            <span className="block text-xs tracking-widest text-muted uppercase">
              Witness
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center lg:flex"
          aria-label="Main navigation"
        >
          {directLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <NavDropdown
            label="Practice Areas"
            href="/practice-areas"
            items={navPracticeAreaLinks}
          />
          <NavDropdown
            label="Case Types"
            href="/case-types"
            items={navCaseTypeLinks}
          />
          <NavDropdown
            label="Resources"
            href="/guides"
            items={navResourcesLinks}
          />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-[40px] items-center bg-primary px-5 py-2 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-primary-dark lg:inline-flex"
          >
            Enquire
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-border p-2 text-heading lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[75vh] overflow-y-auto border-t border-border bg-white lg:hidden"
        >
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {[...directLinks, ...navPracticeAreaLinks.slice(0, 4)].map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-[44px] items-center border-b border-border/50 px-2 text-sm text-body last:border-0"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/guides"
              className="flex min-h-[44px] items-center border-b border-border/50 px-2 text-sm text-body"
              onClick={closeMobile}
            >
              Guides
            </Link>
            <Link
              href="/contact"
              className="mt-4 flex min-h-[44px] items-center justify-center bg-primary px-4 py-3 text-sm font-semibold tracking-wide text-white uppercase"
              onClick={closeMobile}
            >
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
