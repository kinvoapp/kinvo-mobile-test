import React from 'react';
import {useNavigation} from '@react-navigation/native'; 
import {Container, HeaderHome, TextHeader} from './styles';
import ButtonHome from '../../components/ButtonHome';
import acoesImg from '../../assets/acoes.png';
import fundosImg from '../../assets/fundos.png';
import previdenciaImg from '../../assets/previdencia.png';


const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const irSobre = (adress: string) => {
    navigation.navigate(adress);
  };

  return (
    <Container>
      <HeaderHome>
        <TextHeader>Desafio</TextHeader>
      </HeaderHome>

      <ButtonHome
      img={acoesImg} title="Ações"
      onPress={() => irSobre('ActionsScreen')} >
        Nacionais
      </ButtonHome>

      <ButtonHome onPress={() => irSobre('ScreenBackgrounds')} img={fundosImg} title="Fundos">
        De Investimentos
      </ButtonHome>

      <ButtonHome onPress={() => irSobre('ScreenPredictions')} img={previdenciaImg} title="Previdências">
        Privadas
      </ButtonHome>
    </Container>
  );
};

export default HomePage;
