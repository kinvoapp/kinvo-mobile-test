import React from 'react';
import {ProfitabilityArrow} from '../ProfitabilityArrow';
import {
  Container,
  PensionTitleContainer,
  Title,
  PensionName,
  PensionType,
  PensionStatusContainer,
  PensionStatusText,
  PensionInfo,
  InfoText,
  ValueData,
  RentabilityData,
  RentabilityDataContainer,
  InfoContainer,
} from './styles';

export function PensionCard() {
  const isIncrease = false;
  const isNew = true;

  return (
    <Container>
      <PensionTitleContainer>
        <Title>
          <PensionName>Alaska Prev</PensionName>
          {isNew && (
            <PensionStatusContainer>
              <PensionStatusText>Novo</PensionStatusText>
            </PensionStatusContainer>
          )}
        </Title>
        <PensionType>MULTIMERCADOS</PensionType>
      </PensionTitleContainer>
      <PensionInfo>
        <InfoContainer style={{marginTop: 13}}>
          <InfoText>Valor mínimo:</InfoText>
          <ValueData>R$ 1000,00</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 18}}>
          <InfoText>Taxa:</InfoText>
          <ValueData>2,00%</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 13}}>
          <InfoText>Resgate:</InfoText>
          <ValueData>D+ 10</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 20}}>
          <InfoText>Rentabilidade:</InfoText>
          <RentabilityDataContainer>
            <ProfitabilityArrow isIncrease={isIncrease} />
            <RentabilityData increase={isIncrease}>-27,50%</RentabilityData>
          </RentabilityDataContainer>
        </InfoContainer>
      </PensionInfo>
    </Container>
  );
}
