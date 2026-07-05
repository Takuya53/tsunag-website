import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Mission from "./components/sections/Mission";
import Value from "./components/sections/Value";
import Services from "./components/sections/Services";
import Works from "./components/sections/Works";
import Insights from "./components/sections/Insights";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <Mission />
      <Value />
      <Services />
      <Works />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}
