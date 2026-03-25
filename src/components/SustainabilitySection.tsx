import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplets, Wind } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Organic Materials',
    stat: '85%',
    description: 'of our fabrics are certified organic or responsibly sourced',
  },
  {
    icon: Recycle,
    title: 'Zero Waste',
    stat: '0kg',
    description: 'of fabric waste - all off-cuts are repurposed or donated',
  },
  {
    icon: Droplets,
    title: 'Water Conscious',
    stat: '60%',
    description: 'less water used compared to conventional production',
  },
  {
    icon: Wind,
    title: 'Carbon Neutral',
    stat: '100%',
    description: 'of our carbon emissions are offset through verified programs',
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
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-primary-foreground/40 mb-4">Our Commitment</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 font-serif">Fashion with conscience</h2>
          <p className="text-sm md:text-base text-primary-foreground/50 font-light max-w-lg mx-auto leading-relaxed">
            We believe beautiful design and environmental responsibility aren't opposites - they're inseparable.
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
