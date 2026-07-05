export default function WorksList() {
  const works = [
    {
      title: "Webサイト改善",
      text: "事業内容が伝わる導線設計と、問い合わせにつながるページ構成を支援します。",
    },
    {
      title: "LP制作",
      text: "広告・SNS・営業活動と連動し、成果獲得を目的としたLPを制作します。",
    },
    {
      title: "SNS・SEO支援",
      text: "認知拡大と検索流入を見据えたコンテンツ設計を行います。",
    },
    {
      title: "動画・画像制作",
      text: "ブランド価値やサービスの魅力を伝えるクリエイティブを制作します。",
    },
    {
      title: "AI活用導入",
      text: "業務効率化・集客・改善活動にAIを自然に組み込みます。",
    },
    {
      title: "運用改善",
      text: "公開後も数値や反応を見ながら、成果につながる改善を継続します。",
    },
  ];

  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-semibold">
          支援実績領域
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">{work.title}</h3>
              <p className="leading-8 text-neutral-600">{work.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}