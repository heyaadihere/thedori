import { motion } from 'framer-motion';
import productColorfulJacket from '@/assets/product-colorful-jacket.jpg';
import productWaistcoat from '@/assets/product-waistcoat.jpg';

const principles = [
  {
    title: 'Less, but better',
    body: 'We make fewer pieces per season and edit until only the essential remains. Quality over quantity, always.',
  },
  {
    title: 'Reversible by design',
    body: 'Not a gimmick. A design principle. Two considered looks from one garment. Less waste, more versatility.',
  },
  {
    title: 'Structure that moves',
    body: 'We build structure into the shoulder and chest, but leave enough give for you to actually live in it.',
  },
  {
    title: 'Details for the wearer',
    body: 'Contrast stitching on the inside. Hidden pockets. Fabric that feels different depending on which side you wear. Personal discoveries, not marketing points.',
  },
];

const DesignPhilosophy = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36 px-4 md:px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-primary-foreground/40 mb-4">Our Approach</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">How we design</h2>
          <div className="luxury-divider w-20 mx-auto mt-6 md:mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left - principles */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr] gap-3 md:gap-4 items-start border-b border-primary-foreground/10 pb-6 md:pb-8"
              >
                <span className="text-3xl md:text-5xl font-serif text-gold/25">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-base md:text-lg font-serif font-medium mb-2 md:mb-3">{p.title}</h3>
                  <p className="text-sm md:text-base text-primary-foreground/50 font-light leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - stacked product images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-1 gap-4"
          >
            <div className="luxury-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={productColorfulJacket} alt="DORI reversible jacket" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="luxury-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={productWaistcoat} alt="DORI tailored waistcoat" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
