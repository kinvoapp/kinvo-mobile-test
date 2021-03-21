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
}

export function Stocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  function sortStocks(inputStocks: Stock[]) {
    return inputStocks.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  useEffect(() => {
    api.get('stocks').then(response => {
      const sortedStocks = sortStocks(response.data.data);
      setStocks(sortedStocks);
    });
  }, []);

  return (
    <>
      <Header hasGoBackButton={true} title={'Ações'} />
      <ScrollView>
        <Container>
          {stocks.map(stock => (
            <StockCard key={stock.id} {...stock} />
          ))}
        </Container>
      </ScrollView>
    </>
  );
}
