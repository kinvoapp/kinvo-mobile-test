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
  isNew?: Boolean;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  children,
  CardTitle,
  CardSubtitle,
  isNew,
}) => {
  return (
    <Container>
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
