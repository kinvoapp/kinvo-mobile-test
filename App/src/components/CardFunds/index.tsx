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
import { New } from '../New'

export default function CardFunds() {
  return (
    <Container>
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

        <New />
      </Content>
    </Container>
  )
}
