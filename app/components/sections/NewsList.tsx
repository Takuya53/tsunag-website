"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const categories = ["すべて", "お知らせ", "プレスリリース", "セミナー・イベント", "メディア掲載", "サービス情報", "コラム"];

const newsItems = [
  {
    image: "/images/news/news-01.png",
    date: "2025.06.01",
    category: "サービス情報",
    title: "AI活用支援サービスをリリースしました",
    text: "中小企業の業務効率化と成長を支援するAI活用支援サービスの提供を開始しました。",
  },
  {
    image: "/images/news/news-02.png",
    date: "2025.05.15",
    category: "セミナー・イベント",
    title: "成長する企業のためのWeb戦略セミナーを開催しました",
    text: "静岡市にて、Web戦略とAI活用をテーマにしたセミナーを開催しました。",
  },
  {
    image: "/images/news/news-03.png",
    date: "2025.04.28",
    category: "お知らせ",
    title: "コーポレートサイトをリニューアルしました",
    text: "より見やすく、サービスの価値が伝わるサイトへリニューアルいたしました。",
  },
  {
    image: "/images/news/news-04.png",
    date: "2025.04.10",
    category: "メディア掲載",
    title: "静岡経済新聞に掲載されました",
    text: "AIとクリエイティブを活用した中小企業支援の取り組みが紹介されました。",
  },
  {
    image: "/images/news/news-05.png",
    date: "2025.03.25",
    category: "プレスリリース",
    title: "株式会社◯◯との業務提携に関するお知らせ",
    text: "Webマーケティング領域における相互連携とサービス強化を目的に業務提携を締結しました。",
  },
  {
    image: "/images/news/news-06.jpg",
    date: "2025.03.10",
    category: "コラム",
    title: "成果につながるホームページの作り方とは？",
    text: "ホームページ制作で成果を出すためのポイントをわかりやすく解説します。",
  },
];

const pageItems = [1, 2, 3, "…", 8];

export default function NewsList() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filteredItems = useMemo(() => {
    if (activeCategory === "すべて") return newsItems;
    return newsItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="list" className="section section--tight-bottom">
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">NEWS LIST</p>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            新着情報
          </h2>
        </div>

        <div
          className="filter-chips fade-up delay-1"
          style={{ marginTop: "32px" }}
          role="group"
          aria-label="お知らせの絞り込み"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip${activeCategory === category ? " active" : ""}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="news-list fade-up delay-2">
          {filteredItems.map((item) => (
            <article className="news-item" key={item.title}>
              <div className="news-thumb">
                <Image src={item.image} alt={item.title} fill sizes="160px" />
              </div>

              <div className="news-info">
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                  <span className="news-category-tag">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <span className="news-arrow" aria-hidden="true">
                →
              </span>
            </article>
          ))}
        </div>

        <nav className="pagination" aria-label="ページネーション">
          {pageItems.map((page, index) =>
            page === "…" ? (
              <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                {page}
              </span>
            ) : (
              <button
                key={page}
                type="button"
                className={`pagination-item${page === 1 ? " active" : ""}`}
                disabled={page !== 1}
                aria-current={page === 1 ? "page" : undefined}
              >
                {page}
              </button>
            )
          )}
          <button type="button" className="pagination-item" disabled>
            次へ →
          </button>
        </nav>
      </div>
    </section>
  );
}
