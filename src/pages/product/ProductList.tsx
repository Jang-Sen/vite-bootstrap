import React, { useState } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProductList.ts';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [sort, setSort] = useState('createdAt');
  const [order, setOrder] = useState('DESC');
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);

  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useFetchProducts(sort, order, page, take);

  return (
    <div>
      {products?.data?.map((product, index) => (
        <div key={index}>
          <Link to={`/product/${product.id}`}>
            <h1>{product.name}</h1>
          </Link>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
