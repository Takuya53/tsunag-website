export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDF7EC]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(255,255,255,0.8),transparent_16%),linear-gradient(135deg,#fff8ea_0%,#f6d7a0_45%,#c9893c_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF7E6]/95 via-[#FFF7E6]/70 to-transparent" />

      <div className="relative mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-6 py-24 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.28em] text-[#C9893C]">TSUNAG</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-6xl">
            未来は、共に創る。
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#0F172A]">
            AIを活用して
            <br />
            中小企業の事業成長を支援する
            <br />
            Growth Partner
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-md bg-[#C9893C] px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#9A742A]"
          >
            共に未来を創るパートナーへ →
          </a>
        </div>

        <div className="relative hidden min-h-[420px] lg:block">
          <div className="absolute bottom-8 right-8 h-72 w-64 rounded-t-full bg-gradient-to-b from-[#1F2937] to-[#0F172A] opacity-90" />
          <div className="absolute bottom-8 right-36 h-64 w-56 rounded-t-full bg-gradient-to-b from-[#374151] to-[#1F2937] opacity-90" />
        </div>
      </div>
    </section>
  );
}
