import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import left from '../../assets/left.png';
import { Container, BackButton, Title } from './styles';

interface HeaderProps {
  title: string;
  backButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, backButton }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {backButton && (
        <BackButton onPress={navigation.goBack}>
          <Image source={left} />
        </BackButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
