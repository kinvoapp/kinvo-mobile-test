import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Header} from '../components/Header';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import {TitleView} from '../components/TitleView';

export function Funds() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TitleView title="Fundos" />

        <Text>Funds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    backgroundColor: colors.lightGrey,
    height: '100%',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  icon: {
    paddingVertical: 30,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.title,
  },
});
