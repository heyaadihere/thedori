import { motion } from 'framer-motion';
import bannerEditorial from '@/assets/banner-editorial.jpg';

const AboutProductBanner = () => {
  return (
    <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={bannerEditorial}
          alt="DORI brown blazer styled on velvet with gold accessories — editorial product shot"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content pinned bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 p-8 lg:p-16"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-xl">
            <div className="luxury-divider w-14 mb-6" />
            <p className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-4 font-light">The Story Behind the Stitch</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-[1.05] font-serif">
              Worn, not<br />displayed
            </h1>
            <p className="text-sm md:text-base text-white/45 font-light mt-6 max-w-md leading-relaxed">
              Real clothes for real days. Designed in the studio, proven on the street.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 lg:right-16 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
        <p className="text-[9px] tracking-[0.4em] uppercase text-white/30 rotate-90 origin-center translate-y-6">Scroll</p>
      </motion.div>
    </section>
  );
};

export default AboutProductBanner;
