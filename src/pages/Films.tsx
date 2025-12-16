import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, X } from "lucide-react";

const films = [
  { id: 1, title: "Short Film", genre: "Love Story", language: "Tamil", duration: "10.40 min", videoId: "Ar9Lq1yiJac" },
  { id: 2, title: "Short Film", genre: "Love Story", language: "Tamil", duration: "13.46 min", videoId: "VYVo06mMvYE" },
  { id: 3, title: "Short Film", genre: "Drama", language: "Tamil", duration: "9.11 min", videoId: "Lta03lcotD4" },
  { id: 4, title: "Short Film", genre: "Drama Action", language: "Tamil", duration: "29 min", videoId: "tgvibx1MfHo" },
  { id: 5, title: "Coming Soon", genre: "Coming Soon", language: "Tamil", duration: "NA min", videoId: "gOyKAPiKciA" },
  { id: 6, title: "Coming Soon", genre: "Coming Soon", language: "Tamil", duration: "NA min", videoId: "gOyKAPiKciA" },
];

const genres = ["All", "Drama", "Thriller", "Comedy", "Horror", "Documentary"];

const Films = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedFilm, setSelectedFilm] = useState<typeof films[0] | null>(null);

  const filteredFilms = selectedGenre === "All" 
    ? films 
    : films.filter(f => f.genre === selectedGenre);

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
            <p className="font-raleway text-primary/80 tracking-[0.4em] text-sm mb-4">
              CURATED COLLECTION
            </p>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Films</span>
            </h1>
            <p className="font-raleway text-muted-foreground">
              Explore our carefully curated collection of independent short films, 
              all featured on the Itsvarathan YouTube channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="pb-8">
        <div className="container px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2 font-raleway text-sm tracking-wider transition-all rounded-full border ${
                  selectedGenre === genre
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/50 text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {genre}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

{/* Films Grid – Netflix Minimal */}
<section className="py-16">
  <div className="container px-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {filteredFilms.map((film, index) => (
        <motion.a
          key={film.id}
          href={`https://youtu.be/${film.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {/* CARD */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
            
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${film.videoId}/maxresdefault.jpg`}
              alt={film.title}
              className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />

            {/* Very subtle overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

            {/* Play icon – Netflix style */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  w-14 h-14 rounded-full
                  bg-white
                  flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                "
              >
                <Play className="w-6 h-6 text-black ml-1" />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="mt-4 space-y-1">
            <h3 className="text-base font-semibold text-white">
              {film.title}
            </h3>
            <p className="text-xs text-white/60">
              {film.language} • {film.duration}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
</section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFilm(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setSelectedFilm(null)}
              >
                <X size={32} />
              </button>
              
              <div className="aspect-video bg-charcoal rounded-lg overflow-hidden border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedFilm.videoId}?autoplay=1`}
                  title={selectedFilm.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-cinzel text-2xl text-foreground mb-2">
                  {selectedFilm.title}
                </h3>
                <p className="font-raleway text-muted-foreground">
                  {selectedFilm.genre} • {selectedFilm.language} • {selectedFilm.duration}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Films;
