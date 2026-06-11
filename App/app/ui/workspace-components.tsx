export function PageHeading({
  action,
  eyebrow,
  text,
  title,
}: {
  action?: React.ReactNode;
  eyebrow: string;
  text?: string;
  title: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-5xl tracking-[-0.055em] text-stone-900">
          {title}
        </h1>
        {text ? <p className="mt-3 text-sm text-stone-500">{text}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  detail,
  label,
  value,
}: {
  detail: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-5" style={{ boxShadow: "0 18px 48px rgba(27,24,22,0.06)" }}>
      <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "#5a5550" }}>
        {label}
      </p>
      <p className="mt-4 text-3xl font-bold tracking-tight" style={{ color: "#1b1816" }}>
        {value}
      </p>
      <p className="mt-2 text-xs" style={{ color: "#5a5550" }}>{detail}</p>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Aktiv" || status === "Bestätigt"
      ? "bg-emerald-50 text-emerald-700"
      : status === "Entwurf" || status === "Ausstehend" || status === "Prüfung"
        ? "bg-amber-50 text-amber-700"
        : "bg-stone-100 text-stone-600";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${tone}`}
    >
      {status}
    </span>
  );
}

export function TableShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white" style={{ boxShadow: "0 18px 48px rgba(27,24,22,0.06)" }}>
      <table className="w-full min-w-[760px] text-left text-sm">{children}</table>
    </div>
  );
}

export function TableHead({ labels }: { labels: string[] }) {
  return (
    <thead className="border-b border-stone-200 bg-stone-50 text-[10px] uppercase tracking-[0.13em] text-stone-500">
      <tr>
        {labels.map((label) => (
          <th className="px-5 py-4 font-bold" key={label}>
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
