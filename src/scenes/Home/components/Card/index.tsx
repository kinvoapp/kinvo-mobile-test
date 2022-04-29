import React from 'react';
import Icon, { IconName } from '~/components/Icon';
import {
  Container,
  ImageContainer,
  InfoContainer,
  SubTitle,
  Title,
} from './styles';

interface CardProps {
  title: string;
  subTitle: string;
  icon: IconName;
}

const Card = ({ title, subTitle, icon }: CardProps) => {
  return (
    <Container
      activeOpacity={0.5}
      hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
    >
      <ImageContainer>
        <Icon name={icon} />
      </ImageContainer>

      <InfoContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </InfoContainer>
    </Container>
  );
};

export default Card;
