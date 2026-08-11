import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  FaArrowRight,
  FaRobot,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">

      <Badge>
        🚀 AI • Data Analytics • Web Engineering • Automation
      </Badge>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
        Engineering
        <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
          Intelligent Software
        </span>
        <span className="block">
          for Modern Businesses
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">
        We build enterprise web applications, AI-powered automation,
        business intelligence dashboards, and scalable digital platforms
        that help organizations streamline operations, unlock insights,
        and accelerate growth.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <Button href="/contact">
          Start Your Project
          <FaArrowRight className="ml-2 inline" />
        </Button>

        <Button href="/projects" variant="secondary">
          Explore Our Work
        </Button>

      </div>

      {/* Feature Pills */}

      <div className="mt-12 flex flex-wrap gap-4">

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
          <FaRobot className="text-cyan-400" />
          AI Solutions
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
          <FaChartLine className="text-emerald-400" />
          Data Analytics
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
          <FaGlobe className="text-sky-400" />
          Web Platforms
        </div>

      </div>

    </div>
  );
}