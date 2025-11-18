export default function TransitionSection() {
  return (
    <section className="relative -mt-20 pb-20 pt-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="overflow-hidden rounded-2xl border border-sage-green/20 bg-cream/8 backdrop-blur-sm elev-1">
          <div className="hidden h-1 w-full bg-linear-to-r from-transparent via-wood-brown/20 to-transparent md:block" />
          <div className="flex flex-col divide-y divide-sage-green/15 md:flex-row md:divide-y-0 md:divide-x">
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
          </div>
        </div>
      </div>
    </section>
  );
}
