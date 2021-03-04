import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

// Styles
import { Container, IconContainer, Image, TextContainer, Text } from './styles';

// Components
import Tag from '../Tag';

const Card = ({ data }) => {
  const navigation = useNavigation();

  const {
 icon, title, subtitle, route, isNew, } = data;

  const handleNavigation = useCallback(() => {
    navigation.navigate(route);
  }, [navigation, route]);

  return (
    <Container onPress={() => handleNavigation()}>
      <>
        <IconContainer>
          <Image source={icon} resizeMode="cover" />
        </IconContainer>
        <TextContainer>
          <Text title>{title}</Text>
          <Text subtitle>{subtitle}</Text>
        </TextContainer>
      </>
      {isNew && <Tag />}
    </Container>
  );
};

export default Card;
