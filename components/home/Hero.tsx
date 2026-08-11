import Container from "@/components/shared/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
{/* Bottom Fade */}
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />

      <HeroBackground />

      <Container className="relative z-10">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <HeroContent />

          <HeroVisual />

        </div>

        <HeroStats />

      </Container>

    </section>
  );
}