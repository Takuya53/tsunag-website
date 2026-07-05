export default function Insights() {
  const insights = [
    ["2024.06.20", "AI活用で中小企業の成長を加速する方法"],
    ["2024.06.15", "SEOで成果を出すための戦略とは"],
    ["2024.06.10", "SNS活用でブランドを成長させる方法"],
  ];

  return (
    <section className="bg-[#F8FAFC] px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-sm font-bold tracking-widest text-[#0F172A]">
          インサイト
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {insights.map(([date, title]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs text-[#6B7280]">{date}</p>
              <h3 className="mt-3 text-sm font-bold leading-6 text-[#0F172A]">{title}</h3>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a className="text-sm font-bold text-[#C9893C]">
            すべてのインサイトを見る →
          </a>
        </div>
      </div>
    </section>
  );
}
