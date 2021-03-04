import React from 'react';
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

const CardPrevidencias = ({ data }) => (
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
        <Text attributes>Valor mínimo</Text>
        <Text value>R$ {data.minimumValue}</Text>
      </View>
      <View>
        <Text attributes>Taxa</Text>
        <Text value>{data.tax}%</Text>
      </View>
      <View>
        <Text attributes>Resgate</Text>
        <Text value>D+ {data.redemptionTerm}</Text>
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

export default CardPrevidencias;
