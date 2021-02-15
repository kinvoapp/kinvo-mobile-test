import React from 'react';

import { useNavigation } from '@react-navigation/native';

import foresight from '../../assets/foresight.png';
import shape from '../../assets/shape.png';
import stock from '../../assets/stock.png';
import { Header } from '../../components';
import Card from './CardItem';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Desafio" />
      <Content>
        <Card
          leftIcon={stock}
          title="Ações"
          subtitle="Nacionais"
          onPress={() => navigation.navigate('Stock-Exchange')}
        />
        <Card
          leftIcon={shape}
          title="Fundos"
          subtitle="De investimento"
          onPress={() => navigation.navigate('Investment-Funds')}
        />
        <Card
          leftIcon={foresight}
          title="Previdências"
          subtitle="Privadas"
          onPress={() => navigation.navigate('Private-Pensions')}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
