import { motion } from 'framer-motion';
import bannerCraft from '@/assets/banner-craft-detail.jpg';

const CraftsmanshipSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src={bannerCraft}
          alt="DORI artisanal hand-painted jacket detail with gold elephant buttons"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-16"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-lg">
              <div className="luxury-divider w-12 mb-4 md:mb-6" />
              <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/50 mb-3 md:mb-4">
                Artisanal Craft
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] text-white mb-3 md:mb-4 font-serif">
                Handwoven heritage,<br />modern precision
              </h2>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-md">
                Khadi, organic cotton, ajrakh, chikankari, kantha, zari, mirror work. Every piece carries the skill of Indian artisans and the precision of contemporary design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
