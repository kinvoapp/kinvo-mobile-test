import React from 'react';

// Styles
import { Container, Text, Button } from './styles';

const Error = ({ screen, onPress }) => (
  <Container onPress={() => onPress()}>
    <Text title>Ocorreu um erro.</Text>
    <Text subtitle>Não foi possível se conectar ao banco de {screen}.</Text>
    <Button>
      <Text button>TENTAR NOVAMENTE</Text>
    </Button>
  </Container>
);

export default Error;
