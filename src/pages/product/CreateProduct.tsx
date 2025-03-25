import React from 'react';
import { useCreateProduct } from '../../hooks/useCreateProduct.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductInput } from '../../types/product.types.ts';
import { Button, Container, Form } from 'react-bootstrap';

const CreateProduct: React.FC = () => {
  const { mutate } = useCreateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductInput>({
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      category: '',
      productImg: [],
    },
  });

  const submitHandler: SubmitHandler<ProductInput> = () => {
    mutate(setValue);
  };

  return (
    <Container className="my-5">
      <h2>제품 생성</h2>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>제품명</Form.Label>
          <Form.Control
            {...register('name', { required: 'Product name is required' })}
            type="text"
            placeholder="Enter product name"
            isInvalid={!!errors.name}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </Form.Group>

        <Form.Group controlId="formPrice" className="mb-3">
          <Form.Label>제품 가격</Form.Label>
          <Form.Control
            {...register('price', {
              required: 'Price is required',
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Enter price"
            isInvalid={!!errors.price}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>제품 설명</Form.Label>
          <Form.Control
            {...register('description', {
              required: 'Description is required',
            })}
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            isInvalid={!!errors.description}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="formCategory" className="mb-3">
          <Form.Label>제품 종류</Form.Label>
          <Form.Control
            {...register('category', { required: 'Category is required' })}
            type="text"
            placeholder="Enter category"
            isInvalid={!!errors.category}
          />
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="formImage" className="mb-3">
          <Form.Label>이미지</Form.Label>
          <Form.Control
            {...register('productImg')}
            type="file"
            multiple
            isInvalid={!!errors.productImg}
          />
          {errors.productImg && (
            <p className="text-danger">{errors.productImg.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          생성하기
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProduct;
