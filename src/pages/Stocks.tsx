import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Header} from '../components/Header';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import {StockItem} from '../components/StockItem';
import {TitleView} from '../components/TitleView';

export function Stocks() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TitleView title="Ações" />
        <StockItem
          name="Magazine Luiza"
          ticker="MGLU3"
          minimumValue={24.17}
          profitability={-27}
        />
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
