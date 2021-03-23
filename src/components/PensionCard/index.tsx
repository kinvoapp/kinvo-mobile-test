/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {currencyFormatToBRL} from '../../utils/currencyFormatToBRL';
import {formatShortName} from '../../utils/nameFormat';
import {percentFormat} from '../../utils/percentFormat';
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

interface Pension {
  name: string;
  type: string;
  tax: number;
  minimumValue: number;
  redemptionTerm: number;
  profitability: number;
  isNew?: boolean;
}

export function PensionCard({
  name,
  type,
  tax,
  minimumValue,
  profitability,
  redemptionTerm,
  isNew,
}: Pension) {
  const isIncrease = profitability > 0;
  const shortName = formatShortName(name);

  return (
    <Container>
      <PensionTitleContainer>
        <Title>
          <PensionName>{shortName}</PensionName>
          {isNew && (
            <PensionStatusContainer>
              <PensionStatusText>Novo</PensionStatusText>
            </PensionStatusContainer>
          )}
        </Title>
        <PensionType>{type}</PensionType>
      </PensionTitleContainer>
      <PensionInfo>
        <InfoContainer style={{marginTop: 13}}>
          <InfoText>Valor mínimo:</InfoText>
          <ValueData>{currencyFormatToBRL(minimumValue)}</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 18}}>
          <InfoText>Taxa:</InfoText>
          <ValueData>{percentFormat(tax)}</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 13}}>
          <InfoText>Resgate:</InfoText>
          <ValueData>{`D+ ${redemptionTerm}`}</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 20}}>
          <InfoText>Rentabilidade:</InfoText>
          <RentabilityDataContainer>
            <ProfitabilityArrow isIncrease={isIncrease} />
            <RentabilityData increase={isIncrease}>
              {percentFormat(profitability)}
            </RentabilityData>
          </RentabilityDataContainer>
        </InfoContainer>
      </PensionInfo>
    </Container>
  );
}
