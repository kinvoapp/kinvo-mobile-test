import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';

import colors from '../styles/colors';

import {Header} from '../components/Header';
import {TitleView} from '../components/TitleView';
import {PensionItem} from '../components/PensionItem';
import {FilterButton} from '../components/FilterButton';
import api from '../services/api';
interface PensionProps {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

export function Pension() {
  const [isLoading, setLoading] = useState(true);
  const [pensions, setPensions] = useState<PensionProps[]>([]);

  useEffect(() => {
    async function loadPensions() {
      const {data} = await api
        .get('pension')
        .then(response => response.data)
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
      setPensions(data);
    }
    loadPensions();
  }, []);

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
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={pensions.sort((a, b) => a.name.localeCompare(b.name))}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <PensionItem
                name={item.name}
                type={item.type}
                minimumValue={item.minimumValue}
                tax={item.tax}
                redemptionTerm={item.redemptionTerm}
                profitability={item.profitability}
              />
            )}
            contentContainerStyle={styles.pensionsList}
          />
        )}
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
  pensionsList: {
    justifyContent: 'center',
  },
});
