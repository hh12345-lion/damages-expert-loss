import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="hero-pattern border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted">
                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-1">
                    {i > 0 && (
                      <span aria-hidden className="text-border">
                        ·
                      </span>
                    )}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-body">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div
            className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent"
            aria-hidden
          />
          <h1 className="font-display text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
