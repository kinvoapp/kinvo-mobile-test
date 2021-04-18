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
  const { cardTitleStyle, cardSubtitleStyle, containerStyle } = styles;

  return (
    <Card customContainerProps={{ height: 218 }}>
      <View style={containerStyle}>
        <View>
          <Text style={cardTitleStyle}>{name}</Text>
          <Text></Text>
        </View>
        <Text style={cardSubtitleStyle}>{type}</Text>
        <Text style={cardSubtitleStyle}>{minimumValue}</Text>
        <Text style={cardSubtitleStyle}>{tax}</Text>
        <Text style={cardSubtitleStyle}>{redemptionTerm}</Text>
        <Text style={cardSubtitleStyle}>{profitability}</Text>
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
  },
  cardSubtitleStyle: {
    color: DEFAULT_BORDER_COLOR,
    fontFamily: 'ms-regular',
    fontSize: 10,
    padding: 15,
  },
  containerStyle: { flex: 3, justifyContent: 'center' },
});
