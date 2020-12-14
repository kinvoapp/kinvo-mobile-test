import React from 'react';
import {RoutesPublic, routing} from '~/routes'
import { Container } from './styles';
import Actions from './Actions'

const ActionsContainer: React.FC = () => {
  const goBack = () => routing.goBack()
  return (
    <Container>
      <Actions goBack={goBack} />
    </Container>
  );
};

export default ActionsContainer;
