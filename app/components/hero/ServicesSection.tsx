export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-8 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-serif text-4xl text-deep-green md:text-5xl">
          What We Do Best
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-wood-brown/30 to-transparent" />
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="group relative overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 p-8 elev-1 top-sheen transition-all hover:elev-2">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest-green/5 transition-transform group-hover:scale-150" />
          <h3 className="relative mb-3 font-serif text-2xl text-forest-green">
            Complete Builds
          </h3>
          <p className="relative mb-4 leading-relaxed text-stone-gray">
            Your architectural vision becomes reality. We handle everything from
            foundation to finishing touches, with expertise in both luxury
            estates and cozy family homes.
          </p>
          <div className="relative text-sm font-medium text-wood-brown">
            $500K to $10M+ projects
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-warm-tan/5 to-cream/5 p-8 elev-1 top-sheen transition-all hover:elev-2">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest-green/5 transition-transform group-hover:scale-150" />
          <h3 className="relative mb-3 font-serif text-2xl text-forest-green">
            Smart Renovations
          </h3>
          <p className="relative mb-4 leading-relaxed text-stone-gray">
            Breathe new life into your space. Kitchen transformations, bathroom
            sanctuaries, or that addition you&rsquo;ve been sketching on napkins
            for years.
          </p>
          <div className="relative text-sm font-medium text-wood-brown">
            No project too small
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-warm-tan/5 p-8">
        <h3 className="mb-6 text-center text-lg font-medium text-deep-green">
          Everything In Between
        </h3>
        <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">General Contracting</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Home Framing</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Windows & Doors</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Custom Trim</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Siding</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-gold-accent"></span>
            <span className="text-stone-gray">Decks & Fences</span>
          </div>
        </div>
        <p className="mt-6 text-center text-sm font-medium italic text-wood-brown">
          &ldquo;Creative solutions for unique problems&rdquo;
        </p>
      </div>
    </section>
  );
}


