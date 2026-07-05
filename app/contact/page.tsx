export default function ContactPage() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-slate-400">
          CONTACT
        </p>

        <h1 className="mb-8 text-4xl font-semibold tracking-tight md:text-6xl">
          まずは、未来の話から。
        </h1>

        <p className="mb-16 max-w-3xl text-lg leading-9 text-slate-300">
          事業の課題が明確でなくても問題ありません。TSUNAGは、AIを活用して、
          お客様の未来が豊かになるための一歩を共に考えます。
        </p>

        <div className="rounded-3xl bg-white p-8 text-slate-950 shadow-sm md:p-12">
          <h2 className="mb-6 text-2xl font-semibold">
            お問い合わせ
          </h2>

          <p className="mb-8 leading-8 text-slate-700">
            Webサイト制作、LP制作、SEO対策、SNS戦略、画像・動画・バナー制作、
            事業成長支援に関するご相談を受け付けています。
          </p>

          <a
            href="mailto:t.tsuji0530@gmail.com"
            className="inline-flex rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            メールで相談する
          </a>
        </div>
      </div>
    </section>
  );
}