import React from 'react';

import {
  Container,
  Content,
  InfoItem,
  InfoText,
  Value,
  Header,
  Name,
  StatusText,
  Type,
  Info,
  Status,
} from './styles';

interface FundsItensProps {
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}

export function FundsItem({
  name,
  type,
  minimumValue,
  rating,
  profitability,
  status,
}: FundsItensProps) {
  return (
    <Container>
      <Content>
        <Header>
          <Name>{name}</Name>
          <Status>
            <StatusText>{status}</StatusText>
          </Status>
        </Header>
        <Type>{type}</Type>
      </Content>

      <Info>
        <InfoItem>
          <InfoText>Classificação:</InfoText>
          <Value>{rating}</Value>
        </InfoItem>
        <InfoItem>
          <InfoText>Valor mínimo:</InfoText>
          <Value>R$ {minimumValue}</Value>
        </InfoItem>
        <InfoItem>
          <InfoText>Rentabilidade:</InfoText>
          <Value>{profitability}</Value>
        </InfoItem>
      </Info>
    </Container>
  );
}
