import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

export default function CompanyHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="fade-up">
          <Breadcrumb current="Company" />

          <h1 className="page-hero-title title-en">Company</h1>
          <p className="page-hero-subtitle">会社概要</p>

          <p className="page-hero-lead">
            AIとクリエイティブの力で、
            <br />
            中小企業の未来を豊かにするために。
            <br />
            私たちの想いと会社の情報をご紹介します。
          </p>
        </div>

        <div className="page-hero-visual fade-up delay-1">
          <Image
            src="/images/company/company-reception.png"
            alt="TSUNAGオフィスの受付ロビー"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
