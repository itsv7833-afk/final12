import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Heart, Music, Apple } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/itsvarathan/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@Itsvarathan",
    label: "YouTube",
  },
  {
    icon: Music,
    href: "https://open.spotify.com/artist/1jaX5jpt3TtDH0NRqmbT6H",
    label: "Spotify",
  },
  {
    icon: Apple,
    href: "https://music.apple.com/us/artist/itsvarathan/1762822171",
    label: "Apple Music",
  },
  {
    icon: Mail,
    href: "mailto:itsvarathan47@gmail.com",
    label: "Email",
  },
];



  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Films", path: "/films" },
    { name: "Submit", path: "/submit" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-charcoal border-t border-border/30">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-cinzel text-2xl font-bold text-gradient-gold mb-4">
              WHITELION
            </h3>
            <p className="font-raleway text-muted-foreground text-sm leading-relaxed mb-6">
              Premium film production and curation platform. 
              Bringing independent cinema to the spotlight on the Itsvarathan YouTube channel.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-cinzel text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-raleway text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-cinzel text-lg text-foreground mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:itsvarathan47@gmail.com"
                className="flex items-center gap-3 font-raleway text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                itsvarathan47@gmail.com
              </a>
              <p className="font-raleway text-sm text-muted-foreground">
                For film submissions, collaborations, and inquiries.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-raleway text-xs text-muted-foreground">
              © {currentYear} WHITELION PRODUCTION. All rights reserved.
            </p>
            <p className="font-raleway text-xs text-muted-foreground flex items-center gap-1">
              Made with <Heart size={19} className="text-primary" /> for WHITELION TEAM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
