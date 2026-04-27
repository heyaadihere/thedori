import { motion } from 'framer-motion';
import { Truck, RotateCcw, Shield, Leaf } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Functional By Design',
    description: 'Pockets, structure and finish made for real days',
  },
  {
    icon: RotateCcw,
    title: 'Reversible Design',
    description: 'Two looks from one jacket',
  },
  {
    icon: Shield,
    title: 'Designed for Long Days',
    description: 'Holds shape from morning to evening',
  },
  {
    icon: Leaf,
    title: 'Breathable Natural Fabrics',
    description: 'Khadi, Organic, Linen, Chikan',
  },
];

const FeaturesBar = () => {
  return (
    <section className="py-10 md:py-14 px-4 md:px-6 border-y border-gold/15 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <feature.icon className="h-5 w-5 mx-auto mb-3 text-gold/60" strokeWidth={1.5} />
              <h3 className="text-xs md:text-sm font-medium tracking-wider uppercase mb-1">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
