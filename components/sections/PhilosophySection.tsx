"use client";
export default function PhilosophySection({
  philosophyRef,
}: {
  philosophyRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={philosophyRef}
      id="philosophy"
      className="py-32 px-6 bg-background relative opacity-0 translate-x-12 transition-all duration-1200 ease-out animate-in min-h-screen flex items-center snap-start"
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
                True beauty emerges when Eastern wisdom harmonizes with Western
                innovation, when ancient traditions dance with modern science.
              </p>
            </div>
            <div className="transform hover:translate-x-4 transition-all duration-500">
              <h3 className="font-serif text-4xl text-foreground mb-6 flex items-center">
                <span className="text-5xl mr-6">美</span>
                Bi - Beauty
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Beauty transcends the physical - it's confidence, grace, and the
                radiance that comes from feeling truly comfortable in your own
                skin.
              </p>
            </div>
            <div className="transform hover:translate-x-4 transition-all duration-500">
              <h3 className="font-serif text-4xl text-foreground mb-6 flex items-center">
                <span className="text-5xl mr-6">心</span>
                Kokoro - Heart
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every product is crafted with heart, infused with intention, and
                designed to nurture not just your skin, but your soul.
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
  );
}
