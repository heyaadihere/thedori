import { motion } from 'framer-motion';
import brandDetailImage from '@/assets/brand-detail.jpg';
import process2 from '@/assets/process-2.jpg';

const materials = [
  {
    name: 'Handwoven Khadi',
    origin: 'Indian Artisans',
    detail: 'Breathable, structured, and rich in texture. Every yard is handwoven, carrying the skill of generations.',
  },
  {
    name: 'Organic Cotton & Linen',
    origin: 'Sustainably Sourced',
    detail: 'Lightweight, temperature-regulating, and wrinkle-resistant. Comfortable for all-day wear across seasons.',
  },
  {
    name: 'Ajrakh & Hand-Painted Designs',
    origin: 'Traditional Craft',
    detail: 'Block-printed and hand-painted patterns that bring character to every reversible side. No two pieces are exactly alike.',
  },
];

const MaterialsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="luxury-divider w-10 mb-6 md:mb-8" />
              <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">The Fabrics</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] mb-5 md:mb-6 font-serif">
                Premium Indian<br />textiles
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-8 md:mb-12">
                We celebrate India's textile heritage. Every fabric is selected for breathability, durability, and how it feels after hours of wear. Artisanal embroidery, chikankari, kantha, zari, mirror work, adds character that machines cannot replicate.
              </p>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              {materials.map((mat, i) => (
                <motion.div
                  key={mat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-2 border-gold/30 pl-5 md:pl-6"
                >
                  <h3 className="text-base md:text-lg font-serif font-medium mb-1">{mat.name}</h3>
                  <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold/50 mb-2">{mat.origin}</p>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{mat.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:sticky md:top-32"
          >
            <div className="luxury-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={brandDetailImage} alt="DORI handwoven fabric close-up" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="luxury-frame">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={process2} alt="DORI artisanal fabric crafting" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fabric philosophy tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground font-light mb-3">
            We work with master textiles for quality, not for volume.
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium mb-6">
            Breathability. Texture. Longevity.
          </h3>
          <div className="luxury-divider w-16 mx-auto mb-8" />
          <div className="max-w-md mx-auto">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold/60 mb-2">Particular Qualities</p>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              Every fabric scores in peace through performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialsSection;
