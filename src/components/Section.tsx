import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  narrow?: boolean;
}

export function Section({
  children,
  alt = false,
  className = "",
  narrow = false,
}: SectionProps) {
  return (
    <section
      className={`py-14 md:py-20 ${alt ? "bg-section-warm" : "bg-section-alt"} ${className}`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${
          narrow ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
