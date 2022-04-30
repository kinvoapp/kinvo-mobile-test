import React from 'react';

import grayimg from '../../../assets/icons/grayImg.png'
import imgfunds from '../../../assets/icons/imgFunds.png';
import novoImg from '../../../assets/icons/novo.png';

import { Container,  Fundstitle , Fundsub, ImgGray, Cardfunds, New, Textnew  } from './styles';


export function CardB() {
  return (
   <Container>

  <ImgGray source={grayimg} />
  <Cardfunds source={imgfunds} resizeMode="contain" />

<Fundstitle>Fundos</Fundstitle>
<Fundsub>De Investimentos</Fundsub>
<New source={novoImg} ></New>
<Textnew>Novo</Textnew>

  </Container>
  );
}
