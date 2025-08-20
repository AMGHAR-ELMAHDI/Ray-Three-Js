"use client";
import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif font-bold text-2xl text-foreground">
            光 <span className="text-sm font-sans ml-2 text-gold">Ray</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#heritage"
              className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Heritage
            </a>
            <a
              href="#ritual"
              className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Ritual
            </a>
            <a
              href="#ingredients"
              className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Ingredients
            </a>
            <a
              href="#philosophy"
              className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Philosophy
            </a>
            <Button className="bg-foreground hover:bg-gold text-background hover:text-foreground transform hover:scale-105 transition-all duration-300">
              Experience Ray
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
