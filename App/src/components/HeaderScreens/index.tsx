import React from 'react'

import { Container, GoBack, Title } from './styles'

import { AntDesign } from '@expo/vector-icons'

interface PropsHeader {
  title: string
  onPress: any
}

export default function HeaderScreens({ title, onPress }: PropsHeader) {
  return (
    <Container>
      <GoBack onStartShouldSetResponder={onPress}>
        <AntDesign name="left" size={20} color="#fff" />
      </GoBack>

      <Title>{title}</Title>
    </Container>
  )
}
