export function SchoolsGrid({ schools }: { schools: { name: string; purpose: string }[] }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
      {schools.map((s) => (
        <div key={s.name} className="rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6">
          <h3 className="font-display text-base font-semibold text-ink-900">{s.name}</h3>
          <p className="mt-2 font-sans text-sm text-ink-600">{s.purpose}</p>
        </div>
      ))}
    </div>
  );
}
