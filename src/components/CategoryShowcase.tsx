import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bannerWaistcoat from '@/assets/banner-waistcoat.jpg';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';

const categories = [
  {
    title: 'Blazers',
    description: 'Structured elegance for every occasion',
    image: productBlueBlazer,
    href: '/collections',
  },
  {
    title: 'Waistcoats',
    description: 'Layered intention, effortless form',
    image: bannerWaistcoat,
    href: '/collections',
  },
  {
    title: 'Jackets',
    description: 'Outerwear that moves with confidence',
    image: productBrownBlazer,
    href: '/collections',
  },
];

const CategoryShowcase = () => {
  return (
    <section className="py-14 md:py-20 lg:py-32 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-3 md:mb-4">
            Explore
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">Shop by Category</h2>
          <div className="luxury-divider w-20 mx-auto mt-5 md:mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={cat.href} className="group block">
                <div className="luxury-frame mb-4 md:mb-5">
                  <div className="aspect-[3/4] overflow-hidden relative bg-secondary">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-white">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-medium tracking-wide font-serif">{cat.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 font-light">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
