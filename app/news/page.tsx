import NewsHero from "../components/sections/NewsHero";
import NewsList from "../components/sections/NewsList";
import CTA from "../components/sections/CTA";

export const metadata = {
  title: "News｜TSUNAG",
  description:
    "TSUNAGの最新情報や取り組み、セミナー・イベント情報などをお届けします。",
};

export default function NewsPage() {
  return (
    <main>
      <NewsHero />
      <NewsList />
      <CTA />
    </main>
  );
}
