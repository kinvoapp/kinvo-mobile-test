import React from 'react';

import grayimg from '../../../assets/icons/grayImg.png'
import previcon from '../../../assets/icons/prevIcon.png';
import { Container,  Prevtitle , Prevsub, ImgGray, CardPrev  } from './styles';

export function CardC() {
  return (
    <Container>

    <ImgGray source={grayimg} />
    <CardPrev
    source={previcon}
    resizeMode="contain"
    />

    <Prevtitle>Previdências</Prevtitle>
    <Prevsub>Privadas</Prevsub>

    </Container>
  );
}
