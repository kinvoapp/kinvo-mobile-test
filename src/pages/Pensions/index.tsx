import React from 'react';
import {Header} from '../../components/Header';
import {Container} from './styles';

export function Pensions() {
  return (
    <>
      <Header hasGoBackButton={true} title={'Previdências'} />
      <Container />
    </>
  );
}
