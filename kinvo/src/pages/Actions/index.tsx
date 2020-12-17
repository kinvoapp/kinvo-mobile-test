import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { CardActions } from '../../components';

import { Container, Content } from './styles';

import { RootDispatch, RootState } from '../../store';
import { IStock } from '../../store/modules/types';

const Actions: React.FC = () => {
  const dispatch = useDispatch<RootDispatch>();

  const { stocks, loading } = useSelector((state: RootState) => state.stocks);

  const [added, setAdded] = useState<boolean | null>(null);

  useEffect(() => {
    dispatch.stocks.load();
  }, []);

  useEffect(() => {
    if (added) {
      dispatch.stocks.sortAdded(stocks);
    } else if (added === null) {
    } else {
      dispatch.stocks.sortRemoved(stocks);
    }
  }, [stocks]);

  const handleIsFavorite = (stock: IStock) => {
    console.log(stock, 'STOCK NEW ITEM');
    if (stock.isFavorite) {
      dispatch.stocks.addFavoriteToggled(stock);
      setAdded(true);
    } else {
      dispatch.stocks.removeFavoriteToggled(stock);
      setAdded(false);
    }
  };

  // console.log(stocks);

  const renderActions = (item: IStock) => (
    <CardActions item={item} handleIsFavorite={handleIsFavorite} />
  );

  return (
    <>
      <Container>
        {loading ? (
          <Content>
            <ActivityIndicator size="large" color="#6F4DBF" />
          </Content>
        ) : (
          <FlatList
            data={stocks}
            renderItem={({ item }) => renderActions(item)}
            keyExtractor={(item, index) => `${item.name} + ${index}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        )}
      </Container>
    </>
  );
};

export default Actions;
