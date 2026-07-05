export default function Problem() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-slate-500">
          PROBLEM
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          このようなお悩みはありませんか？
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              ホームページを作っただけで終わっている
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              更新されず、問い合わせも増えず、
              本来の価値を発揮できていない。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              AIを活用したいが何から始めればいいかわからない
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              AIを導入したいものの、
              自社に最適な使い方が見つからない。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              SNSや動画を活用できていない
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              情報発信が継続できず、
              新規顧客との接点が増えない。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              集客や売上につながる改善が分からない
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              制作だけではなく、
              継続的な成長支援が必要。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}