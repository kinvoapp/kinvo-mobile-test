import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import likeIconTrue from '../../assets/icons/likeIconTrue.png';
import likeIconFalse from '../../assets/icons/likeIconFalse.png';
import {StocksForm} from '../../models/StocksForm';
import * as S from './StocksCard.style';

interface StocksCardProps {
  stocks: StocksForm;
  onPress: () => void;
}



export const StocksCard = ({
  stocks: {minimumValue, name, profitability, ticker, isLiked}, onPress,
}: StocksCardProps) => {

  const likeIcon = isLiked ? likeIconTrue : likeIconFalse;
  const isProfitable = profitability >= 0 ? true : false
  const arrowIconColor = isProfitable ? '#AED335' : '#E85D1F'

  return (
    <S.Container>
      <S.CardTitleWraper>
        <View>
          <S.TitleText>{name}</S.TitleText>
          <S.SubTitleText>{ticker}</S.SubTitleText>
        </View>

        <S.LikeIcon onPress={onPress}>
          <Image source={likeIcon} />
        </S.LikeIcon>
      </S.CardTitleWraper>

      <S.DividerBorder></S.DividerBorder>

      <S.CardInfoWraper>
        <S.InfoNameContainer>
          <S.InfoText>Valor mínimo:</S.InfoText>
          <S.InfoText>Rentabilidade:</S.InfoText>
        </S.InfoNameContainer>

        <S.ValuesContainer>
          <S.SubTitleText>R$ {minimumValue}</S.SubTitleText>
          <S.ProfitabilityContainer>
            <S.ArrowIcon isUp={isProfitable} color={arrowIconColor}/>
            <S.RentabilityText isPositive={isProfitable}> {profitability}%</S.RentabilityText>
          </S.ProfitabilityContainer>
        </S.ValuesContainer>
      </S.CardInfoWraper>
    </S.Container>
  );
};


