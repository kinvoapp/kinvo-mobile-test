/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardNewFund from '../../components/CardNewFund'
import FailedMessage from '../../components/FailedMessage'
import HeaderScreens from '../../components/HeaderScreens'
import Loading from '../../components/Loading'
import { Container, Wrapper } from './styles'

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
  const [requestFailed, setRequestFailed] = useState(false)
  const [loading, setLoading] = useState(false)

  function navigateToHome() {
    navigation.navigate('Desafio')
  }

  function getDataFunds() {
    setLoading(true)
    setRequestFailed(false)
    axios
      .get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds')
      .then((response) => {
        setData(response.data.data)
        setValidResponse(true)
        setRequestFailed(false)
        setLoading(false)
      })
      .catch(() => {
        setRequestFailed(true)
        setLoading(false)
      })
  }

  useEffect(() => getDataFunds(), [])

  return (
    <Wrapper>
      <HeaderScreens onPress={navigateToHome} title="Fundos" />
      <Container>
        {validResponse &&
          data.map((dado, index) => {
            return <CardNewFund dados={dado} key={index} />
          })}
      </Container>

      {loading && <Loading />}
      {requestFailed && <FailedMessage onPress={getDataFunds} />}
    </Wrapper>
  )
}
