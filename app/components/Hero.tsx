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
import TeamSection from "./hero/TeamSection";

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Sections and their backgrounds stay visible at all times; only the
      // inner content blocks rise in, so a mistimed trigger can never leave
      // a blank stretch of page
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      reveals.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 97%",
            once: true,
          },
        });
      });

      // Grids reveal their children with a stagger
      const staggers = gsap.utils.toArray<HTMLElement>("[data-stagger]");
      staggers.forEach((el) => {
        gsap.from(el.children, {
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: el,
            start: "top 97%",
            once: true,
          },
        });
      });

      // Brass divider rules grow out from the center
      const rules = gsap.utils.toArray<HTMLElement>("[data-rule]");
      rules.forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 96%",
            once: true,
          },
        });
      });

      // Line icons draw their strokes in (paths carry pathLength="1")
      const drawIcons = gsap.utils.toArray<SVGElement>("[data-draw]");
      drawIcons.forEach((icon, i) => {
        const strokes = icon.querySelectorAll("path, rect, circle");
        gsap.set(strokes, { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.to(strokes, {
          strokeDashoffset: 0,
          duration: 1.2,
          delay: (i % 3) * 0.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: icon,
            start: "top 96%",
            once: true,
          },
        });
      });
    });

    // Sanity content lands after mount and grows the page, which shifts
    // every trigger position; recalculate once it has had time to settle
    const refreshTimers = [
      setTimeout(() => ScrollTrigger.refresh(), 1200),
      setTimeout(() => ScrollTrigger.refresh(), 3000),
    ];

    return () => {
      refreshTimers.forEach(clearTimeout);
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <HeroTop />
      <AboutSection />
      <ServicesSection />
      <TransitionSection />
      <TestimonialSection />
      <WhyChooseUsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
