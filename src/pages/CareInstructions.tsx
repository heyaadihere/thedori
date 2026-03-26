import { motion } from 'framer-motion';
import { Droplets, Wind, ThermometerSun, Shirt, Sparkles } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const careCategories = [
  {
    icon: Droplets,
    title: 'Washing',
    tips: [
      'Dry clean recommended for all structured pieces.',
      'For spot cleaning, use a damp cloth with mild detergent.',
      'Avoid machine washing - it can break down the internal structure.',
    ],
  },
  {
    icon: ThermometerSun,
    title: 'Ironing',
    tips: [
      'Use a steamer instead of a direct iron to preserve fabric texture.',
      'If ironing, use low heat with a pressing cloth between the iron and fabric.',
      'Never iron directly on embellishments or contrast panels.',
    ],
  },
  {
    icon: Wind,
    title: 'Drying',
    tips: [
      'Air dry only - hang on a padded hanger to maintain shoulder shape.',
      'Never tumble dry - heat damages the structured lining.',
      'Avoid direct sunlight to prevent color fading.',
    ],
  },
  {
    icon: Shirt,
    title: 'Storage',
    tips: [
      'Store on broad, padded hangers - never fold structured pieces.',
      'Keep in a breathable garment bag, not plastic.',
      'Allow space between garments for air circulation.',
    ],
  },
];

const CareInstructions = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="h-8 w-8 mx-auto mb-6 text-muted-foreground" strokeWidth={1} />
            <h1 className="text-4xl md:text-5xl font-normal mb-4">Care Instructions</h1>
            <p className="text-sm text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
              A little care keeps your DORI piece looking and feeling its best for years.
            </p>
          </motion.div>
        </section>

        {/* Care sections */}
        <section className="px-6 pb-24">
          <div className="container mx-auto max-w-4xl space-y-16">
            {careCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border pt-10"
              >
                <div className="flex md:flex-col items-center md:items-start gap-3">
                  <cat.icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                  <h2 className="text-lg font-medium">{cat.title}</h2>
                </div>
                <ul className="space-y-4">
                  {cat.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-1.5 shrink-0" />
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{tip}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-3xl text-center p-12 bg-secondary/50 border border-border"
          >
            <h3 className="text-xl font-normal mb-3">Questions about care?</h3>
            <p className="text-sm text-muted-foreground font-light mb-6">
              Our team is happy to help with any specifics.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-3 bg-foreground text-background text-xs tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareInstructions;
