import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import { CardFunds } from '../../components';

import api from '../../services/api';

import { Container, Content } from './styles';

interface IData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}

interface ItemList {
  item: {
    id: number;
    name: string;
    type: string;
    minimumValue: number;
    rating: number;
    profitability: number;
    status: number;
  };
}

const Funds: React.FC = () => {
  const [data, setData] = useState<Array<IData>>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFunds = async () => {
      setLoading(true);
      const response = await api.get('funds');

      const orderAlphabetical = response.data.data;

      const newOrder: Array<IData> = orderAlphabetical.sort((a, b) =>
        a.name > b.name ? 1 : -1,
      );

      console.log(response.data.data);

      setData(newOrder);
      setLoading(false);
    };
    getFunds();
  }, []);

  const renderItem = ({ item }: ItemList) => (
    <CardFunds
      name={item.name}
      type={item.type}
      minValue={item.minimumValue}
      profitability={item.profitability}
      status={item.status}
      rating={item.rating}
    />
  );

  return (
    <Container>
      {loading ? (
        <Content>
          <ActivityIndicator size="large" color="#6F4DBF" />
        </Content>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </Container>
  );
};

export default Funds;
