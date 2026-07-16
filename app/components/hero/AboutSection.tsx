import woodBG from "@/public/WoodGrain.jpg";

const PARAGRAPHS = [
  "We're a family-run construction company in Ottawa. After twenty years building for other people, we put our own name over the door, and we treat every project like the one our reputation rides on. Because it does.",
  "Our promise is simple: clear communication, fair pricing, and work we're proud to stand behind. Whether you have a napkin sketch or a full set of drawings, we'll help you get it built.",
  "There are licensed carpenters on every one of our projects, and we're genuinely nerdy about building science. We care as much about how your home performs as how it looks.",
];

export default function AboutSection() {
  return (
    <section id="about" className="wp-section relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${woodBG.src})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,16,10,.93) 0%, rgba(5,26,16,.9) 50%, rgba(4,16,10,.93) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1080px] px-5 py-20 text-center md:px-14 md:py-24">
        <div data-reveal>
          <div className="eyebrow mb-3.5">About Us</div>
          <h2 className="text-3xl text-cream md:text-[42px]">
            About Whispering Pines
          </h2>
        </div>
        <div data-rule className="brass-rule mx-auto mb-12 mt-[22px] md:mb-[54px]" />
        <div
          data-stagger
          className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 md:grid-cols-3 md:gap-11"
        >
          {PARAGRAPHS.map((text) => (
            <p
              key={text.slice(0, 24)}
              className="text-[15.5px] leading-[1.85] text-woodtext"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
