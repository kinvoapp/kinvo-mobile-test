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

interface IData {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  like: boolean;
}

interface ItemList {
  item: {
    id: number;
    name: string;
    ticker: string;
    minimumValue: number;
    profitability: number;
    like: boolean;
  };
}

const Actions: React.FC = () => {
  const [actions, setActions] = useState<Array<IData>>([]);
  // const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState(null);

  const dispatch = useDispatch<RootDispatch>();

  const { stocks, loading } = useSelector((state: RootState) => state.stocks);

  useEffect(() => {
    dispatch.stocks.load();
  }, []);

  console.log(favorites);

  const renderActions = ({ item }: ItemList) => (
    <>
      <CardActions
        id={item.id}
        title={item.name}
        ticker={item.ticker}
        minValue={item.minimumValue}
        profitability={item.profitability}
        favorites={setFavorites}
      />
    </>
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
            renderItem={renderActions}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        )}
      </Container>
    </>
  );
};

export default Actions;
