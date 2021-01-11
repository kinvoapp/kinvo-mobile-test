import React from 'react'

import { ContainerClosed, ContainerNew, Text } from './styles'

interface PropStatus {
  status: number
}

export function NewOrClosed({ status }: PropStatus) {
  if (status == 1) {
    return (
      <ContainerNew>
        <Text>Novo</Text>
      </ContainerNew>
    )
  } else if (status == 2) {
    return (
      <ContainerClosed>
        <Text>Fechado</Text>
      </ContainerClosed>
    )
  } else {
    return <></>
  }
}
