import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon, { IconName } from '~/components/Icon';
import { Subtitle } from '~/styles/typography';
import { Container, ImageContainer, InfoContainer, Title } from './styles';

interface CardProps extends TouchableOpacityProps {
  title: string;
  subTitle: string;
  icon: IconName;
}

const Card = ({ title, subTitle, icon, ...rest }: CardProps) => {
  return (
    <Container
      activeOpacity={0.5}
      hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
      {...rest}
    >
      <ImageContainer>
        <Icon name={icon} />
      </ImageContainer>

      <InfoContainer>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
      </InfoContainer>
    </Container>
  );
};

export default Card;
