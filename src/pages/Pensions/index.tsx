import React from 'react';
import {Header} from '../../components/Header';
import {PensionCard} from '../../components/PensionCard';
import {PensionsFilter} from '../../components/PensionsFilter';
import {Container} from './styles';

export function Pensions() {
  return (
    <>
      <Header hasGoBackButton={true} title={'Previdências'} />
      <Container>
        <PensionsFilter />
        <PensionCard />
        <PensionCard />
      </Container>
    </>
  );
}
