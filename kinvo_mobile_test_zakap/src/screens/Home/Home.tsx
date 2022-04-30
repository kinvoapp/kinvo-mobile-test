import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import * as S from './Home.style';
import {MenuCard} from '../../components/MenuCard';
import sharesIcon from '../../assets/icon-acoes.png';
import fundsIcon from '../../assets/icon-fundos.png';
import socialSecurityIcon from '../../assets/icon-previdencia.png'

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <S.Container>
      <MenuCard
        onPress={() => navigation.navigate('Shares')}
        source={sharesIcon}
        mainText={'Ações'}
        subText={'Nacionais'}
      />

      <MenuCard
        onPress={() => navigation.navigate('Shares')}
        source={fundsIcon}
        mainText={'Fundos'}
        subText={'De investimentos'}
        isNew={true}
      />

      <MenuCard
        onPress={() => navigation.navigate('SocialSecurity')}
        source={socialSecurityIcon}
        mainText={'Previdências'}
        subText={'Privadas'}
      />
    </S.Container>
  );
};
