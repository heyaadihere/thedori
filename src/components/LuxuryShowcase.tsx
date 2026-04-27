import { motion } from 'framer-motion';
import productBerryWrap from '@/assets/product-berry-wrap.jpg';
import productFloralBlazer from '@/assets/product-floral-blazer.jpg';

const LuxuryShowcase = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-divider w-10 mb-6 md:mb-8" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">Design-Led Versatility</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif leading-[1.2] mb-5 md:mb-6">
              Two Identities,<br />One Decision.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-6 md:mb-8 max-w-md">
              Each piece is constructed to shift with you. Subtle when needed, expressive when chosen.
            </p>
            <div className="flex gap-8 md:gap-12">
              <div>
                <span className="text-2xl md:text-3xl font-serif text-gold/60">All Day</span>
                <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground mt-1">Wear without pause</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif text-gold/60">Dual Sided</span>
                <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground mt-1">Reversible design</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="luxury-frame"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={productBerryWrap} alt="DORI berry wrap jacket with handwoven print detail" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="luxury-frame mt-8 md:mt-12"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={productFloralBlazer} alt="DORI floral blazer with hand-painted botanical print" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryShowcase;
