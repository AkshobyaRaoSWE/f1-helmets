import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <Gallery />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(225,37,44,0.18),transparent_50%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-14">
        <div className="flex items-center gap-2 text-[10px] font-display tracking-[0.4em] uppercase text-white/40 mb-6">
          <span className="h-px w-8 bg-white/30" />
          <span>2025 Season</span>
        </div>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight leading-[0.9] text-white">
          The <span className="text-[#E1252C]">Grid</span>,
          <br />
          one helmet at a time.
        </h1>
        <p className="mt-6 max-w-xl text-white/60 text-base leading-relaxed">
          Twenty drivers, twenty lids. Each helmet stylized as an SVG, painted
          in the colors that matter — team livery, national flag, and the small
          details that say who's underneath.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/40">
        <div className="font-display tracking-[0.3em] uppercase">
          Stylized helmet renders. Not affiliated with F1 or any team.
        </div>
        <div>Built in one night.</div>
      </div>
    </footer>
  );
}
