import React from 'react'
import CardActions from '../../components/CardActions'
import CardsFunds from '../../components/CardFunds'
import CardPensions from '../../components/CardPension'

import { Wrapper } from './styles'

export default function Home({ navigation }: any) {
  // function navigateToUsers() {
  //   navigation.navigate('Fundos')
  // }

  return (
    <>
      <Wrapper>
        <CardActions />
        <CardsFunds />
        <CardPensions />
      </Wrapper>
    </>
  )
}
