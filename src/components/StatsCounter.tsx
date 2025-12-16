import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Users, Eye } from "lucide-react";

const stats = [
  { icon: Film, label: "Films Curated", value: 5, suffix: "+" },
  { icon: Users, label: "Creators Featured", value: 10, suffix: "+" },
  { icon: Eye, label: "Youtube Total Views", value: 518869, suffix: "+" },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span className="text-gradient-gold glow-text">
      {count}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 mb-6"
                whileHover={{ scale: 1.1, borderColor: "hsl(43, 74%, 49%)" }}
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <div className="font-cinzel text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              
              <p className="font-raleway text-muted-foreground tracking-widest text-sm uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
