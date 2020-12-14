import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Header } from '~/components';
import { Container } from './styles';

type Props = {
  goToActions?: () => void;
  goToPredictions?: () => void;
  goToFunds?: () => void;
}
const Home: React.FC<Props> = ({goToActions, goToPredictions, goToFunds}) => {
  return (
    <Container>
      <Header title="Desafio" />
      <Text>Home</Text>

      <TouchableOpacity onPress={goToActions}>
        <Text>Button goToActions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToPredictions}>
        <Text>Button goToPredictions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToFunds}>
        <Text>Button goToFunds</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
