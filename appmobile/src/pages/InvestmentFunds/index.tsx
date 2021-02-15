import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Funds from '../../@types/funds';
import { Header, Spinner, NetworkError } from '../../components';
import api from '../../services/api';
import FundsItem from './FundsItem';
import { Container, Content } from './styles';

const InvestmentFunds: React.FC = () => {
  const [funds, setFunds] = useState<Funds[]>([]);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const fetchFunds = useCallback(async () => {
    try {
      setNetworkError(false);
      setLoading(true);
      const response = await api.get('funds');
      const { data } = response.data;

      setFunds(() => {
        const newState = [...data];
        newState.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name === b.name) return 0;
          return 1;
        });
        return newState;
      });
    } catch (error) {
      setNetworkError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFunds();
  }, [fetchFunds]);

  return (
    <Container>
      <Header title="Fundos" backButton />
      <Content>
        {loading && <Spinner />}
        {networkError && (
          <NetworkError
            subtitle="Não foi possível se conectar ao banco de fundos."
            onPress={fetchFunds}
          />
        )}
        {!loading === !networkError && (
          <FlatList
            data={funds}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <FundsItem funds={item} />}
          />
        )}
      </Content>
    </Container>
  );
};

export default InvestmentFunds;
