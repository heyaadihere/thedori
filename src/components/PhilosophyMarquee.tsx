import { motion } from 'framer-motion';

const words = ['Intentional', '·', 'Structured', '·', 'Reversible', '·', 'Premium', '·', 'Timeless', '·', 'Crafted', '·'];

const PhilosophyMarquee = () => {
  return (
    <section className="py-8 overflow-hidden border-y border-border bg-background">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-2xl md:text-3xl lg:text-4xl font-serif ${
              word === '·' ? 'text-muted-foreground/30' : 'text-foreground/20'
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default PhilosophyMarquee;
