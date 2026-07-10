import Image from "next/image";
import Link from "next/link";

const works = [
  {
    image: "/images/works/work-restaurant.png",
    tag: "飲食業",
    title: "飲食・レストラン様",
    services: "Web制作 / LP制作 / SNS運用",
    stat: "予約数 215% UP",
  },
  {
    image: "/images/works/work-factory.png",
    tag: "製造業",
    title: "製造・工業様",
    services: "コーポレートサイト / SEO対策",
    stat: "問い合わせ数 3.2倍",
  },
  {
    image: "/images/works/work-construction.png",
    tag: "建設業",
    title: "建設・不動産様",
    services: "Web制作 / 採用ブランディング",
    stat: "採用応募数 4.1倍",
  },
  {
    image: "/images/works/work-legal.png",
    tag: "士業",
    title: "士業・コンサルティング様",
    services: "Web制作 / SEO対策 / コンテンツ制作",
    stat: "問い合わせ数 248%",
  },
  {
    image: "/images/works/work-realestate.png",
    tag: "不動産業",
    title: "不動産会社様",
    services: "Web制作 / LP制作 / 広告運用",
    stat: "成約数 176% UP",
  },
];

export default function Works() {
  return (
    <section className="section section--tight-bottom">
      <div className="section-inner">
        <div className="works-head fade-up">
          <div>
            <p className="section-label">WORKS</p>
            <h2 className="section-title">
              成果につながる支援を、
              <br />
              <span className="gold-text">多くの業界で実現しています。</span>
            </h2>
          </div>

          <Link href="/works" className="button-secondary">
            すべての実績を見る
          </Link>
        </div>

        <div className="work-grid fade-up delay-1">
          {works.map((work) => (
            <article className="work-card" key={work.title}>
              <div className="work-media">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 900px) 50vw, 20vw"
                />
                <span className="work-tag">{work.tag}</span>
              </div>

              <div className="work-body">
                <h3>{work.title}</h3>
                <p className="work-services">{work.services}</p>
                <p className="work-stat">
                  <span aria-hidden="true">↗</span>
                  {work.stat}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="works-note">
          ※掲載の数値は支援イメージをもとにしたサンプルです。実際の成果は業種・条件により異なります。
        </p>
      </div>
    </section>
  );
}
