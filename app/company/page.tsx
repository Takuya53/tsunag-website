import CompanyHero from "../components/sections/CompanyHero";
import CompanyProfile from "../components/sections/CompanyProfile";
import CompanyVision from "../components/sections/CompanyVision";
import CTA from "../components/sections/CTA";

export const metadata = {
  title: "Company｜TSUNAG",
  description:
    "AIとクリエイティブの力で、中小企業の未来を豊かにするために。TSUNAGの会社概要と代表メッセージをご紹介します。",
};

export default function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <CompanyProfile />
      <CompanyVision />
      <CTA />
    </main>
  );
}
