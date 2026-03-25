import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, Grid3X3, LayoutList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductGrid from '@/components/ProductGrid';
import bannerCollection from '@/assets/banner-collection.jpg';

const categories = ['All', 'Blazers', 'Jackets', 'Waistcoats'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Best Sellers'];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  const [gridView, setGridView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero with product banner */}
        <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <img src={bannerCollection} alt="DORI collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-end pb-12 lg:pb-16"
          >
            <div className="container mx-auto max-w-7xl px-6 text-center">
              <div className="luxury-divider w-16 mx-auto mb-6" />
              <p className="text-xs tracking-[0.5em] uppercase text-white/50 mb-4">The Collection</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 font-serif">Shop All</h1>
              <p className="text-sm text-white/60 font-light max-w-md mx-auto leading-relaxed">
                Structured outerwear designed with intention. Every piece, built to last.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Filters bar */}
        <section className="sticky top-[96px] lg:top-[112px] z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between h-14">
              <div className="hidden md:flex items-center gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                      activeCategory === cat ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden text-xs tracking-[0.15em] uppercase"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filter
              </Button>

              <div className="flex items-center gap-4">
                <select
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                  className="text-xs tracking-[0.1em] bg-transparent text-muted-foreground border-none outline-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="hidden md:flex items-center gap-1 border-l border-border pl-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${gridView === 'grid' ? 'text-foreground' : 'text-muted-foreground'}`}
                    onClick={() => setGridView('grid')}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${gridView === 'list' ? 'text-foreground' : 'text-muted-foreground'}`}
                    onClick={() => setGridView('list')}
                  >
                    <LayoutList className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-border md:hidden"
              >
                <div className="container mx-auto max-w-7xl px-6 py-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Categories</p>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setShowFilters(false); }}
                        className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                          activeCategory === cat
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-border text-muted-foreground hover:border-foreground'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Products */}
        <section className="py-12 lg:py-16">
          <ProductGrid />
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
