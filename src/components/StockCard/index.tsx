import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Ticker } from '../utils/Ticker';
import { CurrencyMask } from '../utils/CurrencyMask';
import { Profitability } from '../utils/Profitability';

import { Content } from './styles';
import {
  Data,
  DataAside,
  Info,
  Name,
  TextData
} from '../../styles/card.styles';

interface StockItensProps {
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
  handleFavoriteButton(): any;
}

export function StockCard({
  name,
  ticker,
  minimumValue,
  profitability,
  isFavorite,
  handleFavoriteButton,
}: StockItensProps) {
  return (
    <Content>
      <Info>
        <View>
          <Name>
            {name}
          </Name>
          <Ticker ticker={ticker} />
        </View>
        <View>
          <TouchableOpacity onPress={handleFavoriteButton}>
            {isFavorite ? (
              <Ionicons name="heart" size={32} color="#800080" />
            ) : (
              <Ionicons name="heart-outline" size={32} color="#800080" />
            )}
          </TouchableOpacity>
        </View>
      </Info>

      <Data>
        <DataAside>
          <Text>Valor mínimo:</Text>
          <Text>Rentabilidade:</Text>
        </DataAside>
        <DataAside>
          <TextData><CurrencyMask value={minimumValue} /></TextData>
          <TextData><Profitability value={profitability} /></TextData>
        </DataAside>
      </Data>
    </Content>
  );
}