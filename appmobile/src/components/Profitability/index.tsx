import React from 'react';
import { Image } from 'react-native';

import { Container, ProfitabilityValue } from './styles';
import Up from '../../assets/up.png';
import Down from '../../assets/down.png';

interface ProfitabilityProps {
  value: number;
}

const Profitability: React.FC<ProfitabilityProps> = ({ value }) => {
  return (
    <Container>
      <Image source={value >= 0 ? Up : Down} />
      <ProfitabilityValue isPositive={value >= 0 ? true : false}>
        {value}
      </ProfitabilityValue>
    </Container>
  );
};

export default Profitability;
