import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

const featuredFilms = [
  {
    id: 1,
    title: "Kadhal Kanave – Short Film",
    videoId: "Ar9Lq1yiJac",
    genre: "Love Story",
  },
  {
    id: 2,
    title: "Endrendrum Neeye – Short Film",
    videoId: "VYVo06mMvYE",
    genre: "Love Story",
  },
  {
    id: 3,
    title: "ஒத்தஅரிசி – Short Film",
    videoId: "Lta03lcotD4",
    genre: "Drama",
  },
  {
    id: 4,
    title: "முடிவு – Short Film",
    videoId: "tgvibx1MfHo",
    genre: "Drama / Action",
  },
  {
    id: 5,
    title: "Coming Soon",
    videoId: "2Pkk6WUrSmM",
    genre: "Drama / Action",
  },
  {
    id: 6,
    title: "Coming Soon",
    videoId: "gOyKAPiKciA",
    genre: "Drama / Action",
  },
];

const FeaturedFilms = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="tracking-[0.4em] text-primary/70 text-xs mb-4">
            NOW STREAMING
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold">
            Featured Films
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredFilms.map((film, index) => (
            <motion.a
              key={film.id}
              href={`https://youtu.be/${film.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group block"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                className="
                  relative aspect-video overflow-hidden rounded-xl
                  bg-black ring-1 ring-white/10
                  shadow-[0_25px_80px_rgba(0,0,0,0.7)]
                "
              >
                {/* Thumbnail (with fallback fix) */}
                <img
                  src={`https://img.youtube.com/vi/${film.videoId}/maxresdefault.jpg`}
                  alt={film.title}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    scale-105 group-hover:scale-110
                    transition-transform duration-700
                  "
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${film.videoId}/hqdefault.jpg`;
                  }}
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

               {/* MASS Play Button */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    whileHover={{ scale: 1 }}
    className="
      relative w-20 h-20 rounded-full
      bg-black/60 backdrop-blur-md
      border border-white/20
      flex items-center justify-center
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      shadow-[0_0_60px_rgba(255,215,0,0.35)]
    "
  >
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400/20" />

    {/* Inner circle */}
    <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-xl">
      <Play className="w-7 h-7 text-black ml-1" />
    </div>
  </motion.div>
</div>

                {/* Genre Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-black/60 text-yellow-400 border border-yellow-400/30">
                    {film.genre}
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <div className="mt-5">
                <h3 className="font-cinzel text-lg text-white">
                  {film.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  WHITELION PRODUCTION
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFilms;
