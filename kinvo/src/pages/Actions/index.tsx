import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';

import api from '../../services/api';

import { CardActions } from '../../components';

import { Container } from './styles';

interface IData {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const Actions: React.FC = () => {
  const [actions, setActions] = useState<Array<IData>>([]);

  useEffect(() => {
    const getActions = async () => {
      const response = await api.get('/stocks');

      setActions(response.data);
    };

    getActions();
  }, []);

  const renderActions = ({ item }) => (
    <>
      <CardActions
        title={item.name}
        ticker={item.ticker}
        minValue={item.minimumValue}
        profitability={item.profitability}
      />
    </>
  );

  return (
    <Container>
      <FlatList
        data={actions.data}
        renderItem={renderActions}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Actions;
