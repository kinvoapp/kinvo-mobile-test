import React from 'react';
import * as S from './ErrorCard.style';

interface ErrorCardProps {
  onPress: () => void
}

export const ErrorCard = ({onPress}: ErrorCardProps) => {
  return (
    <S.Container>
      <S.MainText>Ocorreu um erro.</S.MainText>
      <S.SubText>Não foi posivel se conectar ao banco de fundos.</S.SubText>
      <S.ReTryPressable onPress={onPress}>
        <S.PressableText>TENTAR NOVAMENTE</S.PressableText>
      </S.ReTryPressable>
    </S.Container>
  );
};
