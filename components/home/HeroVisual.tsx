import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";
import { FaChartBar, FaRobot } from "react-icons/fa";

export default function HeroVisual() {
  return (
    <div className="relative flex h-[560px] items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* Shield */}
      <Image
        src="/logos/shield.png"
        alt="InvincibleTech Shield"
        width={260}
        height={260}
        priority
        className="relative z-20 drop-shadow-[0_0_70px_rgba(6,182,212,0.35)]"
      />

      {/* React */}
      <div className="absolute left-2 top-24 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-2xl hover:scale-110 transition">
        <SiReact className="text-3xl text-cyan-400" />
      </div>

      {/* Next */}
      <div className="absolute right-6 top-10 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-2xl hover:scale-110 transition">
        <SiNextdotjs className="text-3xl text-white" />
      </div>

      {/* Python */}
      <div className="absolute right-0 bottom-28 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-2xl hover:scale-110 transition">
        <SiPython className="text-3xl text-yellow-400" />
      </div>

      {/* Docker */}
      <div className="absolute left-8 bottom-16 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-2xl hover:scale-110 transition">
        <SiDocker className="text-3xl text-blue-400" />
      </div>

      {/* PostgreSQL */}
      <div className="absolute bottom-0 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-2xl hover:scale-110 transition">
        <SiPostgresql className="text-3xl text-sky-400" />
      </div>

      {/* AI Card */}
      <div className="absolute -left-6 top-1/2 rounded-2xl border border-cyan-500/20 bg-slate-900/80 px-5 py-4 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-3">
          <FaRobot className="text-cyan-400 text-xl" />
          <div>
            <p className="text-xs text-slate-400">AI Solutions</p>
            <p className="text-sm font-semibold text-white">Automation</p>
          </div>
        </div>
      </div>

      {/* Analytics Card */}
      <div className="absolute -right-6 top-[55%] rounded-2xl border border-emerald-500/20 bg-slate-900/80 px-5 py-4 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-3">
          <FaChartBar className="text-emerald-400 text-xl" />
          <div>
            <p className="text-xs text-slate-400">Business Intelligence</p>
            <p className="text-sm font-semibold text-white">Analytics</p>
          </div>
        </div>
      </div>

    </div>
  );
}