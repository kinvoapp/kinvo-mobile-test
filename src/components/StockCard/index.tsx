/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Container,
  StockTitleContainer,
  Title,
  StockName,
  StockTicker,
  StockInfo,
  InfoContainer,
  InfoText,
  ValueData,
  RentabilityData,
  RentabilityDataContainer,
  RedArrow,
  GreenArrow,
} from './styles';
import Favorite from '../../assets/heart.svg';
import NotFavorite from '../../assets/heartoutline.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {currencyFormatToBRL} from '../../utils/currencyFormatToBRL';

interface Stock {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}

export function StockCard({name, ticker, minimumValue, profitability}: Stock) {
  const [favoriteStock, setFavoriteStock] = useState(false);
  const isIncrease = true;

  function handleFavoriteButton() {
    setFavoriteStock(state => !state);
  }

  return (
    <Container>
      <StockTitleContainer>
        <Title>
          <StockName>{name}</StockName>
          <StockTicker>{ticker}</StockTicker>
        </Title>
        <TouchableOpacity onPress={handleFavoriteButton}>
          {favoriteStock ? (
            <Favorite width={24} height={24} />
          ) : (
            <NotFavorite width={24} height={24} />
          )}
        </TouchableOpacity>
      </StockTitleContainer>
      <StockInfo>
        <InfoContainer>
          <InfoText>Valor mínimo:</InfoText>
          <ValueData>{currencyFormatToBRL(minimumValue)}</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 15}}>
          <InfoText>Rentabilidade:</InfoText>
          <RentabilityDataContainer>
            {isIncrease ? <GreenArrow /> : <RedArrow />}
            <RentabilityData increase={isIncrease}>
              {profitability}
            </RentabilityData>
          </RentabilityDataContainer>
        </InfoContainer>
      </StockInfo>
    </Container>
  );
}
