import { motion } from 'framer-motion';
import productBlueBlazer from '@/assets/product-blue-blazer.jpg';
import productBrownBlazer from '@/assets/product-brown-blazer.jpg';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';
import productWaistcoat from '@/assets/product-waistcoat.jpg';

const products = [
  { src: productBlueBlazer, alt: 'DORI structured blue blazer', label: 'The Structured Blazer' },
  { src: productBrownBlazer, alt: 'DORI heritage brown blazer', label: 'The Heritage Blazer' },
  { src: productColorfulJacket, alt: 'DORI colorful reversible jacket', label: 'The Reversible Jacket' },
  { src: productWaistcoat, alt: 'DORI tailored waistcoat', label: 'The Tailored Waistcoat' },
];

const AboutProductBanner = () => {
  return (
    <section className="relative h-[65vh] lg:h-[75vh] overflow-hidden">
      {/* Composite product banner — 4 product images side by side */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        {products.map((product, i) => (
          <motion.div
            key={product.label}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: i * 0.15, ease: 'easeOut' }}
            className="relative overflow-hidden"
          >
            <img
              src={product.src}
              alt={product.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 p-8 lg:p-16"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="luxury-divider w-12 mb-6" />
          <p className="text-xs tracking-[0.5em] uppercase text-white/50 mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] font-serif">
            Built on<br />restraint
          </h1>
          <p className="text-sm text-white/50 font-light mt-4 max-w-md leading-relaxed">
            Four signature pieces. One unwavering philosophy.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutProductBanner;
