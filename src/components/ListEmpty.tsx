import React from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import colors from '../assets/colors';
import typography from '../assets/fonts';
import { WIDTH } from '../utils/dimensions';

interface IListEmpty {
  pension?: boolean;
}

const ListEmpty: React.FC<IListEmpty> = ({ pension }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {pension
          ? 'Nenhum resultado foi encontrado para os filtros selecionados.'
          : 'Nenhum resultado foi encontrado'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    width: WIDTH * 0.6,
    color: colors.textGrey,
    ...typography.body,
    marginTop: 30,
  } as TextStyle,
});

export default ListEmpty;
