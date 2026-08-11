export default function DashboardPreview() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-slate-950 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
            Analytics
          </p>

          <h4 className="mt-1 text-sm font-semibold text-white">
            Business Intelligence
          </h4>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
          This Month
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">Revenue</p>
          <p className="mt-1 text-lg font-bold text-white">
            $84.2K
          </p>
          <p className="mt-1 text-[10px] text-emerald-400">
            ↑ 18.4%
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">Customers</p>
          <p className="mt-1 text-lg font-bold text-white">
            12.8K
          </p>
          <p className="mt-1 text-[10px] text-emerald-400">
            ↑ 12.8%
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">Growth</p>
          <p className="mt-1 text-lg font-bold text-white">
            24.6%
          </p>
          <p className="mt-1 text-[10px] text-cyan-400">
            Strong
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-300">
            Revenue Performance
          </p>

          <span className="text-[10px] text-slate-500">
            2026
          </span>
        </div>

        <div className="flex h-24 items-end gap-2">
          {[35, 48, 42, 62, 55, 74, 68, 86, 78, 92, 84, 100].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-cyan-500/40 transition-all duration-300 hover:bg-cyan-400"
                style={{ height: `${height}%` }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}