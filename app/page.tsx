import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TechRibbon from "@/components/sections/TechRibbon";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TechRibbon />

      <Services />
    </>
  );
}