import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-t-3xl bg-linear-to-b from-sage-green/10 to-transparent py-20"
    >
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-4 font-serif text-3xl text-sage-green md:text-4xl">
          Let&rsquo;s Build Something Together
        </h2>
        <p className="mb-10 text-lg text-stone-gray">
          Free quotes, friendly service, and a genuine excitement for your
          project.
          <br />
          What are you waiting for?
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <Link
            href="mailto:hello@whisperingpines.ca"
            className="inline-flex items-center rounded-lg bg-sage-green px-8 py-4 font-medium text-cream top-sheen elev-1 transition-all hover:bg-deep-green hover:elev-2"
          >
            Email Us
          </Link>
          <div>
            <p className="mb-1 text-sm text-stone-gray">Call us anytime:</p>
            <a
              href="tel:613-555-0123"
              className="text-lg font-semibold text-sage-green hover:text-forest-green"
            >
              (613) 555-0123
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-stone-gray">
          Proudly serving Ottawa, Kanata, Stittsville, Barrhaven, and
          surrounding communities
        </p>
      </div>
    </section>
  );
}
