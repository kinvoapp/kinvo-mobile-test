import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Card from './components/Card';
import { Container } from './styles';

const Home = () => {
  const { navigate } = useNavigation();

  const handleStocksPress = useCallback(() => {
    navigate('Stocks');
  }, [navigate]);

  const handleFundsPress = useCallback(() => {
    navigate('Funds');
  }, [navigate]);

  const handlePensionPress = useCallback(() => {
    navigate('Pension');
  }, [navigate]);

  return (
    <Container>
      <Card
        title="Ações"
        subTitle="Nacionais"
        icon="stocks"
        onPress={handleStocksPress}
      />

      <Card
        title="Fundos"
        subTitle="De investimentos"
        icon="funds"
        onPress={handleFundsPress}
      />

      <Card
        title="Previdências"
        subTitle="Privadas"
        icon="pension"
        onPress={handlePensionPress}
      />
    </Container>
  );
};

export default Home;
