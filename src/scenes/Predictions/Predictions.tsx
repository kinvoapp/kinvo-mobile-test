import React from 'react';
import { Text } from 'react-native';
import { Header } from '~/components';
import { Container } from './styles';

type Props = {
  goBack?: () => void;
}
const Predictions: React.FC<Props> = ({goBack}) => {
  return (
    <Container>
      <Header title="Previdências" showIcon goBack={goBack} />
      <Text>Predictions</Text>
    </Container>
  );
};

export default Predictions;
