import { motion } from 'framer-motion';

interface FloatingBadgeProps {
  text: string;
  className?: string;
}

const FloatingBadge = ({ text, className = '' }: FloatingBadgeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, type: 'spring' }}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-background/80 backdrop-blur-sm ${className}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{text}</span>
  </motion.div>
);

export default FloatingBadge;
