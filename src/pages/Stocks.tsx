import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {Header} from '../components/Header';
import {StockItem} from '../components/StockItem';
import {TitleView} from '../components/TitleView';

import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface StocksProps {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}

export function Stocks() {
  const [isLoading, setLoading] = useState(true);
  const [stocks, setStocks] = useState<StocksProps[]>([]);

  useEffect(() => {
    async function loadStocks() {
      const {data} = await api
        .get('stocks')
        .then(response => response.data)
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
      setStocks(data);
    }
    loadStocks();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TitleView title="Ações" />

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={stocks.sort((a, b) => a.name.localeCompare(b.name))}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <StockItem
                name={item.name}
                ticker={item.ticker}
                minimumValue={item.minimumValue}
                profitability={item.profitability}
              />
            )}
            contentContainerStyle={styles.stocksList}
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
});
