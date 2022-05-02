import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ErrorConnection} from '../../components/ErrorConnection/Index';

import {Header} from '../../components/Header';
import {StockItem} from '../../components/StockItem/StockItem';
import {TitleView} from '../../components/TitleView';

import api from '../../services/api';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface StocksProps {
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
}

export function Stocks() {
  const [isLoading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [stocks, setStocks] = useState<StocksProps[]>([]);

  useEffect(() => {
    async function loadStocks() {
      const {data} = await api
        .get('stocks')
        .then(response => response.data)
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
      setStocks(data);
    }
    loadStocks();
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
          <TitleView title="Ações" />

          {isLoading ? (
            <ActivityIndicator
              animating={isLoading}
              size="large"
              color={colors.purple}
              style={styles.loading}
            />
          ) : (
            <FlatList
              data={stocks.sort((a, b) => a.name.localeCompare(b.name))}
              renderItem={({item}) => (
                <StockItem
                  name={item.name}
                  ticker={item.ticker}
                  minimumValue={item.minimumValue}
                  profitability={item.profitability}
                  isFavorite={item.isFavorite}
                />
              )}
              contentContainerStyle={styles.stocksList}
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
  icon: {
    paddingVertical: 30,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.title,
  },
  stocksList: {
    justifyContent: 'center',
  },
  loading: {
    alignSelf: 'center',
    marginTop: 250,
  },
});
