import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { PrevidenciasItemRow } from './PrevidenciasItemRow';
import { PrevidenciasRequestData } from '../constants/types';
import { Card } from '../../common/Card';
import { DEFAULT_TEXT_COLOR, NAV_BORDER_COLOR } from '../../../assets/constants/colors';

export interface PrevidenciasCardProps extends PrevidenciasRequestData {}

export const PrevidenciasCard = ({
  name,
  type,
  minimumValue,
  tax,
  redemptionTerm,
  profitability,
}: PrevidenciasCardProps) => {
  const { cardTitleStyle, divisorStyle, cardSubtitleStyle, containerStyle, titleContainerStyle } = styles;

  return (
    <Card height={218}>
      <View style={containerStyle}>
        <View style={titleContainerStyle}>
          <Text style={cardTitleStyle}>{name}</Text>
          <Text style={cardSubtitleStyle}>{type}</Text>
        </View>
        <View style={divisorStyle} />
        <PrevidenciasItemRow label={'Valor mínimo'} value={minimumValue} format={'BRL'} />
        <PrevidenciasItemRow label={'Taxa'} value={tax} format={'%'} />
        <PrevidenciasItemRow label={'Resgate'} value={redemptionTerm} format={'D'} />
        <PrevidenciasItemRow label={'Rentabilidade'} value={profitability} format={'profit'} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconImageStyle: { alignSelf: 'center' },
  titleContainerStyle: {
    marginBottom: 10,
  },
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
