"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  headerNavLinks,
  headerTopicGroups,
  mobileNavGroups,
} from "@/data/nav";

export function Header() {
  const pathname = usePathname();
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setTopicsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="relative z-40 border-b border-border bg-section-alt">
        <div className="mx-auto max-w-5xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-4">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight text-heading sm:text-3xl"
            >
              Damages
              <span className="text-accent">Expert</span>
              Witness
            </Link>

            <div className="flex items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="hidden text-sm font-medium text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent sm:inline"
              >
                Instruct an expert →
              </Link>
              <button
                type="button"
                className="inline-flex min-h-[44px] items-center gap-2 border border-border bg-white px-3 py-2 text-sm font-medium text-heading lg:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-overlay"
                onClick={() => setMobileOpen(true)}
              >
                Menu
                <span className="text-accent" aria-hidden>
                  +
                </span>
              </button>
            </div>
          </div>

          <nav
            className="mt-6 hidden flex-wrap items-center gap-x-1 gap-y-2 lg:flex"
            aria-label="Main navigation"
          >
            {headerNavLinks.map((link, index) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <span key={link.href} className="inline-flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-border select-none" aria-hidden>
                      /
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      active
                        ? "font-semibold text-primary"
                        : "text-body hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </span>
              );
            })}
            <span className="mx-2 text-border select-none" aria-hidden>
              /
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-body transition-colors hover:text-accent"
              aria-expanded={topicsOpen}
              aria-controls="topics-panel"
              onClick={() => setTopicsOpen((open) => !open)}
            >
              All topics
              <svg
                className={`h-3.5 w-3.5 transition-transform ${topicsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </nav>
        </div>

        {topicsOpen && (
          <div
            id="topics-panel"
            className="border-t border-border bg-white motion-safe:animate-[slideDown_150ms_ease-out]"
          >
            <div className="mx-auto grid max-w-5xl gap-8 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
              {headerTopicGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-semibold text-accent">{group.title}</p>
                  <ul className="mt-3 space-y-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-body hover:text-primary"
                          onClick={() => setTopicsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div
          id="mobile-overlay"
          className="fixed inset-0 z-50 flex flex-col bg-primary lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between border-b border-white/15 px-4 py-4 sm:px-6">
            <p className="font-display text-lg font-semibold text-white">
              Browse
            </p>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-2xl text-accent"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            {mobileNavGroups.map((group) => (
              <div key={group.title} className="mb-8">
                <p className="text-xs font-semibold text-accent">{group.title}</p>
                <ul className="mt-3 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex min-h-[44px] items-center text-base text-white/90 hover:text-white"
                        onClick={() => setMobileOpen(false)}
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
              className="mt-4 inline-flex min-h-[44px] items-center text-base font-medium text-accent underline decoration-2 underline-offset-4"
              onClick={() => setMobileOpen(false)}
            >
              Instruct an expert →
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
