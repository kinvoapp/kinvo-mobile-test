/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../../components/Header';
import {StockCard} from '../../components/StockCard';
import {ConectionError} from '../../components/ConectionError';
import {api} from '../../services/api';
import {Container} from './styles';

interface Stock {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
}

export function Stocks() {
  const [stocksLoading, setStocksLoading] = useState(true);
  const [failToLoad, setFailToLoad] = useState(false);
  const [stocks, setStocks] = useState<Stock[]>([]);

  function sortStocks(inputStock: Stock[]) {
    const sortedStocks = inputStock.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return sortedStocks;
  }

  function setFavorite(id: number) {
    const index = stocks.findIndex(stock => stock.id === id);
    setStocks(oldStocks => {
      oldStocks[index].isFavorite = !oldStocks[index].isFavorite;
      return oldStocks;
    });
  }

  function sortFavorites() {
    const favoriteStocks = stocks.filter(stock => stock.isFavorite);
    const notFavoriteStocks = stocks.filter(stock => !stock.isFavorite);
    const sortedNotFavoriteStocks = sortStocks(notFavoriteStocks);
    setStocks(favoriteStocks.concat(sortedNotFavoriteStocks));
  }
  useEffect(() => {
    async function getStocksFromAPI() {
      try {
        const {data} = await api.get('stocks');
        const sortedStocks = sortStocks(data.data);
        setStocks(sortedStocks);
        setStocksLoading(false);
      } catch (e) {
        setFailToLoad(true);
        setStocksLoading(false);
      }
    }
    getStocksFromAPI();
    stocksLoading;
  }, [stocksLoading]);

  return (
    <>
      <Header hasGoBackButton={true} title={'Ações'} />
      {failToLoad ? (
        <ConectionError
          title={'ações'}
          reloadPage={() => {
            setFailToLoad(false);
            setStocksLoading(true);
          }}
        />
      ) : (
        <ScrollView>
          <Container>
            {stocksLoading && (
              <ActivityIndicator
                animating={stocksLoading}
                size="large"
                color="#6F4DBF"
                style={{alignSelf: 'center', marginTop: 250}}
              />
            )}

            {stocks.map(stock => (
              <StockCard
                key={stock.id}
                {...stock}
                sortFavorites={sortFavorites}
                setFavorite={setFavorite}
              />
            ))}
          </Container>
        </ScrollView>
      )}
    </>
  );
}
