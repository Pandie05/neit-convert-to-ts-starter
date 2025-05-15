import { useFetch } from '../useFetch';

export const useFetchProduct = (productId: string) => {
  return useFetch(`/products/${productId}`);
};
