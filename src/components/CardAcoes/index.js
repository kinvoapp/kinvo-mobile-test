import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TextContainer,
  Text,
  InfoContainer,
  HeadContainer,
  View,
} from './styles';

// Components
import FavouriteButton from '../FavouriteButton';

const CardAcoes = ({ data, clickFav }) => {
  const handleFav = useCallback(() => {
    clickFav(data.id);
  }, [clickFav, data.id]);

  return (
    <Container>
      <HeadContainer>
        <TextContainer>
          <Text title numberOfLines={1}>
            {data.name}
          </Text>
          <Text subtitle>{data.ticker}</Text>
        </TextContainer>
        <FavouriteButton onPress={handleFav} isFavourite={data.favourite} />
      </HeadContainer>
      <InfoContainer>
        <View>
          <Text attributes>Valor mínimo</Text>
          <Text value>R$ {data.minimumValue}</Text>
        </View>
        <View>
          <Text attributes>Rentabilidade</Text>
          <Text value color danger={data.profitability < 0}>
            <Icon name={data.profitability < 0 ? 'arrow-down' : 'arrow-up'} />{' '}
            {data.profitability}%
          </Text>
        </View>
      </InfoContainer>
    </Container>
  );
};

export default CardAcoes;
