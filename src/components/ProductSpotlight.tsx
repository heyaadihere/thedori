import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import spotlightLeather from '@/assets/spotlight-leather-blazer.jpg';
import spotlightBerry from '@/assets/product-berry-wrap.jpg';
import spotlightArt from '@/assets/spotlight-art-jacket.jpg';
import spotlightReversible from '@/assets/spotlight-reversible-blazer.jpg';

const spotlights = [
  {
    image: spotlightLeather,
    name: 'The Leather Blazer',
    tagline: 'Signature',
    description: 'Premium leather with structured tailoring. Clean lines, functional pockets, a silhouette that holds its shape through 12-hour days. Office to evening, no change needed.',
    price: '₹8,900',
  },
  {
    image: spotlightBerry,
    name: 'The Berry Wrap Jacket',
    tagline: 'Artisanal',
    description: 'Handwoven cotton-linen blend with block-printed reversible lapels and a signature fabric buckle. The kind of piece that starts conversations without trying.',
    price: '₹9,400',
  },
  {
    image: spotlightArt,
    name: 'The Art Jacket',
    tagline: 'Expressive',
    description: 'Bold hand-painted artisan prints meet magenta silk lining with gold elephant buttons. Wearable art that turns every entrance into a moment.',
    price: '₹7,800',
  },
  {
    image: spotlightReversible,
    name: 'The Reversible Blazer',
    tagline: 'Versatile',
    description: 'Indigo linen exterior with vibrant artisan-print lapels and cuffs. Flip it for a completely different look. Two jackets in one, wrinkle-free and breathable.',
    price: '₹6,800',
  },
];

const ProductSpotlight = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-4">Closer Look</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">Pieces worth knowing</h2>
          <div className="luxury-divider w-20 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-14 md:space-y-20 lg:space-y-28">
          {spotlights.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center"
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="luxury-frame group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <p className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-gold/60 mb-3">{product.tagline}</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium mb-2">{product.name}</h3>
                <p className="text-base md:text-lg font-serif text-gold/80 mb-4 md:mb-6">{product.price}</p>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-6 md:mb-8 max-w-md">
                  {product.description}
                </p>
                <Link to="/collections">
                  <Button
                    variant="outline"
                    className="rounded-none tracking-[0.15em] uppercase text-xs md:text-sm px-6 md:px-8 py-4 md:py-5 border-foreground/30 hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
