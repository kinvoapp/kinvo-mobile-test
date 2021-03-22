import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../../components/Header';
import {StockCard} from '../../components/StockCard';
import {api} from '../../services/api';
import {Container} from './styles';

interface Stock {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: Boolean;
}

export function Stocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [favoriteStocks, setFavoriteStocks] = useState<Stock[]>([]);

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

  function setIsFavorite(id: number) {
    let indexOfFavorite = stocks.findIndex(i => i.id === id);
    const favoritedStock = stocks[indexOfFavorite];
    // setStocks(() => {});
    setFavoriteStocks(favStocks => {
      return [...favStocks, favoritedStock];
    });
    console.log(favoriteStocks);
  }

  function sortFavorites() {
    let sortedStocks = stocks;

    sortedStocks.forEach(function (item, i) {
      if (item.isFavorite) {
        sortedStocks.splice(i, 1);
        sortedStocks.unshift(item);
      }
    });
    setStocks(sortedStocks);
  }

  useEffect(() => {
    async function getStocksFromAPI() {
      const response = await api.get('stocks');
      const sortedStocks = sortStocks(response.data.data);
      setStocks(sortedStocks);
    }
    getStocksFromAPI();
  }, []);

  return (
    <>
      <Header hasGoBackButton={true} title={'Ações'} />
      <ScrollView>
        <Container>
          {stocks.map(stock => (
            <StockCard
              key={stock.id}
              {...stock}
              sortFavorites={sortFavorites}
              setIsFavorite={setIsFavorite}
            />
          ))}
        </Container>
      </ScrollView>
    </>
  );
}
