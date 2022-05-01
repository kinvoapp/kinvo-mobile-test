import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../styles/colors';

import {Header} from '../components/Header';
import {TitleView} from '../components/TitleView';
import {PensionItem} from '../components/PensionItem';
import {FilterButton} from '../components/FilterButton';

export function Pension() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TitleView title="Previdência" />
        <View style={styles.filter}>
          <FilterButton title="SEM TAXA" active />
          <FilterButton title="R$ 100,00" />
          <FilterButton title="D+1" />
        </View>
        <View style={styles.divider} />
        <PensionItem
          name="Adam XP Seg Prev I FIC FIM"
          type="Multimercados"
          minimumValue={100}
          tax={0}
          redemptionTerm={10}
          profitability={10.59}
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
  filterButtonList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  filter: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  divider: {
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 17,
    height: 1,
    width: '90%',
    backgroundColor: colors.board,
  },
});
