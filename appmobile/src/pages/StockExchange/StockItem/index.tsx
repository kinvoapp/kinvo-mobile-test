import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Favorite from '../../../assets/favorite.png';
import NoFavorite from '../../../assets/nofavorite.png';
import { Profitability } from '../../../components';

import Stock from '../../../@types/stock';

import {
  Container,
  TopContent,
  Title,
  Ticker,
  BottomContent,
  MinimumValue,
  Minimum,
  TextValue,
  ProfitabilityContent,
} from './styles';

interface CardItemProps {
  stock: Stock;
  onFavorite: () => void;
}

const StockItem: React.FC<CardItemProps> = ({ stock, onFavorite }) => {
  function formatPrice(price: number): string {
    const priceFormarted = price.toFixed(2).replace('.', ',');

    return `R$ ${priceFormarted}`;
  }

  return (
    <Container>
      <TopContent>
        <View>
          <Title>{stock.name}</Title>
          <Ticker>{stock.ticker}</Ticker>
        </View>
        <TouchableOpacity onPress={onFavorite}>
          <Image source={stock.favorite ? Favorite : NoFavorite} />
        </TouchableOpacity>
      </TopContent>

      <BottomContent>
        <Minimum>
          <TextValue>Valor mínimo: </TextValue>
          <MinimumValue>{formatPrice(stock.minimumValue)}</MinimumValue>
        </Minimum>
        <ProfitabilityContent>
          <TextValue>Rentabilidade:</TextValue>
          <Profitability value={stock.profitability} />
        </ProfitabilityContent>
      </BottomContent>
    </Container>
  );
};

export default StockItem;
