import React from 'react';
import CardErro from '../../components/CardErro';
import Header from '../../components/Header';
import {Container} from './styles';

const ScreenPredictions: React.FC = () => {
  return (
    <Container>
      <Header name="Previdência" />
      <CardErro />
    </Container>
        
  );
};

export default ScreenPredictions;