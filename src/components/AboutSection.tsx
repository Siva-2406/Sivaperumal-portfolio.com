import { motion } from 'framer-motion';
import { Download, Mail, Code, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutBg from '@/assets/about-bg.jpg';

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices"
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful and accessible user interfaces"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and excellent user experience"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden scroll-snap-start">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={aboutBg} 
          alt="About background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Hi viewers! 👋 Welcome to my portfolio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 space-y-6">
              <div className="space-y-4 font-body text-lg leading-relaxed text-foreground/90">
                <p>
                  I'm a <span className="text-purple font-semibold">self-taught front-end developer</span> who 
                  started with HTML & CSS and grew into React, TypeScript, and modern JavaScript.
                </p>
                
                <p>
                  I love solving real-world problems with <span className="text-emerald font-semibold">responsive, 
                  accessible, and clean interfaces</span>. Every project is an opportunity to create something 
                  meaningful and impactful.
                </p>
                
                <p>
                  I work with tools like <span className="text-gold font-semibold">Git, Figma, Tailwind CSS</span>, 
                  and focus on writing modular and reusable components that stand the test of time.
                </p>
                
                <p>
                  I follow best practices in <span className="text-sapphire font-semibold">performance and user 
                  experience</span>, ensuring every interface is not just beautiful, but functional and inclusive.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-gradient-secondary hover:opacity-90 text-white border-0 px-6 py-3"
                  onClick={() => {
                    // In a real app, this would trigger a download
                    window.open('/resume.pdf', '_blank');
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline" 
                  className="glass border-emerald/50 hover:bg-emerald/10 px-6 py-3"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:glass-strong transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-accent text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};