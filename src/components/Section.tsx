import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  alt?: boolean;
  className?: string;
}

export function Section({ children, alt = false, className = "" }: SectionProps) {
  return (
    <section
      className={`py-12 md:py-16 ${alt ? "bg-section-alt" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
