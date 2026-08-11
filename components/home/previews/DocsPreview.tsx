export default function DocsPreview() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-slate-950 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-amber-400">
            Knowledge Hub
          </p>

          <h4 className="mt-1 text-sm font-semibold text-white">
            InvincibleTech Research Library
          </h4>
        </div>

        <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
          Explore
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-xs font-bold text-cyan-400">
            PDF
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white">
              Artificial Intelligence Research
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Computer Science • Research Paper
            </p>
          </div>

          <span className="text-xs text-slate-500">
            →
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-400">
            XLS
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white">
              Business Analytics Dataset
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Data Analytics • Dataset
            </p>
          </div>

          <span className="text-xs text-slate-500">
            →
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-xs font-bold text-violet-400">
            R
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white">
              Statistical Analysis Resources
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Statistics • R / Research Methods
            </p>
          </div>

          <span className="text-xs text-slate-500">
            →
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-[10px] text-slate-500">
          Research • Data • Learning
        </span>

        <span className="text-[10px] font-medium text-cyan-400">
          Knowledge Hub →
        </span>
      </div>
    </div>
  );
}