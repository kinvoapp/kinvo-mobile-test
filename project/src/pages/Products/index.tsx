import React from 'react';
import ProductList from '../../components/ProductList';

import { Container } from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      <ProductList />
    </Container>
  );
};

export default Products;
