import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TechRibbon from "@/components/sections/TechRibbon";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />

      <TechRibbon />

      <FeaturedProducts />

      <Services />
    </>
  );
}