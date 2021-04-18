import {
  DEFAULT_BLUE,
  DEFAULT_BORDER_COLOR,
  DEFAULT_GREY,
  DEFAULT_PURPLE,
  DEFAULT_WHITE,
} from '../../assets/constants/colors';
import { Card } from '../../components/common/card';
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { getIcon, getPath } from '../../assets/utils/utils';
import { HomeCardIconsEnum } from '../../assets/constants/enums';

export interface HomeCardProps {
  titulo: string;
  subtitulo: string;
  novoBadge: Boolean;
  icon: HomeCardIconsEnum;
}

export const HomeCard = ({ titulo, subtitulo, novoBadge, icon }: HomeCardProps) => {
  const {
    cardTitleStyle,
    cardSubtitleStyle,
    badgeContainerStyle,
    leftContainerStyle,
    iconContainerStyle,
    badgeTextStyle,
    rightContainerStyle,
    middleContainerStyle,
    iconImageStyle,
  } = styles;
  const iconImage = getIcon(icon);
  const path = getPath(titulo);

  return (
    <Card path={path} height={120}>
      <View style={leftContainerStyle}>
        <View style={iconContainerStyle}>
          <Image style={iconImageStyle} source={iconImage} />
        </View>
      </View>
      <View style={middleContainerStyle}>
        <Text style={cardTitleStyle}>{titulo}</Text>
        <Text style={cardSubtitleStyle}>{subtitulo}</Text>
      </View>
      <View style={rightContainerStyle}>
        {novoBadge ? (
          <View style={badgeContainerStyle}>
            <Text style={badgeTextStyle}>Novo</Text>
          </View>
        ) : null}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconImageStyle: { alignSelf: 'center' },

  cardTitleStyle: {
    color: DEFAULT_PURPLE,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardSubtitleStyle: {
    color: DEFAULT_BORDER_COLOR,
    fontFamily: 'ms-semibold',
    fontSize: 10,
  },
  badgeContainerStyle: {
    flex: 0,
    height: 20,
    width: 56,
    backgroundColor: DEFAULT_BLUE,
    justifyContent: 'center',
    borderRadius: 30,
  },
  badgeTextStyle: { fontFamily: 'ms-medium', fontSize: 10, color: DEFAULT_WHITE, alignSelf: 'center' },
  leftContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  rightContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 20,
  },
  iconContainerStyle: {
    flex: 0,
    width: 56,
    height: 56,
    backgroundColor: DEFAULT_GREY,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },
  middleContainerStyle: { flex: 3, justifyContent: 'center' },
});
