import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Film } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-charcoal-light via-background to-background" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-8"
          animate={{
            boxShadow: [
              "0 0 20px hsl(43, 74%, 49%, 0.2)",
              "0 0 40px hsl(43, 74%, 49%, 0.3)",
              "0 0 20px hsl(43, 74%, 49%, 0.2)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Film className="w-10 h-10 text-primary" />
        </motion.div>

        <h1 className="font-cinzel text-7xl md:text-9xl font-bold text-gradient-gold mb-4">
          404
        </h1>
        
        <p className="font-raleway text-xl text-muted-foreground mb-2">
          Scene Not Found
        </p>
        
        <p className="font-raleway text-muted-foreground/70 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist in our production. 
          Let's get you back to the main set.
        </p>

        <Link
          to="/"
          className="btn-cinematic-filled inline-flex items-center gap-3"
        >
          <Home size={18} />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
