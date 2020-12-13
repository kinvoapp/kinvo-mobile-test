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
}

const Actions: React.FC = () => {
  const [actions, setActions] = useState<Array<IData>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getActions = async () => {
      setLoading(true);
      const response = await api.get('/stocks');

      setActions(response.data);
      setLoading(false);
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
    <>
      <Container>
        {loading ? (
          <Content>
            <ActivityIndicator size="large" color="#6F4DBF" />
          </Content>
        ) : (
          <FlatList
            data={actions.data}
            renderItem={renderActions}
            keyExtractor={item => item.id}
          />
        )}
      </Container>
    </>
  );
};

export default Actions;
