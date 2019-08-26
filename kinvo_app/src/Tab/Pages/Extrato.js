import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CommonStyles } from '../../commonValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.backGroundColor,
  },
  text: {
    fontSize: 30,
    fontFamily: CommonStyles.fontBlack,
    color: CommonStyles.selectedColor,
  },
});
const Extrato = () => (
  <View style={styles.container}>
    <Text style={styles.text}>EXTRATO</Text>
  </View>
);

export default Extrato;
