"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ThreeScene from "@/components/three-scene";
import {
  ChevronDown,
  Leaf,
  Droplets,
  Sun,
  Moon,
  Sparkles,
  Star,
} from "lucide-react";

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

    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        { ref: heritageRef, class: "animate-fade-in-up" },
        { ref: ritualRef, class: "animate-slide-in-left" },
        { ref: ingredientsRef, class: "animate-fade-in-scale" },
        { ref: philosophyRef, class: "animate-slide-in-right" },
      ];

      sections.forEach(({ ref }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

          if (isVisible) {
            ref.current.classList.add("animate-in");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById("hero-content");
    contentSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
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

      {/* Hero Section with Three.js */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col overflow-hidden"
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

      {/* Hero Content */}
      <section id="hero-content" className="py-32 px-6 bg-background relative">
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

      {/* Heritage Section with 3D Elements */}
      <section
        ref={heritageRef}
        id="heritage"
        className="py-32 px-6 bg-secondary/30 relative overflow-hidden opacity-0 translate-y-12 transition-all duration-1000 ease-out animate-in"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gold-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gold/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-5xl md:text-7xl text-foreground mb-8 animate-fade-in-up">
              <span className="text-gold">伝統</span> Heritage
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Born from the sacred rituals of Japanese geishas and enriched with
              the mystical botanicals of Morocco
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="transform hover:scale-105 transition-all duration-500 relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gold/20 rounded-full animate-ping"></div>
                <h3 className="font-serif text-3xl text-foreground mb-4 flex items-center">
                  <Sparkles className="w-8 h-8 mr-4 text-gold" />
                  The Geisha's Secret
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For over 400 years, Japanese geishas have maintained
                  porcelain-perfect skin through ancient rituals passed down
                  through generations. Ray captures these time-honored secrets,
                  combining rice bran, camellia oil, and pearl powder in perfect
                  harmony.
                </p>
              </div>

              <div className="transform hover:scale-105 transition-all duration-500 relative">
                <div
                  className="absolute -top-2 -left-2 w-6 h-6 bg-gold/20 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <h3 className="font-serif text-3xl text-foreground mb-4 flex items-center">
                  <Star className="w-8 h-8 mr-4 text-gold" />
                  Moroccan Mystique
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the Atlas Mountains comes argan oil, rose water from
                  Kelaat M'Gouna, and rhassoul clay - treasures that have
                  beautified Moroccan women for millennia. These precious
                  ingredients add depth and nourishment to our Japanese
                  foundation.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-black/10 to-gold/20 rounded-full p-8 transform hover:rotate-3 transition-all duration-700 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gold/40 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="w-full h-full bg-white/50 rounded-2xl backdrop-blur-sm flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-pulse">✨</div>
                    <p className="text-2xl font-serif text-foreground">
                      Beauty Transcends
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Time & Culture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ritual Section with Enhanced 3D */}
      <section
        ref={ritualRef}
        id="ritual"
        className="py-32 px-6 bg-background relative overflow-hidden opacity-0 -translate-x-12 transition-all duration-1200 ease-out animate-in"
      >
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            >
              <div className="w-3 h-3 bg-gold/20 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-5xl md:text-7xl text-foreground mb-8 animate-slide-in-left">
              <span className="text-gold">儀式</span> The Ritual
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Transform your daily routine into a sacred ceremony of self-care
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="w-12 h-12" />,
                title: "Morning Awakening",
                desc: "Gentle cleansing with rice water essence",
                time: "朝 - Asa",
              },
              {
                icon: <Droplets className="w-12 h-12" />,
                title: "Hydration Ritual",
                desc: "Argan oil and hyaluronic acid fusion",
                time: "昼 - Hiru",
              },
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "Nourishment",
                desc: "Camellia and rose hip restoration",
                time: "夕 - Yu",
              },
              {
                icon: <Moon className="w-12 h-12" />,
                title: "Night Renewal",
                desc: "Pearl powder and retinol regeneration",
                time: "夜 - Yoru",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="p-8 text-center border-2 border-gold/20 bg-card backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden opacity-0 translate-y-8 animate-card-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gold rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                </div>
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-foreground group-hover:rotate-12 transition-transform duration-500 relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-serif font-semibold text-2xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-gold mb-4 font-medium">
                  {step.time}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section
        ref={ingredientsRef}
        id="ingredients"
        className="py-32 px-6 bg-secondary/30 relative overflow-hidden opacity-0 scale-95 transition-all duration-1000 ease-out animate-in"
      >
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-5xl md:text-7xl text-foreground mb-8 animate-fade-in-scale">
              <span className="text-gold">成分</span> Sacred Ingredients
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Each ingredient tells a story of beauty, tradition, and scientific
              innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                name: "Sakura Extract",
                japanese: "桜エキス",
                origin: "Japan",
                benefit: "Anti-aging & Brightening",
                description:
                  "Cherry blossom petals harvested at dawn, rich in antioxidants and natural AHA",
              },
              {
                name: "Argan Oil",
                japanese: "アルガンオイル",
                origin: "Morocco",
                benefit: "Deep Nourishment",
                description:
                  "Liquid gold from ancient Moroccan trees, packed with vitamin E and essential fatty acids",
              },
              {
                name: "Pearl Powder",
                japanese: "真珠粉",
                origin: "Japan",
                benefit: "Luminous Glow",
                description:
                  "Micronized pearls from Akoya oysters, used by empresses for radiant skin",
              },
              {
                name: "Rose Water",
                japanese: "ローズウォーター",
                origin: "Morocco",
                benefit: "Hydration & Soothing",
                description:
                  "Distilled from Damask roses in the Valley of Roses, naturally pH balancing",
              },
              {
                name: "Rice Bran",
                japanese: "米ぬか",
                origin: "Japan",
                benefit: "Gentle Exfoliation",
                description:
                  "Traditional Japanese beauty secret, rich in vitamins B and E for smooth skin",
              },
              {
                name: "Rhassoul Clay",
                japanese: "ラスール粘土",
                origin: "Morocco",
                benefit: "Purification",
                description:
                  "Ancient Moroccan clay from the Atlas Mountains, naturally detoxifying and mineral-rich",
              },
            ].map((ingredient, index) => (
              <Card
                key={index}
                className="p-8 bg-white/90 backdrop-blur-sm border-2 border-gold/20 bg-card hover:shadow-2xl hover:scale-105 transition-all duration-700 group overflow-hidden relative opacity-0 translate-y-8 animate-ingredient-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif font-bold text-2xl text-foreground">
                      {ingredient.name}
                    </h3>
                    <span className="text-sm bg-gold-light text-gold px-3 py-1 rounded-full">
                      {ingredient.origin}
                    </span>
                  </div>
                  <p className="text-lg text-gold mb-2 font-medium">
                    {ingredient.japanese}
                  </p>
                  <p className="text-foreground font-semibold mb-4">
                    {ingredient.benefit}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        ref={philosophyRef}
        id="philosophy"
        className="py-32 px-6 bg-background relative opacity-0 translate-x-12 transition-all duration-1200 ease-out animate-in"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-5xl md:text-7xl text-foreground mb-8 animate-slide-in-right">
              <span className="text-gold">哲学</span> Our Philosophy
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Beauty is not just skin deep - it's a harmony of mind, body, and
              spirit
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="transform hover:translate-x-4 transition-all duration-500">
                <h3 className="font-serif text-4xl text-foreground mb-6 flex items-center">
                  <span className="text-5xl mr-6">和</span>
                  Wa - Harmony
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  True beauty emerges when Eastern wisdom harmonizes with
                  Western innovation, when ancient traditions dance with modern
                  science.
                </p>
              </div>

              <div className="transform hover:translate-x-4 transition-all duration-500">
                <h3 className="font-serif text-4xl text-foreground mb-6 flex items-center">
                  <span className="text-5xl mr-6">美</span>
                  Bi - Beauty
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Beauty transcends the physical - it's confidence, grace, and
                  the radiance that comes from feeling truly comfortable in your
                  own skin.
                </p>
              </div>

              <div className="transform hover:translate-x-4 transition-all duration-500">
                <h3 className="font-serif text-4xl text-foreground mb-6 flex items-center">
                  <span className="text-5xl mr-6">心</span>
                  Kokoro - Heart
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every product is crafted with heart, infused with intention,
                  and designed to nurture not just your skin, but your soul.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-black/10 to-gold/20 rounded-full p-12 transform hover:rotate-6 transition-all duration-1000 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-20 bg-gradient-to-t from-transparent to-gold/30 origin-bottom animate-pulse"
                      style={{
                        left: "50%",
                        bottom: "50%",
                        transform: `translateX(-50%) rotate(${i * 45}deg)`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="w-full h-full bg-white/60 rounded-full backdrop-blur-sm flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <div className="text-9xl mb-6 animate-pulse">光</div>
                    <p className="text-3xl font-serif text-foreground mb-2">
                      Ray
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Where Light Meets Beauty
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-foreground relative overflow-hidden">
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

        <div className="max-w-5xl mx-auto text-center relative z-10">
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
    </div>
  );
}
