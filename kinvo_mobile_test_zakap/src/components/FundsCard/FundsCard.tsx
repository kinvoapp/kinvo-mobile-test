import React from 'react';
import {Image, View} from 'react-native';
import starColored from '../../assets/icons/star_colored.png';
import starEmpty from '../../assets/icons/star_empty.png';
import closedStar from '../../assets/icons/star_closed.png';
import {FundsForm} from '../../models/FundsForm';
import * as S from './FundsCard.style';

interface FundsCardProps {
  funds: FundsForm;
}

export const FundsCard = ({
  funds: {name, minimumValue, profitability, rating, status, type},
}: FundsCardProps) => {
  const isProfitable = profitability >= 0 ? true : false;

  const checkIconColors = () => {
    if (status === 2) {
      return 'grey';
    }
    return isProfitable ? '#AED335' : '#E85D1F';
  };

  const rentabilityIconColor = checkIconColors();

  const ratingStars = (number: number) => {
    let counter = 0;
    let starsBar = [];
    for (let i = counter; i < number; i++) {
      counter += 1;
      starsBar.push(starColored);
    }
    for (let i = counter; i < 5; i++) {
      counter += 1;
      starsBar.push(starEmpty);
    }
    return starsBar.map(star => {
      console.log(status);
      return (
        <>
          {status === 2 ? (
            <Image source={star} style={{tintColor: 'gray'}} />
          ) : (
            <Image source={star} />
          )}
        </>
      );
    });
  };

  const checkStatusTag = () => {
    if (status === 1) {
      return (
        <S.NewTagWraper>
          <S.NewTagText>Novo</S.NewTagText>
        </S.NewTagWraper>
      );
    }
    if (status === 2) {
      return (
        <S.ClosedTagWraper>
          <S.ClosedTagText>Fechado</S.ClosedTagText>
        </S.ClosedTagWraper>
      );
    }
  };

  const statusTag = checkStatusTag();
  const cardRating = ratingStars(rating);

  return (
    <S.Container status={status}>
      <S.CardTitleWraper>
        <S.NameContainer>
          <S.TitleText>{name}</S.TitleText>
          <S.SubTitleText>{type}</S.SubTitleText>
        </S.NameContainer>

        <View>{statusTag}</View>
      </S.CardTitleWraper>

      <S.DividerBorder></S.DividerBorder>

      <S.CardInfoWraper>
        <S.InfoNameContainer>
          <S.InfoText>Classificação:</S.InfoText>
          <S.InfoText>Valor mínimo:</S.InfoText>
          <S.InfoText>Rentabilidade:</S.InfoText>
        </S.InfoNameContainer>

        <S.ValuesContainer>
          <S.StarsContainer>{cardRating}</S.StarsContainer>

          <S.SubTitleText>R$ {minimumValue}</S.SubTitleText>

          <S.ProfitabilityContainer>
            <S.ArrowIcon isUp={isProfitable} color={rentabilityIconColor} />
            <S.RentabilityText color={rentabilityIconColor}>
              {' '}
              {profitability}%
            </S.RentabilityText>
          </S.ProfitabilityContainer>
        </S.ValuesContainer>
      </S.CardInfoWraper>
    </S.Container>
  );
};
