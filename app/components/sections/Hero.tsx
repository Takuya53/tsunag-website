import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="fade-up">
          <p className="section-label">TSUNAG</p>

          <h1 className="section-title hero-heading">
            未来は、
            <br />
            <span className="gold-text">共に創る。</span>
          </h1>

          <p className="section-lead">
            AIとクリエイティブの力で、
            <br />
            中小企業の集客・採用・売上成長を支援します。
          </p>

          <p
            style={{
              maxWidth: "560px",
              margin: "16px 0 0",
              color: "var(--muted)",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            戦略設計から制作・運用・改善まで、
            <br />
            一気通貫で伴走するGrowth Partnerです。
          </p>

          <div className="button-row">
            <Link href="/contact" className="button-primary">
              未来について相談する <span aria-hidden="true">→</span>
            </Link>
            <Link href="/about" className="button-secondary">
              私たちについて <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual fade-up delay-1">
          <Image
            src="/images/hero/hero-city-sunrise.png"
            alt="朝日に照らされた未来都市を見つめ、ゴールドの光の道を歩き出す二人"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
