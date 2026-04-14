import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplets, Wind } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Handwoven Fabrics',
    stat: '100%',
    description: 'Indian textiles, handwoven by skilled artisans preserving traditional craft',
  },
  {
    icon: Recycle,
    title: 'Built to Last',
    stat: '5+',
    description: 'years of wear per piece, reducing the need for replacement',
  },
  {
    icon: Droplets,
    title: 'Hand-Washable',
    stat: 'Easy',
    description: 'care with cold water, no dry cleaning needed for most pieces',
  },
  {
    icon: Wind,
    title: 'Breathable Comfort',
    stat: '12hrs',
    description: 'regulating natural fibres',
  },
];

const SustainabilitySection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-primary-foreground/40 mb-4">Responsibility</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 font-serif">Celebrating India's textile heritage</h2>
          <p className="text-sm md:text-base text-primary-foreground/50 font-light max-w-lg mx-auto leading-relaxed">
            Sustainability through longevity. We make fewer pieces that last longer, crafted with handwoven fabrics and artisanal techniques.
          </p>
          <p className="text-sm md:text-base text-gold/80 font-serif italic mt-4 max-w-xl mx-auto leading-relaxed">
            We design with restraint creating pieces that do more, last longer and reduce the need for excess.
          </p>
          <div className="luxury-divider w-20 mx-auto mt-6 md:mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 md:mb-5"
              >
                <pillar.icon className="h-5 w-5 text-gold/70" strokeWidth={1.5} />
              </motion.div>
              <span className="text-2xl md:text-3xl font-serif block mb-2">{pillar.stat}</span>
              <h3 className="text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium mb-2">{pillar.title}</h3>
              <p className="text-xs md:text-sm text-primary-foreground/40 font-light leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
