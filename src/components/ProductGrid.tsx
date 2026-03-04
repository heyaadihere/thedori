import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';
import type { ShopifyProduct } from '@/lib/shopify';

const ProductCard = ({ product }: { product: ShopifyProduct }) => {
  const { title, handle, priceRange, images } = product.node;
  const image = images.edges[0]?.node;
  const price = priceRange.minVariantPrice;

  return (
    <Link to={`/product/${handle}`} className="group block">
      <div className="aspect-[3/4] bg-secondary rounded overflow-hidden mb-4">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span className="text-xs tracking-wider uppercase">No image</span>
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium tracking-wide">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">
        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
      </p>
    </Link>
  );
};

const ProductGrid = () => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-normal">Our Pieces</h2>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-[3/4] w-full rounded mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-sm text-muted-foreground">Unable to load products. Please try again later.</p>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground text-sm">No products found</p>
            <p className="text-xs text-muted-foreground mt-2">Products will appear here once added to your store.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
