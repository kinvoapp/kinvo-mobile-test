import React from 'react';
import { Text } from 'react-native';
import { Header } from '~/components';
import { Container } from './styles';

type Props = {
  goBack?: () => void;
}
const Funds: React.FC<Props> = ({goBack}) => {
  return (
    <Container>
      <Header title="Funds" showIcon goBack={goBack} />
      <Text>Funds</Text>
    </Container>
  );
};

export default Funds;
