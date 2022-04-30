import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

const Loading = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ActivityIndicator size="large" color={colors.primary} />
    </Container>
  );
};

export default Loading;
