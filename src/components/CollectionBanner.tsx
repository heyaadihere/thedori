import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import bannerArt from '@/assets/banner-collection-art.jpg';

const CollectionBanner = () => {
  return (
    <section className="relative h-[40vh] md:h-[45vh] lg:h-[55vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img src={bannerArt} alt="DORI vibrant artisan collection with hand-painted designs" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-black/10" />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-end"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-12">
          <div className="max-w-md ml-auto text-right">
             <div className="luxury-divider w-10 ml-auto mb-4 md:mb-6" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/50 mb-3 md:mb-4">New Arrivals</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-[1.2] mb-5 md:mb-6 font-serif">
              Expressive by<br />design
            </h2>
            <Link to="/collections">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-none tracking-[0.15em] uppercase text-xs md:text-sm px-8 md:px-10 py-5 md:py-6 border border-white/50 text-white hover:bg-white/10 hover:text-white"
              >
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CollectionBanner;
