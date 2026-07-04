import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <div className="max-w-4xl">

          <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-400">
            🚀 Pioneering the Next-Gen of Intelligent Systems
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Software That
            <br />
            Crafts Tomorrow's Ecosystems
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-400">
            InvincibleTech develops modern web applications,
            AI-powered automation, data analytics platforms,
            and intelligent digital solutions for businesses,
            institutions and researchers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-teal-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-teal-400">
              Explore Solutions
            </button>

            <button className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-300 transition-all duration-300 hover:border-teal-500 hover:text-white">
              View Projects
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}