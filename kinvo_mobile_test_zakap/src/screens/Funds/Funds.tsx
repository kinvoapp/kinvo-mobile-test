import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import * as S from './Funds.style';
import {MenuCard} from '../../components/MenuCard';
import {Header} from '../../components/Header';
import sharesIcon from '../../assets/icons/icon-acoes.png';
import fundsIcon from '../../assets/icons/icon-fundos.png';
import socialSecurityIcon from '../../assets/icons/icon-previdencia.png';
import {Text} from 'react-native';

type FundsScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Funds = () => {
  const navigation = useNavigation<FundsScreenProp>();

  return (
    <S.Container>
      <Header
        title="Fundos"
        isBackButton={true}
        onPress={() => navigation.navigate('Home')}
      />
      <S.CardWraper>
        
      </S.CardWraper>
    </S.Container>
  );
};
