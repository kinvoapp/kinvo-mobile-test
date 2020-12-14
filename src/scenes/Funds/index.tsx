import React from 'react';
import {RoutesPublic, routing} from '~/routes'
import { Container } from './styles';
import Funds from './Funds'

const FundsContainer: React.FC = () => {
  const goBack = () => routing.goBack()
  return (
    <Container>
      <Funds goBack={goBack} />
    </Container>
  );
};

export default FundsContainer;
