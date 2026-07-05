import AboutCTA from "../components/sections/AboutCTA";
import AboutHero from "../components/sections/AboutHero";
import AboutValue from "../components/sections/AboutValue";
import AboutVision from "../components/sections/AboutVision";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutValue />
      <AboutVision />
      <AboutCTA />
    </main>
  );
}