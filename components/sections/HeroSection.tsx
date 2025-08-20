"use client";
import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import ThreeScene from "@/components/three-scene";

export default function HeroSection({
  heroRef,
  scrollToContent,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
  scrollToContent: () => void;
}) {
  // Ref for content fade-in
  const contentRef = useRef<HTMLDivElement>(null);

  // Hydration-safe sparkles
  const sparkles = useMemo(() => {
    // Deterministic random for hydration safety
    const seed = 42;
    function mulberry32(a: number) {
      return function () {
        var t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    const rand = mulberry32(seed);
    return Array.from({ length: 20 }).map((_, i) => {
      const left = rand() * 100;
      const top = rand() * 100;
      const animationDelay = rand() * 3;
      const animationDuration = 3 + rand() * 2;
      return (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gold/60 rounded-full animate-pulse"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        />
      );
    });
  }, []);

  // Fade-in animation for main content
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden snap-start"
    >
      {/* Three.js Background - Full Height */}
      <div className="absolute inset-0">
        <ThreeScene />
        <div className="absolute inset-0 z-5 pointer-events-none">
          {sparkles}
        </div>
      </div>
      {/* Main Content Fade-in Example (add your headline/cta here if needed) */}
      <div
        ref={contentRef}
        className="relative z-10 flex-1 flex flex-col items-center justify-end pb-32"
      >
        {/* Add your animated headline, CTA, etc. here if desired */}
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hover:scale-125 transition-transform duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
          <ChevronDown className="w-6 h-6 text-gold" />
        </div>
      </button>
    </section>
  );
}
