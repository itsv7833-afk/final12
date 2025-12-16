import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Film, Upload, CheckCircle, Loader2, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  filmmakerName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  filmTitle: z.string().min(2, "Film title is required").max(200),
  genre: z.string().min(1, "Please select a genre"),
  language: z.string().min(1, "Please select a language"),
  duration: z.string().min(1, "Duration is required"),
  filmLink: z.string().url("Please enter a valid URL"),
  synopsis: z.string().min(50, "Synopsis must be at least 50 characters").max(1000),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

type FormData = z.infer<typeof formSchema>;

const genres = ["Drama", "Thriller", "Comedy", "Horror", "Documentary", "Romance", "Action", "Sci-Fi", "Other"];
const languages = ["Tamil", "Hindi", "English", "Telugu", "Malayalam", "Kannada", "Bengali", "Marathi", "Other"];


const Submit = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      terms: false,
    },
  });

 const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

 try {
  const response = await fetch("https://formspree.io/f/meoywebr", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filmmakerName: data.filmmakerName,
      email: data.email,
      language: data.language,
      duration: data.duration,
      filmLink: data.filmLink,
      synopsis: data.synopsis,
    }),
  });

  if (!response.ok) {
    throw new Error("Formspree failed");
  }

  toast({
    title: "Submission Received ✅",
    description: "Your film details were sent successfully.",
  });
} catch (error) {
  console.error(error);
  toast({
    title: "Submission Failed ❌",
    description: "Mail send aagala. Please try again.",
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
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6"
              animate={{ boxShadow: ["0 0 20px hsl(43, 74%, 49%, 0.2)", "0 0 40px hsl(43, 74%, 49%, 0.4)", "0 0 20px hsl(43, 74%, 49%, 0.2)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Film className="w-8 h-8 text-primary" />
            </motion.div>
            
            <p className="font-raleway text-primary/80 tracking-[0.4em] text-sm mb-4">
              SHOWCASE YOUR WORK
            </p>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Submit Your <span className="text-gradient-gold">Film</span>
            </h1>
            <p className="font-raleway text-muted-foreground max-w-xl mx-auto">
              Selected films will be released on the <span className="text-primary">Itsvarathan</span> YouTube channel 
              under WHITELION PRODUCTION.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-24">
        <div className="container px-6">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                className="max-w-2xl mx-auto text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
                  animate={{ 
                    boxShadow: ["0 0 30px hsl(43, 74%, 49%, 0.3)", "0 0 60px hsl(43, 74%, 49%, 0.5)", "0 0 30px hsl(43, 74%, 49%, 0.3)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-12 h-12 text-primary" />
                </motion.div>
                <h2 className="font-cinzel text-3xl text-foreground mb-4">
                  Submission Received!
                </h2>
                <p className="font-raleway text-muted-foreground mb-8">
                  Thank you for submitting your film. Our team will review it and 
                  contact you if selected for release on the Itsvarathan channel.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-cinematic"
                >
                  Submit Another Film
                </button>
              </motion.div>
            ) : (
              <motion.form
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="p-8 md:p-12 border border-border/50 rounded-xl bg-card/50 backdrop-blur">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Filmmaker Name */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Filmmaker / Team Name *
                      </label>
                      <Input
                        {...register("filmmakerName")}
                        placeholder="Enter your name"
                        className="bg-background border-border/50 focus:border-primary"
                      />
                      {errors.filmmakerName && (
                        <p className="text-xs text-destructive">{errors.filmmakerName.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Email *
                      </label>
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

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        {...register("phone")}
                        placeholder="+91 XXXXXXXXXX"
                        className="bg-background border-border/50 focus:border-primary"
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Film Title */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Short Film Title *
                      </label>
                      <Input
                        {...register("filmTitle")}
                        placeholder="Enter film title"
                        className="bg-background border-border/50 focus:border-primary"
                      />
                      {errors.filmTitle && (
                        <p className="text-xs text-destructive">{errors.filmTitle.message}</p>
                      )}
                    </div>

                    {/* Genre */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Genre *
                      </label>
                      <Select onValueChange={(value) => setValue("genre", value)}>
                        <SelectTrigger className="bg-background border-border/50 focus:border-primary">
                          <SelectValue placeholder="Select genre" />
                        </SelectTrigger>
                        <SelectContent>
                          {genres.map((genre) => (
                            <SelectItem key={genre} value={genre}>
                              {genre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.genre && (
                        <p className="text-xs text-destructive">{errors.genre.message}</p>
                      )}
                    </div>

                    {/* Language */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Language *
                      </label>
                      <Select onValueChange={(value) => setValue("language", value)}>
                        <SelectTrigger className="bg-background border-border/50 focus:border-primary">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang} value={lang}>
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.language && (
                        <p className="text-xs text-destructive">{errors.language.message}</p>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Duration *
                      </label>
                      <Input
                        {...register("duration")}
                        placeholder="e.g., 15 minutes"
                        className="bg-background border-border/50 focus:border-primary"
                      />
                      {errors.duration && (
                        <p className="text-xs text-destructive">{errors.duration.message}</p>
                      )}
                    </div>

                    {/* Film Link */}
                    <div className="space-y-2">
                      <label className="font-raleway text-sm text-foreground">
                        Film Link (YouTube / Google Drive) *
                      </label>
                      <Input
                        {...register("filmLink")}
                        placeholder="https://..."
                        className="bg-background border-border/50 focus:border-primary"
                      />
                      {errors.filmLink && (
                        <p className="text-xs text-destructive">{errors.filmLink.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Synopsis */}
                  <div className="space-y-2 mt-6">
                    <label className="font-raleway text-sm text-foreground">
                      Synopsis *
                    </label>
                    <Textarea
                      {...register("synopsis")}
                      placeholder="Tell us about your film (minimum 50 characters)"
                      className="bg-background border-border/50 focus:border-primary min-h-32"
                    />
                    {errors.synopsis && (
                      <p className="text-xs text-destructive">{errors.synopsis.message}</p>
                    )}
                  </div>

                  {/* Info Note */}
                  <div className="flex items-start gap-3 mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="font-raleway text-sm text-muted-foreground">
                      Selected films will be released on the <span className="text-primary">Itsvarathan</span> YouTube channel 
                      under WHITELION PRODUCTION branding.
                    </p>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 mt-6">
                    <Checkbox
                      id="terms"
                      onCheckedChange={(checked) => setValue("terms", checked as boolean)}
                      className="border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label htmlFor="terms" className="font-raleway text-sm text-muted-foreground cursor-pointer">
                      I agree to the terms and conditions and grant WHITELION PRODUCTION 
                      the rights to feature my film on the Itsvarathan YouTube channel.
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-xs text-destructive mt-2">{errors.terms.message}</p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cinematic-filled w-full mt-8 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Submit Film
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Submit;