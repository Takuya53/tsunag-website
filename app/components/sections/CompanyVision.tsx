import Image from "next/image";

export default function CompanyVision() {
  return (
    <section id="message" className="section section--tight-top">
      <div className="section-inner grid-2">
        <div className="fade-up">
          <p className="section-label">MESSAGE</p>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            代表メッセージ
          </h2>

          <h3
            className="hero-heading"
            style={{ fontSize: "clamp(22px, 3vw, 30px)", margin: "24px 0 0" }}
          >
            未来を、共に創る。
            <br />
            その積み重ねが、豊かな社会をつくる。
          </h3>

          <p style={{ color: "var(--muted)", marginTop: "24px", lineHeight: 1.9 }}>
            テクノロジーの進化は、ビジネスの可能性を大きく広げました。
            しかし、それほど優れた技術も「人の想い」と「正しい戦略」がなければ、
            本当の価値を生み出すことはできません。
          </p>

          <p style={{ color: "var(--muted)", marginTop: "18px", lineHeight: 1.9 }}>
            私たちTSUNAGは、AIとクリエイティブを掛け合わせ、
            中小企業の事業成長に伴走するパートナーであり続けます。
          </p>

          <p style={{ color: "var(--muted)", marginTop: "18px", lineHeight: 1.9 }}>
            お客様の未来を想い、共に課題を乗り越え、
            豊かさが連鎖する社会の実現に貢献していきます。
          </p>
        </div>

        <div className="about-media fade-up delay-1">
          <Image
            src="/images/company/company-road.png"
            alt="夕日に照らされた一本道"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
