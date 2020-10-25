import React from 'react';
import ProductList from '../../components/ProductList';
import TopBar from '../../components/TopBar';

import { Container } from './styles';

const Wallet: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <ProductList />
    </Container>
  );
};

export default Wallet;
