export default function CompanyPage() {
  return (
    <section className="bg-stone-50 text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-slate-500">
          COMPANY
        </p>

        <h1 className="mb-8 text-4xl font-semibold tracking-tight md:text-6xl">
          会社情報
        </h1>

        <p className="mb-16 max-w-3xl text-lg leading-9 text-slate-700">
          TSUNAGは、AIを活用して中小企業の事業成長を支援するGrowth
          Partnerです。制作して終わりではなく、お客様の未来が豊かになることを最優先に、共に考え、共に育てます。
        </p>

        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <dl className="divide-y divide-slate-200">
            <div className="grid gap-3 py-6 md:grid-cols-[180px_1fr]">
              <dt className="font-semibold text-slate-950">会社名</dt>
              <dd className="text-slate-700">TSUNAG</dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-[180px_1fr]">
              <dt className="font-semibold text-slate-950">代表</dt>
              <dd className="text-slate-700">辻 拓也</dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-[180px_1fr]">
              <dt className="font-semibold text-slate-950">事業内容</dt>
              <dd className="text-slate-700">
                AIを活用したWebサイト制作、LP制作、SEO対策、SNS戦略、
                画像制作、動画制作、バナー制作、事業成長支援
              </dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-[180px_1fr]">
              <dt className="font-semibold text-slate-950">Mission</dt>
              <dd className="text-slate-700">未来は、共に創る。</dd>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-[180px_1fr]">
              <dt className="font-semibold text-slate-950">Philosophy</dt>
              <dd className="text-slate-700">
                お客様の未来を豊かにすることを最優先とする。
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}