import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import waveFooter from '@/assets/wave-footer.jpg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <img 
          src={waveFooter} 
          alt="Wave footer" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sapphire/30 via-emerald/20 to-transparent" />
      </div>

      {/* Floating Wave Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-sapphire/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-20"
        >
          <div className="text-center space-y-8">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-heading text-4xl lg:text-5xl font-bold gradient-text">
                Sivaperumal B
              </h3>
              <p className="font-accent text-xl text-emerald">
                Growing Software Developer
              </p>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="font-body text-2xl lg:text-3xl text-foreground">
                  Thanks for visiting!
                </span>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="text-2xl"
                >
                  👋
                </motion.div>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="font-body text-lg text-muted-foreground">
                  Made with
                </span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <Heart className="w-6 h-6 text-crimson fill-current" />
                </motion.div>
                <span className="font-body text-lg text-muted-foreground">
                  by Sivaperumal B
                </span>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-muted-foreground font-body"
            >
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Journey', href: '#journey' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certificates', href: '#certificates' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, color: 'hsl(var(--purple))' }}
                  onClick={() => {
                    const element = document.getElementById(link.href.slice(1));
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-purple transition-colors duration-300"
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center space-x-6"
            >
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/in/sivaperumal-b', color: 'sapphire', icon: FaLinkedin },
                { name: 'GitHub', href: 'https://github.com/sivaperumal-b', color: 'purple', icon: FaGithub },
                { name: 'Email', href: 'mailto:sivaperumal.dev@example.com', color: 'emerald', icon: FaEnvelope },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 glass-card"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${social.color})), hsl(var(--${social.color}) / 0.6))`
                  }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 glass-strong">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-body text-sm text-muted-foreground text-center md:text-left"
              >
                © 2024 Sivaperumal B. All rights reserved. Built with React & Tailwind CSS.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="glass hover:glass-strong group"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Back to Top
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};