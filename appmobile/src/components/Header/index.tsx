import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, BackButton, Title } from './styles';

import left from '../../assets/left.png';

interface HeaderProps {
  title: string;
  backbutton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, backbutton }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {backbutton && (
        <BackButton onPress={() => navigation.goBack()}>
          <Image source={left} />
        </BackButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
