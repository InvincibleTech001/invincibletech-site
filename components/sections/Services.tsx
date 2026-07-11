import Container from "@/components/shared/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-teal-400 font-semibold tracking-widest uppercase">
            Our Solutions
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Technology That Solves Real Problems
          </h2>

          <p className="mt-6 text-xl text-slate-400 leading-8">
            From intelligent software to data-driven decision making,
            InvincibleTech delivers modern digital solutions tailored to
            businesses, institutions, researchers and organizations.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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