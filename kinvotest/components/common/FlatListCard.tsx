import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { DEFAULT_TEXT_COLOR, NAV_BORDER_COLOR } from '../../assets/constants/colors';
import { Badge } from './Badge';

export interface DisplayElement {
  label: string;
  value: string | number;
  format: string;
}

export interface FlatListCardProps {
  title: string;
  subtitle: string;
  badge?: string;
  children: ReactNode;
}

export const FlatListCard = ({ title, subtitle, badge, children }: FlatListCardProps) => {
  const {
    cardTitleStyle,
    divisorStyle,
    titleContainerStyle,
    cardSubtitleStyle,
    upperContainerStyle,
    containerStyle,
    badgeContainerStyle,
  } = styles;

  return (
    <Card>
      <View style={containerStyle}>
        <View style={upperContainerStyle}>
          <View style={titleContainerStyle}>
            <Text style={cardTitleStyle}>{title}</Text>
            <Text style={cardSubtitleStyle}>{subtitle}</Text>
          </View>
          <View style={badgeContainerStyle}>{badge ? <Badge type={badge} /> : null}</View>
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
