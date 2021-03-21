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

  useEffect(() => {
    api.get('stocks').then(response => {
      setStocks(response.data.data);
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
