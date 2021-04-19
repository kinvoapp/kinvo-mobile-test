import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DEFAULT_TEXT_COLOR } from '../../../assets/constants/colors';

export const PrevidenciasEmptyListComponent = () => {
  const { textStyle, containerStyle } = emptyListStyles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Nenhum resultado foi encontrado para os filtros selecionados.</Text>
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
