import React from 'react';
import { View } from 'react-native';

import ArrowUp from '../../assets/svgs/arrow-up.svg';
import NewTag from '../../assets/svgs/new.svg';

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
  ContentTag,
} from './styles';

interface IData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

const CardForecasts: React.FC<IData> = ({
  name,
  type,
  profitability,
  redemptionTerm,
  minimumValue,
  tax,
}) => {
  return (
    <Container>
      <Header>
        <View>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Title>
          <Ticker>{type}</Ticker>
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
          <Price>
            R$
            {minimumValue}
          </Price>
          <Price>
{tax}%</Price>
          <Price>
            D+
            {redemptionTerm}
          </Price>

          <Row>
            <ArrowUp />
            <ProfitabilityNumber>
{profitability}%</ProfitabilityNumber>
          </Row>
        </ContentTitles>
      </ContainerValues>
    </Container>
  );
};

export default CardForecasts;
