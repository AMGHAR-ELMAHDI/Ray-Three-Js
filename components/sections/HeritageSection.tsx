"use client";
import { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export default function HeritageSection({
  heritageRef,
}: {
  heritageRef: React.RefObject<HTMLDivElement | null>;
}) {
  // On-view animation variants
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Deterministic sparkles to avoid hydration mismatch
  const bgDots = useMemo(() => {
    let a = 7 >>> 0;
    const rand = () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return Array.from({ length: 8 }).map(() => ({
      left: rand() * 100,
      top: rand() * 100,
      delay: rand() * 2,
      duration: 2 + rand() * 2,
    }));
  }, []);

  const innerDots = useMemo(() => {
    let a = 21 >>> 0;
    const rand = () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return Array.from({ length: 12 }).map(() => ({
      left: rand() * 100,
      top: rand() * 100,
      delay: rand() * 3,
    }));
  }, []);

  return (
    <motion.section
      ref={heritageRef}
      id="heritage"
      className="py-32 px-6 bg-secondary/30 relative overflow-hidden min-h-screen flex items-center snap-start"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gold-light rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        {bgDots.map((d, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gold/30 rounded-full animate-bounce"
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-serif font-bold text-5xl md:text-7xl text-foreground mb-8">
            <span className="text-gold">伝統</span> Heritage
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Born from the sacred rituals of Japanese geishas and enriched with
            the mystical botanicals of Morocco
          </p>
        </motion.div>
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div className="space-y-8" variants={fadeLeft}>
            <motion.div
              className="relative"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
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
            </motion.div>
            <motion.div
              className="relative"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
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
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            variants={fadeRight}
            whileHover={{ rotate: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="aspect-square bg-gradient-to-br from-black/10 to-gold/20 rounded-full p-8 transition-all duration-700 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0">
                {innerDots.map((d, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gold/40 rounded-full animate-pulse"
                    style={{
                      left: `${d.left}%`,
                      top: `${d.top}%`,
                      animationDelay: `${d.delay}s`,
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
