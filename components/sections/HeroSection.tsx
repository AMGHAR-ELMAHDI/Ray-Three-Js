"use client";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import ThreeScene from "@/components/three-scene";

export default function HeroSection({
  heroRef,
  scrollToContent,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
  scrollToContent: () => void;
}) {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden snap-start"
    >
      {/* Three.js Background - Full Height */}
      <div className="absolute inset-0">
        <ThreeScene />
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
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
