import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CircleContainer } from './styles';

import backImg from '../../assets/back.png';

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <CircleContainer onPress={() => navigation.goBack()}>
        <Image source={backImg} />
      </CircleContainer>
    </>
  );
};

export default BackButton;
