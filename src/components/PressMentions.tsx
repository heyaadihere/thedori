import { motion } from 'framer-motion';

const pressLogos = [
  { name: 'Vogue India', text: 'VOGUE' },
  { name: 'Elle', text: 'ELLE' },
  { name: 'Harper\'s Bazaar', text: 'BAZAAR' },
  { name: 'GQ India', text: 'GQ' },
  { name: 'Femina', text: 'FEMINA' },
  { name: 'Grazia', text: 'GRAZIA' },
];

const PressMentions = () => {
  return (
    <section className="py-10 md:py-14 px-4 md:px-6 border-y border-gold/10 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-muted-foreground text-center mb-8"
        >
          As Featured In
        </motion.p>
        <div className="flex items-center justify-between gap-6 md:gap-12 overflow-x-auto pb-2">
          {pressLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex-shrink-0 group cursor-default"
            >
              <span className="text-lg md:text-xl lg:text-2xl font-serif tracking-[0.2em] text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors duration-500">
                {logo.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressMentions;
