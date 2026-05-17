import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Sprout, Hand, Globe } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const pillars = [
  {
    icon: Hand,
    title: 'Handcrafted, not mass produced',
    body: 'Every piece moves through the hands of artisans who have spent decades with the loom, the needle, the block. Small batches keep the work honest.',
  },
  {
    icon: Sprout,
    title: 'Natural fibres only',
    body: 'Khadi, organic cotton, linen and chikan. Breathable on the skin, gentle on the soil, and built to outlast a season.',
  },
  {
    icon: Recycle,
    title: 'Reversible by design',
    body: 'Two finished sides in one garment. One purchase, twice the wardrobe, and half the impact of buying separates.',
  },
  {
    icon: Heart,
    title: 'Fair, named makers',
    body: 'We work directly with weaving and tailoring clusters, paying above market rates and crediting craft to the people who carry it forward.',
  },
  {
    icon: Leaf,
    title: 'Low waste cutting',
    body: 'Patterns are nested to use as much of every metre as possible. Offcuts return to the karigars as linings, ties and labels.',
  },
  {
    icon: Globe,
    title: 'Mindful making',
    body: 'Reinforced seams, real buttonholes, structured shoulders. Care for it well and it will outlive most things in your wardrobe.',
  },
];

const Sustainability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Sustainability | Dori's Craft, Materials & Ethics"
        description="How Dori works — handcrafted in small batches, natural fibres only, reversible designs, and fair, named makers across India."
        path="/sustainability"
      />
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-secondary/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-5">Our Practice</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif leading-[1.05]">
                Slow by intention,<br />honest by hand
              </h1>
              <div className="luxury-divider w-20 mx-auto my-7" />
              <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                DORI is a brand built around fewer pieces, longer lives and the people who make them. Sustainability here is not a campaign. It is the quiet logic of how we work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-gold/15 p-7 md:p-9 hover-lift bg-background"
                >
                  <p.icon className="h-6 w-6 text-gold mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl md:text-2xl font-serif font-medium mb-3">{p.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing note */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.5em] uppercase text-primary-foreground/50 mb-5">A working promise</p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-snug">
                We will keep the brand small, the runs short and the makers paid well. The rest is detail we are still refining, season after season.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;
