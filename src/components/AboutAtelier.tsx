import { motion } from 'framer-motion';
import atelierImage from '@/assets/atelier.jpg';
import brandDetailImage from '@/assets/brand-detail.jpg';

const AboutAtelier = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-divider w-10 mb-6 md:mb-8" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">The Atelier</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] mb-5 md:mb-6 font-serif">
              Where every<br />piece begins
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                Our atelier is where raw materials become intention. A small team of skilled artisans, dozens of hands on every piece, adding layers of craft that machines can't replicate.
              </p>
              <p>
                We take our time. The kind of quality we care about doesn't come from speed. It comes from paying attention to the details most people never see.
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
                <img src={atelierImage} alt="DORI atelier" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="luxury-frame mt-6 md:mt-8">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={brandDetailImage} alt="DORI detail" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAtelier;
