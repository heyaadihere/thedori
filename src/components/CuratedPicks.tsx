import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import productBlueBlazer from '@/assets/blazer-azure-presence.png';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';

const picks = [
  {
    image: productBlueBlazer,
    label: 'Editor\'s Choice',
    title: 'The Structured Blazer',
    description: 'Precision tailoring meets breathable comfort. Our most versatile piece.',
    price: '₹8,500',
  },
  {
    image: productBrownBlazer,
    label: 'Most Loved',
    title: 'The Reversible Jacket',
    description: 'Two distinct looks. One considered design. Built for full days.',
    price: '₹9,200',
  },
  {
    image: productColorfulJacket,
    label: 'New Arrival',
    title: 'The Art Jacket',
    description: 'Hand-finished details that reveal themselves over time.',
    price: '₹11,000',
  },
];

const CuratedPicks = () => {
  return (
    <section className="py-20 lg:py-32 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">Curated for You</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif">Staff Picks</h2>
          <div className="luxury-divider w-20 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {picks.map((pick, i) => (
            <motion.div
              key={pick.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Floating label */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {pick.label}
                  </span>
                </div>
                {/* Bottom gradient with price */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-sm font-light">{pick.price}</span>
                </div>
              </div>
              <h3 className="text-lg font-medium font-serif mb-1">{pick.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">{pick.description}</p>
              <Link to="/collections" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground hover:text-gold transition-colors group/link">
                Shop Now
                <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedPicks;
