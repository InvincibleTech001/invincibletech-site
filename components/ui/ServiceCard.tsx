import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]">

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full scale-x-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative z-10">

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-8 w-8 text-cyan-400" />
        </div>

        {/* Title */}
        <h3 className="mt-8 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="mt-8 flex flex-wrap gap-2">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            Modern Stack
          </span>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Scalable
          </span>

          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            Secure
          </span>

        </div>

        {/* CTA */}
        <Link
          href="/solutions"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4 group-hover:text-cyan-300"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

    </div>
  );
}