import React from 'react';
import { View } from 'react-native';

import Pension from '../../../@types/pension';
import { Profitability } from '../../../components';
import { formatMoneyLocale } from '../../../utils/formatMoneyLocale';
import reduceWords from '../../../utils/reduceWords';
import {
  Container,
  TopContent,
  Title,
  Type,
  BottomContent,
  MinimumValue,
  TextValue,
  Space,
  TextDefault,
} from './styles';

interface PensionItemProps {
  pension: Pension;
}

const PensionItem: React.FC<PensionItemProps> = ({ pension }) => {
  const tax = `${pension.tax.toPrecision(3).replace('.', ',')}%`;

  return (
    <Container>
      <TopContent>
        <View>
          <Title>{reduceWords(pension.name)}</Title>
          <Type>{pension.type}</Type>
        </View>
      </TopContent>

      <BottomContent>
        <Space>
          <TextValue>Valor mínimo:</TextValue>
          <MinimumValue>{formatMoneyLocale(pension.minimumValue)}</MinimumValue>
        </Space>
        <Space>
          <TextValue>Taxa:</TextValue>
          <TextDefault>{tax}</TextDefault>
        </Space>
        <Space>
          <TextValue>Resgate:</TextValue>
          <TextDefault>
            D+
            {pension.redemptionTerm}
          </TextDefault>
        </Space>
        <Space>
          <TextValue>Rentabilidade:</TextValue>
          <Profitability value={pension.profitability} />
        </Space>
      </BottomContent>
    </Container>
  );
};

export default React.memo(PensionItem);
