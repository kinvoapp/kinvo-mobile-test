/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'

import CardActions from '../../components/CardActions'
import CardsFunds from '../../components/CardFunds'
import CardPensions from '../../components/CardPension'

import { Wrapper, Header, Title } from './styles'

export default function Home({ navigation }: any) {
  function navigateToFunds() {
    navigation.navigate('Fundos')
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Title>Desafio</Title>
        </Header>

        <CardActions />
        <CardsFunds onPress={navigateToFunds} />
        <CardPensions />
      </Wrapper>
    </>
  )
}
