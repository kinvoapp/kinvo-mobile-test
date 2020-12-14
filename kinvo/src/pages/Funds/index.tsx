import React from 'react';
import { View } from 'react-native';

import { CardFunds } from '../../components';

import { Container } from './styles';

const Funds: React.FC = () => {
  return (
    <Container>
      <CardFunds
        name="Alaska Black Institucional Fundo de Investimento de Ações"
        type="MULTIMERCADOS"
        minValue={500}
        profitability={-52.05}
        status={0}
      />

      <CardFunds
        name="Alaska Black Institucional Fundo de Investimento de Ações"
        type="MULTIMERCADOS"
        minValue={500}
        profitability={-52.05}
        status={1}
      />

      <CardFunds
        name="Alaska Black Institucional Fundo de Investimento de Ações"
        type="MULTIMERCADOS"
        minValue={500}
        profitability={-52.05}
        status={2}
      />
    </Container>
  );
};

export default Funds;
