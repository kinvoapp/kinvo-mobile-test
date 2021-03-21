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

export function StockCard() {
  const [favoriteStock, setFavoriteStock] = useState(false);
  const isIncrease = true;

  function handleFavoriteButton() {
    setFavoriteStock(state => !state);
  }

  return (
    <Container>
      <StockTitleContainer>
        <Title>
          <StockName>Magazine Luiza</StockName>
          <StockTicker>MGLU3</StockTicker>
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
          <ValueData>R$ 24,17</ValueData>
        </InfoContainer>
        <InfoContainer style={{marginTop: 15}}>
          <InfoText>Rentabilidade:</InfoText>
          <RentabilityDataContainer>
            {isIncrease ? <GreenArrow /> : <RedArrow />}
            <RentabilityData increase={isIncrease}>-27%</RentabilityData>
          </RentabilityDataContainer>
        </InfoContainer>
      </StockInfo>
    </Container>
  );
}
