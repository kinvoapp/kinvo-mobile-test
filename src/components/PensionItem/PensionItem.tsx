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

interface PensionItensProps {
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}

export function PensionItem({
  name,
  type,
  minimumValue,
  tax,
  redemptionTerm,
  profitability,
}: PensionItensProps) {
  return (
    <Container>
      <Content>
        <Header>
          <Name>{name}</Name>
          <Status>
            <StatusText>Novo</StatusText>
          </Status>
        </Header>
        <Type>{type}</Type>
      </Content>

      <Info>
        <InfoItem>
          <InfoText>Valor mínimo:</InfoText>
          <Value>{minimumValue}</Value>
        </InfoItem>
        <InfoItem>
          <InfoText>Taxa:</InfoText>
          <Value>{tax}</Value>
        </InfoItem>
        <InfoItem>
          <InfoText>Resgate:</InfoText>
          <Value>D+ {redemptionTerm}</Value>
        </InfoItem>
        <InfoItem>
          <InfoText>Rentabilidade:</InfoText>
          <Value>{profitability}</Value>
        </InfoItem>
      </Info>
    </Container>
  );
}
