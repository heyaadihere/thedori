import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bannerEditorial from '@/assets/banner-editorial.jpg';
import bannerFloralEditorial from '@/assets/banner-floral-editorial.jpg';
import bannerColorful from '@/assets/banner-colorful.jpg';
import bannerWaistcoat from '@/assets/banner-waistcoat.jpg';
import bannerReversible from '@/assets/banner-reversible-detail.jpg';
import bannerCraftDetail from '@/assets/banner-craft-detail.jpg';

const lookbookImages = [
  { src: bannerEditorial, alt: 'DORI editorial lookbook - structured blazer', aspect: 'aspect-[3/4]' },
  { src: bannerFloralEditorial, alt: 'DORI floral editorial lookbook', aspect: 'aspect-[4/5]' },
  { src: bannerColorful, alt: 'DORI colorful jacket lookbook', aspect: 'aspect-[3/4]' },
  { src: bannerWaistcoat, alt: 'DORI waistcoat lookbook', aspect: 'aspect-[4/5]' },
  { src: bannerReversible, alt: 'DORI reversible detail lookbook', aspect: 'aspect-[3/4]' },
  { src: bannerCraftDetail, alt: 'DORI craft detail lookbook', aspect: 'aspect-[4/5]' },
];

const LookbookGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section ref={scrollRef} className="py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-3">Editorial</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-serif">The Lookbook</h2>
          </div>
          <div className="luxury-divider w-20 hidden md:block" />
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-4 md:gap-6 pl-4 md:pl-[calc((100vw-72rem)/2+1.5rem)]">
        {lookbookImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex-shrink-0 w-[280px] md:w-[340px] lg:w-[400px] group"
          >
            <div className={`${img.aspect} overflow-hidden relative`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LookbookGallery;
