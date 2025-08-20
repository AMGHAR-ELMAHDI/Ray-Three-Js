"use client";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section
      className="py-32 px-6 bg-foreground relative overflow-hidden  snap-start"
      id="cta"
    >
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className=" flex justify-center items-center flex-col w-full h-full text-center relative z-10">
        <h2 className="font-serif font-bold text-5xl md:text-7xl text-background mb-8">
          Begin Your Ray Journey
        </h2>
        <p className="text-2xl text-background/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands who have discovered the secret of radiant beauty
          through the harmony of Japanese tradition and Moroccan treasures
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-gold hover:text-foreground px-16 py-6 text-xl font-semibold transform hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            Shop Ray
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-foreground px-16 py-6 text-xl bg-transparent transform hover:scale-110 transition-all duration-300"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
