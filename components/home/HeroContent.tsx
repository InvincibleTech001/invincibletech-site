import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">

      <Badge>
        🚀 Pioneering the Next Generation of Intelligent Systems
      </Badge>

      <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
        Software That
        <br />

        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
          Builds Tomorrow's
        </span>

        <br />

        Digital Ecosystems
      </h1>

      <p className="mt-8 text-xl leading-8 text-slate-400 max-w-2xl">
        InvincibleTech designs scalable web applications,
        AI-powered automation systems, business intelligence
        dashboards and data-driven solutions that transform
        organizations.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <Button href="/solutions">
          Explore Solutions
        </Button>

        <Button
          href="/projects"
          variant="secondary"
        >
          View Projects
        </Button>

      </div>

    </div>
  );
}