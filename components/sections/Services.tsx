import Container from "@/components/shared/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="relative py-32">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Our Expertise
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Technology That
            <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Drives Innovation
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-400">
            We engineer intelligent software, automation platforms,
            analytics solutions, and scalable digital systems that help
            organizations innovate, optimize, and grow.
          </p>

        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}