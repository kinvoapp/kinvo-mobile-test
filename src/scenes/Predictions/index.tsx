import React from 'react';
import {routing} from '~/routes'
import { Container } from './styles';
import Predictions from './Predictions'

const PredictionsContainer: React.FC = () => {
  const goBack = () => routing.goBack()
  return (
    <Container>
      <Predictions goBack={goBack} />
    </Container>
  );
};

export default PredictionsContainer;
