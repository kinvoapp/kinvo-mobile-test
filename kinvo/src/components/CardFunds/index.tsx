import React from 'react';
import { View } from 'react-native';

import ArrowUp from '../../assets/svgs/arrow-up.svg';
import ArrowDown from '../../assets/svgs/arrow-down.svg';
import Stars from '../../assets/svgs/stars.svg';

import {
  Container,
  Header,
  Title,
  SubTitle,
  ContentTag,
  Divider,
  Body,
  ContainerValues,
  ContentPrices,
  ValueMin,
  Price,
  Profitability,
  ProfitabilityNumber,
  Row,
  ContentTitles,
} from './styles';

import NewTag from '../../assets/svgs/new.svg';

const CardFunds: React.FC = () => {
  return (
    <Container>
      <Header>
        <View>
          <Title>Alaska Black</Title>
          <SubTitle>MULTIMERCADOS</SubTitle>
        </View>

        <ContentTag>
          <NewTag />
        </ContentTag>
      </Header>

      <Body>
        <Divider />
      </Body>

      <ContainerValues>
        <ContentTitles>
          <ValueMin>Classificação:</ValueMin>
          <ValueMin>Valor mínimo:</ValueMin>
          <Profitability>Rentabilidade:</Profitability>
        </ContentTitles>

        <ContentPrices>
          <Stars />
          <Price>R$24,17</Price>

          <Row>
            <ArrowUp />
            <ProfitabilityNumber>27%</ProfitabilityNumber>
          </Row>
        </ContentPrices>
      </ContainerValues>
    </Container>
  );
};

export default CardFunds;
