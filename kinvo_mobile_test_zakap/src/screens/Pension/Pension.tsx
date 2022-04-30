import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParams';
import {Header} from '../../components/Header';
import * as S from './Pension.style';

type PensionScreenProp = StackNavigationProp<
  RootStackParamList,
  'Pension'
>;

export const Pension = () => {
  const navigation = useNavigation<PensionScreenProp>();

  return (
    <S.Container>
      <Header
        title="Previdências"
        isBackButton={true}
        onPress={() => navigation.navigate('Home')}
      />

      <S.CardWraper>
          
      </S.CardWraper>
    </S.Container>
  );
};
