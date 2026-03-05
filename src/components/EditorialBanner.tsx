import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import bannerEditorial from '@/assets/banner-editorial.jpg';

const EditorialBanner = () => {
  return (
    <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img src={bannerEditorial} alt="DORI brown blazer on velvet with gold accessories" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 flex items-center"
      >
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/60 mb-4">The Collection</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-primary-foreground leading-[1.2] mb-6">
              Pieces that<br />outlast trends
            </h2>
            <Link to="/collections">
              <Button
                variant="outline"
                size="lg"
                className="rounded-none tracking-[0.15em] uppercase text-xs px-10 py-6 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
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
