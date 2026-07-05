import ServicesHero from "../components/sections/ServicesHero";
import ServicesList from "../components/sections/ServicesList";
import ServicesFlow from "../components/sections/ServicesFlow";
import ServicesCTA from "../components/sections/ServicesCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesFlow />
      <ServicesCTA />
    </main>
  );
}