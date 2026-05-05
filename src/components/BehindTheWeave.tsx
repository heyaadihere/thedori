import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import textureKhadi from '@/assets/texture-khadi-weave.jpg';
import detailFloralFabric from '@/assets/detail-floral-fabric.jpg';
import detailBerryBuckle from '@/assets/detail-berry-buckle.jpg';
import detailGoldButtons from '@/assets/detail-gold-buttons.jpg';

const weavePanels = [
  { image: textureKhadi, title: 'Khadi Weave', desc: 'Hand-spun, hand-woven cotton from artisan clusters in Gujarat and West Bengal.' },
  { image: detailFloralFabric, title: 'Block Prints', desc: 'Centuries-old ajrakh printing techniques passed through generations of master craftspeople.' },
  { image: detailBerryBuckle, title: 'Artisan Details', desc: 'Hand-stitched fabric buckles, contrast piping, and signature finishing touches.' },
  { image: detailGoldButtons, title: 'Heritage Hardware', desc: 'Custom-cast buttons inspired by traditional Indian motifs and temple architecture.' },
];

const BehindTheWeave = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-primary overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="luxury-divider w-12 mx-auto mb-6" />
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-primary-foreground/50 mb-4">The Craft</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif text-primary-foreground">Behind the Weave</h2>
        </motion.div>
          {weavePanels.map((panel, i) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <motion.img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover"
                  style={{ y: i % 2 === 0 ? y : undefined }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs text-white/80 font-light leading-relaxed">{panel.desc}</p>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-serif text-primary-foreground/90 tracking-wide">{panel.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheWeave;
