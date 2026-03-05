import { motion } from 'framer-motion';
import bannerCollection from '@/assets/banner-collection.jpg';

const CraftsmanshipSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] lg:h-[70vh]">
        <img
          src={bannerCollection}
          alt="DORI collection flatlay — blazer, waistcoat, jacket with gold accessories"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 p-8 lg:p-16"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-4">
                Craftsmanship
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] text-primary-foreground mb-4">
                Made by hand.<br />Worn with purpose.
              </h2>
              <p className="text-sm text-primary-foreground/70 font-light leading-relaxed max-w-md">
                Every stitch, every panel, every finish — considered. Our atelier works with the finest fabrics to create pieces that last beyond seasons.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
