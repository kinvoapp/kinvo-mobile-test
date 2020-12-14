import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';

import api from '../../services/api';
import { CardForecasts } from '../../components';

import { Container, Content } from './styles';

interface IData {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

const Forecasts: React.FC = () => {
  const [data, setData] = useState<Array<IData>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getForecasts = async () => {
      setLoading(true);
      const response = await api.get('pension');

      console.log(response.data.data);

      setData(response.data.data);
      setLoading(false);
    };

    getForecasts();
  }, []);

  const renderItem = ({ item }) => (
    <CardForecasts
      name={item.name}
      type={item.type}
      minimumValue={item.minimumValue}
      tax={item.tax}
      redemptionTerm={item.redemptionTerm}
      profitability={item.profitability}
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
        />
      )}
    </Container>
  );
};

export default Forecasts;