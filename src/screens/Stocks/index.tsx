


import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

interface StocksProps {
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
}
import { StockCard } from '../../components/StockCard';
import { Container } from './styles';

export function Stocks() {
  const [stocks, setStocks] = useState<StocksProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    async function loadStocks() {
      const { data } = await axios
        .create({
          baseURL: 'https://6266f62263e0f382568936e4.mockapi.io/',
        })
        .get('stocks')
        .then((response) => response.data)
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      setStocks(data);
    }
    loadStocks();

  }, []);

  return (
    <View>
      {
        <FlatList
          data={stocks.sort(
            (a, b) =>
              -a.isFavorite - -b.isFavorite || a.name.localeCompare(b.name)
          )}
          renderItem={({ item }) => {
            item.isFavorite;
            return (
              <StockCard
                name={item.name}
                ticker={item.ticker}
                minimumValue={item.minimumValue}
                profitability={item.profitability}
                handleFavoriteButton={() => {
                  item.isFavorite = !item.isFavorite;
                }}
                isFavorite={item.isFavorite}
              />
            );
          }}
        />
      }
    </View>
  );
}


