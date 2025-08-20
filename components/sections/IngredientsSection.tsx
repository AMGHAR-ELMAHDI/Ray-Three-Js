"use client";
import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";

const MotionCard = motion(Card);

const ingredients = [
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
];

export default function IngredientsSection({
  ingredientsRef,
}: {
  ingredientsRef: React.RefObject<HTMLDivElement | null>;
}) {
  // Variants for on-view animations
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  // Deterministic decorative dots
  const pingDots = useMemo(() => {
    let a = 303 >>> 0;
    const rand = () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return Array.from({ length: 20 }).map(() => ({
      left: rand() * 100,
      top: rand() * 100,
      delay: rand() * 5,
      duration: 2 + rand() * 3,
    }));
  }, []);

  return (
    <motion.section
      ref={ingredientsRef}
      id="ingredients"
      className="py-32 px-6 bg-secondary/30 relative overflow-hidden min-h-screen flex items-center snap-start"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute inset-0">
        {pingDots.map((d, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-ping"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.duration}s`,
            }}
          />
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
            <span className="text-gold">成分</span> Sacred Ingredients
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each ingredient tells a story of beauty, tradition, and scientific
            innovation
          </p>
        </motion.div>
        <motion.div
          className="grid lg:grid-cols-3 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {ingredients.map((ingredient, index) => (
            <MotionCard
              key={index}
              className="p-8 backdrop-blur-sm border-2 border-gold/20 bg-card hover:shadow-2xl hover:scale-105 transition-all duration-700 group overflow-hidden relative"
              variants={fadeUp}
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
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
