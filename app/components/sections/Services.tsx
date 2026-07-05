export default function Services() {
  const services = [
    ["AI活用支援", "AI導入・業務効率化・自動化支援"],
    ["Web・LP制作", "戦略設計から制作・運用まで一貫支援"],
    ["SEO・SNS戦略", "検索流入と認知拡大を支援"],
    ["動画・画像制作", "ブランド価値を伝えるクリエイティブ制作"],
    ["AIソリューション", "課題に応じた仕組み化・改善支援"],
  ];

  return (
    <section className="bg-[#F8FAFC] px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-sm font-bold tracking-widest text-[#0F172A]">支援領域</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {services.map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-24 rounded-xl bg-gradient-to-br from-[#F2D9A1] to-[#C9893C]/70" />
              <h3 className="mt-4 text-sm font-bold text-[#0F172A]">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#64748B]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
