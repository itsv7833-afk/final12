import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroLion from "@/assets/hero-lion.jpg";

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => onComplete(), 6500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, Math.random() * -200],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Smoke overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 0.8 : 0 }}
          transition={{ duration: 2 }}
        />

        {/* Lion emergence */}
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: phase >= 1 ? 1 : 0,
            scale: phase >= 1 ? 1 : 1.1
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Lion image with glow */}
          <motion.div
            className="relative mb-8"
            animate={{ 
              filter: phase >= 2 ? "drop-shadow(0 0 60px hsl(43, 74%, 49%, 0.5))" : "none"
            }}
            transition={{ duration: 1.5 }}
          >
            <motion.img
              src={heroLion}
              alt="White Lion"
              className="w-[600px] max-w-[90vw] h-auto object-contain"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: phase >= 1 ? 1 : 0,
                y: phase >= 1 ? 0 : 50
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            
            {/* Light rays */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          {/* Logo text reveal */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: phase >= 3 ? 1 : 0,
              y: phase >= 3 ? 0 : 30
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] text-gradient-gold"
              animate={{ 
                textShadow: phase >= 3 ? "0 0 40px hsl(43, 74%, 49%, 0.5)" : "none"
              }}
            >
              WHITELION
            </motion.h1>
            <motion.p
              className="font-cinzel text-xl md:text-2xl lg:text-3xl tracking-[0.5em] text-primary/80 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 4 ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              PRODUCTION
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Skip button */}
        <motion.button
          className="absolute bottom-8 right-8 font-raleway text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onComplete}
        >
          SKIP INTRO →
        </motion.button>

        {/* Loading bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default CinematicIntro;
