import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Field from '../../components/Field';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  StocksList,
  StocksItem,
  StockTextContainer,
  StockNameText,
  FavoriteButton,
  StockTickerText,
  Separator,
} from './styles';

export interface StockProps {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}

interface StocksResponse {
  success: boolean;
  data: StockProps[];
  error: string | null;
}

const Stocks: React.FC = () => {
  const [stocks, setStocks] = useState<StockProps[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFetching, setIsFetching] = useState(true); // to load the stocks

  useEffect(() => {
    async function loadStocks(): Promise<void> {
      if (!isFetching) return;

      try {
        const result = await api.get<StocksResponse>('/stocks');

        const { data } = result.data;

        // order by name
        data.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          if (nameA > nameB) {
            return 1;
          }

          if (nameA < nameB) {
            return -1;
          }

          return 0;
        });

        // order by favorites
        data.sort((a, b) => {
          const findIndexA = favorites.find(f => f === a.id);
          const findIndexB = favorites.find(f => f === b.id);

          if (!findIndexA && findIndexB) {
            return 1;
          }
          if (findIndexA && !findIndexB) {
            return -1;
          }

          return 0;
        });

        setStocks(data);
      } catch (err) {
        //
      }

      setIsFetching(false);
    }

    loadStocks();
  }, [favorites, isFetching, stocks]);

  const handleFavoritesButton = useCallback(
    id => {
      const finded = favorites.find(f => f === id);

      if (finded) {
        setFavorites(favorites.filter(f => f !== id));
      } else {
        setFavorites([...favorites, id]);
      }

      setIsFetching(true);
    },
    [favorites],
  );

  return (
    <Container>
      <Header goBack>Ações</Header>
      <StocksList
        data={stocks}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => setIsFetching(true)}
            colors={['#6f4dbf']}
          />
        }
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{
          height: 80,
        }}
        renderItem={({ item }) => (
          <StocksItem>
            <StockTextContainer>
              <StockNameText>{item.name}</StockNameText>
              <FavoriteButton onPress={() => handleFavoritesButton(item.id)}>
                <Icon
                  testID={`favoriteButton-${item.id}`}
                  name={
                    favorites.find(f => f === item.id)
                      ? 'heart'
                      : 'heart-outline'
                  }
                  size={24}
                  color="#6f4dbf"
                />
              </FavoriteButton>
            </StockTextContainer>
            <StockTickerText>{item.ticker}</StockTickerText>
            <Separator />
            <Field label="Valor Mínimo" type="value" style={{ marginTop: 10 }}>
              {item.minimumValue}
            </Field>
            <Field
              label="Rentabilidade"
              type="percent"
              style={{ marginTop: 15 }}
            >
              {item.profitability}
            </Field>
          </StocksItem>
        )}
      />
    </Container>
  );
};

export default Stocks;
