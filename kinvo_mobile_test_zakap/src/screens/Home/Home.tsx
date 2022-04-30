import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import * as S from './Home.style';
import {MenuCard} from '../../components/MenuCard';
import {Header} from '../../components/Header';
import sharesIcon from '../../assets/icons/icon-acoes.png';
import fundsIcon from '../../assets/icons/icon-fundos.png';
import socialSecurityIcon from '../../assets/icons/icon-previdencia.png';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <S.Container>
      <Header title="Desafio" />
      <S.CardWraper>
        <MenuCard
          onPress={() => navigation.navigate('Stocks')}
          source={sharesIcon}
          mainText={'Ações'}
          subText={'Nacionais'}
        />

        <MenuCard
          onPress={() => navigation.navigate('Funds')}
          source={fundsIcon}
          mainText={'Fundos'}
          subText={'De investimentos'}
          isNew={true}
        />

        <MenuCard
          onPress={() => navigation.navigate('Pension')}
          source={socialSecurityIcon}
          mainText={'Previdências'}
          subText={'Privadas'}
        />
      </S.CardWraper>
     
    </S.Container>
  );
};
