import React from 'react';
import {View, ImageSourcePropType, Image} from 'react-native';
import * as S from './MenuCard.style';

interface MenuCardProps {
  onPress: () => void;
  source: ImageSourcePropType;
  mainText: string;
  subText: string;
  isNew?: boolean;
}

export const MenuCard = ({
  onPress,
  source,
  mainText,
  subText,
  isNew,
}: MenuCardProps) => {
  return (
    <S.NavigationPressable onPress={onPress}>
      <S.NavigationWraper>
        <S.NavigationLogoContainer>
          <Image source={source} />
        </S.NavigationLogoContainer>

        <View>
          <S.MainText>{mainText}</S.MainText>
          <S.SubText>{subText}</S.SubText>
        </View>
      </S.NavigationWraper>

      {isNew && (
        <S.NewTagWraper>
          <S.NewTagText>Novo</S.NewTagText>
        </S.NewTagWraper>
      )}
    </S.NavigationPressable>
  );
};
