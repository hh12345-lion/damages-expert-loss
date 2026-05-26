import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  description: string;
}

export function Card({ href, title, description }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-[44px] flex-col rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-md"
    >
      <h2 className="text-lg font-semibold text-heading group-hover:text-primary">
        {title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
        {description}
      </p>
      <span className="mt-4 text-sm font-medium text-primary">Read more →</span>
    </Link>
  );
}
