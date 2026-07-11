import Link from "next/link";
import { LucideIcon } from "lucide-react";

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
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10">
      <Icon className="h-12 w-12 text-teal-400 transition-transform duration-300 group-hover:scale-110" />

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

      <Link
        href="/solutions"
        className="mt-6 inline-block font-semibold text-teal-400 hover:text-teal-300"
      >
        Learn More →
      </Link>
    </div>
  );
}