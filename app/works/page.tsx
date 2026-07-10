import WorksHero from "../components/sections/WorksHero";
import WorksList from "../components/sections/WorksList";
import CTA from "../components/sections/CTA";

export const metadata = {
  title: "Works｜TSUNAG",
  description:
    "様々な業界の企業様と共に、課題を解決し、成果につながる支援を行ってきました。TSUNAGの実績をご紹介します。",
};

export default function WorksPage() {
  return (
    <main>
      <WorksHero />
      <WorksList />
      <CTA />
    </main>
  );
}