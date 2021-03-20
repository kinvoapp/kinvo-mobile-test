import React from 'react';
import {Text} from 'react-native';
import {Container, NavigationImage} from './styles';

export function NavigationCard(cardImage: any) {
  return (
    <Container>
      <NavigationImage source={cardImage} />
      <Text>Memes</Text>
    </Container>
  );
}
