import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList } from 'react-native';

import { Header } from '../../components';
import { Container, Content } from './styles';

import Funds from '../../@types/funds';

const api = 'https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds';

const InvestmentFunds: React.FC = () => {
  const [funds, setFunds] = useState<Funds[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFunds() {
      try {
        setLoading(true);
        const response = await axios.get(api);
        const { data } = response.data;

        setFunds(data);
        console.log('Fundos', data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchFunds();
  }, []);

  return <Container></Container>;
};

export default InvestmentFunds;
