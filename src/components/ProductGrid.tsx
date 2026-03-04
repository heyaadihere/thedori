import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';
import type { ShopifyProduct } from '@/lib/shopify';

const ProductCard = ({ product, index }: { product: ShopifyProduct; index: number }) => {
  const { title, handle, priceRange, images } = product.node;
  const image = images.edges[0]?.node;
  const price = priceRange.minVariantPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/product/${handle}`} className="group block">
        <div className="aspect-[3/4] bg-secondary rounded overflow-hidden mb-4 relative">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-xs tracking-wider uppercase">No image</span>
            </div>
          )}
          {/* Quick view overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-none">
              View Details
            </span>
          </div>
        </div>
        <h3 className="text-sm font-medium tracking-wide">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
        </p>
      </Link>
    </motion.div>
  );
};

const ProductGrid = () => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-normal">Our Pieces</h2>
        </motion.div>

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
            {products.map((product, i) => (
              <ProductCard key={product.node.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-border rounded-lg"
          >
            <p className="text-muted-foreground text-sm">No products found</p>
            <p className="text-xs text-muted-foreground mt-2">Products will appear here once added to your store.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
