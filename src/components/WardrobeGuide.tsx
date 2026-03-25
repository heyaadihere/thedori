import { motion } from 'framer-motion';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';

const occasions = [
  {
    title: 'The Boardroom',
    image: productBlueBlazer,
    description: 'Pair the Structured Blazer with tailored trousers and minimal accessories. Let the silhouette do the talking.',
    tip: 'Pro tip: wear the contrast lining side on Fridays for a subtle shift.',
  },
  {
    title: 'The Weekend',
    image: productColorfulJacket,
    description: 'The Reversible Jacket over a plain tee and well-fitted denim. Effortless without looking like you tried.',
    tip: 'Flip to the bold side for brunch. Flip back for evening drinks.',
  },
  {
    title: 'The Evening',
    image: productBrownBlazer,
    description: 'The Heritage Blazer with a dark roll-neck and polished shoes. Classic enough for any room, distinctive enough to remember.',
    tip: 'The hand-finished lapels catch candlelight beautifully.',
  },
];

const WardrobeGuide = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">Style Notes</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif">How to wear DORI</h2>
          <p className="text-sm text-muted-foreground font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Three occasions. Three approaches. One wardrobe that adapts.
          </p>
          <div className="luxury-divider w-20 mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {occasions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="luxury-frame mb-6">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-lg font-serif font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{item.description}</p>
              <p className="text-xs text-gold/60 italic font-serif leading-relaxed">{item.tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WardrobeGuide;
