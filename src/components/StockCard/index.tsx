import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

interface StockItensProps {
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
  handleFavoriteButton(): any;
}
import {
  Container,
  Data,
  DataAside,
  Info,
  Name,
  Ticker,
} from './styles';
import { Profitability } from '../Profitability';
import { CurrencyMask } from '../CurrencyMask';
export function StockCard({
  name,
  ticker,
  minimumValue,
  profitability,
  isFavorite,
  handleFavoriteButton,
}: StockItensProps) {

  return (
    <Container>
      <Info>
        <View>
          <Name>
            {name}
          </Name>
          <Ticker>
            {ticker}
          </Ticker>
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
          <View><CurrencyMask value={minimumValue} /></View>
          <View><Profitability value={profitability} /></View>
        </DataAside>
      </Data>
    </Container>
  );
}