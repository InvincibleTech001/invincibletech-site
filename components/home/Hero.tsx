import Container from "@/components/shared/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <HeroContent />

          <HeroVisual />

        </div>

        <HeroStats />

      </Container>

    </section>
  );
}