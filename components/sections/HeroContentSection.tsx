"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      {isLoaded && (
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1
              className="font-serif font-bold text-4xl md:text-6xl text-foreground mb-4 leading-tight"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <span className="inline-block text-gold animate-pulse">光</span>
              <span className="block text-gradient-black-gold">Ray</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-2 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              光の美しさ
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              Radiant Beauty Illuminated
            </motion.p>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            Where ancient Japanese wisdom meets Moroccan botanical treasures,
            creating skincare that illuminates your natural radiance
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                className="bg-foreground hover:bg-gold text-background hover:text-foreground px-12 py-6 text-lg font-medium transform hover:scale-110 transition-all duration-300 shadow-2xl"
              >
                Discover Ray
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gold hover:bg-gold hover:text-foreground px-12 py-6 text-lg bg-background/80 backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
              >
                Begin Your Glow
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
