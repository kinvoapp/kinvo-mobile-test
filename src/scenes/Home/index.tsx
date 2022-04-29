import React from 'react';
import Card from './components/Card';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Card title="Ações" subTitle="Nacionais" icon="stocks" />

      <Card title="Fundos" subTitle="De investimentos" icon="funds" />

      <Card title="Previdências" subTitle="Privadas" icon="pension" />
    </Container>
  );
};

export default Home;
