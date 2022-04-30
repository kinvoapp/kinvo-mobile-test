import React from 'react';
import { ViewStyle } from 'react-native';
import { Color } from '~/styles/colors';
import { Container, Title } from './styles';

interface ChipProps {
  title: string;
  style?: ViewStyle;
  color?: Color;
  titleColor?: Color;
}

const Chip = ({ title, style, color, titleColor }: ChipProps) => {
  return (
    <Container style={style} color={color}>
      <Title color={titleColor}>{title}</Title>
    </Container>
  );
};

export default Chip;
