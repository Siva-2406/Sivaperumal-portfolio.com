import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Eye, EyeOff, Menu, X, Download } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useAccessibility } from '@/hooks/useAccessibility';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact Us', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const { isHighContrast, toggleHighContrast } = useAccessibility();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-4 right-4 z-40 transition-all duration-500 rounded-3xl backdrop-blur-2xl ${
          isScrolled 
            ? 'glass-strong shadow-2xl border-2 border-emerald/20' 
            : 'glass border border-gold/30'
        }`}
      >
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="font-heading text-3xl font-bold gradient-text-gold relative">
                <span className="relative z-10">SB</span>
                <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-30 animate-pulse" />
              </div>
              <div className="absolute -inset-2 bg-gradient-primary rounded-full opacity-20 blur-xl animate-glow" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-2xl font-body text-sm font-medium transition-all duration-500 group ${
                    activeSection === item.href.slice(1)
                      ? 'text-foreground bg-gradient-primary shadow-lg scale-105'
                      : 'text-foreground/70 hover:text-foreground hover:bg-glass-bg/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-gradient-primary rounded-2xl"
                      style={{ borderRadius: '1rem' }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      className="glass hover:glass-strong rounded-2xl w-12 h-12 relative group overflow-hidden"
                      aria-label="Toggle theme"
                    >
                      <motion.div
                        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {theme === 'dark' ? (
                          <Sun className="h-5 w-5 text-gold" />
                        ) : (
                          <Moon className="h-5 w-5 text-emerald" />
                        )}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleHighContrast}
                      className="glass hover:glass-strong rounded-2xl w-12 h-12 relative group overflow-hidden"
                      aria-label="Toggle accessibility"
                    >
                      <motion.div
                        animate={{ scale: isHighContrast ? 1.2 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isHighContrast ? (
                          <EyeOff className="h-5 w-5 text-crimson" />
                        ) : (
                          <Eye className="h-5 w-5 text-emerald" />
                        )}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isHighContrast ? 'Disable high contrast' : 'Enable high contrast'}</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        // Create a temporary link to download resume
                        const link = document.createElement('a');
                        link.href = '/resume-sivaperumal.pdf'; // You'll need to add your resume file
                        link.download = 'Sivaperumal_B_Resume.pdf';
                        link.click();
                      }}
                      className="glass hover:glass-strong rounded-2xl w-12 h-12 relative group overflow-hidden"
                      aria-label="Download resume"
                    >
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Download className="h-5 w-5 text-gold" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download Resume</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden glass hover:glass-strong rounded-2xl w-12 h-12 relative group overflow-hidden"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-crimson" />
                  ) : (
                    <Menu className="h-5 w-5 text-emerald" />
                  )}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-20 right-4 bottom-4 w-64 glass-strong rounded-2xl z-30 lg:hidden overflow-hidden"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="space-y-4 flex-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left font-body text-lg transition-all duration-300 hover:text-emerald p-3 rounded-lg hover:bg-emerald/10 ${
                  activeSection === item.href.slice(1)
                    ? 'text-emerald bg-emerald/10'
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-20 lg:hidden"
        />
      )}
    </>
  );
};