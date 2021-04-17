import {
  DEFAULT_BLUE,
  DEFAULT_BORDER_COLOR,
  DEFAULT_GREY,
  DEFAULT_PURPLE,
  DEFAULT_WHITE,
} from '../../assets/constants/colors';
import { Card } from '../../components/common/card';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { PrevidenciasRequestData } from './PrevidenciasScene';

export interface PrevidenciasCardProps extends PrevidenciasRequestData {}

export const PrevidenciasCard = ({
  id,
  name,
  type,
  minimumValue,
  tax,
  redemptionTerm,
  profitability,
}: PrevidenciasCardProps) => {
  const { cardTitleStyle, cardSubtitleStyle, middleContainerStyle } = styles;

  return (
    <Card>
      <View style={middleContainerStyle}>
        <Text style={cardTitleStyle}>{name}</Text>
        <Text style={cardSubtitleStyle}>{type}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconImageStyle: { alignSelf: 'center' },

  cardTitleStyle: {
    color: DEFAULT_PURPLE,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardSubtitleStyle: {
    color: DEFAULT_BORDER_COLOR,
    fontFamily: 'ms-regular',
    fontSize: 10,
  },
  middleContainerStyle: { flex: 3, justifyContent: 'center' },
});
