import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { Container, ProfitabilityValue } from './styles';
import Up from '../../assets/up.png';
import Down from '../../assets/down.png';
import { colorLight } from '../../styles/colors';

interface ProfitabilityProps {
  value: number;
  isClosed?: boolean;
}

const Profitability: React.FC<ProfitabilityProps> = ({ value, isClosed }) => {
  const [market, setMarket] = useState('');

  function handleColor(closed: any, positive: any) {
    if (closed === true) {
      setMarket('CLOSED');
      return;
    }
    if (positive >= 0) {
      setMarket('POSITIVE');
      return;
    }
    setMarket('NEGATIVE');
    return;
  }

  useEffect(() => {
    handleColor(isClosed, value);
  }, []);

  return (
    <Container>
      <Image
        style={{ tintColor: market === 'CLOSED' && colorLight.SECONDARY }}
        source={value >= 0 ? Up : Down}
      />
      <ProfitabilityValue isClosed={market} isPositive={market}>
        {value}%
      </ProfitabilityValue>
    </Container>
  );
};

export default Profitability;
