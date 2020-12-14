import React from 'react';
import { View } from 'react-native';

import { CardFunds } from '../../components';

import { Container } from './styles';

const Funds: React.FC = () => {
  return (
    <Container>
      <CardFunds />
    </Container>
  );
};

export default Funds;
