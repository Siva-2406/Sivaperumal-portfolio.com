import { useEffect } from 'react';
import { ScrollProgress } from './ScrollProgress';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { JourneySection } from './JourneySection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { CertificatesSection } from './CertificatesSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { usePointerTrail } from '@/hooks/usePointerTrail';

export const Portfolio = () => {
  // Initialize pointer trail with golden color
  usePointerTrail({ 
    color: 'hsl(45, 93%, 47%)', 
    size: 20, 
    trailLength: 8 
  });

  useEffect(() => {
    // Initialize dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="scroll-snap-y">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};