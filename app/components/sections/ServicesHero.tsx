import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

export default function ServicesHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="fade-up">
          <Breadcrumb current="Services" />

          <h1 className="page-hero-title title-en">Services</h1>
          <p className="page-hero-subtitle">私たちのサービス</p>

          <p className="page-hero-lead">
            AIとクリエイティブの力で、
            <br />
            お客様の事業成長を加速させる
            <br />
            幅広いサービスを提供します。
          </p>

          <p className="page-hero-lead" style={{ marginTop: "12px" }}>
            戦略設計から制作・運用・改善まで、
            <br />
            一気通貫で伴走するGrowth Partnerです。
          </p>
        </div>

        <div className="page-hero-visual fade-up delay-1">
          <Image
            src="/images/about/about-corridor.png"
            alt="白とゴールドで統一された回廊のイメージ"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
