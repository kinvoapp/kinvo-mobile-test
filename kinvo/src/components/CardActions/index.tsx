/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useImperativeHandle,
  Dispatch,
  SetStateAction,
  ReactNode,
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

import { IStock } from '../../store/modules/types';

interface IStockCard {
  item: IStock;
  handleIsFavorite: (stock: IStock) => void;
}

const CardActions: React.FC<IStockCard> = ({ item, handleIsFavorite }) => {
  const handleSetFavorite = (item: IStock) => {
    console.log(item, 'ITEM');
    if (item.isFavorite === false) {
      handleIsFavorite({ ...item, isFavorite: true });
    }
    // if (item.isFavorite) {
    //   handleIsFavorite({ ...item, isFavorite: false });
    // } else {
    //   handleIsFavorite({ ...item, isFavorite: true });
    // }
  };

  const renderFavorite = (item: IStock): ReactNode => (
    <TouchableOpacity onPress={() => handleSetFavorite(item)}>
      {item.isFavorite ? (
        <Like height="30" width="30" />
      ) : (
        <LikeOutline height="30" width="30" />
      )}
    </TouchableOpacity>
  );

  return (
    <Container>
      <Header>
        <View>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Title>
          <Ticker>{item.ticker}</Ticker>
        </View>

        {renderFavorite(item)}
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
            {item.minimumValue}
          </Price>

          {item.profitability > 0 ? (
            <Row>
              <ArrowUp />
              <ProfitabilityNumber>
{' '}
{item.profitability}%</ProfitabilityNumber>
            </Row>
          ) : (
            <Row>
              <ArrowDown />
              <ProfitabilityNumber colors="#E85D1F">
                {item.profitability}
%
</ProfitabilityNumber>
            </Row>
          )}
        </ContentPrices>
      </ContainerValues>
    </Container>
  );
};

export default CardActions;
