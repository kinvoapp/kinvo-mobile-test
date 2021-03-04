import React from 'react';
import { ActivityIndicator } from 'react-native';

// Styles
import { Container } from './styles';

const Loading = () => (
  <Container>
    <ActivityIndicator
      size="large"
      color="#6f4dbf"
      styles={{ justifySelf: 'center' }}
    />
  </Container>
);

export default Loading;
