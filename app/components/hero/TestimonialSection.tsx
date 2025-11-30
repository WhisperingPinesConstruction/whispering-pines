export default function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <div className="relative">
          <svg
            className="absolute -left-4 -top-4 h-12 w-12 text-sage-green/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl italic leading-relaxed text-sage-green">
            <p>"Ryan from Whispering Pines completed a multitude of different projects at our new home and he did not disappoint.</p>
            <p className="mt-3"> He framed our basement and built 2 amazing decks. The work was flawless.</p>
            <p className="mt-3">Ryan took the time to understand our projects, provided good pricing and also gave us great advice along the way.</p>
            <p className="mt-3">No corners were cut, Whispering Pines delivered precise craftmanship every step of the way.</p>
            <p className="mt-3">Thank you very much. Looking forward to our next project we can have you help us with.</p>
          </blockquote>
        </div>
        <div className="mt-6">
          <p className="font-medium text-gold-accent/65">
            Martin Gauthier
          </p>
          <p className="text-sm text-stone-gray">
            Ottawa, ON
          </p>
        </div>
      </div>
    </section>
  );
}



