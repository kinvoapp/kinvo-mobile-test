import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';

import colors from '../../styles/colors';

import {Header} from '../../components/Header';
import {TitleView} from '../../components/TitleView';
import {PensionItem} from '../../components/PensionItem/PensionItem';
import {FilterButton} from '../../components/FilterButton';

import api from '../../services/api';
import {ErrorConnection} from '../../components/ErrorConnection/Index';
import {ScrollView} from 'react-native-gesture-handler';

interface PensionProps {
  id: number;
  name: string;
  tax: number;
  type: string;
  minimumValue: number;
  redemptionTerm: number;
  profitability: number;
}

export function Pension() {
  const [isLoading, setLoading] = useState(true);
  const [pensions, setPensions] = useState<PensionProps[]>([]);
  const [filterSelected, setFilterSelected] = useState('D+1');
  const [loadFail, setLoadFail] = useState(false);

  function handleFilterSelected(filter: string) {
    setFilterSelected(filter);
  }

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
      {loadFail ? (
        <ErrorConnection
          title={'ações'}
          reloadPage={() => {
            setLoadFail(false);
            setLoading(true);
          }}
        />
      ) : (
        <ScrollView style={styles.content}>
          <TitleView title="Previdência" />
          <FlatList
            data={[{name: 'SEM TAXA'}, {name: 'R$ 100.00'}, {name: 'D+1'}]}
            renderItem={({item}) => (
              <FilterButton
                title={item.name}
                active={item.name === filterSelected}
                onPress={() => handleFilterSelected(item.name)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterList}
          />
          <View style={styles.divider} />
          {isLoading ? (
            <ActivityIndicator
              animating={isLoading}
              size="large"
              color={colors.purple}
              style={styles.loading}
            />
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
              showsVerticalScrollIndicator={false}
            />
          )}
        </ScrollView>
      )}
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
  filterList: {
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
  },
  loading: {
    alignSelf: 'center',
    marginTop: 250,
  },
});
