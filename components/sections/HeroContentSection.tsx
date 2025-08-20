"use client";
import { Button } from "@/components/ui/button";

export default function HeroContentSection({
  isLoaded,
}: {
  isLoaded: boolean;
}) {
  return (
    <section
      id="hero-content"
      className="py-32 px-6 bg-background relative min-h-screen flex items-center justify-center snap-start"
    >
      <div
        className={`text-center max-w-5xl mx-auto transition-all duration-1500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="mb-8">
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-foreground mb-4 leading-tight">
            <span className="inline-block text-gold animate-pulse">光</span>
            <span className="block text-gradient-black-gold">Ray</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            光の美しさ
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80">
            Radiant Beauty Illuminated
          </p>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Where ancient Japanese wisdom meets Moroccan botanical treasures,
          creating skincare that illuminates your natural radiance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-foreground hover:bg-gold text-background hover:text-foreground px-12 py-6 text-lg font-medium transform hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            Discover Ray
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gold hover:bg-gold hover:text-foreground px-12 py-6 text-lg bg-background/80 backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
          >
            Begin Your Glow
          </Button>
        </div>
      </div>
    </section>
  );
}
