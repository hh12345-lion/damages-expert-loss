"use client";

import Link from "next/link";
import { useCallback, useId, useRef, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: NavItem[];
}

export function NavDropdown({ label, href, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") close();
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={onKeyDown}
    >
      <Link
        href={href}
        className="flex items-center gap-1 rounded px-2 py-2 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onFocus={() => setOpen(true)}
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
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
      </Link>
      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 max-h-[min(70vh,420px)] min-w-[240px] overflow-y-auto rounded-lg border border-border bg-white py-2 shadow-card motion-safe:animate-[fadeIn_150ms_ease-out]"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-body hover:bg-section-alt hover:text-primary focus:bg-section-alt focus:text-primary focus:outline-none"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
