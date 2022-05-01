import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../components/Header';
import {MenuItem} from '../components/MenuItem';

import StocksIcon from '../assets/icons/icon-acoes.svg';
import PensionIcon from '../assets/icons/icon-previdencia.svg';
import FundsIcon from '../assets/icons/icon-fundos.svg';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Home() {
  const navigation = useNavigation<any>();
  function navigateToStocks() {
    navigation.navigate('Stocks');
  }
  function navigateToFunds() {
    navigation.navigate('Funds');
  }
  function navigateToPensions() {
    navigation.navigate('Pension');
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <MenuItem
          title="Ações"
          text="Nacionais"
          icon={<StocksIcon />}
          onPress={navigateToStocks}
        />
        <MenuItem
          title="Fundos"
          text="De Investimentos"
          icon={<FundsIcon />}
          onPress={navigateToFunds}
        />
        <MenuItem
          title="Previdência"
          text="Privadas"
          icon={<PensionIcon />}
          onPress={navigateToPensions}
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
