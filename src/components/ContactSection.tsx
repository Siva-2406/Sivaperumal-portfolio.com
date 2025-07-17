import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Github, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactMethods = [
  {
    name: "Email",
    value: "sivaperumal.dev@example.com",
    icon: Mail,
    color: "purple",
    href: "mailto:sivaperumal.dev@example.com"
  },
  {
    name: "Phone",
    value: "+91 9876543210",
    icon: Phone,
    color: "emerald",
    href: "tel:+919876543210"
  },
  {
    name: "LinkedIn",
    value: "sivaperumal-b",
    icon: Linkedin,
    color: "sapphire",
    href: "https://linkedin.com/in/sivaperumal-b"
  },
  {
    name: "GitHub",
    value: "sivaperumal-b",
    icon: Github,
    color: "gold",
    href: "https://github.com/sivaperumal-b"
  }
];

const reasonOptions = [
  "Freelance Project",
  "Full-time Opportunity", 
  "Collaboration",
  "General Inquiry",
  "Feedback",
  "Other"
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({ fullName: '', email: '', reason: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden scroll-snap-start">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
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
            Let's Connect
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="font-accent text-sm font-bold text-foreground">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    className="glass border-purple/30 focus:border-purple"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-accent text-sm font-bold text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="glass border-purple/30 focus:border-purple"
                  />
                </div>

                {/* Reason */}
                <div className="space-y-2">
                  <label className="font-accent text-sm font-bold text-foreground">
                    Why are you reaching out? *
                  </label>
                  <Select
                    value={formData.reason}
                    onValueChange={(value) => handleInputChange('reason', value)}
                    required
                  >
                    <SelectTrigger className="glass border-purple/30 focus:border-purple">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent className="glass-strong">
                      {reasonOptions.map((reason) => (
                        <SelectItem key={reason} value={reason}>
                          {reason}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-accent text-sm font-bold text-foreground">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={6}
                    className="glass border-purple/30 focus:border-purple resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 py-6 text-lg font-semibold animate-glow"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="glass-card p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Get in Touch
                </h3>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.name}
                    href={method.href}
                    target={method.name === 'LinkedIn' || method.name === 'GitHub' ? '_blank' : undefined}
                    rel={method.name === 'LinkedIn' || method.name === 'GitHub' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 glass hover:glass-strong rounded-xl transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br from-${method.color} to-${method.color}/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-accent text-lg font-bold text-foreground">
                        {method.name}
                      </h4>
                      <p className="font-body text-muted-foreground">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                Quick Response
              </h4>
              <p className="font-body text-muted-foreground">
                I typically respond within 24 hours during weekdays
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};