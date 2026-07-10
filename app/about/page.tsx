import AboutHero from "../components/sections/AboutHero";
import AboutVision from "../components/sections/AboutVision";
import AboutValue from "../components/sections/AboutValue";
import AboutStrength from "../components/sections/AboutStrength";
import CTA from "../components/sections/CTA";

export const metadata = {
  title: "About Us｜TSUNAG",
  description:
    "TSUNAGは、AIとクリエイティブの力で中小企業の成長を支援するGrowth Partnerです。私たちの哲学・ミッション・ビジョン・大切にしている価値観をご紹介します。",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutVision />
      <AboutValue />
      <AboutStrength />
      <CTA />
    </main>
  );
}
