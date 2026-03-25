import { motion } from 'framer-motion';
import atelierImage from '@/assets/atelier.jpg';
import brandDetailImage from '@/assets/brand-detail.jpg';

const AboutAtelier = () => {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-divider w-10 mb-8" />
            <p className="text-xs tracking-[0.5em] uppercase text-gold/70 mb-6">The Atelier</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-6 font-serif">
              Where every<br />piece begins
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground font-light leading-relaxed">
              <p>
                Our atelier is where raw materials become intention. Working with a small team of skilled artisans, every DORI piece passes through dozens of hands — each one adding a layer of craft that machines can't replicate.
              </p>
              <p>
                From the first cut to the final press, we take our time. Because the kind of quality we're after doesn't come from rushing — it comes from caring about the details most people never see.
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
            <div className="luxury-frame mt-8">
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
