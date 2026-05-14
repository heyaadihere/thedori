import { motion } from 'framer-motion';
import { Droplets, Wind, ThermometerSun, Shirt, Sparkles } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const careCategories = [
  {
    icon: Droplets,
    title: 'Washing',
    tips: [
      'Most DORI pieces are hand-washable with cold water and mild detergent.',
      'For structured blazers, spot clean with a damp cloth for day-to-day care.',
      'No dry cleaning needed for most styles, saving you time and cost.',
    ],
  },
  {
    icon: ThermometerSun,
    title: 'Ironing',
    tips: [
      'Use a steamer to freshen up between wears, it preserves the handwoven texture.',
      'If ironing, use low heat with a pressing cloth between the iron and fabric.',
      'Never iron directly on artisanal embroidery, chikankari, kantha, or mirror work.',
    ],
  },
  {
    icon: Wind,
    title: 'Drying',
    tips: [
      'Lay flat to dry after hand washing to maintain shape and structure.',
      'For quick refreshing, hang on a padded hanger in a well-ventilated area.',
      'Avoid direct sunlight to preserve the vibrancy of handwoven and hand-painted fabrics.',
    ],
  },
  {
    icon: Shirt,
    title: 'Storage',
    tips: [
      'Store on broad, padded hangers to maintain shoulder structure.',
      'Keep in a breathable garment bag, not plastic, to protect handwoven fabrics.',
      'Allow space between garments for air circulation.',
    ],
  },
];

const CareInstructions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Care Instructions | Caring for Your Dori Pieces"
        description="How to wash, iron, and store your Dori handcrafted activewear so each piece lasts and looks its best for years to come."
        path="/care-instructions"
      />
      <AnnouncementBar />
      <Header />
      <main>
        <section className="py-20 lg:py-28 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="h-8 w-8 mx-auto mb-6 text-muted-foreground" strokeWidth={1} />
            <h1 className="text-4xl md:text-5xl font-normal mb-4">Care Instructions</h1>
            <p className="text-sm text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
              DORI pieces are designed for easy care. A little attention keeps your jacket looking its best for 5+ years.
            </p>
          </motion.div>
        </section>

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

        <section className="px-6 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-3xl text-center p-12 bg-secondary/50 border border-border"
          >
            <h3 className="text-xl font-normal mb-3">Questions about care?</h3>
            <p className="text-sm text-muted-foreground font-light mb-6">
              Our team is happy to help with specifics about your piece.
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
