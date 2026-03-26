import { motion } from 'framer-motion';
import process1 from '@/assets/process-1.jpg';
import process2 from '@/assets/process-2.jpg';
import process3 from '@/assets/process-3.jpg';

const AboutProcessGallery = () => {
  return (
    <section className="py-14 md:py-20 lg:py-28 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-3 md:mb-4">In the Atelier</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">Where each piece takes shape</h2>
          <div className="luxury-divider w-20 mx-auto mt-5 md:mt-6" />
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[process1, process2, process3].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="luxury-frame group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={img}
                  alt={`DORI process ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcessGallery;
