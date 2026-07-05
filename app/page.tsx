import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import CTA from "./components/sections/CTA";
import Solution from "./components/sections/Solution";
import Problem from "./components/sections/Problem";
import Hero from "./components/sections/Hero";
import Mission from "./components/sections/Mission";

export default function Home() {
  return (
 <main className="min-h-screen bg-white text-slate-950">
  <Header />
  <Hero />
  <Mission />
  <Problem />
  <Solution />
  <CTA />
  <Footer />
</main>
  );
}