import React from 'react'
import { Container, SubTitle, Title, Button, Bold } from './styles'

interface PropsError {
  onPress: any
}

export default function FailedMessage({ onPress }: PropsError) {
  return (
    <Container>
      <Title>Ocorreu um erro.</Title>

      <SubTitle>Não foi possível conectar ao banco de fundos</SubTitle>

      <Button onPress={onPress}>
        <Bold>TENTAR NOVAMENTE</Bold>
      </Button>
    </Container>
  )
}
