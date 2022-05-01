import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Icon from 'react-native-vector-icons/Feather';
import FavoriteIcon from '../assets/icons/FavoriteIconNull.svg';

interface StockItensProps {
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}

export function StockItem({
  name,
  ticker,
  minimumValue,
  profitability,
  ...res
}: StockItensProps) {
  return (
    <View style={styles.container} {...res}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{ticker}</Text>
        </View>
        <FavoriteIcon width={20} height={20} />
      </View>

      <View style={styles.divider} />

      <View style={styles.description}>
        <View>
          <Text style={styles.text}>Valor mínimo:</Text>
          <Text style={styles.text}>Rentabilidade:</Text>
        </View>
        <View style={styles.values}>
          <Text style={styles.minimumValue}>R$ {minimumValue}</Text>
          <Text style={styles.profitability}>
            <Icon name="arrow-down" />
            {profitability}%
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginVertical: 10,
    height: 170,
    width: '100%',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: colors.board,
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 17,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: fonts.heading,
  },
  subTitle: {
    fontSize: 12,
    color: colors.darkGrey,
    fontFamily: fonts.title,
  },
  icon: {
    marginLeft: 30,
    width: 23,
    color: colors.darkGrey,
  },
  divider: {
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 17,
    height: 1,
    width: '90%',
    backgroundColor: colors.board,
  },
  description: {
    paddingBottom: 15,
    paddingHorizontal: 17,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    paddingVertical: 10,
    fontSize: 10,
    color: colors.darkGrey,
    fontFamily: fonts.text,
  },
  values: {
    alignItems: 'flex-end',
  },
  minimumValue: {
    paddingVertical: 7,
    fontSize: 12,
    color: colors.darkGrey,
    fontFamily: fonts.title,
  },
  profitability: {
    paddingVertical: 7,
    fontSize: 12,
    color: colors.darkGrey,
    fontFamily: fonts.title,
  },
});
