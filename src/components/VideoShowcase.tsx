import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const VideoShowcase = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-primary overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-primary-foreground/50 mb-4">Experience</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif text-primary-foreground">The Art of Making</h2>
          <div className="luxury-divider w-20 mx-auto mt-6" />
        </motion.div>

        <motion.div style={{ scale, opacity }} className="relative aspect-video rounded overflow-hidden">
          <video
            src="/videos/showcase-cinematic.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20 pointer-events-none" />
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
            <p className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
              From loom to wardrobe — every DORI piece begins with a story
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
