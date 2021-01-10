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

import Actions from '../../../assets/actions.png'

export default function CardActions() {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <ImgContainer>
            <Img source={Actions}></Img>
          </ImgContainer>

          <TextContainer>
            <Bold>Ações</Bold>
            <Info>Nacionais</Info>
          </TextContainer>
        </ContentLeft>
      </Content>
    </Container>
  )
}
