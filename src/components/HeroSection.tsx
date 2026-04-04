import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import bannerHero from '@/assets/banner-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={bannerHero} 
          alt="DORI everyday luxury jacket styled for modern Indian women" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '3rem' }}
            transition={{ duration: 1, delay: 0.1 }}
            className="h-[1px] gold-shimmer mb-6 md:mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/60 mb-4 md:mb-6"
          >
            Everyday Luxury Jackets
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-5 md:mb-6 font-medium text-white font-serif"
          >
            Look put-together.<br />Always.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-white/70 mb-8 md:mb-10 max-w-sm font-light leading-relaxed"
          >
            Western silhouettes. Indian fabrics. Jackets designed for women who don't have time to change but always want to show up ready.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link to="/collections">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto tracking-[0.15em] uppercase text-xs md:text-sm px-8 md:px-10 py-5 md:py-6 rounded-none bg-white text-black hover:bg-white/90"
              >
                Shop the Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto tracking-[0.15em] uppercase text-xs md:text-sm px-8 md:px-10 py-5 md:py-6 rounded-none border-white text-white hover:bg-white hover:text-black"
              >
                Our Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-white/30"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
