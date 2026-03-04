import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductByHandle } from '@/lib/shopify';

export function useProducts(first = 20, query?: string) {
  return useQuery({
    queryKey: ['products', first, query],
    queryFn: () => fetchProducts(first, query),
  });
}

export function useProductByHandle(handle: string) {
  return useQuery({
    queryKey: ['product', handle],
    queryFn: () => fetchProductByHandle(handle),
    enabled: !!handle,
  });
}
