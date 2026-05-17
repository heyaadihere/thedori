import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProductByHandle } from '@/hooks/useProducts';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Loader2, Truck, Shield, Heart, Share2, ChevronDown } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageMagnifier from '@/components/ImageMagnifier';
import type { ShopifyProduct } from '@/lib/shopify';
import { toast } from 'sonner';
import SEO from '@/components/SEO';

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading, error } = useProductByHandle(handle || '');
  const addItem = useCartStore(state => state.addItem);
  const cartLoading = useCartStore(state => state.isLoading);

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
      quantity,
      selectedOptions: selectedVariant.selectedOptions,
    });
    toast.success('Added to bag', { position: 'top-center' });
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description?.slice(0, 300),
    image: images[0]?.node.url,
    sku: selectedVariant?.id,
    brand: { '@type': 'Brand', name: 'Dori' },
    offers: selectedVariant ? {
      '@type': 'Offer',
      price: selectedVariant.price.amount,
      priceCurrency: selectedVariant.price.currencyCode,
      availability: selectedVariant.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `https://thedori.in/product/${handle}`,
    } : undefined,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.title} | Dori`}
        description={(product.description || `Shop ${product.title} from Dori — handcrafted, sustainable activewear.`).slice(0, 160)}
        path={`/product/${handle}`}
        ogType="product"
        jsonLd={productJsonLd}
      />
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-6xl px-6 py-8 lg:py-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-8"
        >
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-foreground transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </motion.nav>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="aspect-[3/4] bg-secondary rounded overflow-hidden relative group">
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

              {/* Image counter badge */}
              {images.length > 1 && (
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-3 font-serif">{product.title}</h1>
            <p className="text-xl text-foreground mb-2">
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground mb-8">Tax included. Shipping calculated at checkout.</p>

            {/* Variant selectors */}
            {options.map(option => {
              const isSizeOption = option.name.toLowerCase() === 'size';
              return (
                <div key={option.name} className="mb-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {option.name}: <span className="text-foreground">{selectedOptions[option.name]}</span>
                    </p>
                    {isSizeOption && (
                      <Link
                        to="/size-guide"
                        className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                      >
                        Size Chart
                      </Link>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map(value => (
                      <button
                        key={value}
                        onClick={() => setSelectedOptions(prev => ({ ...prev, [option.name]: value }))}
                        className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all duration-200 hover:scale-[1.02] ${
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
              );
            })}

            {/* Quantity selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                >
                  −
                </button>
                <span className="px-5 py-2.5 text-sm min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-2">
              <Button
                onClick={handleAddToCart}
                disabled={cartLoading || !selectedVariant?.availableForSale}
                size="lg"
                className="flex-1 rounded-none tracking-[0.15em] uppercase text-xs py-7 hover:scale-[1.01] transition-transform"
              >
                {cartLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : !selectedVariant?.availableForSale ? (
                  'Sold Out'
                ) : (
                  'Add to Bag'
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none py-7 px-4 border-border hover:border-foreground"
                onClick={() => {
                  setIsWishlisted(!isWishlisted);
                  toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist', { position: 'top-center' });
                }}
              >
                <Heart className={`h-4 w-4 transition-all ${isWishlisted ? 'fill-destructive text-destructive scale-110' : ''}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none py-7 px-4 border-border hover:border-foreground"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success('Link copied!', { position: 'top-center' });
                }}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex justify-center gap-8 mt-6 py-4 border-t border-b border-border">
              {[
                { icon: Truck, label: 'Shipping Across India' },
                { icon: Shield, label: 'Quality Guaranteed' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-wider uppercase">{label}</span>
                </div>
              ))}
            </div>

            {/* Collapsible info sections */}
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
                    {getDetailsForProduct(handle).map((line, idx) => (
                      <p key={idx}>• {line}</p>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="shipping" className="pt-6">
                  <div className="space-y-3 text-sm text-muted-foreground font-light">
                    <p>Easy exchanges within 7 days of delivery for eligible products.</p>
                    <p>Refunds applicable within 72 hours of delivery for damaged, defective, incorrect, or significantly mismatched items.</p>
                    <p>Complimentary reverse pickup on first-order exchanges across India, on damaged or incorrect items, and on eligible orders above ₹10,000. A ₹249 reverse logistics fee may apply for preference-based requests.</p>
                    <p>Prefer Dori Credit over a refund? Receive an additional 5% value instantly.</p>
                    <p>Items must be unused, with all original tags and packaging intact. Read our full <a href="/shipping-returns" className="underline hover:text-foreground">Returns &amp; Refund Policy</a>.</p>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </motion.div>
        </div>

        {/* You may also like */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 pt-12 border-t border-border"
        >
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-3">Complete the Look</p>
            <h2 className="text-2xl md:text-3xl font-medium font-serif">You May Also Like</h2>
            <div className="luxury-divider w-16 mx-auto mt-5" />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
