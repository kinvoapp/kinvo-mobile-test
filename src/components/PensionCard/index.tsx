import { Text, View } from 'react-native';

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
import { Taxes } from '../utils/Taxes';

interface PensionsProps {
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

export function PensionCard({ name, type, minimumValue, tax, redemptionTerm, profitability }: PensionsProps) {
  return (
    <Content>
      <Info>
        <View>
          <Name>
            {name}
          </Name>
          <Ticker ticker={type} />
        </View>
        <View>

        </View>
      </Info>

      <Data>
        <DataAside>
          <Text>Valor mínimo:</Text>
          <Text>Taxa:</Text>
          <Text>Resgate:</Text>
          <Text>Rentabilidade:</Text>
        </DataAside>
        <DataAside>
          <TextData><CurrencyMask value={minimumValue} /></TextData>
          <TextData><Taxes value={tax} /></TextData>
          <TextData>D+ {redemptionTerm} </TextData>
          <View><Profitability value={profitability} /></View>
        </DataAside>
      </Data>
    </Content>
  );
}
