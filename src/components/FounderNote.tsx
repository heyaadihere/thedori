import { motion } from 'framer-motion';
import bannerFounder from '@/assets/banner-founder.jpg';

const FounderNote = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 luxury-frame"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={bannerFounder}
                alt="DORI founder portrait"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="luxury-divider w-10 mb-6 md:mb-8" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">A Note from the Founder</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] mb-6 md:mb-8 font-serif">
              "I built DORI for women who value clarity over clutter."
            </h2>
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                I wanted to create jackets for women like me, ambitious, always moving, tired of choosing between comfort and style. Something that goes from a 9am client meeting to evening drinks without a wardrobe change.
              </p>
              <p>
                DORI blends what I love about Western tailoring, the structure, the clean lines, with India's incredible textile heritage. Handwoven fabrics, artisanal embroidery, materials that breathe and last for years.
              </p>
              <p>
                Every feature has a purpose. Reversible construction gives you two looks. Functional pockets because you need them. Hand-washable fabrics because life is busy enough.
              </p>
            </div>
            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gold/20">
              <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold/60">- The Founder, DORI</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
