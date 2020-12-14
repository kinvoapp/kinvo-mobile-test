import React from 'react';
import { View } from 'react-native';

import ArrowUp from '../../assets/svgs/arrow-up.svg';

import {
  Container,
  Header,
  Title,
  Ticker,
  Divider,
  Body,
  ContentPrices,
  Profitability,
  ValueMin,
  ContainerValues,
  Price,
  ProfitabilityNumber,
  Row,
  ContentTitles,
} from './styles';

const CardForecasts: React.FC = () => {
  return (
    <Container>
      <Header>
        <View>
          <Title>Alaska Prev</Title>
          <Ticker>MULTIMERCADOS</Ticker>
        </View>
      </Header>

      <Body>
        <Divider />
      </Body>

      <ContainerValues>
        <ContentPrices>
          <ValueMin>Valor mínimo:</ValueMin>
          <Profitability>Rentabilidade:</Profitability>
          <Profitability>Taxa:</Profitability>
          <Profitability>Resgate:</Profitability>
        </ContentPrices>

        <ContentTitles>
          <Price>R$ 1.000</Price>
          <Price>2,00%</Price>
          <Price>D+ 10</Price>

          <Row>
            <ArrowUp />
            <ProfitabilityNumber>27%</ProfitabilityNumber>
          </Row>
        </ContentTitles>
      </ContainerValues>
    </Container>
  );
};

export default CardForecasts;
