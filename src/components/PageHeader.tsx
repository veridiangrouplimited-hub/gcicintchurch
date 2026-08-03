import Link from "next/link";

export function PageHeader({
  title,
  crumbLabel,
  crumbHref,
}: {
  title: string;
  crumbLabel?: string;
  crumbHref?: string;
}) {
  return (
    <div className="border-b border-sand-200 bg-sand-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <nav className="font-sans text-sm text-ink-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-crimson-600">
            Homepage
          </Link>
          {crumbLabel && (
            <>
              <span className="mx-2">/</span>
              {crumbHref ? (
                <Link href={crumbHref} className="hover:text-crimson-600">
                  {crumbLabel}
                </Link>
              ) : (
                <span>{crumbLabel}</span>
              )}
            </>
          )}
        </nav>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
