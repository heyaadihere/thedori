import { motion } from 'framer-motion';
import fabricChikankari from '@/assets/fabric-azure-presence.png';
import fabricCottonLinen from '@/assets/fabric-scarlet-authority.png';

const materials = [
  {
    name: 'Chikankari',
    origin: 'Artisanal Embroidery',
    detail: 'Embroidered with precision, chikankari introduces depth without weight. It allows the garment to remain structured, while adding a quiet layer of detail that reveals itself up close.',
  },
  {
    name: 'Organic Cotton & Linen',
    origin: 'Sustainably Sourced',
    detail: 'Lightweight, temperature-regulating, and resilient across long hours of wear. These fabrics are chosen for consistency, how they feel at hour one and hour twelve.',
  },
];

const MaterialsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
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
                Fabrics that<br />perform
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-8 md:mb-12">
                We work with Indian textiles for what they offer, not for nostalgia. Breathability. Texture. Longevity. Every fabric earns its place through performance.
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
                <img src={fabricChikankari} alt="Chikankari embroidery detail" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="luxury-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={fabricCottonLinen} alt="Organic cotton and linen fabric texture" className="w-full h-full object-contain bg-background" loading="lazy" />
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
