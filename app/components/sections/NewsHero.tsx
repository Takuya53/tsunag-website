import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

export default function NewsHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="fade-up">
          <Breadcrumb current="News" />

          <h1 className="page-hero-title title-en">News</h1>
          <p className="page-hero-subtitle">お知らせ</p>

          <p className="page-hero-lead">
            TSUNAGの最新情報や
            <br />
            取り組み、セミナー・イベント情報などを
            <br />
            お届けします。
          </p>

          <p className="page-hero-lead" style={{ marginTop: "12px" }}>
            すべての活動は、
            <br />
            お客様の未来をより豊かにするために。
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
