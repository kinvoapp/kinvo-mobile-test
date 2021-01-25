import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Status from '../../components/Status';

import {
  Container,
  HomeMenu,
  HomeMenuItem,
  LogoContainer,
  TitleContainer,
  TitleText,
  SubtitleText,
} from './styles';

import FundsImg from '../../assets/funds.png';
import StocksImg from '../../assets/stocks.png';
import PensionsImg from '../../assets/pensions.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>Desafio</Header>
      <HomeMenu>
        <HomeMenuItem
          testID="stocksMenuItem"
          onPress={() => navigation.navigate('Stocks')}
        >
          <LogoContainer>
            <Image source={StocksImg} style={{ height: '50%', width: '45%' }} />
          </LogoContainer>
          <TitleContainer>
            <TitleText>Ações</TitleText>
            <SubtitleText>Nacionais</SubtitleText>
          </TitleContainer>
        </HomeMenuItem>
        <HomeMenuItem
          testID="fundsMenuItem"
          onPress={() => navigation.navigate('Funds')}
        >
          <LogoContainer>
            <Image source={FundsImg} style={{ height: '50%', width: '45%' }} />
          </LogoContainer>
          <TitleContainer>
            <TitleText>Fundos</TitleText>
            <SubtitleText>De Investimentos</SubtitleText>
          </TitleContainer>
          <Status type="new" />
        </HomeMenuItem>
        <HomeMenuItem
          testID="pensionsMenuItem"
          onPress={() => navigation.navigate('Pensions')}
        >
          <LogoContainer>
            <Image
              source={PensionsImg}
              style={{ height: '50%', width: '45%' }}
            />
          </LogoContainer>
          <TitleContainer>
            <TitleText>Previdências</TitleText>
            <SubtitleText>Privadas</SubtitleText>
          </TitleContainer>
        </HomeMenuItem>
      </HomeMenu>
    </Container>
  );
};

export default Home;
