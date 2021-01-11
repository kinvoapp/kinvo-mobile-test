import React from 'react'

import { ValueNegative, ValuePostive, ValueZero, Container } from './styles'

import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
interface PropsPercentage {
  value: number
  color: string
}

export default function Percentage({ value, color }: PropsPercentage) {
  if (value == 0) {
    return <ValueZero>{value}%</ValueZero>
  } else if (value < 0) {
    return (
      <Container>
        <Feather style={{ color: color }} name="arrow-down" size={20} />
        <ValueNegative style={{ color: color }}>{value}%</ValueNegative>
      </Container>
    )
  } else {
    return (
      <Container>
        <AntDesign name="arrowup" size={20} style={{ color: color }} />
        <ValuePostive style={{ color: color }}>{value}%</ValuePostive>
      </Container>
    )
  }
}
