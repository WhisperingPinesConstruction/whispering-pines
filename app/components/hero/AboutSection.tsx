export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-8 py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-4 font-serif text-4xl text-sage-green md:text-5xl">
          About Whispering Pines
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-wood-brown/30 to-transparent" />
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <p className="leading-relaxed text-stone-gray text-lg font-medium">
          We are a family-run construction company in Ottawa. Two decades of
          experience meet fresh enthusiasm: from multi-million dollar estates to
          your cozy bathroom reno, we bring craftsmanship, transparency, and
          creative problem solving to every project.
        </p>
        <p className="leading-relaxed text-stone-gray text-lg font-medium">
          Our promise is simple: clear communication, fair pricing, and work we
          are proud to stand behind. If you have a napkin sketch or a full set
          of drawings, we&rsquo;ll help you get it built.
        </p>
      </div>
    </section>
  );
}
