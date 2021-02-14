import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList } from 'react-native';

import { Header } from '../../components';
import { Container, Content } from './styles';
import StockItem from './StockItem';

import Stock from '../../@types/stock';

const api = 'https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks';

const StockExchange: React.FC = () => {
  const [stock, setStock] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStock() {
      try {
        setLoading(true);
        const response = await axios.get(api);
        const { data } = response.data;

        setStock(data);
        handleSortList();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchStock();
  }, []);

  function handleSortList() {
    setStock(state => {
      const newState = [...state];

      newState.sort((a, b) => {
        if (a.favorite) return -1;

        if (a.name < b.name) return -1;

        if (a.name === b.name) return 0;

        return 1;
      });

      return newState;
    });
  }

  function handleFavorite(index: number) {
    const newStock = [...stock];

    newStock[index].favorite = !newStock[index].favorite;

    setStock(newStock);
    handleSortList();
  }

  return (
    <Container>
      <Header title="Ações" backbutton />
      <Content>
        <FlatList
          data={stock}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => (
            <StockItem stock={item} onFavorite={() => handleFavorite(index)} />
          )}
        />
      </Content>
    </Container>
  );
};

export default StockExchange;
