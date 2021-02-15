import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Stock from '../../@types/stock';
import { Header, Spinner, NetworkError } from '../../components';
import api from '../../services/api';
import StockItem from './StockItem';
import { Container, Content } from './styles';

const StockExchange: React.FC = () => {
  const [stock, setStock] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const handleSortList = useCallback(() => {
    setStock(state => {
      const newState = [...state];

      newState.sort((a, b) => {
        if (a.favorite || b.favorite) {
          if (a.favorite && !b.favorite) return -1;
          if (a.favorite && b.favorite) return 0;
          if (b.favorite && !a.favorite) return 1;
        }

        if (a.name < b.name) return -1;

        if (a.name === b.name) return 0;

        return 1;
      });

      return newState;
    });
  }, []);

  const fetchStock = useCallback(async () => {
    try {
      setNetworkError(false);
      setLoading(true);
      const response = await api.get('stocks');
      const { data } = response.data;

      setStock(data);
      handleSortList();
    } catch (error) {
      setNetworkError(true);
    } finally {
      setLoading(false);
    }
  }, [handleSortList]);

  useEffect(() => {
    fetchStock();
  }, [fetchStock]);

  const handleFavorite = useCallback(
    index => {
      const newStock = [...stock];

      newStock[index].favorite = !newStock[index].favorite;

      setStock(newStock);
      handleSortList();
    },
    [stock, handleSortList],
  );

  return (
    <Container>
      <Header title="Ações" backButton />
      <Content>
        {loading && <Spinner />}
        {networkError && (
          <NetworkError
            subtitle="Não foi possível se conectar ao banco de ações."
            onPress={fetchStock}
          />
        )}

        {!loading === !networkError && (
          <FlatList
            data={stock}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
              <StockItem
                stock={item}
                onFavorite={() => handleFavorite(index)}
              />
            )}
          />
        )}
      </Content>
    </Container>
  );
};

export default StockExchange;
