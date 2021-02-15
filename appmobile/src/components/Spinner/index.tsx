import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '../../styles/colors';
import { Container } from './styles';

const Spinner: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color={colors.PRIMARY} size="large" />
    </Container>
  );
};

export default Spinner;
