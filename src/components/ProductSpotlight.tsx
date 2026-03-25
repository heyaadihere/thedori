import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';
import productWaistcoat from '@/assets/product-waistcoat.jpg';

const spotlights = [
  {
    image: productBlueBlazer,
    name: 'The Structured Blazer',
    tagline: 'Signature',
    description: 'Our most requested piece. A sharp, structured blazer that holds its shape from morning meetings to evening dinners. Fully reversible with contrast lining.',
    price: '₹8,900',
  },
  {
    image: productBrownBlazer,
    name: 'The Heritage Blazer',
    tagline: 'Timeless',
    description: 'Warm-toned wool blend with hand-finished lapels. This is the blazer your grandfather would have owned — if his tailor had better fabric sources.',
    price: '₹9,400',
  },
  {
    image: productColorfulJacket,
    name: 'The Reversible Jacket',
    tagline: 'Versatile',
    description: 'Bold on one side, neutral on the other. Our reversible jacket gives you two distinct looks in one garment. Designed for people who pack light and dress well.',
    price: '₹7,800',
  },
  {
    image: productWaistcoat,
    name: 'The Tailored Waistcoat',
    tagline: 'Essential',
    description: 'A modern waistcoat cut slightly longer than tradition dictates. Layers effortlessly under a blazer or stands alone over a crisp shirt.',
    price: '₹5,600',
  },
];

const ProductSpotlight = () => {
  return (
    <section className="py-24 lg:py-36 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">The Edit</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif">Pieces worth knowing</h2>
          <div className="luxury-divider w-20 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {spotlights.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? '' : ''}`}
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
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-3">{product.tagline}</p>
                <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2">{product.name}</h3>
                <p className="text-lg font-serif text-gold/80 mb-6">{product.price}</p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8 max-w-md">
                  {product.description}
                </p>
                <Link to="/collections">
                  <Button
                    variant="outline"
                    className="rounded-none tracking-[0.15em] uppercase text-xs px-8 py-5 border-foreground/30 hover:bg-foreground hover:text-background transition-all duration-300"
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
