import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-charcoal-light via-background to-background" />

      <div className="container relative z-10 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Instagram icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-gold mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{
              boxShadow: [
                "0 0 30px hsl(43, 74%, 49%, 0.3)",
                "0 0 50px hsl(43, 74%, 49%, 0.5)",
                "0 0 30px hsl(43, 74%, 49%, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Instagram className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <motion.p
            className="font-raleway text-primary/80 tracking-[0.4em] text-sm mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            BEHIND THE SCENES
          </motion.p>

          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Follow <span className="text-gradient-gold">@itsvarathan</span>
          </h2>

          <p className="font-raleway text-muted-foreground mb-10 max-w-xl mx-auto">
            Get exclusive behind-the-scenes content, filmmaker spotlights, 
            and updates on upcoming releases. Join our creative community.
          </p>

          <motion.a
            href="https://www.instagram.com/itsvarathan/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cinematic-filled inline-flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Instagram size={20} />
            Follow on Instagram
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
