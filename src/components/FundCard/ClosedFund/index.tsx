import { View } from 'react-native';

import { Ticker } from '../../utils/Ticker';
import { CurrencyMask } from '../../utils/CurrencyMask';
import { Profitability } from '../../utils/Profitability';

import { FontAwesome } from '@expo/vector-icons';

import {
  Data,
  DataAside,
  Info,
  Name,
  InfoAside,
  ClosedText,
  Container
} from './styles';
import { Status } from '../styles';

interface FundProps {
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}


export function ClosedFund({
  name,
  type,
  minimumValue,
  rating,
  profitability,
  status,
}: FundProps) {
  return (

    <Container>
      <Info>
        <InfoAside>
          <Name>
            {name}
          </Name>
          <Ticker ticker={type} />
        </InfoAside>
        <InfoAside>
          {status === 2 && <Status closed>Fechado</Status>}
        </InfoAside>
      </Info>

      <Data>
        <DataAside>
          <ClosedText>Classificação:</ClosedText>
          <ClosedText>Valor mínimo:</ClosedText>
          <ClosedText>Rentabilidade:</ClosedText>
        </DataAside>
        <DataAside>
          <ClosedText>
            {Array.from({ length: rating }).map((_, index) => (
              <FontAwesome name="star" size={16} color='#627179' key={index} />
            ))}
            {Array.from({ length: 5 - rating }).map((_, index) => (
              <FontAwesome name="star-o" size={16} color='#627179' key={index} />
            ))}

          </ClosedText>
          <View><CurrencyMask value={minimumValue} /></View>
          <View><Profitability value={profitability} /></View>
        </DataAside>
      </Data>
    </Container>

  );
}





