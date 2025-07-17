import { motion } from 'framer-motion';
import { ExternalLink, Play, Github, Calendar, User, ShoppingCart, MessageCircle, Zap, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Movie Ticket Booking Website",
    description: "A full-featured movie ticket booking platform with seat selection, payment integration, and user management.",
    icon: Calendar,
    color: "purple",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Seat Selection", "Payment Gateway", "User Authentication", "Admin Dashboard"],
    mockVideo: "https://via.placeholder.com/600x300/7c3aed/ffffff?text=Movie+Booking+Demo"
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Modern e-commerce platform with cart management, product filtering, and secure checkout process.",
    icon: ShoppingCart,
    color: "emerald",
    tags: ["React", "TypeScript", "Tailwind", "Firebase"],
    features: ["Product Catalog", "Shopping Cart", "User Reviews", "Order Tracking"],
    mockVideo: "https://via.placeholder.com/600x300/10b981/ffffff?text=E-commerce+Demo"
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "Intelligent chatbot with natural language processing capabilities and context-aware responses.",
    icon: MessageCircle,
    color: "sapphire",
    tags: ["Python", "OpenAI", "React", "WebSocket"],
    features: ["NLP Processing", "Context Memory", "Multi-language", "Voice Input"],
    mockVideo: "https://via.placeholder.com/600x300/3b82f6/ffffff?text=AI+Chatbot+Demo"
  },
  {
    id: 4,
    title: "Real-World n8n Automation Agent (1)",
    description: "Advanced workflow automation system for business process optimization and data integration.",
    icon: Zap,
    color: "gold",
    tags: ["n8n", "Node.js", "API Integration", "PostgreSQL"],
    features: ["Workflow Builder", "API Connections", "Data Processing", "Monitoring"],
    mockVideo: "https://via.placeholder.com/600x300/f59e0b/ffffff?text=Automation+Agent+1"
  },
  {
    id: 5,
    title: "Real-World n8n Automation Agent (2)",
    description: "Enhanced automation platform with machine learning capabilities and predictive analytics.",
    icon: Zap,
    color: "crimson",
    tags: ["n8n", "Python", "Machine Learning", "Analytics"],
    features: ["ML Integration", "Predictive Analytics", "Auto-scaling", "Custom Nodes"],
    mockVideo: "https://via.placeholder.com/600x300/ef4444/ffffff?text=Automation+Agent+2"
  },
  {
    id: 6,
    title: "One Fun Game Project",
    description: "Interactive web-based game with engaging gameplay mechanics and responsive design.",
    icon: Gamepad2,
    color: "orange",
    tags: ["JavaScript", "Canvas", "WebGL", "CSS Animations"],
    features: ["Interactive Gameplay", "High Scores", "Responsive Design", "Sound Effects"],
    mockVideo: "https://via.placeholder.com/600x300/f97316/ffffff?text=Fun+Game+Demo"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card hover:glass-strong transition-all duration-300 group"
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br from-${project.color} to-${project.color}/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-purple transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Mock Video */}
        <div className="relative group/video">
          <div className="relative bg-muted/20 rounded-lg overflow-hidden aspect-video">
            <img 
              src={project.mockVideo} 
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 bg-${project.color} rounded-full flex items-center justify-center cursor-pointer shadow-xl`}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h4 className="font-accent text-sm font-bold text-foreground/80">
            Key Features:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <div className={`w-2 h-2 bg-${project.color} rounded-full`} />
                <span className="font-body text-sm text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="font-accent text-sm font-bold text-foreground/80">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full font-body text-xs border border-${project.color}/20`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3 pt-4 border-t border-border/50">
          <Button 
            className={`bg-gradient-to-r from-${project.color} to-${project.color}/80 hover:opacity-90 text-white border-0 flex-1`}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Website
          </Button>
          
          <Button 
            variant="outline" 
            className={`glass border-${project.color}/50 hover:bg-${project.color}/10`}
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden scroll-snap-start">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-lg opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, hsl(var(--purple)), hsl(var(--sapphire)))`
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
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
            Featured Projects
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};