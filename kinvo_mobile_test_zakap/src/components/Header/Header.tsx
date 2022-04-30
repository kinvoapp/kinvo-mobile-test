import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import * as S from './Header.style';
import goBack from '../../assets/icons/icon-go-back.png';

interface HeaderProps {
  title: string;
  isBackButton?: boolean;
  onPress?: () => void 
}

export const Header = ({title, isBackButton, onPress}: HeaderProps) => {
  return (
    <S.Container>
      {isBackButton && 
        <S.BackPressable onPress={onPress}>
            <Image source={goBack} />
        </S.BackPressable>
      }
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
