export default function TransitionSection() {
  return (
    <section className="relative -mt-20 pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-8">
        {/* Detailed Service Descriptions */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 p-8 elev-1 top-sheen transition-all hover:elev-2">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest-green/5 transition-transform group-hover:scale-150" />
            <h3 className="relative mb-3 font-serif text-2xl text-sage-green">
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
            <h3 className="relative mb-3 font-serif text-2xl text-sage-green">
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

        <div className="relative overflow-hidden rounded-2xl border border-sage-green/20 bg-linear-to-br from-cream/5 to-warm-tan/5 backdrop-blur-sm elev-1 top-sheen">
          <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-forest-green/5 pointer-events-none" />
          <div className="hidden h-1 w-full bg-linear-to-r from-transparent via-wood-brown/20 to-transparent md:block" />
          <div className="grid grid-cols-1 divide-y divide-sage-green/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {/* First Row */}
            <div className="flex-1 px-8 py-10 text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                🏠
              </div>
              <h3 className="mt-3 mb-2 font-serif text-xl text-gold-accent">
                Custom Homes
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Dream big, we&rsquo;ll build bigger
              </p>
            </div>
            <div className="flex-1 px-8 py-10 text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                🔨
              </div>
              <h3 className="mt-3 mb-2 font-serif text-xl text-gold-accent">
                Renovations
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Love your home again
              </p>
            </div>
            <div className="flex-1 px-8 py-10 text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                🌲
              </div>
              <h3 className="mt-3 mb-2 font-serif text-xl text-gold-accent">
                Outdoor Living
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Decks, fences & more
              </p>
            </div>
            
            {/* Horizontal Divider */}
            <div className="col-span-full h-px bg-gradient-to-r from-transparent via-wood-brown/20 to-transparent" />
            
            {/* Second Row */}
            <div className="flex-1 px-8 py-10 text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                🪟
              </div>
              <h3 className="mt-3 mb-2 font-serif text-xl text-gold-accent">
                Windows & Doors
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Energy-efficient upgrades
              </p>
            </div>
            <div className="flex-1 px-8 py-10 text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                🏘️
              </div>
              <h3 className="mt-3 mb-2 font-serif text-xl text-gold-accent">
                Siding
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Protect & beautify your home
              </p>
            </div>
            <div className="flex-1 px-8 py-10 text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-green/10 text-6xl text-wood-brown">
                🧱
              </div>
              <h3 className="mt-3 mb-2 font-serif text-xl text-gold-accent">
                Residential Framing
              </h3>
              <p className="text-sm leading-relaxed text-stone-gray">
                Strong foundations for your vision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

