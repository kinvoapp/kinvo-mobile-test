import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DEFAULT_TEXT_COLOR } from '../../assets/constants/colors';

export const EmptyListComponent = ({ text }: { text: string }) => {
  const { textStyle, containerStyle } = emptyListStyles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const emptyListStyles = StyleSheet.create({
  textStyle: {
    fontFamily: 'ms-medium',
    fontSize: 12,
    color: DEFAULT_TEXT_COLOR,
    textAlign: 'center',
  },
  containerStyle: {
    alignItems: 'center',
    marginTop: 50,
  },
});
