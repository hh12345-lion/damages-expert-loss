import Link from "next/link";
import type { RelatedLink } from "@/data/types";

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
}

export function RelatedLinks({
  links,
  title = "Related Resources",
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="mt-10 rounded border border-border bg-section-alt p-6">
      <h2 className="text-lg font-semibold text-heading">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-primary underline-offset-2 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
