import Image from "next/image";

export default function AboutVision() {
  return (
    <section id="mission" className="section section--tight-bottom">
      <div className="section-inner grid-2">
        <div className="fade-up">
          <p className="section-label">OUR PHILOSOPHY</p>
          <h2 className="hero-heading" style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: 0 }}>
            お客様の未来を、
            <br />
            豊かにするために。
          </h2>
        </div>

        <div className="fade-up delay-1">
          <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
            テクノロジーの進化により、ビジネスの可能性は大きく広がっています。
            しかし、その可能性を成果につなげるには、戦略と実行、そして継続的な改善が欠かせません。
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.9, marginTop: "16px" }}>
            TSUNAGは、AIとクリエイティブを掛け合わせ、戦略立案から制作・運用まで
            一気通貫で伴走。お客様のビジネスの成長を、長期的な視点で支え続けます。
          </p>
        </div>

        <div className="card fade-up delay-2 mv-grid" style={{ gridColumn: "1 / -1", marginTop: "8px" }}>
          <div className="mv-card">
            <div className="mv-icon">
              <Image src="/images/about/icon-mission.png" alt="" width={44} height={44} aria-hidden="true" />
            </div>
            <p className="section-label" style={{ marginBottom: "12px" }}>MISSION</p>
            <h3>豊かさを、つなぐ。</h3>
            <p>人・想い・技術をつなぎ、中小企業の未来を豊かにする仕組みを共に創ります。</p>
          </div>

          <div className="mv-card">
            <div className="mv-icon">
              <Image src="/images/about/icon-vision.png" alt="" width={44} height={44} aria-hidden="true" />
            </div>
            <p className="section-label" style={{ marginBottom: "12px" }}>VISION</p>
            <h3>
              100年後も価値を残す、
              <br />
              ブランドと事業を共に創る。
            </h3>
            <p>その場しのぎではなく、次の世代へつながる価値づくりを追求します。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
