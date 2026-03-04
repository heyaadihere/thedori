import { motion } from 'framer-motion';
import brandDetailImage from '@/assets/brand-detail.jpg';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden rounded"
          >
            <img
              src={brandDetailImage}
              alt="DORI tailoring detail"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
              The DORI Approach
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] mb-8">
              Designed for<br />the composed
            </h2>
            <div className="space-y-5 text-sm text-muted-foreground leading-relaxed font-light">
              <p>
                DORI is built on a simple belief: clothing should serve you, not compete with you. Our structured outerwear is designed for people who understand that real presence doesn't require volume.
              </p>
              <p>
                Every piece features reversible construction, contrast panels, and finishes that reward a closer look — details that speak to those who notice them.
              </p>
              <p>
                Intentional design. Quiet confidence. Built to move with you.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { number: '01', label: 'Reversible Construction' },
                { number: '02', label: 'Contrast Panels' },
                { number: '03', label: 'Premium Fabrics' },
                { number: '04', label: 'Structured Tailoring' },
              ].map((feature) => (
                <div key={feature.number}>
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground">{feature.number}</span>
                  <p className="text-xs font-medium tracking-wide mt-1">{feature.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
