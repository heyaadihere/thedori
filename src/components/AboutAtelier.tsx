import { motion } from 'framer-motion';
import atelierImage from '@/assets/atelier.jpg';
import brandDetailImage from '@/assets/brand-detail.jpg';

const AboutAtelier = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-divider w-10 mb-6 md:mb-8" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">The Atelier</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] mb-5 md:mb-6 font-serif">
              Where precision<br />meets craft
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                Every garment is shaped through a balance of tailoring discipline and textile expertise.
              </p>
              <p>
                Artisans and pattern makers work in tandem ensuring each piece holds both structure and individuality.
              </p>
              <p>
                The result is clothing that feels considered, not constructed.
              </p>
              <p>
                Every piece passes through strong quality checks to ensure lasting wear for years. The kind of quality we care about comes from attention to detail, from reversible seams that lie perfectly flat to pockets placed exactly where you need them.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="luxury-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={atelierImage} alt="DORI atelier with artisans at work" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="luxury-frame mt-6 md:mt-8">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={brandDetailImage} alt="DORI handwoven fabric detail" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAtelier;
