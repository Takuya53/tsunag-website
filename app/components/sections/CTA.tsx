import Image from "next/image";
import Link from "next/link";

const points = [
  {
    icon: "/images/cta/icon-free-consult.png",
    label: "無料相談",
  },
  {
    icon: "/images/cta/icon-handshake.png",
    label: "伴走支援",
  },
  {
    icon: "/images/cta/icon-growth.png",
    label: "成果創出",
  },
];

export default function CTA() {
  return (
    <section className="section section--tight-top">
      <div className="section-inner">
        <div className="home-cta fade-up">
          <Image
            src="/images/decorations/gold-wave-wide.png"
            alt=""
            width={1200}
            height={360}
            aria-hidden="true"
            className="home-cta-wave"
          />

          <div className="home-cta-lead">
            <p className="section-label">CONTACT</p>
            <h2 className="section-title" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>
              未来を、
              <br />
              <span className="gold-text">共に創りましょう。</span>
            </h2>

            <p>
              まずはお気軽にご相談ください。
              <br />
              お客様の課題や目標に寄り添い、最適な成長戦略をご提案します。
            </p>

            <div className="button-row">
              <Link href="/contact" className="button-primary">
                未来について相談する <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="home-cta-points">
            {points.map((point) => (
              <div className="home-cta-point" key={point.label}>
                <div className="home-cta-point-icon">
                  <Image src={point.icon} alt="" width={40} height={40} aria-hidden="true" />
                </div>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
