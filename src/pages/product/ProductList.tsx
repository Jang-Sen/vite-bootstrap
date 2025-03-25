import React, { useState } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProductList.ts';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
    <Container className={'my-5'}>
      <h2>제품</h2>
      <Row>
        {products?.data?.map((product, index) => (
          <Col md={4} key={index} className={'mb-4'}>
            <Card>
              <Card.Img
                variant={'top'}
                src={
                  product.productImg
                    ? product.productImg
                    : 'https://i.namu.wiki/i/M9DUOeJIn3If7FU7QlF6mfB2SEF3ecNWrQk0RiC1b6w59SLthwswxt2sFO3_86gyKVEn-DknunO-6pxJcR44tg.webp'
                }
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>{product.price}</strong>
                </Card.Text>
                <Link
                  to={`/product/${product.id}`}
                  className={'btn btn-primary'}
                >
                  상세보기
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
