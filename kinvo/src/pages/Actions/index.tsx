import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import api from '../../services/api';

import { CardActions } from '../../components';

import { Container, Content } from './styles';

interface IData {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  like: boolean;
}

const Actions: React.FC = () => {
  const [actions, setActions] = useState<Array<IData>>([]);
  const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    const getActions = async () => {
      setLoading(true);
      const response = await api.get('/stocks');

      const orderAlphabetical = response.data.data;

      const newOrder: Array<IData> = orderAlphabetical.sort((a, b) =>
        a.name > b.name ? 1 : -1,
      );

      const favResult = newOrder.map(item => {
        const newObject = { ...item };

        newObject.like = false;
        return newObject;
      });

      const favIndex = favResult.findIndex(obj => obj.id === favorites);

      console.log(favResult);
      console.log('Before Item', favResult[favIndex]);

      const newState = favResult.map(obj =>
        obj.id === favorites ? { ...obj, like: true } : obj,
      );

      console.log(newState, 'State');

      console.log('After Item', newState[favIndex]);

      console.log(favIndex, 'Index');

      setActions(favResult);
      setLoading(false);
    };

    getActions();
  }, []);

  console.log(favorites);

  const renderActions = ({ item }) => (
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
            data={actions}
            renderItem={renderActions}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </Container>
    </>
  );
};

export default Actions;
