export function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-display)] leading-snug ${
          light ? "text-white" : "text-slate-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-emerald-100/80" : "text-slate-500"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full ${
          centered ? "mx-auto" : ""
        } bg-gradient-to-r from-emerald-500 to-teal-400`}
      />
    </div>
  );
}

export function StatBox({ icon: Icon, label, value }) {
  return (
    <div className="stat-card group bg-white rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:from-emerald-100 group-hover:to-teal-100 transition-colors duration-300 shrink-0">
          {Icon && <Icon className="w-5 h-5 text-emerald-600" />}
        </div>
        <div>
          <p className="text-2xl lg:text-3xl font-bold text-slate-800 leading-none">
            {value}
          </p>
          <p className="text-sm text-slate-500 mt-1.5">{label}</p>
        </div>
      </div>
    </div>
  );
}

export function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-100 shadow-sm ${
        hover
          ? "hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-200 hover:-translate-y-1"
          : ""
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({ title, description, breadcrumb }) {
  return (
    <section className="relative pt-24 lg:pt-28 pb-12 lg:pb-16 hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-300/10 blur-3xl" />
      </div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-emerald-200/60 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">হোম</a>
            <span>/</span>
            <span className="text-white">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 lg:px-6 py-4 text-right font-semibold text-emerald-800 first:text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-emerald-50/40 transition-colors duration-150"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 lg:px-6 py-3.5 text-slate-700 first:text-left first:font-medium"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
