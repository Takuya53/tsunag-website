import Image from "next/image";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="section section--tight-bottom">
      <div className="section-inner grid-2">
        <div className="fade-up">
          <p className="section-label">ABOUT US</p>

          <h2 className="section-title">
            お客様の未来を
            <br />
            <span className="gold-text">豊かにするために。</span>
          </h2>

          <p className="section-lead">
            変化のスピードが加速する時代において、
            中小企業の可能性を最大限に引き出すことが私たちの使命です。
          </p>

          <p className="section-lead" style={{ marginTop: "18px" }}>
            AIをはじめとするテクノロジーを戦略的に活用し、
            持続的な成長を実現するための最適解を共に創り続けます。
          </p>

          <Link href="/about" className="text-link">
            詳しく見る <span className="arrow">→</span>
          </Link>
        </div>

        <div className="about-media fade-up delay-1">
          <Image
            src="/images/about/about-corridor.png"
            alt="白とゴールドで統一された回廊のイメージ"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
