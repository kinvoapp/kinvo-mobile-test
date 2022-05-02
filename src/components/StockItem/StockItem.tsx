import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import FavoriteNull from '../../assets/icons/FavoriteIconNull.svg';
import FavoriteFull from '../../assets/icons/FavoriteIconFull.svg';

interface StockItensProps {
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
}
import {
  Container,
  Content,
  InfoItem,
  InfoText,
  Value,
  Header,
  Name,
  Type,
  Info,
  Status,
} from './styles';
export function StockItem({
  name,
  ticker,
  minimumValue,
  profitability,
}: StockItensProps) {
  const [isFavoriteStock, setIsFavoriteStock] = useState(false);

  async function handleFavoriteButton() {
    setIsFavoriteStock(state => !state);
  }

  return (
    <Container>
      <Content>
        <Header>
          <Name>{name}</Name>
          <Status>
            <TouchableOpacity onPress={handleFavoriteButton}>
              {isFavoriteStock ? (
                <FavoriteFull width={24} height={24} />
              ) : (
                <FavoriteNull width={24} height={24} />
              )}
            </TouchableOpacity>
          </Status>
        </Header>
        <Type>{ticker}</Type>
      </Content>

      <Info>
        <InfoItem>
          <InfoText>Valor mínimo:</InfoText>
          <Value>{minimumValue}</Value>
        </InfoItem>
        <InfoItem>
          <InfoText>Rentabilidade:</InfoText>
          <Value>{profitability}</Value>
        </InfoItem>
      </Info>
    </Container>
  );
}
