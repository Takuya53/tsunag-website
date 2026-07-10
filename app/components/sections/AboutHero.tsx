import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

export default function AboutHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="fade-up">
          <Breadcrumb current="About Us" />

          <h1 className="page-hero-title title-en">About Us</h1>
          <p className="page-hero-subtitle">私たちについて</p>

          <p className="page-hero-lead">
            TSUNAGは、AIとクリエイティブの力で
            <br />
            中小企業の成長を支援する
            <br />
            Growth Partnerです。
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
