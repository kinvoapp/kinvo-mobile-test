import React from 'react';
import { ActivityIndicator } from 'react-native';

import { color } from '../../styles/colors';
import { Container } from './styles';

const Spinner: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color={color.PRIMARY} size="large" />
    </Container>
  );
};

export default Spinner;
