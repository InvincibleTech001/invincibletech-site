export default function MappingPreview() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-slate-950 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-violet-400">
            Mapping System
          </p>

          <h4 className="mt-1 text-sm font-semibold text-white">
            Institution Intelligence
          </h4>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
          Map View
        </div>
      </div>

      <div className="relative mt-5 h-32 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        {/* Map grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Connection lines */}
        <div className="absolute left-[20%] top-[40%] h-px w-[55%] rotate-12 bg-violet-400/50" />

        <div className="absolute left-[35%] top-[65%] h-px w-[40%] -rotate-12 bg-cyan-400/40" />

        {/* Map markers */}
        <div className="absolute left-[18%] top-[30%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />

        <div className="absolute left-[48%] top-[48%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

        <div className="absolute right-[20%] top-[25%] h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

        <div className="absolute right-[30%] bottom-[20%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">
            Institutions
          </p>
          <p className="mt-1 text-sm font-bold text-white">
            1,248
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">
            Regions
          </p>
          <p className="mt-1 text-sm font-bold text-white">
            47
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">
            Data Points
          </p>
          <p className="mt-1 text-sm font-bold text-white">
            18K+
          </p>
        </div>
      </div>
    </div>
  );
}