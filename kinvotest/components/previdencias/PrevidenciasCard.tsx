import {
  DEFAULT_BLUE,
  DEFAULT_BORDER_COLOR,
  DEFAULT_GREY,
  DEFAULT_PURPLE,
  DEFAULT_TEXT_COLOR,
  DEFAULT_WHITE,
  NAV_BORDER_COLOR,
  NEGATIVE_COLOR,
  POSITIVE_COLOR,
} from '../../assets/constants/colors';
import { Card } from '../../components/common/card';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { PrevidenciasRequestData } from './PrevidenciasScene';
import { getFormattedValue } from '../../assets/utils/utils';

export interface PrevidenciasCardProps extends PrevidenciasRequestData {}

const previdenciaItemRow = ({ label, value, format }: { label: string; value: number; format: string }) => {
  const { labelStyle, cardSubtitleStyle } = styles;
  let valueColor = DEFAULT_TEXT_COLOR;

  const formattedValue = getFormattedValue({ value, format });
  if (format === 'profit') valueColor = value > 0 ? POSITIVE_COLOR : NEGATIVE_COLOR;

  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text style={labelStyle}>{label}:</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
        <Text style={{ ...cardSubtitleStyle, color: valueColor }}>{formattedValue}</Text>
      </View>
    </View>
  );
};

export const PrevidenciasCard = ({
  id,
  name,
  type,
  minimumValue,
  tax,
  redemptionTerm,
  profitability,
}: PrevidenciasCardProps) => {
  const { cardTitleStyle, divisorStyle, cardSubtitleStyle, containerStyle } = styles;

  return (
    <Card height={218}>
      <View style={containerStyle}>
        <View>
          <Text style={cardTitleStyle}>{name}</Text>
          <Text style={cardSubtitleStyle}>{type}</Text>
        </View>
        <View style={divisorStyle} />

        {previdenciaItemRow({ label: 'Valor mínimo', value: minimumValue, format: 'BRL' })}
        {previdenciaItemRow({ label: 'Taxa', value: tax, format: '%' })}
        {previdenciaItemRow({ label: 'Resgate', value: redemptionTerm, format: 'D' })}
        {previdenciaItemRow({ label: 'Rentabilidade', value: profitability, format: 'profit' })}

        {/* <View>
          <Text style={labelStyle}>Taxa:</Text>
          <Text style={cardSubtitleStyle}>{tax}</Text>
        </View>

        <Text style={cardSubtitleStyle}>{redemptionTerm}</Text>
        <Text style={cardSubtitleStyle}>{profitability}</Text> */}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconImageStyle: { alignSelf: 'center' },
  cardTitleStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 3,
  },
  divisorStyle: {
    paddingHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: NAV_BORDER_COLOR,
    borderBottomWidth: 1,
  },
  cardSubtitleStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-semibold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  labelStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-medium',
    fontSize: 10,
  },
  containerStyle: { flex: 3, justifyContent: 'center', padding: 15 },
});
