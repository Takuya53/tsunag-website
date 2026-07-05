export default function AboutCTA() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-neutral-400">
          NEXT STEP
        </p>

        <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
          未来は、共に創る。
        </h2>

        <p className="mb-10 text-lg leading-8 text-neutral-300">
          TSUNAGは、お客様の未来をより豊かにするGrowth Partnerです。
          まずはお気軽にご相談ください。
        </p>

        <a
          href="/#contact"
          className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-neutral-900 transition hover:opacity-90"
        >
          無料相談はこちら
        </a>
      </div>
    </section>
  );
}