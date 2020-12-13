/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Like from '../../assets/svgs/like.svg';
import LikeOutline from '../../assets/svgs/like-outline.svg';

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
} from './styles';

interface ICardActions {
  title: string;
  ticker: string;
  minValue: number;
  profitability: number;
}

const CardActions: React.FC<ICardActions> = ({
  title,
  ticker,
  minValue,
  profitability,
}) => {
  const [like, setLike] = useState<boolean>(false);

  const handleLike = () => {
    if (like === false) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <Container>
      <Header>
        <View>
          <Title>{title}</Title>
          <Ticker>{ticker}</Ticker>
        </View>

        <TouchableOpacity onPress={handleLike}>
          {like ? (
            <Like height="30" width="30" />
          ) : (
            <LikeOutline height="30" width="30" />
          )}
        </TouchableOpacity>
      </Header>

      <Body>
        <Divider />
      </Body>

      <ContainerValues>
        <ContentPrices>
          <ValueMin>Valor mínimo:</ValueMin>
          <Profitability>Rentabilidade:</Profitability>
        </ContentPrices>

        <ContentPrices>
          <Price>
            R$
            {minValue}
          </Price>
          {profitability > 0 ? (
            <ProfitabilityNumber>{profitability}</ProfitabilityNumber>
          ) : (
            <ProfitabilityNumber colors="#E85D1F">
              {profitability}
            </ProfitabilityNumber>
          )}
        </ContentPrices>
      </ContainerValues>
    </Container>
  );
};

export default CardActions;
