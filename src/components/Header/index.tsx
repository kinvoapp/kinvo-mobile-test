import React from 'react';
import {Container, HeaderText, NavigateBackContainer} from './styles';
import NavigateBack from '../../assets/navigateback.svg';
import {useNavigation} from '@react-navigation/core';

interface HeaderProps {
  title: string;
  hasGoBackButton?: Boolean;
}

export function Header({hasGoBackButton, title}: HeaderProps) {
  const {goBack} = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      {hasGoBackButton && (
        <NavigateBackContainer activeOpacity={0.8} onPress={handleNavigateBack}>
          <NavigateBack width={4} height={8} />
        </NavigateBackContainer>
      )}
      <HeaderText>{title}</HeaderText>
    </Container>
  );
}
