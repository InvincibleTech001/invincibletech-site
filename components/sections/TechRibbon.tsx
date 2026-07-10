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
    <section className="border-y border-slate-800 bg-slate-900/40 py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-slate-400 transition hover:text-teal-400"
            >
              <Icon size={24} />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}