"use client";
import { Card } from "@/components/ui/card";
import { Sun, Droplets, Leaf, Moon } from "lucide-react";

export default function RitualSection({
  ritualRef,
}: {
  ritualRef: React.RefObject<HTMLDivElement | null>;
}) {
  const steps = [
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
  ];
  return (
    <section
      ref={ritualRef}
      id="ritual"
      className="py-32 px-6 bg-background relative overflow-hidden opacity-0 -translate-x-12 transition-all duration-1200 ease-out animate-in min-h-screen flex items-center snap-start"
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
          {steps.map((step, index) => (
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
              <p className="text-lg text-gold mb-4 font-medium">{step.time}</p>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
