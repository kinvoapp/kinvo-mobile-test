import React, {useEffect} from 'react';
import {Header} from '../../components/Header';
import {StockCard} from '../../components/StockCard';
import {Container} from './styles';

export function Stocks() {
  useEffect(() => {}, []);

  return (
    <>
      <Header hasGoBackButton={true} title={'Ações'} />
      <Container>
        <StockCard />
        <StockCard />
      </Container>
    </>
  );
}
