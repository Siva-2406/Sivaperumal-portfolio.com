import { motion } from 'framer-motion';
import { Code, Database, Wrench, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "purple",
    skills: [
      { name: "HTML", level: 95, shape: "circular" },
      { name: "CSS", level: 90, shape: "wavy" },
      { name: "JavaScript", level: 85, shape: "pulse" },
      { name: "MySQL", level: 80, shape: "circular" },
      { name: "PostgreSQL", level: 75, shape: "wavy" },
      { name: "MongoDB", level: 70, shape: "pulse" },
      { name: "Python", level: 75, shape: "circular" },
      { name: "React", level: 88, shape: "wavy" },
      { name: "TypeScript", level: 82, shape: "pulse" },
      { name: "Node.js", level: 78, shape: "circular" },
    ]
  },
  {
    title: "Tools & Design",
    icon: Wrench,
    color: "emerald",
    skills: [
      { name: "Canva", level: 90, shape: "wavy" },
      { name: "Figma", level: 85, shape: "circular" },
      { name: "Visily", level: 80, shape: "pulse" },
      { name: "GitHub", level: 92, shape: "wavy" },
      { name: "VS Code", level: 95, shape: "circular" },
      { name: "Cursor", level: 88, shape: "pulse" },
      { name: "n8n", level: 85, shape: "wavy" },
    ]
  }
];

const SkillBar = ({ skill, index, color }: { skill: any, index: number, color: string }) => {
  const { name, level, shape } = skill;

  const renderProgressBar = () => {
    switch (shape) {
      case "circular":
        return (
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-muted/20"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={`hsl(var(--${color}))`}
                strokeWidth="2"
                strokeDasharray="100"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 100 - level }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-bold text-sm" style={{ color: `hsl(var(--${color}))` }}>{level}%</span>
            </div>
          </div>
        );

      case "wavy":
        return (
          <div className="relative w-full h-8 bg-muted/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background: `linear-gradient(to right, hsl(var(--${color})), hsl(var(--${color}) / 0.6))`,
                clipPath: "polygon(0% 20%, 10% 80%, 20% 20%, 30% 80%, 40% 20%, 50% 80%, 60% 20%, 70% 80%, 80% 20%, 90% 80%, 100% 20%, 100% 100%, 0% 100%)"
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            />
            <div className="absolute inset-0 flex items-center justify-end pr-2">
              <span className="text-foreground font-bold text-xs">{level}%</span>
            </div>
          </div>
        );

      case "pulse":
        return (
          <div className="relative w-full h-6 bg-muted/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full relative"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              style={{
                background: `repeating-linear-gradient(90deg, hsl(var(--${color})) 0px, hsl(var(--${color})) 10px, hsl(var(--${color}) / 0.5) 10px, hsl(var(--${color}) / 0.5) 20px)`,
                animation: 'pulse-bg 2s infinite'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-end pr-2">
              <span className="text-foreground font-bold text-xs">{level}%</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-4 hover:glass-strong transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-accent text-lg font-bold text-foreground group-hover:text-purple transition-colors duration-300">
          {name}
        </h4>
      </div>
      {renderProgressBar()}
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden scroll-snap-start">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
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
            Skills & Expertise
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse toolkit that empowers me to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br from-${category.color} to-${category.color}/60 rounded-2xl flex items-center justify-center animate-glow`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};