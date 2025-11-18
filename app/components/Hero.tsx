"use client";

import HeroTop from "./hero/HeroTop";
import TransitionSection from "./hero/TransitionSection";
import AboutSection from "./hero/AboutSection";
import ServicesSection from "./hero/ServicesSection";
import WhyChooseUsSection from "./hero/WhyChooseUsSection";
import TestimonialSection from "./hero/TestimonialSection";
import ContactSection from "./hero/ContactSection";

export default function Hero() {
  return (
    <>
      <HeroTop />

      <div className="font-medium">
        <AboutSection />
        <TransitionSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </>
  );
}
