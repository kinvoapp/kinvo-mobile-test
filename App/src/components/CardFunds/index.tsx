/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import {
  Bold,
  Container,
  Content,
  ContentLeft,
  Img,
  ImgContainer,
  Info,
  TextContainer
} from './styles'

import Funds from '../../../assets/funds.png'

import { NewOrClosed } from '../NewOrClosed'

export default function CardFunds({ onPress }: any) {
  return (
    <Container onStartShouldSetResponder={onPress}>
      <Content>
        <ContentLeft>
          <ImgContainer>
            <Img source={Funds}></Img>
          </ImgContainer>

          <TextContainer>
            <Bold>Fundos</Bold>
            <Info>De investimentos</Info>
          </TextContainer>
        </ContentLeft>

        <NewOrClosed status={1} />
      </Content>
    </Container>
  )
}
