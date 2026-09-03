export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-cardHover dark:border-navy-800 dark:bg-navy-900 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ icon: Icon, title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-slate-100 p-4 dark:border-navy-800">
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-accent-400">
            <Icon size={18} />
          </span>
        )}
        <div>
          <h3 className="text-sm font-semibold text-navy-900 dark:text-slate-100">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

const badgeTones = {
  navy: 'bg-navy-50 text-navy-700 ring-navy-200 dark:bg-navy-800 dark:text-navy-200 dark:ring-navy-700',
  accent: 'bg-accent-50 text-accent-700 ring-accent-200 dark:bg-accent-900/30 dark:text-accent-300 dark:ring-accent-800',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800',
  red: 'bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:ring-rose-800',
  yellow: 'bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-800',
  slate: 'bg-slate-100 text-slate-600 ring-slate-200 dark:bg-navy-800 dark:text-slate-300 dark:ring-navy-700',
  purple: 'bg-purple-50 text-purple-700 ring-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:ring-purple-800',
}

export function Badge({ children, tone = 'navy', icon: Icon, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${badgeTones[tone] || badgeTones.navy} ${className}`}
    >
      {Icon && <Icon size={12} />}
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-bold text-navy-900 dark:text-slate-50 sm:text-2xl">{title}</h2>
      {description && <p className="mt-1.5 max-w-3xl text-sm text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  )
}

export function StatTile({ label, value, sub, icon: Icon, tone = 'navy' }) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
        {Icon && (
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-md ${badgeTones[tone] || badgeTones.navy}`}
          >
            <Icon size={14} />
          </span>
        )}
      </div>
      <p className="mt-2 text-2xl font-bold text-navy-900 dark:text-slate-50">{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sub}</p>}
    </Card>
  )
}

export function Table({ columns, children }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-800">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="bg-slate-50 dark:bg-navy-800/60">
            {columns.map((c) => (
              <th
                key={c}
                className="whitespace-nowrap px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-navy-800">{children}</tbody>
      </table>
    </div>
  )
}
