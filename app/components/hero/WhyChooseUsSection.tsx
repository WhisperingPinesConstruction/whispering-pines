export default function WhyChooseUsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-12 font-serif text-3xl text-deep-green md:text-4xl">
          Why Families Choose Whispering Pines
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-warm-tan/5 p-6 elev-1 transition-all hover:elev-2">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10 text-3xl">
              💪
            </div>
            <h3 className="mb-2 font-serif text-lg text-forest-green">
              We Care More
            </h3>
            <p className="text-sm leading-relaxed text-stone-gray">
              As a new business, your project isn&rsquo;t just another
              job—it&rsquo;s our reputation
            </p>
          </div>
          <div className="rounded-lg bg-warm-tan/5 p-6 elev-1 transition-all hover:elev-2">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10 text-3xl">
              🎯
            </div>
            <h3 className="mb-2 font-serif text-lg text-forest-green">
              Real Experience
            </h3>
            <p className="text-sm leading-relaxed text-stone-gray">
              Two decades of building means we&rsquo;ve solved problems you
              haven&rsquo;t thought of yet
            </p>
          </div>
          <div className="rounded-lg bg-warm-tan/5 p-6 elev-1 transition-all hover:elev-2">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10 text-3xl">
              🤝
            </div>
            <h3 className="mb-2 font-serif text-lg text-forest-green">
              Fair Pricing
            </h3>
            <p className="text-sm leading-relaxed text-stone-gray">
              Building our name means building value into every quote we write
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


