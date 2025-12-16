import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedFilms from "@/components/FeaturedFilms";
import StatsCounter from "@/components/StatsCounter";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <main className="min-h-screen bg-background">
          <Navbar />
          <Hero />
          <FeaturedFilms />
          <StatsCounter />
          <InstagramSection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
