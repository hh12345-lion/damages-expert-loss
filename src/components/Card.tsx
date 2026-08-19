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
      className="group flex min-h-[44px] flex-col border-l-4 border-l-primary/20 bg-white p-6 shadow-card transition-all hover:border-l-accent hover:shadow-md"
    >
      <h2 className="font-display text-lg font-semibold text-heading group-hover:text-primary">
        {title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
        {description}
      </p>
      <span className="mt-5 text-sm font-medium tracking-wide text-accent uppercase">
        Read more
      </span>
    </Link>
  );
}
