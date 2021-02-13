import React from 'react';

import { Image, ImageProps } from 'react-native';

import { Container, TextView, Title, Subtitle, ImageContent } from './styles';

interface CardProps {
  image: ImageProps;
  title: string;
  subtitle: string;
  onPress: () => void;
}

const CardItem: React.FC<CardProps> = ({ image, title, subtitle, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ImageContent>
        <Image source={image} />
      </ImageContent>
      <TextView>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextView>
    </Container>
  );
};

export default CardItem;
