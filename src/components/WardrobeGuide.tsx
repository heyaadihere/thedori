import { motion } from 'framer-motion';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';

const occasions = [
  {
    title: 'The Boardroom',
    image: productBlueBlazer,
    description: '',
    tip: '',
  },
  {
    title: 'The Travel Day',
    image: productColorfulJacket,
    description: '',
    tip: '',
  },
  {
    title: 'The Evening',
    image: productBrownBlazer,
    description: '',
    tip: '',
  },
];

const WardrobeGuide = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-4">Styling Notes</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">One piece. Multiple contexts.</h2>
          <p className="text-sm md:text-base text-muted-foreground font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Morning meetings. Late flights. Evenings that extend.
            <br />
            The jacket stays. The setting changes.
          </p>
          <div className="luxury-divider w-20 mx-auto mt-6 md:mt-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {occasions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="luxury-frame mb-4 md:mb-6">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-serif font-medium">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WardrobeGuide;
