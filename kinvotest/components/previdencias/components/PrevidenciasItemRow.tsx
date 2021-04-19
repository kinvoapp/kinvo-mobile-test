import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { DEFAULT_TEXT_COLOR, NEGATIVE_COLOR, POSITIVE_COLOR } from '../../../assets/constants/colors';
import { getFormattedValue } from '../../../assets/utils/utils';

export const PrevidenciasItemRow = ({ label, value, format }: { label: string; value: number; format: string }) => {
  const {
    labelStyle,
    cardSubtitleStyle,
    profitIconContainerStyle,
    iconStyle,
    titleContainerStyle,
    containerStyle,
    rightContainerStyle,
  } = styles;
  let valueColor = { color: DEFAULT_TEXT_COLOR, icon: '' };

  //obtém o formato de exibição correto para cada valor
  const formattedValue = getFormattedValue({ value, format });
  //Checa a exibição no caso de "profit"
  const showProfit = format === 'profit';

  // monta objeto para alterar cores e determinar icone no caso de valor positivo ou negativo
  if (showProfit)
    valueColor = value > 0 ? { color: POSITIVE_COLOR, icon: 'arrowup' } : { color: NEGATIVE_COLOR, icon: 'arrowdown' };

  return (
    <View style={containerStyle}>
      <View style={titleContainerStyle}>
        <View>
          <Text style={labelStyle}>{label}:</Text>
        </View>
      </View>
      <View style={rightContainerStyle}>
        <View style={profitIconContainerStyle}>
          {showProfit ? (
            <Icon type={'antdesign'} size={12} color={valueColor.color} name={valueColor.icon} style={iconStyle} />
          ) : null}
          <Text style={{ ...cardSubtitleStyle, color: valueColor.color }}>{formattedValue}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconImageStyle: { alignSelf: 'center' },
  titleContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitleStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 3,
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
  containerStyle: { flexDirection: 'row', flex: 1 },
  profitIconContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    marginRight: 3,
  },
  rightContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
