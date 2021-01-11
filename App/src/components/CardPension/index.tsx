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

import Pension from '../../../assets/pension.png'

export default function CardPensions() {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <ImgContainer>
            <Img source={Pension}></Img>
          </ImgContainer>

          <TextContainer>
            <Bold>Previdências</Bold>
            <Info>Privadas</Info>
          </TextContainer>
        </ContentLeft>
      </Content>
    </Container>
  )
}
