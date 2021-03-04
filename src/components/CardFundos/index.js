import React from 'react';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import {
  Container,
  TextContainer,
  Text,
  InfoContainer,
  HeadContainer,
  View,
} from './styles';

// Components
import Tag from '../Tag';

const CardFundos = ({ data }) => (
  <Container>
    <HeadContainer>
      <TextContainer>
        <Text title numberOfLines={1}>
          {data.name}
        </Text>
        <Text subtitle>{data.type}</Text>
      </TextContainer>
      {'isNew' && <Tag />}
    </HeadContainer>
    <InfoContainer>
      <View>
        <Text attributes>Classificação</Text>

        <Rating
          startingValue={data.rating}
          imageSize={18}
          style={{ paddingVertical: 10 }}
        />
      </View>
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

export default CardFundos;
