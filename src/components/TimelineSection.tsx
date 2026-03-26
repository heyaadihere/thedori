import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';
import productWaistcoat from '@/assets/product-waistcoat.jpg';
import atelierImage from '@/assets/atelier.jpg';
import bannerCollection from '@/assets/banner-collection.jpg';

const milestones = [
  { year: '2021', title: 'The Beginning', description: 'DORI started in a small Mumbai studio. A quiet response to an overcrowded market.', image: atelierImage },
  { year: '2022', title: 'First Drop', description: 'Eight reversible blazers. Sold out in three weeks.', image: productBlueBlazer },
  { year: '2023', title: 'The Atelier', description: 'A dedicated workshop, 12 artisans, one shared standard.', image: productBrownBlazer },
  { year: '2024', title: 'Beyond India', description: 'Shipping to 15 countries across Asia and Europe.', image: productColorfulJacket },
  { year: '2025', title: 'Sustainable Shift', description: 'Carbon-neutral production. Zero-waste pattern cutting.', image: productWaistcoat },
  { year: '2026', title: 'SS26', description: 'Our most refined collection yet. 24 pieces.', image: bannerCollection },
];

const TimelineItem = ({ m, i }: { m: typeof milestones[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1]);
  const imageX = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -30 : 30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 lg:gap-10 items-center py-6 md:py-8 lg:py-0"
    >
      {/* Left side */}
      <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:order-3'}`}>
        {i % 2 === 0 ? (
          <div>
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-gold/30 block mb-2 leading-none">{m.year}</span>
            <h3 className="text-lg md:text-xl font-serif font-medium mb-2">{m.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{m.description}</p>
          </div>
        ) : (
          <motion.div style={{ x: imageX }} className="luxury-frame">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={m.image} alt={m.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Center dot + line */}
      <div className="hidden md:flex flex-col items-center relative">
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
          className="w-4 h-4 border-2 border-gold bg-background relative z-10"
        />
      </div>

      {/* Right side */}
      <div className={`${i % 2 === 0 ? 'md:order-3' : ''}`}>
        {i % 2 === 0 ? (
          <motion.div style={{ x: imageX }} className="luxury-frame">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={m.image} alt={m.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        ) : (
          <div>
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-gold/30 block mb-2 leading-none">{m.year}</span>
            <h3 className="text-lg md:text-xl font-serif font-medium mb-2">{m.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{m.description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-20 md:py-28 lg:py-40 px-4 md:px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-24"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-primary-foreground/40 mb-4">Our Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-serif">Built Over Time</h2>
          <div className="luxury-divider w-20 md:w-24 mx-auto mt-6 md:mt-8" />
        </motion.div>

        <div className="relative">
          {/* Animated center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary-foreground/10 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold/60 via-gold/40 to-transparent"
            />
          </div>

          <div className="space-y-6 md:space-y-0">
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} m={m} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
