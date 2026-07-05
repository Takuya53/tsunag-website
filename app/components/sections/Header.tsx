export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="text-lg font-bold tracking-[0.3em] text-slate-950"
        >
          TSUNAG
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="/about" className="hover:text-slate-950">
            About
          </a>
          <a href="/services" className="hover:text-slate-950">
            Services
          </a>
          <a href="/works" className="hover:text-slate-950">
            Works
          </a>
          <a href="/company" className="hover:text-slate-950">
            Company
          </a>
          <a href="/contact" className="hover:text-slate-950">
            Contact
          </a>
        </nav>

        <a
          href="/contact"
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          相談する
        </a>
      </div>
    </header>
  );
}