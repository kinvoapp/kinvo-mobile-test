/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useImperativeHandle,
  Dispatch,
  SetStateAction,
} from 'react';
import { View, TouchableOpacity } from 'react-native';

import Like from '../../assets/svgs/like.svg';
import LikeOutline from '../../assets/svgs/like-outline.svg';
import ArrowUp from '../../assets/svgs/arrow-up.svg';
import ArrowDown from '../../assets/svgs/arrow-down.svg';

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
} from './styles';

interface ICardActions {
  id: number;
  title: string;
  ticker: string;
  minValue: number;
  profitability: number;
  favorites(favorite: number): boolean;
}

const CardActions: React.FC<ICardActions> = ({
  id,
  title,
  ticker,
  minValue,
  profitability,
  favorites,
}) => {
  const [like, setLike] = useState<boolean>(false);

  const handleLike = () => {
    if (like === false) {
      setLike(true);
      favorites(id);
    } else {
      setLike(false);
      favorites(id);
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
            <Row>
              <ArrowUp />
              <ProfitabilityNumber>
{' '}
{profitability}%</ProfitabilityNumber>
            </Row>
          ) : (
            <Row>
              <ArrowDown />
              <ProfitabilityNumber colors="#E85D1F">
                {profitability}%
              </ProfitabilityNumber>
            </Row>
          )}
        </ContentPrices>
      </ContainerValues>
    </Container>
  );
};

export default CardActions;
