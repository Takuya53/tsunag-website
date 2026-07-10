import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Mission from "./components/sections/Mission";
import Services from "./components/sections/Services";
import Works from "./components/sections/Works";
import CTA from "./components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Mission />
      <Services />
      <Works />
      <CTA />
    </main>
  );
}
