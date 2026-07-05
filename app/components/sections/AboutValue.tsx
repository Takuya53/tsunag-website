export default function AboutValue() {
  const values = [
    {
      title: "成長戦略",
      subtitle: "Growth Strategy",
      text: "事業成長に必要な方向性を整理し、成果につながる戦略を設計します。",
    },
    {
      title: "AI活用支援",
      subtitle: "AI Transformation",
      text: "AIを日々の業務・集客・改善活動へ自然に組み込みます。",
    },
    {
      title: "成果創出",
      subtitle: "Growth Results",
      text: "制作して終わりではなく、成果が生まれる運用まで伴走します。",
    },
  ];

  return (
    <section className="bg-neutral-50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-medium tracking-[0.3em] text-neutral-500">
          VALUE
        </p>

        <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          TSUNAGが提供する価値
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200"
            >
              <p className="mb-3 text-sm text-neutral-500">{value.subtitle}</p>
              <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                {value.title}
              </h3>
              <p className="leading-8 text-neutral-600">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}