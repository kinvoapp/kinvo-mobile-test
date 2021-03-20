import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Container,
  Content,
  SvgContainer,
  TextContainer,
  TitleText,
  SubtitleText,
  NewCardContainer,
  NewCardText,
} from './styles';

interface NavigationCardProps {
  CardTitle: string;
  CardSubtitle: string;
  CardRoute: string;
  isNew?: Boolean;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  children,
  CardTitle,
  CardSubtitle,
  CardRoute,
  isNew,
}) => {
  const {navigate} = useNavigation();

  function handleCardPress() {
    navigate(CardRoute);
  }

  return (
    <Container onPress={handleCardPress} activeOpacity={0.8}>
      <Content>
        <SvgContainer>{children}</SvgContainer>
        <TextContainer>
          <TitleText>{CardTitle}</TitleText>
          <SubtitleText>{CardSubtitle}</SubtitleText>
        </TextContainer>
      </Content>
      {isNew && (
        <NewCardContainer>
          <NewCardText>Novo</NewCardText>
        </NewCardContainer>
      )}
    </Container>
  );
};
