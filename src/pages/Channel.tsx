import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Youtube, Bell, ExternalLink } from "lucide-react";

const Channel = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-charcoal-light via-background to-background" />
        
        <div className="container relative z-10 px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 border border-red-600/50 mb-6"
              animate={{ 
                boxShadow: ["0 0 20px hsl(0, 72%, 51%, 0.2)", "0 0 40px hsl(0, 72%, 51%, 0.4)", "0 0 20px hsl(0, 72%, 51%, 0.2)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Youtube className="w-8 h-8 text-red-500" />
            </motion.div>
            
            <p className="font-raleway text-primary/80 tracking-[0.4em] text-sm mb-4">
              OFFICIAL CHANNEL
            </p>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Itsvarathan</span>
            </h1>
            <p className="font-raleway text-muted-foreground max-w-xl mx-auto mb-8">
              Watch all WHITELION PRODUCTION releases and curated short films 
              on our official YouTube channel.
            </p>
            
            {/* Premium Subscribe Button */}
<motion.a
  href="https://www.youtube.com/@Itsvarathan?sub_confirmation=1"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group inline-flex items-center gap-4 px-10 py-4
    rounded-full cursor-pointer
    bg-gradient-to-r from-red-600 via-red-500 to-red-600
    text-white font-raleway font-semibold tracking-[0.25em]
    shadow-[0_10px_40px_rgba(255,0,0,0.45)]
    hover:shadow-[0_0_50px_rgba(255,0,0,0.7)]
    transition-all duration-500
  "
  whileHover={{ scale: 1.08, y: -2 }}
  whileTap={{ scale: 0.96 }}
>
  {/* Pulse ring */}
  <span className="absolute inset-0 rounded-full border border-red-400/60 animate-ping opacity-20" />

  {/* Bell */}
  <Bell className="w-5 h-5 text-white/90 group-hover:animate-bounce" />

  {/* Text */}
  <span className="relative z-10">SUBSCRIBE</span>

  {/* External Icon */}
  <ExternalLink className="w-4 h-4 text-white/80" />
</motion.a>

          </motion.div>
        </div>
      </section>

      {/* Channel Embed */}
      <section className="py-12">
        <div className="container px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Channel Header Card */}
            <div className="p-8 border border-border/50 rounded-xl bg-card/50 backdrop-blur mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <span className="font-cinzel text-3xl font-bold text-primary-foreground">I</span>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-cinzel text-2xl text-foreground mb-2">Itsvarathan</h2>
                  <p className="font-raleway text-muted-foreground">
                    Home of WHITELION PRODUCTION • Short Films • Independent Cinema
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/@Itsvarathan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:ml-auto btn-cinematic shrink-0"
                >
                  Visit Channel
                  <ExternalLink className="w-4 h-4 inline ml-2" />
                </a>
              </div>
            </div>

           {/* Netflix / Prime Video – Confidence UI */}
<div className="grid md:grid-cols-2 gap-14">
  {[
    { id: "Ar9Lq1yiJac", title: "LOVE STORY" },
    { id: "VYVo06mMvYE", title: "ROMANTIC DRAMA" },
    { id: "2Pkk6WUrSmM", title: "EMOTIONAL SHORT" },
    { id: "Lta03lcotD4", title: "DRAMA FILM" },
  ].map((film, i) => (
    <motion.a
      key={film.id}
      href={`https://youtu.be/${film.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1], // Netflix easing
      }}
    >
      {/* CARD */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          relative aspect-video overflow-hidden rounded-lg
          bg-black
          ring-1 ring-white/10
        "
      >
        {/* Thumbnail */}
        <img
          src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
          alt={film.title}
          className="w-full h-full object-cover"
        />

        {/* Focus overlay (appears on hover) */}
        <div className="
          absolute inset-0
          bg-black/0 group-hover:bg-black/35
          transition-colors duration-300
        " />

        {/* Play icon – delayed, confident */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="
              w-14 h-14 rounded-full
              bg-white
              flex items-center justify-center
            "
          >
            <Youtube className="w-7 h-7 text-black ml-1" />
          </motion.div>
        </div>
      </motion.div>

      {/* TEXT (outside card = Netflix style) */}
      <div className="mt-4">
        <p className="text-[11px] tracking-widest text-white/50">
          WHITELION ORIGINAL
        </p>
        <h3 className="text-base font-medium text-white mt-1">
          {film.title}
        </h3>
      </div>
    </motion.a>
  ))}
</div>


            {/* View More */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://www.youtube.com/@Itsvarathan/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cinematic inline-flex items-center gap-2"
              >
                View All Videos
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Channel;
