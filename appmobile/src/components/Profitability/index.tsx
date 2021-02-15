import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import Down from '../../assets/down.png';
import Up from '../../assets/up.png';
import { colorsLight } from '../../styles/colors';
import { Container, ProfitabilityValue } from './styles';

interface ProfitabilityProps {
  value: number;
  isClosed?: boolean;
}

const Profitability: React.FC<ProfitabilityProps> = ({ value, isClosed }) => {
  const [market, setMarket] = useState('');

  useEffect(() => {
    if (isClosed === true) {
      setMarket('CLOSED');
      return;
    }

    if (value >= 0) {
      setMarket('POSITIVE');
      return;
    }

    setMarket('NEGATIVE');
  }, [isClosed, value]);

  return (
    <Container>
      <Image
        style={{
          tintColor: market === 'CLOSED' ? colorsLight.SECONDARY : undefined,
        }}
        source={value >= 0 ? Up : Down}
      />
      <ProfitabilityValue
        isClosed={market === 'CLOSED'}
        isPositive={market === 'POSITIVE'}
      >
        {`${value}%`}
      </ProfitabilityValue>
    </Container>
  );
};

export default Profitability;
