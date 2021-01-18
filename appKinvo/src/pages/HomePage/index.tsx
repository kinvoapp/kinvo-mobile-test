import React from 'react';
import {useNavigation} from '@react-navigation/native'; //utilizar a navegação para outra tela

import {Container, HeaderHome, TextHeader} from './styles';
import ButtonHome from '../../components/ButtonHome';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const irSobre = (teste: string) => {
    navigation.navigate(teste);
  };

  return (
    <Container>
      <HeaderHome>
        <TextHeader>Desafio</TextHeader>
      </HeaderHome>

      <ButtonHome onPress={() => irSobre('ActionsScreen')}>
        ActionsScreen
      </ButtonHome>

      <ButtonHome onPress={() => irSobre('ScreenBackgrounds')}>
        ScreenBackgrounds
      </ButtonHome>

      <ButtonHome onPress={() => irSobre('ScreenPredictions')}>
        ScreenPredictions
      </ButtonHome>
    </Container>
  );
};

export default HomePage;
