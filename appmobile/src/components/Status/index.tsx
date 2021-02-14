import React from 'react';

import { Container, Title } from './styles';

interface StatusProps {
  status: number;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  function closeMarket() {
    if (status === 2) {
      return true;
    }
    return false;
  }

  return (
    <Container>
      <Title isClosed={closeMarket()}>
        {status === 1 ? 'Novo' : 'Fechado'}
      </Title>
    </Container>
  );
};

export default Status;
