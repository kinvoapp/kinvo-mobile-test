import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DEFAULT_BLUE, DEFAULT_WHITE, FECHADO_COLOR_BG, FECHADO_COLOR_TEXT } from '../../assets/constants/colors';

const fechadoStyle = {
  backgroundColor: FECHADO_COLOR_BG,
  textColor: FECHADO_COLOR_TEXT,
};

const novoStyle = {
  backgroundColor: DEFAULT_BLUE,
  textColor: DEFAULT_WHITE,
};

export const Badge = ({ type }: { type: string }) => {
  const { badgeContainerStyle, badgeTextStyle } = styles;
  const { backgroundColor, textColor } = type === 'Novo' ? novoStyle : fechadoStyle;

  return (
    <>
      {type !== 'Comum' ? (
        <View style={[badgeContainerStyle, { backgroundColor: backgroundColor }]}>
          <Text style={[badgeTextStyle, { color: textColor }]}>{type}</Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  badgeContainerStyle: {
    flex: 0,
    height: 20,
    width: 65,
    paddingHorizontal: 10,
    backgroundColor: DEFAULT_BLUE,
    justifyContent: 'center',
    borderRadius: 30,
  },
  badgeTextStyle: { fontFamily: 'ms-medium', fontSize: 10, alignSelf: 'center' },
});
