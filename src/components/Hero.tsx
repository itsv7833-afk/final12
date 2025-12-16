import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Film } from "lucide-react";
import lionPortrait from "@/assets/lion-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-charcoal-light via-background to-background" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="font-raleway text-primary/80 tracking-[0.4em] text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              PREMIUM FILM PRODUCTION
            </motion.p>
            
            <motion.h1
              className="font-cinzel text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-gradient-gold glow-text">WHITELION</span>
              <br />
              <span className="text-foreground/90">PRODUCTION</span>
            </motion.h1>

            <motion.p
              className="font-raleway text-lg text-muted-foreground mb-4 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Official YouTube Channel — <span className="text-primary">Itsvarathan</span>
            </motion.p>

            <motion.p
              className="font-raleway text-muted-foreground/80 mb-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Where independent cinema meets premium storytelling. 
              Curating powerful short films from talented creators worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/submit" className="btn-cinematic-filled group flex items-center justify-center gap-3">
                <Film size={18} />
                Submit Your Film
              </Link>
              <a
                href="https://www.youtube.com/@Itsvarathan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cinematic group flex items-center justify-center gap-3"
              >
                <Play size={18} />
                Watch on YouTube
              </a>
            </motion.div>
          </motion.div>

          {/* Lion Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent blur-3xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Lion portrait */}
              <motion.img
                src={lionPortrait}
                alt="White Lion - WHITELION PRODUCTION"
                className="relative z-10 w-80 md:w-96 lg:w-[450px] h-auto rounded-lg lion-breathing"
                style={{
                  filter: "drop-shadow(0 0 40px hsl(43, 74%, 49%, 0.3))",
                }}
              />

              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-lg" />
              <div className="absolute -inset-8 border border-primary/10 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
