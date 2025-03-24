import { AxiosResponse } from 'axios';
import { ProductItem } from '../types/product.types.ts';
import { client } from '../api/client.ts';
import { QueryObserverResult, useQuery } from '@tanstack/react-query';

const fetchProducts = async (
  sort: string,
  order: string,
  page: number,
  take: number
): Promise<AxiosResponse<ProductItem[], any>> => {
  return await client.get<ProductItem[], any>(
    `/product/all?sort=${sort}&order=${order}&page=${page}&take=${take}`
  );
};

export const useFetchProducts = (
  sort: string,
  order: string,
  page: number,
  take: number
): QueryObserverResult<ProductItem[], any> => {
  return useQuery<ProductItem[], any>({
    queryKey: ['product', sort, order, page, take],
    queryFn: async () => {
      const { data } = await fetchProducts(sort, order, page, take);
      
      return data.body;
    },
  });
};
