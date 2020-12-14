import React from 'react';
import { View } from 'react-native';

import { CardForecasts } from '../../components';

import { Container } from './styles';

const Forecasts: React.FC = () => {
  return (
    <Container>
      <CardForecasts
        name="Alaska Prev"
        type="Multimercados"
        minimumValue={100.0}
        tax={0}
        redemptionTerm={10}
        profitability={10.59}
      />

      <CardForecasts
        name="Alaska Prev"
        type="Multimercados"
        minimumValue={100.0}
        tax={0}
        redemptionTerm={10}
        profitability={10.59}
      />
    </Container>
  );
};

export default Forecasts;
