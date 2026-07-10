import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/images/services/icon-web.png",
    title: "WEBサイト制作",
    text: "成果につながる戦略設計とデザイン・開発で、集客・信頼を生むWebサイトを制作します。",
  },
  {
    icon: "/images/services/icon-lp.png",
    title: "LP制作",
    text: "コンバージョンを最大化するランディングページを戦略から設計・制作します。",
  },
  {
    icon: "/images/services/icon-seo.png",
    title: "SEO対策",
    text: "検索エンジンでの上位表示を目指し、集客につながるSEO施策をトータルで支援します。",
  },
  {
    icon: "/images/services/icon-sns.png",
    title: "SNS運用",
    text: "ブランド価値を高め、ファンを増やすSNS運用を企画から実行・改善まで一貫して支援します。",
  },
  {
    icon: "/images/services/icon-image.png",
    title: "画像制作",
    text: "ブランドの世界観を表現する高品質な写真・バナー・ビジュアルを制作します。",
  },
  {
    icon: "/images/services/icon-video.png",
    title: "動画制作",
    text: "商品の魅力や想いを伝えるプロモーション動画・SNS動画を企画・制作します。",
  },
  {
    icon: "/images/services/icon-ai.png",
    title: "AIソリューション",
    text: "AIを活用した業務効率化・自動化・データ分析など、事業成長を支援するソリューションを提供します。",
  },
  {
    icon: "/images/services/icon-webmarketing.png",
    title: "Webマーケティング",
    text: "広告運用・アクセス解析・改善提案まで、集客から成果創出までを伴走支援します。",
  },
];

export default function ServicesList() {
  return (
    <section id="list" className="section section--tight-bottom">
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">OUR SERVICES</p>
          <h2 className="section-title">サービス一覧</h2>
        </div>

        <div className="service-detail-grid fade-up delay-1">
          {services.map((service) => (
            <article className="card service-detail-card" key={service.title}>
              <div className="service-icon">
                <Image src={service.icon} alt="" width={52} height={52} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/services" className="text-link">
                詳細を見る <span className="arrow">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
