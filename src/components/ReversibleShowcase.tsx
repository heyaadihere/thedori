import { motion } from 'framer-motion';
import { useState } from 'react';
import sideADesigner from '@/assets/reversible-side-a-designer.png';
import sideBPink from '@/assets/reversible-side-b-pink.png';

const sides = [
  { label: 'Side A', image: sideADesigner, description: 'Designer side — vivid hand-painted artistry for moments that ask to be seen.' },
  { label: 'Side B', image: sideBPink, description: 'Pink quilted side — clean lines and gold detailing for a quieter, polished finish.' },
];

const ReversibleShowcase = () => {
  const [activeSide, setActiveSide] = useState(0);

  return (
    <section className="py-20 lg:py-32 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">Reversible Design</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif">Two looks. One piece.</h2>
          <div className="luxury-divider w-20 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Interactive image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            {sides.map((side, i) => (
              <motion.img
                key={side.label}
                src={side.image}
                alt={side.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{ opacity: activeSide === i ? 1 : 0, scale: activeSide === i ? 1 : 1.05 }}
                transition={{ duration: 0.7 }}
              />
            ))}
            {/* Side toggle overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 bg-background/90 backdrop-blur-sm p-1">
              {sides.map((side, i) => (
                <button
                  key={side.label}
                  onClick={() => setActiveSide(i)}
                  className={`px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                    activeSide === i ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {side.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              key={activeSide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{sides[activeSide].label}</p>
              <p className="text-lg md:text-xl text-foreground font-serif font-light leading-relaxed mb-6">
                {sides[activeSide].description}
              </p>
            </motion.div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
              Reversible construction isn't a feature — it's a response to how modern lives actually function.
              Fewer pieces, more versatility, zero compromise on presence.
            </p>
            <div className="space-y-3">
              {['Two complete looks', 'Hand-washable fabrics', 'Breathable all-day wear'].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold" />
                  <span className="text-xs tracking-wider text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReversibleShowcase;
