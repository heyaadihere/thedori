import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import bannerHero from '@/assets/banner-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={bannerHero} 
          alt="DORI structured blazer on marble with pampas grass" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase text-foreground/70 mb-6"
          >
            New Collection — SS26
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal text-foreground"
          >
            Made to<br />move with<br />you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-foreground/70 mb-10 max-w-sm font-light leading-relaxed"
          >
            Structured outerwear designed with intention — clean lines, contrast panels, and a silhouette that holds presence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <Link to="/collections">
              <Button
                variant="default"
                size="lg"
                className="tracking-[0.15em] uppercase text-xs px-10 py-6 rounded-none"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="tracking-[0.15em] uppercase text-xs px-10 py-6 rounded-none border-foreground/30 hover:bg-foreground/5"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-foreground/30"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
