import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const words = [
  'Structure.',
  'Clarity.',
  'Purpose.',
  'Movement.',
  'Precision.',
  'Restraint.',
  'Intent.',
  'Presence.',
];

const ScrollRevealText = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} className="py-24 lg:py-40 px-4 md:px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.5em] uppercase text-primary-foreground/40 mb-10"
        >
          What We Stand For
        </motion.p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0.1, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-[1px] gold-shimmer mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default ScrollRevealText;
