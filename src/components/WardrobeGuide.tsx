import { motion } from 'framer-motion';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';

const occasions = [
  {
    title: 'The Boardroom',
    image: productBlueBlazer,
    description: 'The Reversible Blazer with tailored trousers. Structured shoulders, breathable lining, wrinkle-free after a full day.',
    tip: 'Flip to the Indian textile side for Friday meetings.',
  },
  {
    title: 'The Travel Day',
    image: productColorfulJacket,
    description: 'The Expressive Jacket over a plain tee. Hand-washable, packs flat, two looks in your carry-on.',
    tip: 'Bold print for arrivals, muted side for the flight.',
  },
  {
    title: 'The Evening',
    image: productBrownBlazer,
    description: 'The Heritage Jacket with a silk blouse. Handwoven fabric catches the light. No change needed from the office.',
    tip: 'Artisanal embroidery details reward a closer look.',
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">One wardrobe, every moment</h2>
          <p className="text-sm md:text-base text-muted-foreground font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Boardroom. Travel. Evening. Same jacket, different sides. That's the DORI way.
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
              <h3 className="text-base md:text-lg font-serif font-medium mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-3 md:mb-4">{item.description}</p>
              <p className="text-xs md:text-sm text-gold/60 italic font-serif leading-relaxed">{item.tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WardrobeGuide;
