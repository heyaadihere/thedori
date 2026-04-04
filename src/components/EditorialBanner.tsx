import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import bannerReversible from '@/assets/banner-reversible-detail.jpg';

const EditorialBanner = () => {
  return (
    <section className="relative h-[45vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img src={bannerReversible} alt="DORI reversible blazer with artisan print lapels" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 flex items-center"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-12">
          <div className="max-w-md">
            <div className="luxury-divider w-10 mb-4 md:mb-6" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/50 mb-3 md:mb-4">Office to Evening</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-[1.2] mb-5 md:mb-6 font-serif">
              One piece,<br />every moment
            </h2>
            <Link to="/collections">
              <Button
                size="lg"
                className="rounded-none tracking-[0.15em] uppercase text-xs md:text-sm px-8 md:px-10 py-5 md:py-6 border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Collection
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EditorialBanner;
