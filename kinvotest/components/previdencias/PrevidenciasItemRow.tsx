import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { DEFAULT_TEXT_COLOR, NEGATIVE_COLOR, POSITIVE_COLOR } from '../../assets/constants/colors';
import { getFormattedValue } from '../../assets/utils/utils';

export const PrevidenciasItemRow = ({ label, value, format }: { label: string; value: number; format: string }) => {
  const { labelStyle, cardSubtitleStyle } = styles;
  let valueColor = { color: DEFAULT_TEXT_COLOR, icon: '' };

  const formattedValue = getFormattedValue({ value, format });
  if (format === 'profit')
    valueColor = value > 0 ? { color: POSITIVE_COLOR, icon: 'arrowup' } : { color: NEGATIVE_COLOR, icon: 'arrowdown' };

  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View>
          <Text style={labelStyle}>{label}:</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {format === 'profit' ? (
            <Icon
              type={'antdesign'}
              size={12}
              color={valueColor.color}
              name={valueColor.icon}
              style={{ marginRight: 3 }}
            />
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
    marginBottom: 10,
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
  containerStyle: { flex: 3, justifyContent: 'center', padding: 15 },
});
