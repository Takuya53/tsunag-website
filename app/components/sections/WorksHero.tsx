import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

export default function WorksHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="fade-up">
          <Breadcrumb current="Works" />

          <h1 className="page-hero-title title-en">Works</h1>
          <p className="page-hero-subtitle">実績紹介</p>

          <p className="page-hero-lead">
            様々な業界の企業様と共に、課題を解決し、
            <br />
            成果につながる支援を行ってきました。
          </p>
        </div>

        <div className="page-hero-visual fade-up delay-1">
          <Image
            src="/images/hero/city-skyline-wide.png"
            alt="朝日に照らされた都市の風景"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
