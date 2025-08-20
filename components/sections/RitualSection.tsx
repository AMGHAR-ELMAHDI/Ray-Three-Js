"use client";
import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Sun, Droplets, Leaf, Moon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const MotionCard = motion(Card);

export default function RitualSection({
  ritualRef,
}: {
  ritualRef: React.RefObject<HTMLDivElement | null>;
}) {
  // Variants for on-view animations
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Deterministic floating dots to avoid hydration mismatch
  const floatDots = useMemo(() => {
    let a = 101 >>> 0;
    const rand = () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return Array.from({ length: 15 }).map(() => ({
      left: rand() * 100,
      top: rand() * 100,
      delay: rand() * 4,
      duration: 4 + rand() * 2,
    }));
  }, []);

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
    <motion.section
      ref={ritualRef}
      id="ritual"
      className="py-32 px-6 bg-background relative overflow-hidden min-h-screen flex items-center snap-start"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {floatDots.map((d, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.duration}s`,
            }}
          >
            <div className="w-3 h-3 bg-gold/20 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="font-serif font-bold text-5xl md:text-7xl text-foreground mb-8">
            <span className="text-gold">儀式</span> The Ritual
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            Transform your daily routine into a sacred ceremony of self-care
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {steps.map((step, index) => (
            <MotionCard
              key={index}
              className="p-8 text-center border-2 border-gold/20 bg-card backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden"
              variants={fadeUp}
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
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
