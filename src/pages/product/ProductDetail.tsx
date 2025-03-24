import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/useFetchProduct.ts';

const ProductDetail: React.FC = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
    isError,
  } = useFetchProduct(productId);

  console.log(product);

  return <div>detail</div>;
};

export default ProductDetail;
