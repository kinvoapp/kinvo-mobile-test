import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import {
  DEFAULT_PURPLE,
  DEFAULT_TEXT_COLOR,
  DISABLED_COLOR_TEXT,
  NAV_BORDER_COLOR,
} from '../../assets/constants/colors';
import { Badge } from './Badge';
import { Icon } from 'react-native-elements';

export interface DisplayElement {
  label: string;
  value: string | number;
  format: string;
}

export interface FlatListCardProps {
  title: string;
  subtitle: string;
  showFav?: Boolean;
  favorite?: Boolean;
  badge?: string;
  children: ReactNode;
  disabled?: Boolean;
  onPress: () => void;
}

export const FlatListCard = ({
  title,
  subtitle,
  badge,
  disabled = false,
  showFav,
  favorite,
  children,
  onPress,
}: FlatListCardProps) => {
  const {
    cardTitleStyle,
    divisorStyle,
    titleContainerStyle,
    cardSubtitleStyle,
    upperContainerStyle,
    containerStyle,
    badgeContainerStyle,
  } = styles;

  const finalTextColor = disabled ? DISABLED_COLOR_TEXT : DEFAULT_TEXT_COLOR;

  return (
    <Card disabled={disabled}>
      <View style={containerStyle}>
        <View style={upperContainerStyle}>
          <View style={titleContainerStyle}>
            <Text style={[cardTitleStyle, { color: finalTextColor }]}>{title}</Text>
            <Text style={[cardSubtitleStyle, { color: finalTextColor }]}>{subtitle}</Text>
          </View>
          <View style={badgeContainerStyle}>
            {showFav ? (
              <Icon
                type={'font-awesome'}
                size={24}
                color={DEFAULT_PURPLE}
                name={favorite ? 'heart' : 'heart-o'}
                onPress={onPress}
              />
            ) : null}
            {badge ? <Badge type={badge} /> : null}
          </View>
        </View>
        <View style={divisorStyle} />
        {children}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  upperContainerStyle: { flex: 1, flexDirection: 'row' },
  badgeContainerStyle: { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' },
  iconImageStyle: { alignSelf: 'center' },
  titleContainerStyle: {
    flex: 3,
    marginBottom: 10,
  },
  cardTitleStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 3,
  },
  divisorStyle: {
    paddingHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: NAV_BORDER_COLOR,
    borderBottomWidth: 1,
  },
  cardSubtitleStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-semibold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  containerStyle: { flex: 1, justifyContent: 'center', padding: 15 },
});
