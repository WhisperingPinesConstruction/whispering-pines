export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-8 py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-4 font-serif text-4xl text-sage-green md:text-5xl">
          About Whispering Pines
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-wood-brown/30 to-transparent" />
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        <p className="leading-relaxed text-stone-gray text-lg font-medium">
          We&rsquo;re a family-run construction company in Ottawa where twenty years of
          experience meets fresh enthusiasm. From multi-million dollar estates to
          cozy bathroom renos, we bring craftsmanship, transparency, and
          creative problem-solving to every project.
        </p>
        <p className="leading-relaxed text-stone-gray text-lg font-medium">
          Our promise is simple: clear communication, fair pricing, and work we&rsquo;re
          proud to stand behind. Whether you have a napkin sketch or a full set
          of drawings, we&rsquo;ll help you get it built.
        </p>
        <p className="leading-relaxed text-stone-gray text-lg font-medium">
          With licensed carpenters on every project and a deep passion for
          building science, we care about both the health of your home and the
          health of its occupants. We maximize quality at every price point —
          your project deserves our best.
        </p>
      </div>
    </section>
  );
}



