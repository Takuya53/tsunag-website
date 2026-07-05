export default function Value() {
  const values = [
    ["成長戦略", "Growth Strategy", "事業成長に必要な方向性を整理し、成果につながる戦略を設計します。"],
    ["AI活用支援", "AI Transformation", "AIを日々の業務・集客・改善活動へ自然に組み込みます。"],
    ["成果創出", "Growth Results", "制作して終わりではなく、成果が生まれる運用まで伴走します。"],
  ];

  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-sm font-bold tracking-widest text-[#0F172A]">TSUNAGが提供する価値</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {values.map(([title, subtitle, body]) => (
            <div key={title} className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#F2D9A1] bg-white text-3xl text-[#C9893C] shadow-sm">
                ◯
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0F172A]">{title}</h3>
              <p className="mt-1 text-sm text-[#6B7280]">{subtitle}</p>
              <p className="mt-4 max-w-xs text-sm leading-7 text-[#475569]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
