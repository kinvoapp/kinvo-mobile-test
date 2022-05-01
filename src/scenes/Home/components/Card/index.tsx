import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import Icon, { IconName } from '~/components/Icon';
import { Subtitle } from '~/styles/typography';
import {
  Chip,
  ChipContainer,
  Container,
  ImageContainer,
  InfoContainer,
  Title,
} from './styles';

interface CardProps extends TouchableOpacityProps {
  title: string;
  subTitle: string;
  icon: IconName;
  hasChip?: boolean;
}

const Card = ({ title, subTitle, icon, hasChip, ...rest }: CardProps) => {
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
        <View>
          <Title>{title}</Title>
          <Subtitle>{subTitle}</Subtitle>
        </View>

        {hasChip && (
          <ChipContainer>
            <Chip title="Novo" />
          </ChipContainer>
        )}
      </InfoContainer>
    </Container>
  );
};

export default Card;
