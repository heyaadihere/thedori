import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import categoryImage from '@/assets/category-flatlay.jpg';
import brandDetailImage from '@/assets/brand-detail.jpg';

const categories = [
  {
    title: 'Blazers',
    description: 'Structured elegance for every occasion',
    image: categoryImage,
    href: '/',
  },
  {
    title: 'Waistcoats',
    description: 'Layered intention, effortless form',
    image: brandDetailImage,
    href: '/',
  },
  {
    title: 'Jackets',
    description: 'Outerwear that moves with confidence',
    image: categoryImage,
    href: '/',
  },
];

const CategoryShowcase = () => {
  return (
    <section className="py-16 lg:py-24 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-normal">Shop by Category</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={cat.href} className="group block">
                <div className="aspect-[3/4] overflow-hidden rounded mb-4 relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground">
                      Explore →
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-normal tracking-wide">{cat.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-light">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
