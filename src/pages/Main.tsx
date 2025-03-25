import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Main: React.FC = () => {
  return (
    <Container className="my-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>스타벅스 JS에 오셔서 감사합니다.</Card.Title>
          <Card.Text>최적의 가격으로 최고의 상품을 골라가세요!</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main;
