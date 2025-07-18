import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Calendar, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=React+Certification",
    description: "Comprehensive certification covering React fundamentals, hooks, state management, and advanced patterns.",
    skills: ["React", "JSX", "State Management", "Hooks"]
  },
  {
    id: 2,
    title: "Full Stack JavaScript",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "https://via.placeholder.com/400x300/10b981/ffffff?text=JavaScript+Certification",
    description: "Complete full-stack development certification covering frontend and backend JavaScript technologies.",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2022",
    image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=UI/UX+Certification",
    description: "Design thinking, user research, prototyping, and usability testing for digital products.",
    skills: ["Figma", "Design Thinking", "Prototyping", "User Research"]
  },
  {
    id: 4,
    title: "Git & GitHub Mastery",
    issuer: "GitHub",
    date: "2023",
    image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Git+Certification",
    description: "Version control, collaboration workflows, and advanced Git techniques for professional development.",
    skills: ["Git", "GitHub", "Version Control", "Collaboration"]
  },
  {
    id: 5,
    title: "TypeScript Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=TypeScript+Certification",
    description: "Type-safe JavaScript development with advanced TypeScript features and patterns.",
    skills: ["TypeScript", "Type Safety", "Interfaces", "Generics"]
  },
  {
    id: 6,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    image: "https://via.placeholder.com/400x300/f97316/ffffff?text=Responsive+Design",
    description: "Modern CSS techniques, flexbox, grid, and responsive design principles for all devices.",
    skills: ["CSS", "Responsive Design", "Flexbox", "Grid"]
  }
];

const CertificateModal = ({ certificate, isOpen, onClose }: { 
  certificate: typeof certificates[0] | null, 
  isOpen: boolean, 
  onClose: () => void 
}) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 glass-strong rounded-3xl z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-muted-foreground font-body">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{certificate.issuer}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{certificate.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="glass hover:glass-strong"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto">
                <div className="grid lg:grid-cols-2 gap-8 p-6">
                  {/* Image */}
                  <div className="space-y-6">
                    <div className="relative group">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-80 object-cover rounded-xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-accent text-lg font-bold text-foreground mb-3">
                        Description
                      </h4>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {certificate.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-accent text-lg font-bold text-foreground mb-3">
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-purple/10 text-purple rounded-full font-body text-sm border border-purple/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (certificate: typeof certificates[0]) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  return (
    <>
      <section id="certificates" className="py-20 relative overflow-hidden scroll-snap-start">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border-2 border-gold/30 rotate-45"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [45, 405],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Certificates & Achievements
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development milestones
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.slice(0, 3).map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card hover:glass-strong transition-all duration-300 group cursor-pointer"
                onClick={() => openModal(certificate)}
                whileHover={{ y: -10 }}
              >
                <div className="p-6 space-y-4">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-purple transition-colors duration-300">
                      {certificate.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground font-body">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{certificate.issuer}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{certificate.date}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-body text-sm line-clamp-2">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple/10 text-purple rounded-full font-body text-xs border border-purple/20"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded-full font-body text-xs">
                        +{certificate.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};