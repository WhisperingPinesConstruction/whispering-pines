export default function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-8 text-center">
        <div className="relative">
          <svg
            className="absolute -left-4 -top-4 h-12 w-12 text-sage-green/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl italic leading-relaxed text-sage-green">
            They didn&rsquo;t just renovate our kitchen—they transformed how our
            family lives together. Worth every penny and then some.
          </blockquote>
        </div>
        <div className="mt-6">
          <p className="font-medium text-gold-accent/65">
            Sarah & Tom Richardson
          </p>
          <p className="text-sm text-stone-gray">
            Stittsville Kitchen Renovation
          </p>
        </div>
      </div>
    </section>
  );
}
