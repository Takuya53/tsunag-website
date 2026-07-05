export default function Works() {
  const works = [
    ["製造業A社", "売上前年比＋180%を実現", "180%"],
    ["サービス業B社", "問い合わせ数3倍を実現", "3倍"],
    ["小売業C社", "新規顧客獲得数2.5倍を実現", "2.5倍"],
  ];

  return (
    <section className="bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-sm font-bold tracking-widest text-[#0F172A]">
          成功事例
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {works.map(([company, text, number]) => (
            <div key={company} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-36 rounded-xl bg-[#EEF2F7]" />
              <h3 className="mt-5 font-bold text-[#0F172A]">{company}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{text}</p>
              <p className="mt-4 text-4xl font-bold text-[#C9893C]">{number}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a className="inline-block rounded-md bg-[#C9893C] px-8 py-3 text-sm font-bold text-white">
            すべての成功事例を見る →
          </a>
        </div>
      </div>
    </section>
  );
}
