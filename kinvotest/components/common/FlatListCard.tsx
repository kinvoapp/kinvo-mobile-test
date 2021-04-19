import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { DEFAULT_TEXT_COLOR, NAV_BORDER_COLOR } from '../../assets/constants/colors';

export interface DisplayElement {
  label: string;
  value: string | number;
  format: string;
}

export interface FlatListCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const FlatListCard = ({ title, subtitle, children }: FlatListCardProps) => {
  const { cardTitleStyle, divisorStyle, cardSubtitleStyle, containerStyle, titleContainerStyle } = styles;

  return (
    <Card>
      <View style={containerStyle}>
        <View>
          <View style={titleContainerStyle}>
            <Text style={cardTitleStyle}>{title}</Text>
            <Text style={cardSubtitleStyle}>{subtitle}</Text>
          </View>
        </View>
        <View style={divisorStyle} />
        {children}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconImageStyle: { alignSelf: 'center' },
  titleContainerStyle: {
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
  containerStyle: { flex: 3, justifyContent: 'center', padding: 15 },
});
