export default function Hero() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-semibold tracking-[0.3em] text-slate-500">
          TSUNAG
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          未来は、共に創る。
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          TSUNAGは、AIを活用して中小企業の事業成長を支援するGrowth Partnerです。
          ホームページ制作だけではなく、ブランド・集客・SNS・動画・SEO・AI活用まで、
          お客様の未来を豊かにすることを最優先に支援します。
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-8 py-4 text-center text-sm font-semibold text-white"
          >
            相談する
          </a>

          <a
            href="#mission"
            className="rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-semibold text-slate-950"
          >
            TSUNAGについて
          </a>
        </div>
      </div>
    </section>
  );
}