import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bannerWaistcoat from '@/assets/banner-waistcoat.jpg';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';

const SplitEditorial = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="py-20 lg:py-32 px-4 md:px-6 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - stacked images with parallax */}
          <div className="relative h-[500px] lg:h-[600px]">
            <motion.div
              style={{ y: leftY }}
              className="absolute top-0 left-0 w-[65%] aspect-[3/4] z-10"
            >
              <div className="luxury-frame h-full">
                <img src={bannerWaistcoat} alt="DORI waistcoat editorial" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div
              style={{ y: rightY }}
              className="absolute bottom-0 right-0 w-[55%] aspect-[3/4]"
            >
              <div className="luxury-frame h-full">
                <img src={productBlueBlazer} alt="DORI blazer detail" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>

          {/* Right - text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="luxury-divider w-12 mb-8" />
            <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">The DORI Difference</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif leading-[1.2] mb-6">
              Designed to simplify.<br />Built to endure.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-6">
              Every DORI piece is the result of deliberate choices — from fabric selection to final stitch.
              We don't follow trends. We build garments that hold their shape, their relevance, and their place
              in your life for years.
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-8">
              Reversible construction. Breathable Indian textiles. Precision Western tailoring.
              Three principles, one jacket. No compromises.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { number: 'Crafted', label: 'In India' },
                { number: 'Considered', label: 'Construction' },
                { number: 'Made', label: 'To Move With You' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-serif font-medium text-gold">{stat.number}</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitEditorial;
