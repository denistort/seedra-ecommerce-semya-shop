import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { ProductCartComponent } from '../product-cart';

const ProductGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;
export const OurProductList: Component = () => {
  return (
    <ProductGrid>
      <ProductCartComponent></ProductCartComponent>
      <ProductCartComponent></ProductCartComponent>
      <ProductCartComponent></ProductCartComponent>
      <ProductCartComponent></ProductCartComponent>
      <ProductCartComponent></ProductCartComponent>
      <ProductCartComponent></ProductCartComponent>
    </ProductGrid>
  );
};
