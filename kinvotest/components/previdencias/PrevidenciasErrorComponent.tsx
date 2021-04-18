import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { DEFAULT_PURPLE, DEFAULT_TEXT_COLOR, DEFAULT_WHITE } from '../../assets/constants/colors';

export const PrevidenciasErrorComponent = () => {
  const { containerStyle, titleStyle, subtitleStyle, buttonStyle } = styles;
  return (
    <View style={containerStyle}>
      <View>
        <Text style={titleStyle}>Ocorreu um erro.</Text>
      </View>
      <View>
        <Text style={subtitleStyle}>Não foi possível se conectar ao banco de fundos.</Text>
      </View>
      <View>
        <Button title={'TENTAR NOVAMENTE'} buttonStyle={buttonStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 5,
    color: DEFAULT_TEXT_COLOR,
    textAlign: 'center',
  },
  subtitleStyle: {
    fontFamily: 'ms-medium',
    fontSize: 12,
    marginBottom: 30,
    color: DEFAULT_TEXT_COLOR,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: DEFAULT_PURPLE,
    color: DEFAULT_WHITE,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
