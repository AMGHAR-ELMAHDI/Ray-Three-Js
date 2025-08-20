"use client";
import { Sparkles, Star } from "lucide-react";

export default function HeritageSection({
  heritageRef,
}: {
  heritageRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={heritageRef}
      id="heritage"
      className="py-32 px-6 bg-secondary/30 relative overflow-hidden opacity-0 translate-y-12 transition-all duration-1000 ease-out animate-in min-h-screen flex items-center snap-start"
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
                From the Atlas Mountains comes argan oil, rose water from Kelaat
                M'Gouna, and rhassoul clay - treasures that have beautified
                Moroccan women for millennia. These precious ingredients add
                depth and nourishment to our Japanese foundation.
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
              <div className="w-full h-full rounded-2xl  flex items-center justify-center relative z-10">
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
  );
}
