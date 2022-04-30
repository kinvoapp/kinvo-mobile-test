import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import useStock from '~/hooks/useStock';
import { Info, Separator } from '~/components';
import Icon from '~/components/Icon';
import { returnCurrencyValue, returnPercentageValue } from '~/utils';
import { Heading2, Subtitle } from '~/styles/typography';
import { Container, Header, InfoContainer } from './styles';

const StockCard = ({
  id,
  name,
  ticker,
  minimumValue,
  profitability,
}: Stock) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { favoritesStocks, handleFavoriteStock } = useStock();

  const minimumValueFormatted = useMemo(() => {
    return returnCurrencyValue(minimumValue);
  }, [minimumValue]);

  const profitabilityFormatted = useMemo(() => {
    return returnPercentageValue(profitability);
  }, [profitability]);

  const handleFavoritePress = useCallback(() => {
    setIsFavorite(!isFavorite);

    handleFavoriteStock(id);
  }, [isFavorite, handleFavoriteStock, id]);

  useEffect(() => {
    setIsFavorite(
      favoritesStocks.some(favoriteStockId => favoriteStockId === id),
    );
  }, []);

  return (
    <Container>
      <Header>
        <View>
          <Heading2>{name}</Heading2>
          <Subtitle>{ticker}</Subtitle>
        </View>

        <TouchableOpacity onPress={handleFavoritePress}>
          <Icon name={isFavorite ? 'filledHeart' : 'unfilledHeart'} />
        </TouchableOpacity>
      </Header>

      <Separator />

      <InfoContainer>
        <Info
          label="Valor mínimo:"
          value={minimumValueFormatted}
          style={{ marginBottom: 15 }}
        />

        <Info label="Rentabilidade" value={profitabilityFormatted} />
      </InfoContainer>
    </Container>
  );
};

export default StockCard;
