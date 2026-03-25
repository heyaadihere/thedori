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
    description: 'of fabric waste — all off-cuts are repurposed or donated',
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
    <section className="py-28 lg:py-36 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-primary-foreground/40 mb-4">Our Commitment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">Fashion with conscience</h2>
          <p className="text-sm text-primary-foreground/50 font-light max-w-lg mx-auto leading-relaxed">
            We believe beautiful design and environmental responsibility aren't opposites — they're inseparable.
          </p>
          <div className="luxury-divider w-20 mx-auto mt-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5"
              >
                <pillar.icon className="h-5 w-5 text-gold/70" strokeWidth={1.5} />
              </motion.div>
              <span className="text-3xl font-serif block mb-2">{pillar.stat}</span>
              <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-2">{pillar.title}</h3>
              <p className="text-xs text-primary-foreground/40 font-light leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
