/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardNewFund from '../../components/CardNewFund'
import HeaderScreens from '../../components/HeaderScreens'
import { Wrapper } from './styles'

interface Props {
  name: string
  type: string
  minimumValue: number
  rating: number
  profitability: number
  status: number
}

export default function Founds({ navigation }: any) {
  const [data, setData] = useState<[Props]>()
  const [validResponse, setValidResponse] = useState(false)

  function navigateToHome() {
    navigation.navigate('Desafio')
  }

  useEffect(() => {
    function getDataFunds() {
      axios
        .get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds')
        .then((response) => {
          setData(response.data.data)
          setValidResponse(true)
        })
    }

    getDataFunds()
  }, [])

  return (
    <Wrapper>
      <HeaderScreens onPress={navigateToHome} title="Fundos" />

      {validResponse &&
        data.map((dado, index) => {
          return <CardNewFund dados={} key={index} />
        })}
    </Wrapper>
  )
}
