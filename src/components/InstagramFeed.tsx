import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import process1 from '@/assets/process-1.jpg';
import process2 from '@/assets/process-2.jpg';
import process3 from '@/assets/process-3.jpg';
import galleryImage from '@/assets/gallery-1.jpg';
import atelierImage from '@/assets/atelier.jpg';
import brandDetailImage from '@/assets/brand-detail.jpg';

const images = [process1, galleryImage, process3, atelierImage, process2, brandDetailImage];

const InstagramFeed = () => {
  return (
    <section className="py-16 lg:py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-xs tracking-[0.3em] uppercase">@dori.official</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="aspect-square overflow-hidden group relative"
            >
              <img src={img} alt="DORI on Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-6 w-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
