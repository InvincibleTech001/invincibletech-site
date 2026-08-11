export default function AIAssistantPreview() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-slate-950 p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
            Invincible AI
          </p>

          <h4 className="mt-1 text-sm font-semibold text-white">
            Business Assistant
          </h4>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-emerald-300">
            Online
          </span>
        </div>
      </div>

      {/* Conversation */}
      <div className="mt-6 space-y-4">
        {/* User message */}
        <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-cyan-500/10 px-4 py-3">
          <p className="text-xs leading-5 text-slate-300">
            Show me this month's business performance.
          </p>
        </div>

        {/* AI response */}
        <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/15">
              <span className="text-xs text-cyan-400">AI</span>
            </div>

            <span className="text-xs font-medium text-white">
              Analysis
            </span>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-400">
            Revenue is up 18.4% compared with the previous month.
            Customer activity has also increased across the primary
            business segments.
          </p>
        </div>
      </div>

      {/* Bottom metrics */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">
            Revenue
          </p>
          <p className="mt-1 text-sm font-bold text-white">
            +18.4%
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">
            Customers
          </p>
          <p className="mt-1 text-sm font-bold text-white">
            +12.8%
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] text-slate-500">
            Insights
          </p>
          <p className="mt-1 text-sm font-bold text-white">
            24
          </p>
        </div>
      </div>
    </div>
  );
}