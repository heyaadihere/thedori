import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, Grid3X3, LayoutList, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductGrid from '@/components/ProductGrid';
import bannerCollection from '@/assets/banner-collection.jpg';
import SEO from '@/components/SEO';

const categories = ['All', 'Blazers', 'Jackets', 'Waistcoats'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Best Sellers'];
const priceRanges = ['All Prices', 'Under ₹5,000', '₹5,000 - ₹10,000', 'Above ₹10,000'];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('Newest');
  const [activePriceRange, setActivePriceRange] = useState('All Prices');
  const [showFilters, setShowFilters] = useState(false);
  const [gridView, setGridView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shop Collections | Dori Premium Activewear"
        description="Browse the full Dori collection — handcrafted blazers, jackets, and waistcoats in natural fibres, designed in Mumbai for everyday confidence."
        path="/collections"
      />
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero with parallax banner */}
        <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <motion.img
            src={bannerCollection}
            alt="DORI collection"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
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

        {/* Enhanced filters bar */}
        <section className="sticky top-[96px] lg:top-[112px] z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between h-14">
              <div className="hidden md:flex items-center gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative text-xs tracking-[0.15em] uppercase transition-colors py-4 ${
                      activeCategory === cat ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <motion.div
                        layoutId="categoryUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
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
                {/* Search */}
                <div className="hidden lg:flex items-center gap-2 border border-border px-3 py-1.5 focus-within:border-foreground transition-colors">
                  <Search className="h-3 w-3 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-xs bg-transparent outline-none w-24 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

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
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Price Range</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => setActivePriceRange(range)}
                        className={`px-4 py-2 text-xs tracking-[0.1em] border transition-colors ${
                          activePriceRange === range
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-border text-muted-foreground hover:border-foreground'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Active filters display */}
        {(activeCategory !== 'All' || activePriceRange !== 'All Prices') && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-b border-border"
          >
            <div className="container mx-auto max-w-7xl px-6 py-3 flex items-center gap-3">
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">Active filters:</span>
              {activeCategory !== 'All' && (
                <button
                  onClick={() => setActiveCategory('All')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-xs tracking-wider"
                >
                  {activeCategory}
                  <X className="h-3 w-3" />
                </button>
              )}
              {activePriceRange !== 'All Prices' && (
                <button
                  onClick={() => setActivePriceRange('All Prices')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-xs tracking-wider"
                >
                  {activePriceRange}
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </motion.div>
        )}

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
