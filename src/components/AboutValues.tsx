import { motion } from 'framer-motion';

const values = [
  {
    number: '01',
    title: 'Intentional Design',
    description: "Every detail serves a purpose. No excess, no filler — just design that works harder so you don't have to think about it.",
  },
  {
    number: '02',
    title: 'Reversible Construction',
    description: 'Two looks in one piece. Our reversible construction means your wardrobe doubles without the footprint.',
  },
  {
    number: '03',
    title: 'Premium Materials',
    description: 'We source fabrics that age with grace — getting softer, richer, and more personal with every wear.',
  },
  {
    number: '04',
    title: 'Structured Silhouettes',
    description: 'Our tailoring holds its shape so you can hold yours. Clean lines that command attention without demanding it.',
  },
];

const AboutValues = () => {
  return (
    <section className="py-20 lg:py-28 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">Our Principles</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif">What guides us</h2>
          <div className="luxury-divider w-20 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-gold/20 pt-6"
            >
              <span className="text-[10px] tracking-[0.3em] text-gold/60">{value.number}</span>
              <h3 className="text-lg font-serif font-medium mt-2 mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
