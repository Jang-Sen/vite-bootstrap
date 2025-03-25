import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/useFetchProduct.ts';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ProductDetail: React.FC = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
    isError,
  } = useFetchProduct(productId);

  console.log(product);

  return (
    <Container className={'my-5'}>
      <Row className="align-items-center">
        <Col md={6}>
          <Card.Img
            variant={'top'}
            src={
              product?.productImg
                ? product.productImg
                : 'https://i.namu.wiki/i/M9DUOeJIn3If7FU7QlF6mfB2SEF3ecNWrQk0RiC1b6w59SLthwswxt2sFO3_86gyKVEn-DknunO-6pxJcR44tg.webp'
            }
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product?.name}</Card.Title>
              <Card.Text>{product?.description}</Card.Text>
              <Card.Text>
                <strong>{product?.price}</strong>
              </Card.Text>
              <Card.Text>{product?.category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
