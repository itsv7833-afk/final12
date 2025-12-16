import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import lionPortrait from "@/assets/lion-portrait.jpg";
import { Target, Eye, Sparkles, Crown, Shield, Heart } from "lucide-react";

const values = [
  { icon: Crown, title: "Excellence", description: "We curate only the finest independent cinema, setting the highest standards for storytelling." },
  { icon: Shield, title: "Integrity", description: "Every filmmaker's vision is treated with respect and authenticity." },
  { icon: Heart, title: "Passion", description: "Driven by an unwavering love for the art of filmmaking." },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with lion watermark */}
        <div className="absolute inset-0 bg-gradient-radial from-charcoal-light via-background to-background" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${lionPortrait})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="container relative z-10 px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="font-raleway text-primary/80 tracking-[0.4em] text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              OUR STORY
            </motion.p>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              About <span className="text-gradient-gold">WHITELION</span>
            </h1>
            <p className="font-raleway text-lg text-muted-foreground leading-relaxed">
              WHITELION PRODUCTION was born from a vision to spotlight exceptional independent cinema. 
              Like the majestic white lion—rare, powerful, and unforgettable—we seek out stories 
              that leave a lasting impression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-charcoal" />
        
        <div className="container relative z-10 px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              className="p-8 border border-border/50 rounded-lg bg-background/50 backdrop-blur"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-cinzel text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="font-raleway text-muted-foreground leading-relaxed">
                To become the premier platform where independent filmmakers find their voice 
                and audiences discover powerful, authentic storytelling that moves and inspires.
              </p>
            </motion.div>

            <motion.div
              className="p-8 border border-border/50 rounded-lg bg-background/50 backdrop-blur"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-cinzel text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="font-raleway text-muted-foreground leading-relaxed">
                To curate, produce, and promote exceptional short films that showcase diverse 
                perspectives and innovative storytelling on the Itsvarathan YouTube channel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        
        <div className="container relative z-10 px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-raleway text-primary/80 tracking-[0.4em] text-sm mb-4">
              WHAT DRIVES US
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, borderColor: "hsl(43, 74%, 49%)" }}
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-cinzel text-xl text-foreground mb-4">{value.title}</h3>
                <p className="font-raleway text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Lion Symbol */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        
        <div className="container relative z-10 px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.img
                  src={lionPortrait}
                  alt="White Lion Symbol"
                  className="w-full max-w-md mx-auto rounded-lg"
                  style={{ filter: "drop-shadow(0 0 40px hsl(43, 74%, 49%, 0.3))" }}
                />
                <div className="absolute -inset-4 border border-primary/20 rounded-lg" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <p className="font-raleway text-primary/80 tracking-[0.3em] text-sm">
                  THE SYMBOL
                </p>
              </div>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-foreground mb-6">
                The White Lion
              </h2>
              <p className="font-raleway text-muted-foreground leading-relaxed mb-6">
                The white lion is one of nature's rarest and most magnificent creatures. 
                It represents power, leadership, and an unwavering commitment to excellence—qualities 
                that define every film we curate.
              </p>
              <p className="font-raleway text-muted-foreground leading-relaxed">
                Just as the white lion stands out in the wild, WHITELION PRODUCTION seeks to 
                spotlight filmmakers whose work rises above the ordinary, bringing stories that 
                demand to be seen and remembered.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
