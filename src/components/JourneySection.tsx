import { motion } from 'framer-motion';
import { GraduationCap, Building, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import schoolImage from '@/assets/school-journey.png';
import academyImage from '@/assets/academy-journey.png';
import strivelabsImage from '@/assets/strivelabs-journey.png';

const journeySteps = [
  {
    id: 1,
    icon: GraduationCap,
    title: "School Life",
    subtitle: "The Beginning",
    description: "From a non-technical background, I explored computers and coding during school.",
    hobby: "Coin collection and small digital tasks sparked my interest.",
    image: schoolImage,
    skills: ["Computer Basics", "Digital Literacy", "Problem Solving"],
    color: "emerald"
  },
  {
    id: 2,
    icon: Building,
    title: "Freshworks STS Software Academy",
    subtitle: "Foundation Building",
    description: "Joined Freshworks Academy where I learned the basics of front-end development.",
    image: academyImage,
    skills: ["HTML", "CSS", "Git", "Basics of JavaScript"],
    color: "gold"
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Strivelabs Journey",
    subtitle: "Real-World Experience",
    description: "Worked on real-world projects and enhanced my practical skills.",
    achievements: "Project delivery, UI development, and teamwork experience",
    image: strivelabsImage,
    skills: ["React", "TypeScript", "Team Collaboration", "Project Management"],
    color: "crimson"
  }
];

export const JourneySection = () => {
  return (
    <section id="journey" className="py-20 relative overflow-hidden scroll-snap-start">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
            My Journey
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            From curious beginner to passionate developer - here's how my story unfolded
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="space-y-20">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${step.color} to-${step.color}/60 rounded-2xl flex items-center justify-center animate-glow`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-${step.color} font-accent text-lg font-bold`}>
                        {step.id}️⃣
                      </span>
                      <span className="font-accent text-lg text-muted-foreground">
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="glass-card p-8 space-y-6">
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.hobby && (
                    <p className="font-body text-base text-muted-foreground italic">
                      {step.hobby}
                    </p>
                  )}
                  
                  {step.achievements && (
                    <p className="font-body text-lg text-emerald font-semibold">
                      {step.achievements}
                    </p>
                  )}

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="font-accent text-lg font-bold text-foreground">
                      Skills Gained:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 bg-${step.color}/10 text-${step.color} rounded-full font-body text-sm border border-${step.color}/20`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`bg-gradient-to-r from-${step.color} to-${step.color}/80 hover:opacity-90 text-white border-0`}
                  >
                    Explore More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", damping: 10 }}
              >
                <div className="relative glass-card p-4 group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                  />
                  
                  {/* Overlay Effect */}
                  <div className={`absolute inset-4 bg-gradient-to-br from-${step.color}/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Floating Number */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-bounce-in`}>
                    {step.id}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};