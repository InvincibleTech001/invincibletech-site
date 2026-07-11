import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

export default function HeroVisual() {
  return (
    <div className="relative flex h-[520px] items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />

      {/* Shield */}
      <Image
        src="/logos/shield.png"
        alt="InvincibleTech Shield"
        width={280}
        height={280}
        priority
        className="relative z-10 drop-shadow-[0_0_60px_rgba(20,184,166,0.35)]"
      />

      {/* Floating Cards */}

      <div className="absolute left-0 top-20 rounded-xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-md shadow-xl">
        <SiReact className="text-3xl text-cyan-400" />
      </div>

      <div className="absolute right-8 top-10 rounded-xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-md shadow-xl">
        <SiNextdotjs className="text-3xl text-white" />
      </div>

      <div className="absolute right-0 bottom-24 rounded-xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-md shadow-xl">
        <SiPython className="text-3xl text-yellow-400" />
      </div>

      <div className="absolute left-8 bottom-12 rounded-xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-md shadow-xl">
        <SiDocker className="text-3xl text-blue-400" />
      </div>

      <div className="absolute bottom-0 rounded-xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-md shadow-xl">
        <SiPostgresql className="text-3xl text-sky-500" />
      </div>

    </div>
  );
}