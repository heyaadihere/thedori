import { motion } from 'framer-motion';
import bannerFounder from '@/assets/banner-founder.jpg';

const FounderNote = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-20 items-start">
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
                alt="DORI founder portrait"
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
            <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-4 md:mb-6">A Note from the Founder</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] mb-6 md:mb-8 font-serif">
              "I wanted to make the kind of clothes I wished existed."
            </h2>
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                I grew up watching my mother get ready. No fuss, no overthinking. She wore what worked. A good blazer, clean lines, nothing that competed with her.
              </p>
              <p>
                That stayed with me. When I started DORI, I wasn't chasing trends. I wanted pieces that earn their place in your wardrobe the way hers did, through use, through wear, through becoming part of how you show up.
              </p>
              <p>
                DORI isn't about making a statement. It's about making clothes that let you make yours.
              </p>
            </div>
            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gold/20">
              <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold/60">- The Founder, DORI</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
