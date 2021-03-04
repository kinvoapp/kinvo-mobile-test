import React from 'react';

// Styles
import { Container, Text } from './styles';

const Button = ({ label, margin, active, onPress }) => (
  <Container onPress={onPress} margin={margin} active={active}>
    <Text>{label}</Text>
  </Container>
);

export default Button;
