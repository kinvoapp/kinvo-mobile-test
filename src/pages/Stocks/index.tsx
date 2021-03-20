import React from 'react';
import {Header} from '../../components/Header';
import {Container} from './styles';

export function Stocks() {
  return (
    <>
      <Header hasGoBackButton={true} title={'Ações'} />
      <Container />
    </>
  );
}
