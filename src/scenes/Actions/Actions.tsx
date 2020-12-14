import React from 'react';
import { Text } from 'react-native';
import { Header } from '~/components';
import { Container } from './styles';

type Props = {
  goBack?: () => void;
}
const Actions: React.FC<Props> = ({goBack}) => {
  return (
    <Container>
      <Header title="Ações" showIcon goBack={goBack} />
      <Text>Actions</Text>
    </Container>
  );
};

export default Actions;
