"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import NavigationBar from "@/components/sections/NavigationBar";
import HeroSection from "@/components/sections/HeroSection";
import HeroContentSection from "@/components/sections/HeroContentSection";
import HeritageSection from "@/components/sections/HeritageSection";
import RitualSection from "@/components/sections/RitualSection";
import IngredientsSection from "@/components/sections/IngredientsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const heritageRef = useRef<HTMLDivElement>(null);
  const ritualRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // 3D scroll animation for each section
    const sections = [
      heroRef,
      heritageRef,
      ritualRef,
      ingredientsRef,
      philosophyRef,
    ];

    sections.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            y: 200,
            rotateX: 15,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById("hero-content");
    contentSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden select-none snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll">
      <NavigationBar />
      <HeroSection heroRef={heroRef} scrollToContent={scrollToContent} />
      <HeroContentSection isLoaded={isLoaded} />
      <HeritageSection heritageRef={heritageRef} />
      <RitualSection ritualRef={ritualRef} />
      <IngredientsSection ingredientsRef={ingredientsRef} />
      <PhilosophySection philosophyRef={philosophyRef} />
      <CTASection />
    </div>
  );
}
