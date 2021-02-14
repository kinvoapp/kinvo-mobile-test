import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

import Favorite from '../../../assets/favorite.png';
import NoFavorite from '../../../assets/nofavorite.png';

import { Profitability } from '../../../components';
import formatMoney from '../../../utils/formatMoney';
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

interface StockItemProps {
  stock: Stock;
  onFavorite: () => void;
}

const StockItem: React.FC<StockItemProps> = ({ stock, onFavorite }) => {
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
          <MinimumValue>{formatMoney(stock.minimumValue)}</MinimumValue>
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
