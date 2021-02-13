import React from 'react';

import { Header } from '../../components';
import { Container, Content } from './styles';
import Card from './CardItem';

import stock from '../../assets/stock.png';
import foresight from '../../assets/foresight.png';
import shape from '../../assets/shape.png';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Desafio" />
      <Content>
        <Card
          image={stock}
          title="Ações"
          subtitle="Nacionais"
          onPress={() => navigation.navigate('Stock-Exchange')}
        />
        <Card
          image={shape}
          title="Fundos"
          subtitle="De investimento"
          onPress={() => navigation.navigate('Investment-Funds')}
        />
        <Card
          image={foresight}
          title="Previdências"
          subtitle="Privadas"
          onPress={() => navigation.navigate('Private-Pensions')}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
