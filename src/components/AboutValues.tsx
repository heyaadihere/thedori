import { motion } from 'framer-motion';

const values = [
  {
    number: '01',
    title: 'Design with Intent',
    description: 'Every line, seam and silhouette is deliberate. Nothing is added without purpose, nothing exists without function.',
  },
  {
    number: '02',
    title: 'Versatility Without Compromise',
    description: 'Pieces are built to move across context — professional, personal, transitional. Not by diluting identity, but by allowing it to adapt.',
  },
  {
    number: '03',
    title: 'Presence Over Noise',
    description: 'DORI does not rely on excess to create impact. The strength lies in structure, proportion and restraint. It\'s not about being noticed. It\'s about being remembered.',
  },
  {
    number: '04',
    title: 'Utility is Not an Afterthought',
    description: 'Every element of fit, fabric, construction serves a purpose — refined to feel seamless, not technical.',
  },
];

const AboutValues = () => {
  return (
    <section className="py-14 md:py-20 lg:py-28 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-3 md:mb-4">Brand Pillars</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">What defines DORI</h2>
          <div className="luxury-divider w-20 mx-auto mt-5 md:mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-8 md:gap-y-12">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-gold/20 pt-5 md:pt-6"
            >
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-gold/60">{value.number}</span>
              <h3 className="text-base md:text-lg font-serif font-medium mt-2 mb-2 md:mb-3">{value.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
