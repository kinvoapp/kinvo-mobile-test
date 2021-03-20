import React from 'react';
import {Header} from '../../components/Header';
import {Container} from './styles';

export function Funds() {
  return (
    <>
      <Header hasGoBackButton={true} title={'Fundos'} />
      <Container />
    </>
  );
}
