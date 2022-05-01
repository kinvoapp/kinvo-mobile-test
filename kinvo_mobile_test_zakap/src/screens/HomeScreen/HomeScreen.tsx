import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import * as S from './HomeScreen.style';
import {MenuCard} from '../../components/MenuCard';
import {Header} from '../../components/Header';
import sharesIcon from '../../assets/icons/icon-acoes.png';
import fundsIcon from '../../assets/icons/icon-fundos.png';
import socialSecurityIcon from '../../assets/icons/icon-previdencia.png';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <S.Container>
      <Header title="Desafio" />
      <S.CardWraper>
        <MenuCard
          onPress={() => navigation.navigate('StocksScreen')}
          source={sharesIcon}
          mainText={'Ações'}
          subText={'Nacionais'}
        />

        <MenuCard
          onPress={() => navigation.navigate('FundsScreen')}
          source={fundsIcon}
          mainText={'Fundos'}
          subText={'De investimentos'}
          isNew={true}
        />

        <MenuCard
          onPress={() => navigation.navigate('PensionScreen')}
          source={socialSecurityIcon}
          mainText={'Previdências'}
          subText={'Privadas'}
        />
      </S.CardWraper>
     
    </S.Container>
  );
};
