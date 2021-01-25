import React from 'react';

import { Container, TitleHeader } from './styles';

import BackButton from '../BackButton';
import { View } from 'react-native';

interface IHeaderProps {
  title: string;
  thereIsAButton?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, thereIsAButton }) => {
  return (
    <Container>
      {thereIsAButton ? <BackButton /> : <View />}
      <TitleHeader>{title}</TitleHeader>
    </Container>
  );
};

export default Header;
