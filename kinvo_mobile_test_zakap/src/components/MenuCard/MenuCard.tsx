import React from 'react';
import {View, Text, ImageSourcePropType} from 'react-native';
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
          <S.NavigationLogo source={source} />
        </S.NavigationLogoContainer>

        <View>
          <Text>{mainText}</Text>
          <Text>{subText}</Text>
        </View>
      </S.NavigationWraper>

      {isNew && (
        <View>
          <Text>Novo</Text>
        </View>
      )}
    </S.NavigationPressable>
  );
};
