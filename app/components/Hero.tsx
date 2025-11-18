"use client";

import { useEffect } from "react";
import HeroTop from "./hero/HeroTop";
import TransitionSection from "./hero/TransitionSection";
import AboutSection from "./hero/AboutSection";
import ServicesSection from "./hero/ServicesSection";
import WhyChooseUsSection from "./hero/WhyChooseUsSection";
import TestimonialSection from "./hero/TestimonialSection";
import ContactSection from "./hero/ContactSection";

export default function Hero() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("snap-page");
    return () => {
      root.classList.remove("snap-page");
    };
  }, []);

  return (
    <>
      <section className="snap-start snap-normal">
        <HeroTop />
      </section>

      <div className="font-medium">
        <section className="snap-start snap-normal">
          <AboutSection />

          <TransitionSection />
        </section>
        <section className="snap-center snap-normal">
          <ServicesSection />
        </section>
        <section className="snap-start snap-normal">
          <WhyChooseUsSection />

          <TestimonialSection />
        </section>
        <section className="snap-start snap-normal">
          <ContactSection />
        </section>
      </div>
    </>
  );
}
