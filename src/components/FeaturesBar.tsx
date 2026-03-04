import { motion } from 'framer-motion';
import { Truck, RotateCcw, Shield, Leaf } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Complimentary Shipping',
    description: 'Free shipping on all orders over ₹5,000',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '30-day return policy, no questions asked',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Every piece inspected for premium standards',
  },
  {
    icon: Leaf,
    title: 'Conscious Design',
    description: 'Sustainable materials, ethical production',
  },
];

const FeaturesBar = () => {
  return (
    <section className="py-12 px-6 border-y border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <feature.icon className="h-5 w-5 mx-auto mb-3 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="text-xs font-medium tracking-wider uppercase mb-1">{feature.title}</h3>
              <p className="text-[11px] text-muted-foreground font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
