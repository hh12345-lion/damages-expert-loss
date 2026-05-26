"use client";

import Link from "next/link";
import { useState } from "react";
import { NavDropdown } from "./NavDropdown";
import {
  navServiceLinks,
  navCaseTypeLinks,
  navPracticeAreaLinks,
  navTypesOfDamagesLinks,
  navResourcesLinks,
  mobileNavGroups,
} from "@/data/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 shrink truncate text-base font-bold text-primary sm:text-lg lg:text-xl"
          onClick={closeMobile}
        >
          DamagesExpert<span className="text-accent">Witness</span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          <Link
            href="/"
            className="rounded px-2 py-2 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
          >
            Home
          </Link>
          <NavDropdown
            label="Services"
            href="/services"
            items={navServiceLinks}
          />
          <NavDropdown
            label="Types of Damages"
            href="/types-of-damages"
            items={navTypesOfDamagesLinks}
          />
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

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded bg-accent px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent/90 xl:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-border p-2 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
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

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[80vh] overflow-y-auto border-t border-border bg-white xl:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {mobileNavGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  {group.title}
                </p>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="flex min-h-[44px] items-center text-sm text-body"
                        onClick={closeMobile}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-4 py-3 text-sm font-semibold text-primary"
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
