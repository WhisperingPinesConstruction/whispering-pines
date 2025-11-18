"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroTop from "./hero/HeroTop";
import TransitionSection from "./hero/TransitionSection";
import AboutSection from "./hero/AboutSection";
import ServicesSection from "./hero/ServicesSection";
import WhyChooseUsSection from "./hero/WhyChooseUsSection";
import TestimonialSection from "./hero/TestimonialSection";
import ContactSection from "./hero/ContactSection";

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each hero section on scroll
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section.wp-section")
    );

    // Set initial state
    sections.forEach((el) => {
      gsap.set(el, { opacity: 0.25, y: 65 });
    });

    // Create animations with ScrollTrigger
    const animations = sections.map((el) =>
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.25,
        ease: "power3.easeInOut",
        overwrite: "auto",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          once: false,
        },
      })
    );

    return () => {
      animations.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section className="wp-section">
        <HeroTop />
      </section>

      <div className="font-medium">
        <section className="wp-section">
          <AboutSection />

          <TransitionSection />
        </section>
        <section className="wp-section">
          <ServicesSection />
        </section>
        <section className="wp-section">
          <WhyChooseUsSection />

          <TestimonialSection />
        </section>
        <section className="wp-section">
          <ContactSection />
        </section>
      </div>
    </>
  );
}
