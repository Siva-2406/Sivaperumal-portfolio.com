import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-muted/20 z-50">
      <motion.div
        className="h-full bg-gradient-primary"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};