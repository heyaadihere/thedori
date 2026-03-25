import { motion } from 'framer-motion';
import bannerFounder from '@/assets/banner-founder.jpg';

const FounderNote = () => {
  return (
    <section className="py-24 lg:py-36 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
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
            <div className="luxury-divider w-10 mb-8" />
            <p className="text-xs tracking-[0.5em] uppercase text-gold/70 mb-6">A Note from the Founder</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-[1.2] mb-8 font-serif">
              "I started DORI because I was tired of choosing between style and substance."
            </h2>
            <div className="space-y-5 text-sm text-muted-foreground font-light leading-relaxed">
              <p>
                Growing up, I watched my father get dressed every morning with the same quiet ritual — a pressed shirt, a well-cut blazer, shoes polished the night before. He never followed trends. He wore what worked. And somehow, he always looked right.
              </p>
              <p>
                That stayed with me. When I started designing, I wasn't trying to reinvent anything. I just wanted to make pieces that earned their place in someone's wardrobe the way my father's blazer earned its place in his — through use, through wear, through becoming part of who you are.
              </p>
              <p>
                DORI isn't about making a statement. It's about making clothes that let you make yours.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/60">— The Founder, DORI</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
