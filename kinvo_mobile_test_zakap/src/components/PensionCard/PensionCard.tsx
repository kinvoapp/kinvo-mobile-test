import React from 'react';
import {View} from 'react-native';
import {PensionForm} from '../../models/PensionForm';
import * as S from './PensionCard.style';

interface PensionCardProps {
  pension: PensionForm;
}

export const PensionCard = ({
  pension: {minimumValue, name, profitability, redemptionTerm, tax, type},
}: PensionCardProps) => {
  const isProfitable = profitability >= 0 ? true : false;
  const arrowIconColor = isProfitable ? '#AED335' : '#E85D1F';

  return (
    <S.Container>
      <S.CardTitleWraper>
        <View>
          <S.TitleText>{name}</S.TitleText>
          <S.SubTitleText>{type}</S.SubTitleText>
        </View>

        <View></View>
      </S.CardTitleWraper>

      <S.DividerBorder></S.DividerBorder>

      <S.CardInfoWraper>
        <S.InfoNameContainer>
          <S.InfoText>Valor mínimo:</S.InfoText>

          <S.InfoText>Taxa:</S.InfoText>
          <S.InfoText>Resgate:</S.InfoText>

          <S.InfoText>Rentabilidade:</S.InfoText>
        </S.InfoNameContainer>

        <S.ValuesContainer>
          <S.SubTitleText>R$ {minimumValue}</S.SubTitleText>

          <S.SubTitleText>{tax}%</S.SubTitleText>
          <S.SubTitleText>D+ {redemptionTerm}</S.SubTitleText>

          <S.ProfitabilityContainer>
            <S.ArrowIcon isUp={isProfitable} color={arrowIconColor} />
            <S.RentabilityText isPositive={isProfitable}>
              {' '}
              {profitability}%
            </S.RentabilityText>
          </S.ProfitabilityContainer>
        </S.ValuesContainer>
      </S.CardInfoWraper>
    </S.Container>
  );
};
