import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/images/services/icon-web.png",
    title: "WEBサイト制作",
    text: "成果につながる戦略設計と制作",
  },
  {
    icon: "/images/services/icon-lp.png",
    title: "LP制作",
    text: "コンバージョンを最大化するランディングページ",
  },
  {
    icon: "/images/services/icon-seo.png",
    title: "SEO対策",
    text: "検索上位表示で集客を強化",
  },
  {
    icon: "/images/services/icon-sns.png",
    title: "SNS運用",
    text: "ブランド価値を高める運用・戦略設計でファンを増やす",
  },
  {
    icon: "/images/services/icon-image.png",
    title: "画像制作",
    text: "視覚性に伝わるバナーやチラシなどのデザインを制作",
  },
  {
    icon: "/images/services/icon-video.png",
    title: "動画制作",
    text: "伝わるストーリーで視聴者の心を動かし成果を創出",
  },
  {
    icon: "/images/services/icon-ai.png",
    title: "AIソリューション",
    text: "業務効率化とデータ活用でAIの力を最大化",
  },
  {
    icon: "/images/services/icon-webmarketing.png",
    title: "Webマーケティング",
    text: "戦略設計から広告運用・解析まで一貫して実現し成果を最大化",
  },
];

export default function Services() {
  return (
    <section className="section section--tight-top section--tight-bottom">
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">SERVICES</p>

          <h2 className="section-title">
            成長に必要な支援を、
            <br />
            <span className="gold-text">一気通貫で。</span>
          </h2>
        </div>

        <div className="service-grid fade-up delay-1" style={{ marginTop: "48px" }}>
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <div className="service-icon">
                <Image src={service.icon} alt="" width={48} height={48} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="button-row" style={{ marginTop: "40px" }}>
          <Link href="/services" className="button-primary">
            サービスを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
