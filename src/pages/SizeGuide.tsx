import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Info } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sizeData = {
  Blazers: {
    headers: ['Size', 'Chest (in)', 'Waist (in)', 'Shoulder (in)', 'Length (in)'],
    rows: [
      ['XS', '32–34', '26–28', '14.5', '25'],
      ['S', '34–36', '28–30', '15', '25.5'],
      ['M', '36–38', '30–32', '15.5', '26'],
      ['L', '38–40', '32–34', '16', '26.5'],
      ['XL', '40–42', '34–36', '16.5', '27'],
    ],
  },
  Jackets: {
    headers: ['Size', 'Chest (in)', 'Waist (in)', 'Shoulder (in)', 'Length (in)'],
    rows: [
      ['XS', '32–34', '26–28', '14.5', '24'],
      ['S', '34–36', '28–30', '15', '24.5'],
      ['M', '36–38', '30–32', '15.5', '25'],
      ['L', '38–40', '32–34', '16', '25.5'],
      ['XL', '40–42', '34–36', '16.5', '26'],
    ],
  },
  Waistcoats: {
    headers: ['Size', 'Chest (in)', 'Waist (in)', 'Shoulder (in)', 'Length (in)'],
    rows: [
      ['XS', '32–34', '26–28', '13.5', '21'],
      ['S', '34–36', '28–30', '14', '21.5'],
      ['M', '36–38', '30–32', '14.5', '22'],
      ['L', '38–40', '32–34', '15', '22.5'],
      ['XL', '40–42', '34–36', '15.5', '23'],
    ],
  },
};

const tips = [
  { title: 'Measure Flat', description: 'Lay your best-fitting garment flat and compare measurements to our chart.' },
  { title: 'Between Sizes?', description: 'We recommend sizing up for a relaxed fit, or sizing down for a more structured look.' },
  { title: 'Still Unsure?', description: "Reach out to us at hello@dori.com \u2014 we\u2019re happy to help you find your fit." },
];

type Category = keyof typeof sizeData;

const SizeGuide = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Blazers');

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
            <Ruler className="h-8 w-8 mx-auto mb-6 text-muted-foreground" strokeWidth={1} />
            <h1 className="text-4xl md:text-5xl font-normal mb-4">Size Guide</h1>
            <p className="text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
              Find your perfect fit. All measurements are in inches.
            </p>
          </motion.div>
        </section>

        {/* Category tabs */}
        <section className="px-6 pb-6">
          <div className="container mx-auto max-w-4xl flex justify-center gap-4">
            {(Object.keys(sizeData) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Size table */}
        <section className="px-6 pb-20">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto max-w-4xl"
          >
            <div className="overflow-x-auto border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    {sizeData[activeCategory].headers.map((h) => (
                      <th key={h} className="py-4 px-6 text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeData[activeCategory].rows.map((row, i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/30 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`py-4 px-6 text-sm ${j === 0 ? 'font-medium' : 'text-muted-foreground font-light'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Tips */}
        <section className="px-6 pb-20 lg:pb-28">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              {tips.map((tip, i) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-8 border border-border"
                >
                  <Info className="h-5 w-5 mx-auto mb-4 text-muted-foreground" strokeWidth={1.5} />
                  <h3 className="text-sm font-medium mb-2">{tip.title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SizeGuide;
