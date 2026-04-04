import { motion } from 'framer-motion';

const words = ['Effortless', '✦', 'Versatile', '✦', 'Reversible', '✦', 'Breathable', '✦', 'Handwoven', '✦', 'Intentional', '✦'];

const PhilosophyMarquee = () => {
  return (
    <section className="py-10 overflow-hidden border-y border-gold/20 bg-background">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-2xl md:text-3xl lg:text-4xl font-serif ${
              word === '✦' ? 'text-gold/40 text-base' : 'text-foreground/15'
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
