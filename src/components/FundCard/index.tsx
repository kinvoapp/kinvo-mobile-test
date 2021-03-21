import React from 'react';
import {
  Container,
  FundTitleContainer,
  Title,
  FundName,
  FundType,
  FundStatusContainer,
  FundStatusText,
  FundInfo,
  InfoContainer,
  RatingData,
  InfoText,
  ValueData,
  RentabilityData,
  RentabilityDataContainer,
  RedArrow,
  GreenArrow,
} from './styles';

import StarOutline from '../../assets/staroutline.svg';
import Star from '../../assets/star.svg';

export function FundCard() {
  const isIncrease = false;
  const isNew = true;

  return (
    <Container>
      <FundTitleContainer>
        <Title>
          <FundName>Alaska Black</FundName>
          {isNew && (
            <FundStatusContainer>
              <FundStatusText>Novo</FundStatusText>
            </FundStatusContainer>
          )}
        </Title>
        <FundType>MULTIMERCADOS</FundType>
      </FundTitleContainer>
      <FundInfo>
        <InfoContainer>
          <InfoText>Classificação:</InfoText>
          <RatingData>
            <Star height={16} width={16} />
            <Star height={16} width={16} />

            <Star height={16} width={16} />

            <Star height={16} width={16} />

            <StarOutline height={16} width={16} />
          </RatingData>
        </InfoContainer>
        <InfoContainer>
          <InfoText>Valor mínimo:</InfoText>
          <ValueData>R$ 24,17</ValueData>
        </InfoContainer>
        <InfoContainer>
          <InfoText>Rentabilidade:</InfoText>
          <RentabilityDataContainer>
            {isIncrease ? <GreenArrow /> : <RedArrow />}
            <RentabilityData increase={isIncrease}>-27%</RentabilityData>
          </RentabilityDataContainer>
        </InfoContainer>
      </FundInfo>
    </Container>
  );
}
