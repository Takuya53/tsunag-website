import ServicesHero from "../components/sections/ServicesHero";
import ServicesList from "../components/sections/ServicesList";
import ServicesFlow from "../components/sections/ServicesFlow";
import CTA from "../components/sections/CTA";

export const metadata = {
  title: "Services｜TSUNAG",
  description:
    "AIとクリエイティブの力で、お客様の事業成長を加速させる幅広いサービスを提供します。戦略設計から制作・運用・改善まで一気通貫で伴走するGrowth Partnerです。",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesFlow />
      <CTA />
    </main>
  );
}