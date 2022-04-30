import React from 'react'

import { Container, Header, Content } from './styles'

import  { CardA }  from '../../components/cards/cardA';
import  { CardB } from '../../components/cards/cardB';
import  { CardC } from '../../components/cards/cardC';


import desafioImg from '../../assets/Desafio.png'
import { NavigationContainerRef, NavigationContainer, StackActions } from '@react-navigation/native';


export function Home() {
  return (

    <Container>

      <Header source={desafioImg} />

      <Content >
        <CardA />
      </Content>

      <Content>
        <CardB/>
      </Content>

      <Content>
        <CardC/>
      </Content>

    </Container>
  );
}

