import React from 'react';
import ProductList from '../../components/ProductList';
import Search from '../../components/Search';
import TopBar from '../../components/TopBar';

import { Container } from './styles';

const Wallet: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Search />
      <ProductList />
    </Container>
  );
};

export default Wallet;
