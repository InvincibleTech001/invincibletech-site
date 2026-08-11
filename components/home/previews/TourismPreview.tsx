export default function TourismPreview() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-slate-950 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
            Tourism Platform
          </p>

          <h4 className="mt-1 text-sm font-semibold text-white">
            Furahika Adventures
          </h4>
        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          Explore
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-slate-900">
        <div className="flex h-28 items-end p-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-emerald-300">
              Discover Kenya
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              Travel. Explore. Experience.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold text-white">Hotels</p>
          <p className="mt-1 text-[10px] text-slate-500">
            Stay & relax
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold text-white">Travel</p>
          <p className="mt-1 text-[10px] text-slate-500">
            Plan journeys
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold text-white">Experiences</p>
          <p className="mt-1 text-[10px] text-slate-500">
            Discover more
          </p>
        </div>
      </div>
    </div>
  );
}