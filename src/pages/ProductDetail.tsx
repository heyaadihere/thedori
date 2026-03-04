import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProductByHandle } from '@/hooks/useProducts';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Loader2 } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="aspect-[3/4] w-full" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
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

  // Initialize selected options if empty
  if (Object.keys(selectedOptions).length === 0 && options.length > 0) {
    const defaults: Record<string, string> = {};
    options.forEach(o => { defaults[o.name] = o.values[0]; });
    // Will be set on first render
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
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-secondary rounded overflow-hidden">
              {images[selectedImageIndex]?.node ? (
                <img
                  src={images[selectedImageIndex].node.url}
                  alt={images[selectedImageIndex].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">No image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-16 h-20 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                      i === selectedImageIndex ? 'border-foreground' : 'border-transparent'
                    }`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-normal mb-2">{product.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
            </p>

            {/* Variant selectors */}
            {options.map(option => (
              <div key={option.name} className="mb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">{option.name}</p>
                <div className="flex flex-wrap gap-2">
                  {option.values.map(value => (
                    <button
                      key={value}
                      onClick={() => setSelectedOptions(prev => ({ ...prev, [option.name]: value }))}
                      className={`px-4 py-2 text-xs tracking-wider uppercase border rounded transition-colors ${
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
              className="w-full rounded-none tracking-[0.15em] uppercase text-xs py-6 mt-2"
            >
              {cartLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : !selectedVariant?.availableForSale ? (
                'Sold Out'
              ) : (
                'Add to Bag'
              )}
            </Button>

            {product.description && (
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">Description</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
