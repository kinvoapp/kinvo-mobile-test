import React from 'react';
import CardErro from '../../components/CardErro';
import Header from '../../components/Header';
import {Container} from './styles';

const ScreenBackgrounds: React.FC = () => {
  return (
    <Container>
      <Header name="Fundos" />
      <CardErro />
    </Container>
        
  );
};

export default ScreenBackgrounds;
