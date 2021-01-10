import React from 'react'
import { Container } from './styles'

import { AntDesign } from '@expo/vector-icons'
import colors from '../../utils/colors'

export default function LeftBackButtom() {
  return (
    <Container>
      <AntDesign name="left" size={24} color={colors.purple} />
    </Container>
  )
}
