"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const filters = ["すべて", "Web制作", "SEO対策", "LP制作", "SNS運用", "ブランディング"];

const works = [
  {
    image: "/images/works/work-seikotsuin.png",
    tag: "整骨院",
    title: "整骨院A様",
    services: "Web制作 / SEO対策 / MEO対策",
    text: "地域密着の信頼感を重視したサイト設計とMEO対策により、新規来院数が大幅に増加。",
    stat: "新規来院数 215% UP",
    categories: ["Web制作", "SEO対策"],
  },
  {
    image: "/images/works/work-automotive.png",
    tag: "自動車小売業",
    title: "自動車販売B様",
    services: "Web制作 / LP制作 / SEO対策 / 広告運用",
    text: "在庫情報の見せ方と導線設計を最適化し、問い合わせ数と成約率が向上。",
    stat: "問い合わせ数 176% UP",
    categories: ["Web制作", "LP制作", "SEO対策"],
  },
  {
    image: "/images/works/work-electric.png",
    tag: "電気工事業",
    title: "電気工事C様",
    services: "Web制作 / SEO対策 / ブランディング",
    text: "専門性と信頼性を伝える構成で、公共工事の受注率が増加。",
    stat: "受注件数 248% UP",
    categories: ["Web制作", "SEO対策", "ブランディング"],
  },
  {
    image: "/images/works/work-plumbing.png",
    tag: "管工事業",
    title: "管工事D様",
    services: "Web制作 / SEO対策 / MEO対策",
    text: "施工実績の見せ方を強化し、問い合わせ数が大きく向上。",
    stat: "問い合わせ数 186% UP",
    categories: ["Web制作", "SEO対策"],
  },
  {
    image: "/images/works/work-transport.png",
    tag: "運輸サービス業",
    title: "運輸会社E様",
    services: "Web制作 / SEO対策 / 採用サイト制作",
    text: "採用コンテンツを充実させ、応募数と定着率が向上。",
    stat: "応募数 203% UP",
    categories: ["Web制作", "SEO対策"],
  },
  {
    image: "/images/works/work-beauty.png",
    tag: "美容業",
    title: "美容室F様",
    services: "Web制作 / SNS運用 / 予約システム導入",
    text: "ブランドイメージを統一し、新規予約数とリピート率が向上。",
    stat: "新規予約数 189% UP",
    categories: ["Web制作", "SNS運用"],
  },
  {
    image: "/images/works/work-barber.png",
    tag: "理容業",
    title: "理容室G様",
    services: "Web制作 / SEO対策 / SNS運用",
    text: "地域での認知度向上と導線改善により、新規顧客数が増加。",
    stat: "新規顧客数 170% UP",
    categories: ["Web制作", "SEO対策", "SNS運用"],
  },
  {
    image: "/images/works/work-agriculture.png",
    tag: "農業",
    title: "農園H様",
    services: "ECサイト制作 / ブランディング",
    text: "ECサイト構築により、売上とリピーター数が大幅に増加。",
    stat: "売上 230% UP",
    categories: ["Web制作", "ブランディング"],
  },
  {
    image: "/images/works/work-civil.png",
    tag: "土木工事業",
    title: "土木会社I様",
    services: "Web制作 / SEO対策 / 採用サイト制作",
    text: "施工実績と企業の強みを明確に伝え、大型案件の受注につながる。",
    stat: "受注件数 220% UP",
    categories: ["Web制作", "SEO対策"],
  },
  {
    image: "/images/works/work-telecom.png",
    tag: "電気通信工事業",
    title: "通信工事J様",
    services: "Web制作 / SEO対策 / パンフレット制作",
    text: "専門性をわかりやすく伝える構成で、問い合わせ数が増加。",
    stat: "問い合わせ数 198% UP",
    categories: ["Web制作", "SEO対策"],
  },
  {
    image: "/images/works/work-apparel.png",
    tag: "アパレル業",
    title: "アパレルブランドK様",
    services: "ECサイト制作 / SNS運用 / 広告運用",
    text: "ECサイトとSNSを連携し、売上とフォロワー数が大幅に増加。",
    stat: "売上 214% UP",
    categories: ["Web制作", "SNS運用"],
  },
  {
    image: "/images/works/work-vet.png",
    tag: "獣医業",
    title: "動物病院L様",
    services: "Web制作 / SEO対策 / 予約システム導入",
    text: "安心感のあるデザインと導線で、新規来院数が大きく向上。",
    stat: "新規来院数 191% UP",
    categories: ["Web制作", "SEO対策"],
  },
];

export default function WorksList() {
  const [activeFilter, setActiveFilter] = useState("すべて");

  const filteredWorks = useMemo(() => {
    if (activeFilter === "すべて") return works;
    return works.filter((work) => work.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="list" className="section section--tight-bottom">
      <div className="section-inner">
        <div className="works-head fade-up">
          <div>
            <p className="section-label">OUR WORKS</p>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              業界別 実績一覧
            </h2>
          </div>

          <div className="filter-chips" role="group" aria-label="実績の絞り込み">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-chip${activeFilter === filter ? " active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="work-grid-3 fade-up delay-1">
          {filteredWorks.map((work) => (
            <article className="work-card" key={work.title}>
              <div className="work-media">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <span className="work-tag">{work.tag}</span>
              </div>

              <div className="work-body">
                <h3>{work.title}</h3>
                <p className="work-services">{work.services}</p>
                <p className="work-services" style={{ marginTop: "10px" }}>
                  {work.text}
                </p>
                <p className="work-stat">
                  <span aria-hidden="true">↗</span>
                  {work.stat}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="works-note">
          ※掲載の数値は支援イメージをもとにしたサンプルです。すべてのクライアント様の成果を保証するものではありません。
        </p>
      </div>
    </section>
  );
}
