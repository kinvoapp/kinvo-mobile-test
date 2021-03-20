import React from 'react';
import {Header} from '../../components/Header';
import {NavigationCard} from '../../components/NavigationCard';
import StocksImg from '../../assets/stocks.svg';
import FundsImg from '../../assets/funds.svg';
import PensionsImg from '../../assets/pensions.svg';
import {Container, SvgContainer} from './styles';

export function Dashboard() {
  return (
    <>
      <Header title={'Desafio'} />
      <Container>
        <NavigationCard
          CardRoute="Stocks"
          CardTitle="Ações"
          CardSubtitle="Nacionais">
          <StocksImg width={28.32} height={28.44} />
        </NavigationCard>

        <NavigationCard
          isNew={true}
          CardRoute="Funds"
          CardTitle="Fundos"
          CardSubtitle="De investimento">
          <FundsImg width={28.32} height={28.44} />
        </NavigationCard>

        <NavigationCard
          CardRoute="Pensions"
          CardTitle="Previdências"
          CardSubtitle="Privadas">
          <PensionsImg width={28.32} height={28.44} />
        </NavigationCard>
      </Container>
    </>
  );
}
