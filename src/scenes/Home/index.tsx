import React from 'react';
import {RoutesPublic, routing} from '~/routes'
import { Container } from './styles';
import Home from './Home'

const HomeContainer: React.FC = () => {
  const goToActions = () => routing.to(RoutesPublic.ACTIONS)
  const goToPredictions = () => routing.to(RoutesPublic.FUNDS)
  const goToFunds = () => routing.to(RoutesPublic.PREDICTIONS)
  return (
    <Container>
      <Home goToActions={goToActions} goToPredictions={goToPredictions} goToFunds={goToFunds} />
    </Container>
  );
};

export default HomeContainer;
