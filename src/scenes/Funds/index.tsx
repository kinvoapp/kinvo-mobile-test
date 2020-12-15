import React from 'react';
import {RoutesPublic, routing} from '~/routes'
import Funds from './Funds'

const FundsContainer: React.FC = () => {
  const goBack = () => routing.goBack()
  return (
    <Funds goBack={goBack} />
  );
};

export default FundsContainer;
