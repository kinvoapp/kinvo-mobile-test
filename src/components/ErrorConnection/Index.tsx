import React from 'react';
import {SubTitle, Button, ButtonText, Container, Title} from './styles';

interface ErrorConnectionProps {
  reloadPage: () => void;
  title: string;
}

export function ErrorConnection({title, reloadPage}: ErrorConnectionProps) {
  return (
    <Container>
      <Title>Ocorreu um erro.</Title>
      <SubTitle>Não foi possível se conectar ao banco</SubTitle>
      <SubTitle>{`de ${title}`}</SubTitle>
      <Button activeOpacity={0.8} onPress={reloadPage}>
        <ButtonText>TENTAR NOVAMENTE</ButtonText>
      </Button>
    </Container>
  );
}
