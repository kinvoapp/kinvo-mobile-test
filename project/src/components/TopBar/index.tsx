import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, TextTopBar } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <AntDesign name="arrowleft" size={24} color="#788083" />
      <TextTopBar>Carteira</TextTopBar>
      <TextTopBar hasActive>Produtos</TextTopBar>
      <TextTopBar>Extrato</TextTopBar>
    </Container>
  );
};

export default TopBar;
