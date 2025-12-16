import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Instagram, Youtube, Send, Loader2, CheckCircle, Music, Apple } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  subject: z.string().min(5, "Subject is required").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/itsvarathan/", label: "Instagram", handle: "@itsvarathan" },
  { icon: Youtube, href: "https://www.youtube.com/@Itsvarathan", label: "YouTube", handle: "@Itsvarathan" },
  { icon: Music, href: "https://open.spotify.com/artist/1jaX5jpt3TtDH0NRqmbT6H?si=lvZweQEqSV-Q4EOLtzJjMA", label: "Spotify", handle: "@Itsvarathan" },
  { icon: Apple, href: "https://music.apple.com/us/artist/itsvarathan/1762822171", label: "Apple Music", handle: "@itsvarathan" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

 const onSubmit = async (data: any) => {
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/meoywebr", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Formspree failed");
    }

    setIsSuccess(true);

    toast({
      title: "Message Sent ✅",
      description: "Thanks for contacting WHITELION PRODUCTION. We'll reply soon.",
    });

  } catch (error) {
    console.error(error);
    toast({
      title: "Failed ❌",
      description: "Message send aagala. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

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
              GET IN TOUCH
            </p>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="font-raleway text-muted-foreground">
              Have questions about film submissions or collaborations? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-cinzel text-2xl text-foreground mb-8">
                Connect With Us
              </h2>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-raleway text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:itsvarathan47@gmail.com"
                      className="font-raleway text-foreground hover:text-primary transition-colors"
                    >
                      itsvarathan47@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className="font-cinzel text-lg text-foreground mb-4">Follow Us</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-border/50 rounded-lg bg-card/50 hover:border-primary/50 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-raleway text-sm text-muted-foreground">{social.label}</p>
                      <p className="font-raleway text-foreground">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="p-8 border border-border/50 rounded-xl bg-card/50 backdrop-blur">
                <h2 className="font-cinzel text-2xl text-foreground mb-6">
                  Send a Message
                </h2>

                <div className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-raleway text-sm text-foreground">Name *</label>
                    <Input
                      {...register("name")}
                      placeholder="Your name"
                      className="bg-background border-border/50 focus:border-primary"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-raleway text-sm text-foreground">Email *</label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border/50 focus:border-primary"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="font-raleway text-sm text-foreground">Subject *</label>
                    <Input
                      {...register("subject")}
                      placeholder="What's this about?"
                      className="bg-background border-border/50 focus:border-primary"
                    />
                    {errors.subject && (
                      <p className="text-xs text-destructive">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="font-raleway text-sm text-foreground">Message *</label>
                    <Textarea
                      {...register("message")}
                      placeholder="Your message..."
                      className="bg-background border-border/50 focus:border-primary min-h-32"
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="btn-cinematic-filled w-full flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
