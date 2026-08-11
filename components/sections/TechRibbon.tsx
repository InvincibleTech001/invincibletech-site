import Container from "@/components/shared/Container";
import {
  SiNextdotjs,
  SiReact,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiNodedotjs,
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Power BI", icon: FaChartBar },
  { name: "Node.js", icon: SiNodedotjs },
];

export default function TechRibbon() {
  return (
    <section className="relative overflow-hidden border-y border-slate-800/70 bg-slate-950/60 py-12">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />

      <Container>

        <div className="relative z-10">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Powered By
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Industry-Leading Technologies
            </h3>

            <p className="mt-3 text-slate-400">
              Modern frameworks and tools that power scalable, secure and intelligent digital solutions.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7">

            {technologies.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900"
              >
                <Icon className="mx-auto text-4xl text-slate-400 transition duration-300 group-hover:scale-110 group-hover:text-cyan-400" />

                <p className="mt-4 text-center text-sm font-semibold text-slate-300">
                  {name}
                </p>
              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}