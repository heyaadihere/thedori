import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProductByHandle } from '@/hooks/useProducts';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Loader2, Truck, RotateCcw, Shield } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageMagnifier from '@/components/ImageMagnifier';
import type { ShopifyProduct } from '@/lib/shopify';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading, error } = useProductByHandle(handle || '');
  const addItem = useCartStore(state => state.addItem);
  const cartLoading = useCartStore(state => state.isLoading);

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <Skeleton className="aspect-[3/4] w-full" />
            <div className="space-y-4 pt-8">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-24 w-full mt-8" />
              <Skeleton className="h-14 w-full mt-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <div className="container mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Link to="/" className="text-sm underline mt-4 inline-block">Back to shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images.edges;
  const variants = product.variants.edges;
  const options = product.options.filter(o => o.name !== 'Title' || o.values.length > 1);

  if (Object.keys(selectedOptions).length === 0 && options.length > 0) {
    const defaults: Record<string, string> = {};
    options.forEach(o => { defaults[o.name] = o.values[0]; });
    if (Object.keys(defaults).length > 0) {
      setTimeout(() => setSelectedOptions(defaults), 0);
    }
  }

  const selectedVariant = variants.find(v =>
    v.node.selectedOptions.every(so => selectedOptions[so.name] === so.value)
  )?.node || variants[0]?.node;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    const shopifyProduct: ShopifyProduct = { node: product };
    await addItem({
      product: shopifyProduct,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions,
    });
    toast.success('Added to bag', { position: 'top-center' });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-6xl px-6 py-8 lg:py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-3 w-3" />
          <span className="tracking-wider uppercase">Back to shop</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="aspect-[3/4] bg-secondary rounded overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {images[selectedImageIndex]?.node ? (
                    <ImageMagnifier
                      src={images[selectedImageIndex].node.url}
                      alt={images[selectedImageIndex].node.altText || product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">No image</div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-20 h-24 flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-300 ${
                      i === selectedImageIndex ? 'border-foreground opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">DORI</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-3">{product.title}</h1>
            <p className="text-xl text-foreground mb-8">
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
            </p>

            {/* Variant selectors */}
            {options.map(option => (
              <div key={option.name} className="mb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  {option.name}: <span className="text-foreground">{selectedOptions[option.name]}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {option.values.map(value => (
                    <button
                      key={value}
                      onClick={() => setSelectedOptions(prev => ({ ...prev, [option.name]: value }))}
                      className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all duration-200 ${
                        selectedOptions[option.name] === value
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border text-foreground hover:border-foreground'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <Button
              onClick={handleAddToCart}
              disabled={cartLoading || !selectedVariant?.availableForSale}
              size="lg"
              className="w-full rounded-none tracking-[0.15em] uppercase text-xs py-7 mt-2"
            >
              {cartLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : !selectedVariant?.availableForSale ? (
                'Sold Out'
              ) : (
                'Add to Bag'
              )}
            </Button>

            {/* Trust badges */}
            <div className="flex justify-center gap-8 mt-6 py-4 border-t border-b border-border">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Quality Guaranteed' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-wider uppercase">{label}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            {product.description && (
              <Tabs defaultValue="description" className="mt-8">
                <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 gap-6">
                  <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3 text-xs tracking-[0.15em] uppercase">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3 text-xs tracking-[0.15em] uppercase">
                    Details & Care
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3 text-xs tracking-[0.15em] uppercase">
                    Shipping
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {product.description}
                  </p>
                </TabsContent>
                <TabsContent value="details" className="pt-6">
                  <div className="space-y-3 text-sm text-muted-foreground font-light">
                    <p>• Premium wool-blend fabric</p>
                    <p>• Reversible construction</p>
                    <p>• Contrast panel detailing</p>
                    <p>• Dry clean recommended</p>
                    <p>• Made in India</p>
                  </div>
                </TabsContent>
                <TabsContent value="shipping" className="pt-6">
                  <div className="space-y-3 text-sm text-muted-foreground font-light">
                    <p>Complimentary shipping on orders over ₹5,000.</p>
                    <p>Standard delivery: 5–7 business days.</p>
                    <p>Express delivery: 2–3 business days.</p>
                    <p>30-day return policy. Items must be unworn with tags attached.</p>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
