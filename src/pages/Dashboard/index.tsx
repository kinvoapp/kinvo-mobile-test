import React from 'react';
import {Header} from '../../components/Header';
import {NavigationCard} from '../../components/NavigationCard';
import stocksImg from '../../assets/stocks.svg';
import fundsImg from '../../assets/funds.svg';
import pensionsImg from '../../assets/stocks.svg';
import {Container} from './styles';

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <NavigationCard cardImage={stocksImg} />
        <NavigationCard cardImage={fundsImg} />
        <NavigationCard cardImage={pensionsImg} />
      </Container>
    </>
  );
}
