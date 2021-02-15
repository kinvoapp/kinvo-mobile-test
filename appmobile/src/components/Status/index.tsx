import React from 'react';

import { Container, Title } from './styles';

interface StatusProps {
  status: number;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const title = status === 1 ? 'Novo' : 'Fechado';

  return (
    <Container>
      <Title isClosed={status === 2}>{title}</Title>
    </Container>
  );
};

export default Status;
