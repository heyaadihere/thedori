import { motion } from 'framer-motion';
import bannerFounder from '@/assets/co-founders.jpg';

const FounderNote = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 luxury-frame"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={bannerFounder}
                alt="DORI co-founders portrait"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="luxury-divider w-10 mb-6 md:mb-8" />
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">A Note from the Co-Founders</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] mb-6 md:mb-8 font-serif">
              "I didn't want more clothes. I wanted better decisions."
            </h2>
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                I built DORI at a point where my life had outgrown my wardrobe.
              </p>
              <p>
                The days were full with meetings, travel, conversations that mattered. But what I wore still felt like it belonged to a slower version of life.
              </p>
              <p>
                Everything required a change. Clothing designed for moments not for continuity. And that's where the shift began.
              </p>
              <p>
                DORI is built on clarity in design. Every piece is considered for how it performs across a full day: Structure that holds. Fabrics that adapt. Design that moves without compromise.
              </p>
              <p>
                Reversible construction isn't a feature. It's a response to the way modern lives actually function. I've always been drawn to the discipline of Western tailoring — its precision, its control. And equally to the depth of Indian textiles — its texture, its individuality.
              </p>
              <p>
                DORI brings these together with intent. This brand is for women who already know who they are. Who don't need clothing to define them — but expect it to keep up.
              </p>
              <p>
                DORI doesn't transform you. It removes friction.
              </p>
            </div>
            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gold/20">
              <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold/60">- The Co-Founders, DORI</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
