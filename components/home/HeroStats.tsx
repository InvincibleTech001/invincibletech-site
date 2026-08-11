import StatItem from "@/components/ui/StatItem";
import {
  FaLaptopCode,
  FaBrain,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    icon: FaLaptopCode,
    value: "20+",
    label: "Digital Solutions",
    color: "text-cyan-400",
  },
  {
    icon: FaBrain,
    value: "AI",
    label: "Automation Systems",
    color: "text-purple-400",
  },
  {
    icon: FaDatabase,
    value: "15+",
    label: "Technologies",
    color: "text-emerald-400",
  },
  {
    icon: FaChartLine,
    value: "100+",
    label: "Analytics & Dashboards",
    color: "text-orange-400",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-slate-900/80"
          >
            <Icon className={`mb-5 text-3xl ${stat.color}`} />

            <StatItem value={stat.value} label={stat.label} />
          </div>
        );
      })}
    </div>
  );
}