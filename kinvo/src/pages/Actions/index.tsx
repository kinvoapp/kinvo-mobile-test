import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { CardActions } from '../../components';

import { Container } from './styles';

const Actions: React.FC = () => {
  return (
    <Container>
      <CardActions
        title="Maganize Luiza"
        ticker="MGLU3"
        minValue={100}
        profitability={27.05}
      />
    </Container>
  );
};

export default Actions;
