import React from 'react';
import { View } from 'react-native';

import { CardForecasts } from '../../components';

import { Container } from './styles';

const Forecasts: React.FC = () => {
  return (
    <Container>
      <CardForecasts />
    </Container>
  );
};

export default Forecasts;
