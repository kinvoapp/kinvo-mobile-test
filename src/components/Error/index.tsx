import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Container, Retry, Title, Describe, TextButton } from './styles';

export function Error({ local }) {

  const navigation = useNavigation();

  return (
    <Container>
      <Title>Ocorreu um erro.</Title>
      <Describe>Não foi possível se conectar ao banco de {local}</Describe>
      <Retry onPress={() => {
        navigation.navigate(local);
      }}
      >
        <TextButton>
          TENTAR NOVAMENTE
        </TextButton>
      </Retry>
    </Container >
  );
}
