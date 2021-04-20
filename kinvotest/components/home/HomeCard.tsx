import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE } from '../../assets/constants/colors';
import { Card } from '../../components/common/Card';
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { getIcon, getPath } from '../../assets/utils/utils';
import { HomeCardIconsEnum } from '../../assets/constants/enums';
import { Badge } from '../common/Badge';

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
    leftContainerStyle,
    iconContainerStyle,
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
      <View style={rightContainerStyle}>{novoBadge ? <Badge type={'Novo'} /> : null}</View>
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
  leftContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 10,
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
