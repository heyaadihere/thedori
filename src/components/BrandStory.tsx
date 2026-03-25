import { motion } from 'framer-motion';
import bannerFounder from '@/assets/banner-founder.jpg';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="luxury-frame"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={bannerFounder}
                alt="DORI founder in colorful jacket — editorial portrait"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="luxury-divider w-10 mb-6 md:mb-8" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">
              The DORI Approach
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] mb-6 md:mb-8 font-serif">
              Designed for<br />the composed
            </h2>
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed font-light">
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

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10 pt-6 md:pt-10 border-t border-gold/20">
              {[
                { number: '01', label: 'Reversible Construction' },
                { number: '02', label: 'Contrast Panels' },
                { number: '03', label: 'Premium Fabrics' },
                { number: '04', label: 'Structured Tailoring' },
              ].map((feature) => (
                <div key={feature.number}>
                  <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-gold/60">{feature.number}</span>
                  <p className="text-xs md:text-sm font-medium tracking-wide mt-1">{feature.label}</p>
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
