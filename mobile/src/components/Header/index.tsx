import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, GoBackButton, TitleText } from './styles';

interface HeaderProps {
  children: string;
  goBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, goBack, ...rest }) => {
  const navigation = useNavigation();

  return (
    <Container {...rest}>
      {goBack && (
        <GoBackButton testID="goBackButton" onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={14} color="#FFFFFF" />
        </GoBackButton>
      )}
      <TitleText>{children}</TitleText>
    </Container>
  );
};

export default Header;
