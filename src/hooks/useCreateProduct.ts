import { AxiosResponse } from 'axios';
import { ProductInput } from '../types/product.types.ts';
import { client } from '../api/client.ts';
import {
  UseBaseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const createProduct = async (
  productInput: ProductInput
): Promise<AxiosResponse<ProductInput, any>> => {
  return await client.post<ProductInput>('/product/create', productInput);
};

export const useCreateProduct = (): UseBaseMutationResult<
  AxiosResponse<ProductInput, any>,
  unknown,
  ProductInput,
  unknown
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (productInput: ProductInput) => {
      await createProduct(productInput);
    },
    onSuccess: () => {
      alert('생성 완료');
      queryClient.invalidateQueries(['product']);

      navigate(-1);
    },
    onError: (error: Error) => {
      console.error('Create Error', error);
      alert('생성 중 문제가 발생했습니다. 다시 시도해주세요.');
    },
  });
};
